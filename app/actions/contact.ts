'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<'name' | 'email' | 'subject' | 'message', string>>
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const subject = String(formData.get('subject') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: ContactState['errors'] = {}
  if (name.length < 2 || name.length > 100) errors.name = 'Please enter your full name.'
  if (!EMAIL_PATTERN.test(email) || email.length > 200) errors.email = 'Please enter a valid email address.'
  if (subject.length < 3 || subject.length > 150) errors.subject = 'Please add a short subject.'
  if (message.length < 20 || message.length > 5000)
    errors.message = 'Your message should be between 20 and 5,000 characters.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please correct the highlighted fields.', errors }
  }

  return {
    status: 'success',
    message: `Thank you, ${name}. Your message has been received — I typically reply within two business days.`,
  }
}

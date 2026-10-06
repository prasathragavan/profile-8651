'use client'

import { useActionState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const initialState: ContactState = { status: 'idle', message: '' }

type FieldName = NonNullable<ContactState['errors']> extends Partial<Record<infer K, string>> ? K : never

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="text-sm text-destructive">
      {message}
    </p>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-start justify-center gap-4 rounded-xl border border-border bg-card p-10"
      >
        <CheckCircle2 className="size-10 text-accent" aria-hidden="true" />
        <h3 className="font-serif text-2xl font-semibold">Message sent</h3>
        <p className="leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const fieldProps = (name: FieldName) => ({
    id: `contact-${name}`,
    name,
    'aria-invalid': state.errors?.[name] ? true : undefined,
    'aria-describedby': state.errors?.[name] ? `contact-${name}-error` : undefined,
  })

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-name">Full name</Label>
          <Input {...fieldProps('name')} autoComplete="name" placeholder="Jane Doe" className="h-11" required />
          <FieldError id="contact-name-error" message={state.errors?.name} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email">Email address</Label>
          <Input
            {...fieldProps('email')}
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className="h-11"
            required
          />
          <FieldError id="contact-email-error" message={state.errors?.email} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-subject">Subject</Label>
        <Input {...fieldProps('subject')} placeholder="Advisory opportunity" className="h-11" required />
        <FieldError id="contact-subject-error" message={state.errors?.subject} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          {...fieldProps('message')}
          rows={6}
          placeholder="Tell me a little about your organization and how I can help."
          className="min-h-36 resize-y"
          required
        />
        <FieldError id="contact-message-error" message={state.errors?.message} />
      </div>
      {state.status === 'error' ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          {state.message}
        </p>
      ) : null}
      <Button type="submit" disabled={pending} className="h-11 self-start px-6">
        {pending ? 'Sending…' : 'Send message'}
        <Send data-icon="inline-end" aria-hidden="true" />
      </Button>
    </form>
  )
}

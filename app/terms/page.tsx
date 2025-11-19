import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <Card className="mb-8">
            <CardContent className="p-8 prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">
                By accessing and using whoredash, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to these terms, please do not use our service.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. User Eligibility</h2>
              <p className="text-muted-foreground mb-6">
                You must be at least 18 years of age to use this service. By using whoredash, you represent and
                warrant that you meet this age requirement and have the legal capacity to enter into these terms.
              </p>

              <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
              <p className="text-muted-foreground mb-6">
                whoredash is a platform that connects clients with verified professional companions. We facilitate
                bookings and payments but are not responsible for the actual services provided by companions.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">Users agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of account credentials</li>
                <li>Use the service in compliance with all applicable laws</li>
                <li>Treat all users with respect and professionalism</li>
                <li>Report any violations of these terms</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground mb-6">
                All payments are processed securely through our payment partners. Booking fees are non-refundable
                except as outlined in our cancellation policy. Companions set their own rates, and whoredash takes a
                service fee from each booking.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Cancellation Policy</h2>
              <p className="text-muted-foreground mb-6">
                Cancellations made more than 24 hours before the booking time are eligible for a full refund.
                Cancellations made within 24 hours may be subject to cancellation fees as determined by the companion.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-4">Users may not:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Engage in illegal activities through the platform</li>
                <li>Harass, threaten, or abuse other users</li>
                <li>Create fake accounts or impersonate others</li>
                <li>Attempt to circumvent payment systems</li>
                <li>Share login credentials or account access</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground mb-6">
                All content on whoredash, including logos, text, graphics, and software, is the property of whoredash
                or its licensors and is protected by copyright and trademark laws.
              </p>

              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6">
                whoredash is not liable for any indirect, incidental, special, or consequential damages arising from
                your use of the service. Our total liability shall not exceed the amount paid by you in the past 12
                months.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify these terms at any time. Continued use of the service after changes
                constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at legal@whoredash.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <Card className="mb-8">
            <CardContent className="p-8 prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect several types of information:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>
                  <strong>Account Information:</strong> Name, email address, phone number, and profile details
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details processed securely through our payment
                  partners
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our platform, including pages viewed and features
                  used
                </li>
                <li>
                  <strong>Location Data:</strong> General location for service delivery (with your consent)
                </li>
                <li>
                  <strong>Communications:</strong> Messages and interactions through our platform
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">Your information is used to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Provide and maintain our services</li>
                <li>Process bookings and payments</li>
                <li>Verify user identities and maintain platform security</li>
                <li>Communicate important updates and notifications</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-6">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>
                  <strong>Companions:</strong> Limited information necessary to fulfill bookings
                </li>
                <li>
                  <strong>Payment Processors:</strong> Information required to process transactions
                </li>
                <li>
                  <strong>Service Providers:</strong> Third parties who assist in operating our platform
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to protect rights and safety
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement industry-standard security measures to protect your information, including encryption,
                secure servers, and regular security audits. However, no method of transmission over the internet is
                100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent for data processing</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and
                personalize content. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground mb-6">
                We retain your information for as long as your account is active or as needed to provide services. When
                you delete your account, we will delete or anonymize your personal information within 90 days, except
                where retention is required by law.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground mb-6">
                Our service is not intended for individuals under 18 years of age. We do not knowingly collect personal
                information from children.
              </p>

              <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="text-muted-foreground mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your data during international transfers.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-6">
                We may update this privacy policy periodically. We will notify you of significant changes via email or
                through prominent notices on our platform.
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground">
                For privacy-related questions or to exercise your rights, contact us at privacy@whoredash.com or use
                our in-app support system.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

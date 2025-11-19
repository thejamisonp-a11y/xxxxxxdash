import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, AlertCircle, Eye, Lock, Phone, CheckCircle, Heart, Brain, AlertTriangle } from 'lucide-react'
import Link from "next/link"

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Safety & Wellness Center</h1>
            <p className="text-xl text-muted-foreground">
              Your health, safety, and wellbeing are our top priority
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Verified Companions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every companion on our platform undergoes a thorough verification process including identity
                      verification, background checks, and reference validation. We ensure all companions are
                      legitimate professionals who maintain high standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Secure Payments</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All transactions are processed through secure, encrypted payment systems. We never store your
                      full payment details, and all bookings are protected by our satisfaction guarantee policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Privacy Protection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your personal information is protected with bank-level encryption. We never share your data with
                      third parties, and you have complete control over your privacy settings and what information is
                      visible to others.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">24/7 Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our support team is available around the clock to assist with any safety concerns or issues. We
                      have emergency protocols in place and can respond immediately to any situation requiring
                      intervention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Review System</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our verified review system helps you make informed decisions. All reviews are from confirmed
                      bookings, and we actively monitor and remove fake or inappropriate content to maintain
                      integrity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Health & Wellness Guide for Companions
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Physical Health & Self-Care</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Regular Health Checkups:</strong> Schedule annual physical exams and STI testing with your healthcare provider</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Sleep & Rest:</strong> Maintain 7-9 hours of quality sleep and take regular breaks between bookings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Nutrition:</strong> Eat balanced meals, stay hydrated, and take vitamins as recommended by your doctor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Exercise:</strong> Engage in regular physical activity (30+ minutes, 5 days/week) for stress relief and health</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Skin Care:</strong> Maintain comprehensive skincare routines and address any concerns immediately</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6" />
                    Mental Health & Emotional Wellness
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Therapy & Counseling:</strong> Consider working with a therapist experienced in companion work to process emotions and maintain boundaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Stress Management:</strong> Practice meditation, yoga, or other relaxation techniques daily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Set Boundaries:</strong> Establish clear professional boundaries and learn to decline requests that make you uncomfortable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Peer Support:</strong> Connect with other companions in safe, confidential support groups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Self-Worth:</strong> Remember your value and practice positive affirmations and self-compassion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Sexual Health & Safer Practices</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span><strong>STI Prevention:</strong> Use protection consistently and correctly; get tested every 3-6 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Know Your Status:</strong> Understand your own sexual health status and share relevant information with partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Consent:</strong> Always practice enthusiastic, informed consent; communicate clearly about boundaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span><strong>PrEP/PEP:</strong> Discuss with your doctor if PrEP (preventive) or PEP (post-exposure) medications are appropriate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Regular Check-ups:</strong> Get annual gynecological/urological exams and discuss sexual health with your provider</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Mental Health Resources & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">National Mental Health Hotlines</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>National Suicide Prevention Lifeline:</strong> 988 (call or text)</li>
                    <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                    <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357</li>
                    <li><strong>Disaster Distress Helpline:</strong> 1-800-985-5990</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">LGBTQ+ Specific Resources</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Trevor Project:</strong> 1-866-488-7386 (LGBTQ+ crisis support)</li>
                    <li><strong>Trans Lifeline:</strong> 877-565-8860</li>
                    <li><strong>PFLAG Hotline:</strong> 1-888-395-3352</li>
                    <li><strong>GLSEN:</strong> Support for LGBTQ+ youth</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Sexual Health Resources</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Planned Parenthood:</strong> 1-800-230-7526 (sexual health services)</li>
                    <li><strong>CDC Sexual Health Info:</strong> Visit cdc.gov/sexualhealth</li>
                    <li><strong>American Sexual Health Association:</strong> ashastd.org</li>
                    <li><strong>Local STI Clinics:</strong> Find confidential testing near you</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Therapy & Counseling</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Psychology Today Finder:</strong> therapist finder by specialty</li>
                    <li><strong>IACP:</strong> International Association of Counseling Services</li>
                    <li><strong>BetterHelp/Talkspace:</strong> Online therapy options</li>
                    <li><strong>Your Insurance:</strong> Check covered mental health benefits</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16 bg-red-50 border border-red-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-red-900">
              <AlertTriangle className="w-8 h-8" />
              Emergency Contacts & Resources
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-red-900 mb-3">In Case of Emergency</h3>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="font-bold text-lg mb-2">Call 911 immediately if:</p>
                  <ul className="space-y-2 text-sm text-red-900">
                    <li>• You are in immediate danger or being harassed</li>
                    <li>• You've been assaulted or harmed</li>
                    <li>• You're experiencing a medical emergency</li>
                    <li>• You're having thoughts of self-harm</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-red-900 mb-3">Domestic Violence & Assault Support</h3>
                <ul className="space-y-2 text-sm bg-white rounded p-4">
                  <li><strong>National DV Hotline:</strong> 1-800-799-7233 (24/7)</li>
                  <li><strong>RAINN (Sexual Assault):</strong> 1-800-656-4673</li>
                  <li><strong>Local Police Non-Emergency:</strong> (varies by location)</li>
                  <li><strong>Text 'HELP' to 88788</strong> for confidential support</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-red-900 mb-3">Work Safety Resources</h3>
                <ul className="space-y-2 text-sm bg-white rounded p-4">
                  <li><strong>Report to Whoredash Immediately:</strong> Use the in-app reporting feature for any safety concerns</li>
                  <li><strong>Document Incidents:</strong> Keep records of dates, times, descriptions, and screenshots</li>
                  <li><strong>Tell Someone:</strong> Share your location and schedule with trusted friends/family</li>
                  <li><strong>Safety Apps:</strong> Consider using buddy/check-in apps when meeting new clients</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Weekly Wellness Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Physical</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Get 7-9 hours of sleep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Exercise or move for 30+ minutes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Drink plenty of water</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Eat balanced meals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Practice safe sex protocols</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Mental & Emotional</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Meditate or practice mindfulness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Connect with support community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Take a break from work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Engage in hobbies/self-care</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" disabled />
                    <span>Check in with yourself emotionally</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Safety Tips</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Always communicate through our platform to ensure all interactions are logged and protected</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Meet in public places for first-time bookings when possible</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Trust your instincts - if something feels wrong, cancel the booking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Report any suspicious behavior or policy violations immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Never share personal financial information outside the platform</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Our safety team is here 24/7 to address any concerns
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Contact Support</Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

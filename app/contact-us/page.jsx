
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  VoicemailIcon as Fax,
  Shield,
  Truck,
  GraduationCap,
  Users
} from "lucide-react"
import Image from "next/image"
export const metadata = {
  title: "Contact Us"
}
export default function ContactUsPage() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["1800-120-1200", "01762-507-888/222", "+91-94652-33333"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sviet.ac.in", "Admissions@sviet.ac.in"]
    },
    {
      icon: Fax,
      title: "Fax",
      details: ["01762-507333"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Village- Ramnagar Near Banur, Tehsil- Rajpura,",
        "District- Patiala"
      ]
    }
  ]

  const otherContacts = [
    {
      icon: Users,
      title: "Admin/Reception",
      numbers: ["01762-507222", "01762-507888"],
      color: "bg-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Admission Cell",
      numbers: ["94652-33333", "01762-507800"],
      color: "bg-purple-600"
    },
    {
      icon: Shield,
      title: "Security",
      numbers: ["94649-09298"],
      color: "bg-gray-700"
    },
    {
      icon: Truck,
      title: "Transport",
      numbers: ["84270-25133"],
      color: "bg-green-600"
    },
    {
      icon: Phone,
      title: "Placement Cell",
      numbers: ["8556001844"],
      color: "bg-indigo-600"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 py-16 md:py-24">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="text-center text-white">
              <p className="mb-2 text-lg">
                Dial Our Toll Free Number : 1800-120-1200
              </p>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Get In Touch With Us
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Form and Details Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Contact Details - Left Sidebar on Desktop */}
              <div className="lg:col-span-1">
                <div className="bg-[#1e3a8a] rounded-lg p-6 text-white">
                  <h2 className="mb-6 text-2xl font-bold">Our Contacts</h2>
                  <div className="space-y-6">
                    {contactDetails.map((contact, index) => {
                      const IconComponent = contact.icon
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div className="rounded-full bg-yellow-500 p-2">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{contact.title}</h3>
                            {contact.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-gray-200">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Form - Right Side on Desktop */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h2 className="mb-6 text-2xl font-bold text-[#003366]">
                    Enquire Now!
                  </h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Input
                        placeholder="Enter Your Name"
                        className="border-gray-300"
                      />
                      <Input
                        placeholder="Enter Your Email Address"
                        type="email"
                        className="border-gray-300"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Input
                        placeholder="Enter Your Number"
                        type="tel"
                        className="border-gray-300"
                      />
                      <Input
                        placeholder="Enter Your City"
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Enter Your Interested Program
                      </label>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Your Course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="btech">B.Tech</SelectItem>
                            <SelectItem value="mtech">M.Tech</SelectItem>
                            <SelectItem value="mba">MBA</SelectItem>
                            <SelectItem value="mca">MCA</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Your Program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cse">
                              Computer Science Engineering
                            </SelectItem>
                            <SelectItem value="ece">
                              Electronics & Communication
                            </SelectItem>
                            <SelectItem value="me">
                              Mechanical Engineering
                            </SelectItem>
                            <SelectItem value="ce">
                              Civil Engineering
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        How old are you?
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <Input
                          placeholder="DD"
                          maxLength={2}
                          className="border-gray-300"
                        />
                        <Input
                          placeholder="MM"
                          maxLength={2}
                          className="border-gray-300"
                        />
                        <Input
                          placeholder="YYYY"
                          maxLength={4}
                          className="border-gray-300"
                        />
                      </div>
                    </div>
                    <Button className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white py-3">
                      Submit Enquiry
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Contacts Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#003366]">
                Other Contacts
              </h2>
              <p className="text-gray-600">Want To Reach Out To Us</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherContacts.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <Card key={index} className="overflow-hidden shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className={`rounded-full ${contact.color} p-3`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#003366]">
                          {contact.title}
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {contact.numbers.map((number, idx) => (
                          <p
                            key={idx}
                            className="text-lg font-medium text-yellow-600"
                          >
                            {number}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full bg-green-500 hover:bg-green-600 p-4 shadow-lg"
            asChild
          >
            <a
              href="https://wa.me/919465233333"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="WhatsApp"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </a>
          </Button>
        </div>
      </main>


    </div>
  )
}

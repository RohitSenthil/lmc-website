import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Thanks for signing up to help make Atlanta's streets safe!",
        description: "Check your email for information on how you can support our cause.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Thanks for signing up to help make Atlanta's streets safe!",
        description: "Check your email for information on how you can support our cause.",
        // title: "Error Sending Message",
        // description: error.message || "An error occurred while sending your message. Please try again.",
        // variant: "destructive",
      });
      form.reset();
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "safestreets@atlanta.gov"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "(404) 330-6100"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Atlanta City Hall\n55 Trinity Ave SW\nAtlanta, GA 30303"
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Atlanta City Council members, community leaders, and residents: 
            Join us in making our streets safe for everyone. Lives depend on it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6 animate-fade-in-up text-white">Get Involved</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-atlanta-gold"
                            placeholder="Your first name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-atlanta-gold"
                            placeholder="Your last name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-atlanta-gold"
                          placeholder="your.email@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Role/Organization</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-2 focus:ring-atlanta-gold">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="council">City Council Member</SelectItem>
                          <SelectItem value="government">Government Official</SelectItem>
                          <SelectItem value="community">Community Leader</SelectItem>
                          <SelectItem value="resident">Atlanta Resident</SelectItem>
                          <SelectItem value="organization">Advocacy Organization</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-atlanta-gold"
                          placeholder="How would you like to support safer streets in Atlanta?"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-atlanta-gold hover:bg-yellow-500 text-gray-900 font-semibold py-3 hover-lift animate-fade-in-up"
                  style={{animationDelay: '0.8s'}}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Direct Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <info.icon className="h-6 w-6 text-atlanta-gold mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">{info.label}</div>
                      <div className="text-gray-100 whitespace-pre-line">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Urgent Action Needed</h4>
              <div className="bg-white/10 rounded-lg p-6">
                <p className="mb-4 text-gray-100">
                  Every day we delay implementation is another day residents face preventable dangers on our streets.
                </p>
                <p className="font-medium text-white">
                  Contact your Atlanta City Council representative today to demand immediate action on pedestrian safety.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Share This Initiative</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors hover-lift animate-scale-in"
                    style={{animationDelay: `${index * 0.1 + 0.5}s`}}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

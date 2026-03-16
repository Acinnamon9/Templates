import React from "react";
import { Check, Star } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for exploring the Neumorphic world.",
      features: ["100+ Components", "Community Support", "Basic Layouts", "Personal License"],
      variant: "default" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      description: "Everything you need for production SaaS.",
      features: ["Unlimited Components", "Priority Support", "Advanced Charts", "Commercial License", "Figma Source Files"],
      variant: "primary" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Scale with confidence and custom themes.",
      features: ["Custom Component Dev", "Dedicated Support", "SLA Guarantee", "Site-wide License", "On-premise Hosting"],
      variant: "default" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Choose the plan that fits your vision. All plans include our core tactile engine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative transition-all duration-300 hover:-translate-y-2 ${tier.popular ? 'scale-105 z-10' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" className="px-4 py-1.5 shadow-xl">MOST POPULAR</Badge>
                </div>
              )}
              
              <Card className={`h-full flex flex-col p-8 ${tier.popular ? 'border-2 border-purple-500/20' : ''}`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-gray-900 dark:text-white">{tier.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">/mo</span>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">{tier.description}</p>
                </div>

                <div className="flex-1 space-y-4 mb-10 text-left">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={tier.variant === "primary" ? "primary" : "raised"} 
                  className="w-full py-6 rounded-2xl text-lg font-bold"
                >
                  {tier.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </Button>
              </Card>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="neu-inset p-8 md:p-12 rounded-[40px] text-center italic">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              "TactileFlow allowed us to build an interface that feels like the future. Our users love the physical depth—it's unlike anything else."
            </p>
            <div className="flex items-center justify-center gap-4 not-italic">
              <div className="w-12 h-12 rounded-full neu-raised bg-gray-300 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-purple-400 to-blue-500" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800 dark:text-gray-100">Alex Rivers</div>
                <div className="text-sm text-gray-500">Design Dir, Spatial Labs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import { Users, MapPin, Star, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BersafarSnapshot = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-spiritual-600" />,
      number: "5,000+",
      label: "Jamaah Terlayani",
      description: "Ribuan jamaah telah merasakan perjalanan spiritual bersama kami"
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold-600" />,
      number: "50+",
      label: "Destinasi Halal",
      description: "Berbagai destinasi menarik yang ramah Muslim di seluruh dunia"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      number: "4.9/5",
      label: "Rating Kepuasan",
      description: "Testimoni positif dari jamaah yang puas dengan layanan kami"
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      number: "10+",
      label: "Tahun Pengalaman",
      description: "Pengalaman panjang dalam melayani perjalanan spiritual"
    }
  ];

  const testimonials = [
    {
      name: "Ahmad Rizki",
      location: "Jakarta",
      text: "Alhamdulillah, perjalanan umroh bersama Bersafar sangat berkesan. Pelayanannya profesional dan sesuai syariah.",
      rating: 5,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png"
    },
    {
      name: "Siti Nurhaliza",
      location: "Bandung",
      text: "Turkey package dari Bersafar luar biasa! Destinasi indah, makanan halal, dan guide yang sangat membantu.",
      rating: 5,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-spiritual-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sf font-bold text-spiritual-800 mb-4">
            Bersafar dalam Angka
          </h2>
          <p className="text-xl text-spiritual-600">
            Kepercayaan jamaah adalah kebanggaan kami
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-spiritual-100">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-spiritual-50 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-spiritual-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-spiritual-700 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-spiritual-600">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-sf font-bold text-spiritual-800 mb-4">
            Testimoni Jamaah
          </h3>
          <p className="text-lg text-spiritual-600">
            Dengarkan pengalaman jamaah yang telah mempercayai perjalanan mereka kepada kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-spiritual-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-sf font-bold text-spiritual-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-spiritual-600 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-spiritual-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BersafarSnapshot;

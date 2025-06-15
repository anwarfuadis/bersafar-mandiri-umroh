
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa bedanya Bersafar dengan travel umroh lainnya?",
    answer: "Bersafar tidak menjual paket umroh. Kami menyediakan layanan à la carte - kamu bisa pilih dan bayar hanya untuk layanan yang kamu butuhkan. Mau cuma visa? Bisa. Cuma hotel? Bisa juga. Ini memberikan fleksibilitas dan transparansi harga yang tidak ada di travel konvensional."
  },
  {
    question: "Apakah saya bisa pesan layanan secara terpisah?",
    answer: "Tentu saja! Itulah keunggulan utama Bersafar. Kamu bisa pesan visa hari ini, hotel minggu depan, dan mutawif bulan depan. Semua sesuai kebutuhan dan kesiapan finansialmu."
  },
  {
    question: "Bagaimana jika saya butuh bantuan saat di Tanah Suci?",
    answer: "Tim support Bersafar siap membantu 24/7, termasuk saat kamu di Makkah dan Madinah. Kami juga punya partner lokal yang bisa membantu dalam situasi darurat."
  },
  {
    question: "Apakah harga yang ditampilkan sudah final?",
    answer: "Ya, harga yang kamu lihat adalah harga final. Tidak ada biaya tersembunyi atau markup yang tiba-tiba muncul. Prinsip kami adalah transparansi penuh."
  },
  {
    question: "Bagaimana dengan refund jika ada pembatalan?",
    answer: "Setiap layanan memiliki kebijakan refund yang berbeda dan sudah dijelaskan dengan jelas sebelum pemesanan. Kami akan membantu proses refund sesuai dengan terms & conditions masing-masing provider."
  },
  {
    question: "Apakah Bersafar sudah terdaftar resmi?",
    answer: "Ya, Bersafar adalah platform resmi yang sudah terdaftar dan memiliki izin operasional. Semua partner kami (airline, hotel, visa agent) juga sudah terverifikasi dan memiliki lisensi yang valid."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-spiritual-800 mb-6">
            Pertanyaan <span className="font-medium text-spiritual-600">Umum</span>
          </h2>
          <p className="text-xl text-spiritual-600">
            Masih ada yang ingin ditanyakan? Tim support kami siap membantu.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-sand-200 rounded-2xl px-6 data-[state=open]:border-spiritual-300 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-sf font-semibold text-spiritual-800 hover:text-spiritual-600 py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-spiritual-600 font-sf leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-sand-50 rounded-3xl">
          <h3 className="text-2xl font-sf font-semibold text-spiritual-800 mb-4">
            Masih ada pertanyaan?
          </h3>
          <p className="text-spiritual-600 font-sf mb-6">
            Tim customer support kami siap membantu kamu 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-spiritual-700">
              <span className="text-xl">📱</span>
              <span className="font-sf">WhatsApp: +62 812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-2 text-spiritual-700">
              <span className="text-xl">✉️</span>
              <span className="font-sf">support@bersafar.id</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

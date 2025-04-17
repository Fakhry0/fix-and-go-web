'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-yellow-100 rounded-2xl shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">كل خدمات سيارتك في تطبيق واحد</h2>
        <p className="text-lg text-gray-700 mb-6">
          FIX & GO هو التطبيق الأول في مصر اللي بيجمع بين الصيانة، قطع الغيار، خدمات الطوارئ، البيع والشراء، والإيجار والمزادات في مكان واحد.
        </p>
        <Link href="/about">
          <button className="bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800 transition">
            اعرف أكثر عن المشروع
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section>
        <h3 className="text-3xl font-bold mb-8 text-center">مميزات FIX & GO</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="حل شامل" desc="جميع خدمات السيارات في تطبيق واحد." />
          <FeatureCard title="دعم طوارئ ذكي" desc="ونش، إصلاح فوري، واتصال بالشرطة بضغطة زر." />
          <FeatureCard title="شفافية كاملة" desc="تقييمات ومراجعات حقيقية بعد كل خدمة." />
          <FeatureCard title="سوق إلكتروني" desc="بيع وشراء سيارات وقطع غيار بضمان." />
          <FeatureCard title="دعم مباشر" desc="تواصل مع الفني قبل ما يوصلك." />
          <FeatureCard title="جاهز للتكامل" desc="قابل للتكامل مع المرور والتأمين مستقبلًا." />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
      <h4 className="text-xl font-bold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  )
}

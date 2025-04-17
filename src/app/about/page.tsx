export default function AboutPage() {
    return (
      <div className="space-y-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900">عن مشروع FIX & GO</h2>
  
        {/* Quick Description */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-2">نبذة سريعة</h3>
          <p className="text-gray-700 leading-relaxed">
            FIX & GO هو تطبيق رقمي مبتكر تم تصميمه خصيصًا للسوق المصري بهدف إحداث نقلة نوعية في قطاع خدمات السيارات.
            يوفر منصة متكاملة تغطي جميع احتياجات مالكي السيارات: من الصيانة الدورية والطارئة، إلى قطع الغيار، والبيع والشراء، والتأجير، والمزادات.
          </p>
        </section>
  
        {/* Vision */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-2">الرؤية</h3>
          <p className="text-gray-700 leading-relaxed">
            أن نصبح المنصة الرقمية الأولى والموثوقة في منطقة الشرق الأوسط وشمال أفريقيا لخدمات السيارات، ونقدم حلولًا مبتكرة متكاملة ترفع معايير الجودة والراحة في هذا القطاع الحيوي.
          </p>
        </section>
  
        {/* Mission */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-2">الرسالة</h3>
          <p className="text-gray-700 leading-relaxed">
            تسهيل حياة مالكي السيارات في مصر والمنطقة من خلال منظومة ذكية وآمنة وسريعة وموثوقة، تجمع بين الابتكار الرقمي والدعم المباشر عبر شبكة واسعة من مراكز الخدمة المعتمدة وموردي قطع الغيار.
          </p>
        </section>
  
        {/* Strengths */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-4">نقاط القوة</h3>
          <ul className="list-disc list-inside text-gray-700 leading-loose space-y-1">
            <li>تطبيق شامل All-in-One يغطي كل خدمات السيارات.</li>
            <li>تجربة مستخدم ممتازة UI/UX سهلة وبديهية.</li>
            <li>شبكة ضخمة من مراكز الخدمة وموردي قطع الغيار المعتمدين.</li>
            <li>نظام تقييمات ومراجعات حقيقية يعزز الثقة والشفافية.</li>
            <li>دعم فني متاح 24/7 عبر قنوات متعددة.</li>
            <li>تصميم قابل للتكامل مستقبلاً مع المرور، شركات التأمين، والجهات الحكومية.</li>
          </ul>
        </section>
      </div>
    )
  }
  
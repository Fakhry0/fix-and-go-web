export default function FinancePage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">الخطة المالية</h2>
  
        <Section title="التكاليف التقديرية (Initial Cost)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تطوير التطبيق والموقع: <strong>22,700 دولار</strong></li>
            <li>التسويق الرقمي وOffline: <strong>8,000 دولار</strong></li>
            <li>رواتب أول 6 شهور: <strong>15,000 دولار</strong></li>
            <li>استضافة، خدمات سحابية، أدوات إدارة: <strong>2,500 دولار</strong></li>
            <li>رسوم قانونية وتسجيل شركة: <strong>1,800 دولار</strong></li>
            <li><strong>إجمالي التكاليف التأسيسية: حوالي 50,000 دولار</strong></li>
          </ul>
        </Section>
  
        <Section title="مصادر الدخل (Revenue Streams)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>عمولات على الخدمات المنفذة (صيانة – طوارئ – قطع غيار)</li>
            <li>اشتراكات شهرية من الورش ومراكز الخدمة</li>
            <li>خدمات مدفوعة داخل التطبيق (Boost – عروض مميزة)</li>
            <li>نظام Marketplace لبيع وشراء السيارات وقطع الغيار</li>
            <li>رسوم على تقارير فحص أو متابعة صيانة</li>
          </ul>
        </Section>
  
        <Section title="توقعات الأرباح (Financial Projections)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>السنة الأولى: تشغيل تجريبي، دخل محدود (10,000–20,000 دولار)</li>
            <li>السنة الثانية: نمو قوي بعد التوسع في 5 محافظات (50,000–70,000 دولار)</li>
            <li>السنة الثالثة: تغطية معظم المحافظات + خدمات التأمين والتأجير (120,000 دولار+)</li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">📈 الأرقام قابلة للزيادة بشكل كبير مع التسويق الفعّال والشراكات الاستراتيجية.</p>
        </Section>
  
        <Section title="تحليل نقطة التعادل (Break-even Point)">
          <p className="text-gray-700">
            بافتراض أن متوسط العمولة لكل عملية هو 30 جنيه، نحتاج تقريبًا إلى تنفيذ <strong>حوالي 50,000 خدمة</strong> لتغطية التكاليف التأسيسية والوصول لنقطة التعادل.
          </p>
        </Section>
  
        <Section title="استخدام رأس المال (Capital Allocation)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>45% - التطوير التقني (تطبيق وموقع ولوحة تحكم)</li>
            <li>25% - التسويق واكتساب المستخدمين</li>
            <li>20% - التشغيل والدعم وخدمة العملاء</li>
            <li>10% - قانوني وإداري واحتياطي للطوارئ</li>
          </ul>
        </Section>
      </div>
    )
  }
  
  function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold text-green-700 mb-3">{title}</h3>
        {children}
      </section>
    )
  }
  
export default function UXPage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">تجربة المستخدم والدعم</h2>
  
        <Section title="رحلة المستخدم (User Journey)">
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>المستخدم يحمل التطبيق من المتجر</li>
            <li>يسجل بياناته ويحدد نوع سيارته وموقعه</li>
            <li>يستعرض الخدمات المتاحة (صيانة - قطع غيار - طوارئ - بيع/شراء)</li>
            <li>يطلب الخدمة المطلوبة بضغطة زر</li>
            <li>يتابع الفني في الوقت الحقيقي حتى وصوله</li>
            <li>يقيّم الخدمة بعد الانتهاء</li>
            <li>يحصل على نقاط أو خصم إذا كرر الطلب</li>
          </ol>
        </Section>
  
        <Section title="واجهة الاستخدام (UI/UX)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تصميم بسيط وسهل الفهم، مناسب لجميع الأعمار</li>
            <li>أزرار واضحة وسريعة الاستجابة</li>
            <li>إظهار وقت الوصول المتوقع لكل خدمة</li>
            <li>قائمة مفضلة للخدمات المتكررة</li>
            <li>دعم الوضع الليلي (Dark Mode)</li>
          </ul>
        </Section>
  
        <Section title="الدعم الفني (Customer Support)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>دردشة مباشرة داخل التطبيق</li>
            <li>رقم هاتف للدعم الطارئ</li>
            <li>مركز مساعدة يحتوي على أسئلة شائعة (FAQ)</li>
            <li>متابعة الطلب لحظة بلحظة</li>
            <li>إمكانية تقديم شكوى أو اقتراح</li>
          </ul>
        </Section>
  
        <Section title="برامج الولاء والمكافآت">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>نقاط تُجمع بعد كل خدمة يمكن استخدامها لاحقًا</li>
            <li>عروض حصرية للعملاء الدائمين</li>
            <li>مستويات عضوية (فضي - ذهبي - بلاتيني)</li>
            <li>إمكانية إحالة الأصدقاء والحصول على مكافآت</li>
          </ul>
        </Section>
      </div>
    )
  }
  
  function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">{title}</h3>
        {children}
      </section>
    )
  }
  
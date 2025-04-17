export default function RisksPage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">المخاطر وخطة التوسع</h2>
  
        <Section title="المخاطر المحتملة (Potential Risks)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>عدم التزام بعض الشركاء بمعايير الجودة</li>
            <li>صعوبة إقناع المستخدمين بالتخلي عن الطرق التقليدية</li>
            <li>تحديات في إدارة العمليات مع زيادة الطلب</li>
            <li>تغيرات مفاجئة في قوانين التجارة الإلكترونية</li>
            <li>منافسة قوية من تطبيقات جديدة أو منصات دولية</li>
          </ul>
        </Section>
  
        <Section title="استراتيجية التخفيف (Risk Mitigation)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>عقود واضحة مع الشركاء تحتوي على بنود أداء صارمة</li>
            <li>برامج توعية للمستخدم عن مزايا التطبيق عبر الفيديوهات والمحتوى</li>
            <li>أنظمة مراقبة وتحليل أداء فوري لكل خدمة</li>
            <li>استشارات قانونية مستمرة وتحديثات دورية للسياسات</li>
            <li>الابتكار المستمر وإضافة ميزات جديدة تميزنا عن المنافسين</li>
          </ul>
        </Section>
  
        <Section title="خطة التوسع المحلي">
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li><strong>مرحلة 1:</strong> القاهرة والجيزة</li>
            <li><strong>مرحلة 2:</strong> الإسكندرية – القليوبية – الشرقية</li>
            <li><strong>مرحلة 3:</strong> باقي المحافظات الكبرى</li>
            <li><strong>مرحلة 4:</strong> تغطية 100% لجمهورية مصر العربية</li>
          </ol>
        </Section>
  
        <Section title="خطة التوسع الإقليمي (Regional Expansion)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>دراسة السوق السعودي والإماراتي كنقطة انطلاق خليجية</li>
            <li>التوسع في شمال أفريقيا (المغرب – الجزائر – تونس)</li>
            <li>استهداف شراكات مع منصات محلية للتكامل</li>
          </ul>
        </Section>
  
        <Section title="مؤشرات الأداء (Key Performance Indicators)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>عدد الطلبات المنفذة شهريًا</li>
            <li>معدل تقييم الشركاء (Quality Score)</li>
            <li>عدد التنزيلات النشطة للتطبيق</li>
            <li>معدل التحويل من الزائر إلى مستخدم فعلي</li>
            <li>عدد الشركاء الفاعلين على المنصة</li>
          </ul>
        </Section>
      </div>
    )
  }
  
  function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold text-red-700 mb-3">{title}</h3>
        {children}
      </section>
    )
  }
  
export default function BusinessModelPage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">نموذج العمل - Business Model</h2>
  
        <Section title="شرائح العملاء (Customer Segments)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>مالكو السيارات الملاكي</li>
            <li>شركات تمتلك أساطيل سيارات (توصيل، شحن، إيجار)</li>
            <li>مراكز الصيانة وورش السيارات</li>
            <li>تجار وموردي قطع الغيار</li>
            <li>سائقو الأجرة والنقل والدراجات</li>
            <li>مهتمون بشراء أو بيع سيارات جديدة أو مستعملة</li>
            <li>مستثمرون وباحثون عن فرص مزادات السيارات</li>
          </ul>
        </Section>
  
        <Section title="القيمة المقدمة (Value Proposition)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تجربة موحدة وشاملة لكل خدمات السيارات من خلال تطبيق واحد</li>
            <li>شفافية في الأسعار وجودة الخدمة مع تقييمات حقيقية</li>
            <li>خدمة طوارئ سريعة وفعالة</li>
            <li>ضمانات على الخدمات وقطع الغيار</li>
            <li>دعم مباشر من فنيين وشركاء موثوقين</li>
            <li>إمكانية الطلب والتتبع أونلاين</li>
            <li>سوق مفتوح للمقارنة بين الأسعار والخيارات</li>
          </ul>
        </Section>
  
        <Section title="القنوات (Channels)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>متاجر التطبيقات (Google Play وApp Store)</li>
            <li>موقع إلكتروني رسمي</li>
            <li>حملات تسويق رقمية عبر السوشيال ميديا ومحركات البحث</li>
            <li>شراكات مع محلات قطع الغيار ومراكز الصيانة</li>
            <li>كروت QR ومحطات البنزين</li>
            <li>دعم هاتفي مباشر لكبار السن</li>
          </ul>
        </Section>
  
        <Section title="العلاقات مع العملاء (Customer Relationships)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>نظام تقييم إلزامي بعد كل خدمة</li>
            <li>عروض خاصة للعملاء الدائمين وبرامج ولاء</li>
            <li>دعم فني مباشر عبر الدردشة أو الهاتف</li>
            <li>لوحة تحكم لمتابعة سجل الصيانة</li>
            <li>نشرات بريدية تحتوي على نصائح وتنبيهات</li>
          </ul>
        </Section>
  
        <Section title="مصادر الإيرادات (Revenue Streams)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>عمولات على كل عملية (صيانة، قطع غيار، بيع، تأجير...)</li>
            <li>اشتراكات شهرية/سنوية للشركاء (ورش، موردين...)</li>
            <li>خدمات ترويجية مدفوعة داخل التطبيق (Boost)</li>
            <li>خدمات مدفوعة للمستخدم مثل تقارير فحص السيارة</li>
            <li>بيع بيانات مجمعة بشكل مجهول للشركات المهتمة بالسوق</li>
          </ul>
        </Section>
  
        <Section title="الأنشطة الأساسية (Key Activities)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تطوير وصيانة التطبيق والموقع</li>
            <li>إدارة شبكة الشركاء والموردين</li>
            <li>التسويق واكتساب المستخدمين</li>
            <li>ضمان جودة الخدمة ومتابعة العمليات اليومية</li>
            <li>تحليل البيانات وتحسين الأداء</li>
          </ul>
        </Section>
  
        <Section title="الموارد الأساسية (Key Resources)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>البنية التكنولوجية (الكود، السيرفرات، قواعد البيانات)</li>
            <li>فريق العمل (تطوير، تسويق، دعم، تشغيل)</li>
            <li>الشبكة الواسعة من الشركاء ومقدمي الخدمات</li>
            <li>سمعة العلامة التجارية</li>
            <li>بيانات السوق والمستخدمين</li>
          </ul>
        </Section>
  
        <Section title="الشركاء الرئيسيون (Key Partners)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>مراكز الخدمة والورش المعتمدة</li>
            <li>تجار وموردي قطع الغيار</li>
            <li>شركات المساعدة على الطريق</li>
            <li>شركات البرمجة والتطوير</li>
            <li>بوابات الدفع الإلكتروني</li>
            <li>شركات التسويق الرقمي</li>
            <li>شركات التأمين والجهات الحكومية (مستقبلاً)</li>
          </ul>
        </Section>
  
        <Section title="هيكل التكاليف (Cost Structure)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تطوير التطبيق والعلامة التجارية</li>
            <li>التراخيص والبنية التحتية التكنولوجية</li>
            <li>رواتب الفريق ومصاريف التشغيل</li>
            <li>حملات تسويق واكتساب عملاء</li>
            <li>تكاليف الدعم الفني والدفع الإلكتروني</li>
            <li>مصاريف إدارية وتكاليف التوسع</li>
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
  
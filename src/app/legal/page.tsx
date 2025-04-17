export default function LegalPage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">الجوانب القانونية والتراخيص</h2>
  
        <Section title="الكيان القانوني (Legal Entity)">
          <p className="text-gray-700 leading-relaxed">
            سيتم تأسيس شركة مساهمة مصرية (ش.م.م) تحت اسم <strong>FIX & GO</strong>، مسجلة رسميًا لدى الهيئة العامة للاستثمار، وتخضع لأحكام القانون رقم 159 لسنة 1981.
          </p>
          <p className="text-sm text-gray-500 mt-2">📝 هذا الكيان يضمن وجود شخصية اعتبارية للشركة وإمكانية التعاقد مع الجهات الرسمية والخاصة.</p>
        </Section>
  
        <Section title="التراخيص والتسجيل">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تسجيل السجل التجاري والبطاقة الضريبية</li>
            <li>تسجيل علامة تجارية خاصة باسم "FIX & GO" لدى جهاز حماية الملكية الفكرية</li>
            <li>التعاقد مع بوابات الدفع المعتمدة مثل فوري/باي موب</li>
            <li>تصاريح مزاولة النشاط التقني والإلكتروني من الجهات المختصة</li>
          </ul>
        </Section>
  
        <Section title="حماية البيانات والخصوصية">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>الامتثال لقانون حماية البيانات المصري رقم 151 لسنة 2020</li>
            <li>تشفير بيانات المستخدمين وتخزينها بشكل آمن</li>
            <li>عدم مشاركة أي بيانات شخصية مع طرف ثالث دون موافقة المستخدم</li>
            <li>سياسة خصوصية واضحة داخل التطبيق والموقع</li>
            <li>إتاحة خيار حذف الحساب والبيانات بشكل كامل للمستخدم</li>
          </ul>
        </Section>
  
        <Section title="الشروط والأحكام (Terms & Conditions)">
          <p className="text-gray-700">
            سيتم إنشاء وثيقة شروط استخدام واضحة تضمن:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li>واجبات وحقوق المستخدم</li>
            <li>حدود مسؤولية FIX & GO</li>
            <li>طريقة حل النزاعات في حال حدوث مشاكل</li>
            <li>بنود الحماية من إساءة الاستخدام أو التلاعب</li>
          </ul>
        </Section>
  
        <Section title="عقود الشراكة والتعامل مع الورش والموردين">
          <p className="text-gray-700">
            سيتم توقيع عقود رسمية مع كافة مقدمي الخدمات تتضمن:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li>شروط تقديم الخدمة والجودة</li>
            <li>نسبة العمولة ونظام الدفع</li>
            <li>بنود خاصة بفسخ التعاقد في حالة الإخلال بالاتفاق</li>
            <li>آلية التعامل مع شكاوى المستخدمين</li>
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
  
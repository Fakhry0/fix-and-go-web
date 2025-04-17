export default function TechPage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">البنية التقنية وهندسة النظام</h2>
  
        <Section title="المكدس التقني (Technology Stack)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Backend:</strong> PHP باستخدام Laravel</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Dashboard - Frontend:</strong> Vue.js + HTML5 + CSS3 + JavaScript</li>
            <li><strong>Mobile App:</strong> Flutter (لنظامي iOS وAndroid)</li>
            <li><strong>Real-time Features:</strong> Firebase Cloud Messaging (FCM) أو Pusher</li>
          </ul>
        </Section>
  
        <Section title="نظرة على الهندسة (Architecture Overview)">
          <p className="text-gray-700">
            سيتم بناء النظام باستخدام نموذج <strong>API-Driven Architecture</strong> لضمان المرونة، قابلية التوسع، وإعادة الاستخدام.
          </p>
        </Section>
  
        <Section title="الاستضافة والبنية التحتية (Hosting & Infrastructure)">
          <p className="text-gray-700 mb-2">سيتم الاعتماد على استضافة سحابية قوية لضمان الأداء:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>AWS</li>
            <li>Google Cloud</li>
            <li>Microsoft Azure</li>
          </ul>
          <p className="mt-2 text-sm text-gray-500">🛡️ هذه المنصات توفر أمان عالي، قابلية للتوسع، ونسخ احتياطي تلقائي.</p>
        </Section>
  
        <Section title="الأمان والامتثال (Security & Compliance)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تطبيق ممارسات أمان قوية على API (تشفير، حماية قواعد البيانات، اختبارات اختراق)</li>
            <li>الامتثال لمعايير PCI DSS عند التعامل مع بيانات الدفع</li>
            <li>الامتثال لقانون حماية البيانات الشخصية المصري رقم 151 لسنة 2020</li>
          </ul>
        </Section>
  
        <Section title="التكامل مع أطراف خارجية (Third-Party Integrations)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>بوابات الدفع الإلكتروني (Paymob، Fawry، Tap...)</li>
            <li>خدمات تحديد المواقع والخرائط</li>
            <li>التكامل مستقبلاً مع المرور، التأمين، الجهات الحكومية</li>
            <li>أنظمة تشخيص السيارات (OBD-II) وIoT</li>
          </ul>
        </Section>
      </div>
    )
  }
  
  function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">{title}</h3>
        {children}
      </section>
    )
  }
  
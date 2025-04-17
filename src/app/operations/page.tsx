export default function OperationsPage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">الخطة التشغيلية</h2>
  
        <Section title="مراحل التشغيل">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>المرحلة 1 - التحضير (0–3 أشهر):</strong> تصميم واجهات الاستخدام، التعاقد مع شركة برمجة، تجهيز الشركاء في القاهرة.</li>
            <li><strong>المرحلة 2 - التطوير والإطلاق التجريبي (3–6 أشهر):</strong> اختبار نسخة Beta مغلقة، جمع الملاحظات، تحسين الأداء.</li>
            <li><strong>المرحلة 3 - الإطلاق الرسمي (6–24 شهر):</strong> إطلاق تدريجي في المحافظات المستهدفة، توسيع قاعدة الشركاء.</li>
            <li><strong>المرحلة 4 - التغطية القومية والتوسع (بعد 24 شهر):</strong> تغطية باقي المحافظات، إضافة خدمات تأجير وتأمين، التفكير في التوسع الإقليمي.</li>
          </ul>
        </Section>
  
        <Section title="فريق العمل الأساسي">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200 rounded-xl">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3">التخصص</th>
                  <th className="p-3">المهام الأساسية</th>
                  <th className="p-3">العدد المقترح</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-t">
                  <td className="p-3">المدير التنفيذي</td>
                  <td className="p-3">إدارة العمليات واتخاذ القرار</td>
                  <td className="p-3">1</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">CTO (مدير فني)</td>
                  <td className="p-3">إدارة الفريق التقني</td>
                  <td className="p-3">1</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">فريق تطوير التطبيقات</td>
                  <td className="p-3">برمجة وصيانة وتحديث التطبيق</td>
                  <td className="p-3">3–5</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">فريق التسويق</td>
                  <td className="p-3">إدارة الحملات والدعاية والشراكات</td>
                  <td className="p-3">3</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">مدير عمليات (COO)</td>
                  <td className="p-3">التنسيق مع الورش والمراكز</td>
                  <td className="p-3">1</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">دعم فني وخدمة عملاء</td>
                  <td className="p-3">الرد على الاستفسارات والمتابعة</td>
                  <td className="p-3">3</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">إدارة الشراكات والمبيعات</td>
                  <td className="p-3">التواصل مع الورش ومراكز الخدمة</td>
                  <td className="p-3">2</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">إدارة الجودة والتقييم</td>
                  <td className="p-3">مراقبة جودة الخدمات والتقييمات</td>
                  <td className="p-3">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
  
        <Section title="العمليات اليومية">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>مراقبة أداء التطبيق والسيرفرات</li>
            <li>معالجة الطلبات وتوجيهها للشركاء المناسبين</li>
            <li>تواصل مباشر مع العملاء والشركاء لضمان التنفيذ السلس</li>
            <li>الدعم الفني وحل مشاكل المستخدمين بسرعة</li>
            <li>تحليل التقييمات والمراجعات للتأكد من جودة الخدمات</li>
            <li>إدارة عمليات الدفع والتسويات مع الشركاء</li>
            <li>تحديثات مستمرة للمحتوى والعروض داخل التطبيق</li>
          </ul>
        </Section>
  
        <Section title="إدارة الجودة والشركاء">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تحديد معايير خدمة واضحة (SLAs)</li>
            <li>تقييم مستمر لأداء الشركاء</li>
            <li>زيارات ميدانية دورية عشوائية ومجدولة</li>
            <li>برامج تدريب للشركاء لضمان أفضل الممارسات</li>
            <li>آلية واضحة للتعامل مع الأداء المنخفض أو المخالفات</li>
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
  
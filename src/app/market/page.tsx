export default function MarketPage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">تحليل السوق والمنافسة</h2>
  
        {/* Market Size */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">حجم السوق</h3>
          <p className="text-gray-700 leading-relaxed">
            في نهاية عام 2023، بلغ عدد المركبات المرخصة في مصر حوالي 9.95 مليون مركبة، منهم 5.2 مليون سيارة ملاكي، ما يمثل حوالي 94% من إجمالي السيارات. 
            في أول عامين من الإطلاق، يركز التطبيق على المحافظات التالية:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>القاهرة: 2.6 مليون مركبة</li>
            <li>الجيزة: 1.4 مليون مركبة</li>
            <li>الإسكندرية: 731 ألف مركبة</li>
            <li>القليوبية والشرقية: ضمن المحافظات الكبرى المستهدفة لاحقًا</li>
          </ul>
        </section>
  
        {/* User Behavior */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">سلوك المستخدمين</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            نتائج الاستبيان الشامل (15,700 مستخدم) أظهرت وجود فجوات واضحة في السوق الحالي:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>70% من المستخدمين يعتمدون على طرق تقليدية (معارف، ورش محلية)</li>
            <li>ضياع وقت وجهد في البحث عن الورش وقطع الغيار</li>
            <li>نقص في الشفافية والمقارنة بين الأسعار</li>
            <li>مخاوف من جودة الإصلاحات وأصالة القطع</li>
            <li>صعوبة الوصول لخدمات طوارئ موثوقة</li>
            <li>60% أبدوا رغبة قوية في استخدام تطبيق شامل وموثوق</li>
          </ul>
        </section>
  
        {/* Competition */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">تحليل المنافسة</h3>
          <p className="text-gray-700 mb-4">
            رغم وجود تطبيقات جزئية تقدم بعض الخدمات، لا يوجد منافس مباشر يقدم نفس شمولية FIX & GO. أبرز المنافسين:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CompetitorCard name="FriendyM" issues="يركز على السيارات الفاخرة، لا يدعم الطوارئ أو قطع الغيار" />
            <CompetitorCard name="Mismar" issues="خدمات صيانة متنقلة فقط، لا تغطي كل المحافظات" />
            <CompetitorCard name="Ma3aak" issues="يركز على الطوارئ فقط، لا يوجد طلب مباشر أو جدولة" />
            <CompetitorCard name="Car Zone" issues="دليل فقط بدون تفاعل رقمي أو حجز مباشر" />
            <CompetitorCard name="3rbiti" issues="بيانات غير محدثة، لا يوجد حجز أو تقييمات فعلية" />
          </div>
        </section>
  
        {/* FIX & GO Advantage */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">المميزات التنافسية لـ FIX & GO</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تطبيق شامل All-in-One يجمع كل الخدمات في مكان واحد</li>
            <li>نظام تقييمات حقيقية بعد كل خدمة</li>
            <li>دعم فني مباشر ودردشة مع الفنيين</li>
            <li>نظام طوارئ ذكي (ونش، إصلاح، شرطة)</li>
            <li>سوق إلكتروني لقطع الغيار بأنواعها</li>
            <li>شراكة مع مراكز معتمدة بخدمات مضمونة</li>
            <li>قابلية للتكامل مع المرور، التأمين، والجهات الحكومية</li>
          </ul>
        </section>
      </div>
    )
  }
  
  function CompetitorCard({ name, issues }: { name: string; issues: string }) {
    return (
      <div className="border rounded-lg p-4 bg-gray-50">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{name}</h4>
        <p className="text-gray-600">{issues}</p>
      </div>
    )
  }
  
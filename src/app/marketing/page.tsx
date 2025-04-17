export default function MarketingPage() {
    return (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">الخطة التسويقية</h2>
  
        <Section title="الهوية البصرية (Brand Identity)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>اسم العلامة: <strong>FIX & GO</strong> - سهل التذكر ومرتبط بالخدمة</li>
            <li>الألوان الأساسية: أصفر (ابتكار)، أسود (ثقة)، أبيض (بساطة)</li>
            <li>شعار يعبر عن السرعة والدقة والاعتمادية</li>
            <li>Tone of Voice: عملي، واثق، داعم</li>
          </ul>
        </Section>
  
        <Section title="استراتيجية التسويق الرقمي (Digital Marketing)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>إعلانات ممولة على Facebook, Instagram, TikTok, YouTube</li>
            <li>تحسين محركات البحث SEO لموقع FIX & GO</li>
            <li>إعلانات Google Search للكلمات المفتاحية المرتبطة</li>
            <li>حملات مؤثرين (Micro & Macro Influencers)</li>
            <li>مدونة داخلية للمحتوى (مقالات عن صيانة السيارات، نصائح، إلخ)</li>
            <li>نشرات بريدية ونظام تنبيهات Push Notifications</li>
          </ul>
        </Section>
  
        <Section title="التسويق الواقعي (Offline Marketing)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>طباعة QR Codes توزع على مراكز الخدمة</li>
            <li>لافتات في محطات الوقود ومراكز الصيانة</li>
            <li>شراكة مع مدارس تعليم القيادة</li>
            <li>مشاركة في معارض السيارات وخدمات ما بعد البيع</li>
          </ul>
        </Section>
  
        <Section title="مراحل إطلاق الحملة (Launch Strategy)">
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li><strong>مرحلة التوعية:</strong> منشورات تعريفية ومحتوى تثقيفي على المنصات</li>
            <li><strong>مرحلة التحفيز:</strong> حملات خصومات عند الإطلاق الأول</li>
            <li><strong>مرحلة الانتشار:</strong> إعلانات قوية + تقييمات المستخدمين + فيديوهات شرح</li>
            <li><strong>مرحلة التثبيت:</strong> الحفاظ على العملاء من خلال برامج ولاء وتفاعل مستمر</li>
          </ol>
        </Section>
  
        <Section title="الشراكات الاستراتيجية">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>شراكة مع شركات التأمين لتقديم الخدمة للمؤمن عليهم</li>
            <li>شراكة مع منصات التجارة الإلكترونية لترويج التطبيق</li>
            <li>شراكة مع شركات الشحن لتقديم خدمات إصلاح المركبات التجارية</li>
          </ul>
        </Section>
  
        <Section title="قياس الأداء والتحسين (KPIs)">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>عدد التنزيلات الفعالة (Active Installs)</li>
            <li>تكلفة الاكتساب لكل مستخدم (CAC)</li>
            <li>معدل التحويل من الإعلانات (Conversion Rate)</li>
            <li>نسبة الاحتفاظ بالمستخدمين بعد 30 يوم (Retention Rate)</li>
            <li>عدد التقييمات والتفاعل داخل التطبيق</li>
          </ul>
        </Section>
      </div>
    )
  }
  
  function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold text-yellow-600 mb-3">{title}</h3>
        {children}
      </section>
    )
  }
  
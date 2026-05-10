import Image from "next/image";
import SpaceCarousel from "@/components/SpaceCarousel";

function HeartMark() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M11 5.5c.9-1.7 2.6-2.7 4.5-2.2 2.2.6 3.3 2.9 2.6 5.1-.6 1.9-2.4 3.2-4.1 4.4-.9.6-1.7 1.2-2 2-.3-.8-1.1-1.4-2-2-1.7-1.2-3.5-2.5-4.1-4.4-.7-2.2.4-4.5 2.6-5.1 1.9-.5 3.6.5 4.5 2.2Z" />
      <path d="M4 18c1.6 1.5 4.5 2.5 8 2.5s6.4-1 8-2.5" />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7 10h10" />
      <path d="M6 14h12" />
      <path d="M8 18h8" />
      <path d="M12 3c3.5 2.2 5.5 4.8 5.5 7.6A5.5 5.5 0 0 1 12 16a5.5 5.5 0 0 1-5.5-5.4C6.5 7.8 8.5 5.2 12 3Z" />
    </svg>
  );
}

function StyleIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 20c3-5.5 6.5-9 12-12" />
      <path d="M14 4h6v6" />
      <path d="M7 17c2 1.3 4.6 1.3 7 0" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <path d="M7 7l10 10" />
      <path d="M17 7 7 17" />
    </svg>
  );
}

function PickupIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 19V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v11" />
      <path d="M4 19h16" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 21s7-4.7 7-11a7 7 0 1 0-14 0c0 6.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}

const services = [
  {
    title: "基础洗护",
    description: "沐浴、护毛、耳眼清洁、指甲修剪、脚底毛清理、肛门腺护理。",
    icon: <WaterIcon />
  },
  {
    title: "造型修剪",
    description: "局部修、圆头修、泰迪装、比熊装、毛量整理，先沟通再下剪。",
    icon: <StyleIcon />
  },
  {
    title: "皮毛养护",
    description: "针对干燥、打结、掉毛、异味问题，搭配温和护理液与梳通流程。",
    icon: <CareIcon />
  },
  {
    title: "接送到店",
    description: "周边 3 公里可预约接送，独立航空箱，洗护完成后发送照片反馈。",
    icon: <PickupIcon />
  }
];

const prices = [
  {
    title: "日常清爽洗",
    price: "68",
    description: "适合短毛、小体型、日常清洁需求。",
    checks: ["基础沐浴与吹干", "耳眼清洁和指甲修剪", "洗后毛发梳理"]
  },
  {
    title: "精致护理洗",
    price: "128",
    description: "适合换季、掉毛、异味明显或需要护理的宠物。",
    checks: ["基础洗护全流程", "护毛素与毛结梳通", "脚底毛、腹底毛清理"],
    featured: true
  },
  {
    title: "洗护造型套",
    price: "198",
    description: "适合需要修剪造型、局部精修或整体造型的犬猫。",
    checks: ["精致护理洗", "造型沟通与修剪", "完成后照片确认"]
  }
];

const reviews = [
  {
    text: "我家柯基掉毛严重，洗完蓬松很多，店员还提醒了耳朵发红的问题。",
    name: "Cookie 家长",
    initial: "周"
  },
  {
    text: "猫咪比较胆小，预约了慢洗时段，全程没有强迫，回家状态也很稳定。",
    name: "奶盖 家长",
    initial: "陈"
  },
  {
    text: "造型会先沟通照片，剪完很自然，脚底毛和指甲也处理得很细。",
    name: "Momo 家长",
    initial: "许"
  }
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="沐宠小院首页">
            <span className="brand-mark" aria-hidden="true">
              <HeartMark />
            </span>
            <span>沐宠小院</span>
          </a>
          <div className="nav-links" aria-label="页面链接">
            <a href="#services">洗护服务</a>
            <a href="#space">门店环境</a>
            <a href="#prices">价目套餐</a>
            <a href="#booking">预约到店</a>
          </div>
          <a className="nav-cta" href="#booking">
            <span>立即预约</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="沐宠小院宠物洗护点">
          <Image
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1800&q=82"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg"
          />
          <div className="hero-inner">
            <div>
              <div className="eyebrow">今日可约 · 猫狗分区 · 一宠一消毒</div>
              <h1>沐宠小院宠物洗护点</h1>
              <p className="hero-copy">
                为城市里的毛孩子提供温和洗护、基础美容、皮毛养护与接送到店服务。透明橱窗操作，洗前评估，洗后反馈，让每一次洗澡都更安心。
              </p>
              <div className="hero-actions">
                <a className="primary-btn" href="#booking">
                  预约洗护
                </a>
                <a className="secondary-btn" href="tel:13800000000">
                  电话咨询
                </a>
              </div>
            </div>
            <aside className="hero-panel" aria-label="今日预约状态">
              <div className="status-row">
                <div>
                  <strong>今日余位</strong>
                  <p>建议提前 2 小时预约</p>
                </div>
                <span className="open-pill">
                  <i className="dot" aria-hidden="true" />
                  营业中
                </span>
              </div>
              <div className="slots">
                <div className="slot">
                  <div>
                    <strong>小型犬快洗</strong>
                    <span>预计 70 分钟</span>
                  </div>
                  <b>2 位</b>
                </div>
                <div className="slot">
                  <div>
                    <strong>猫咪舒缓洗护</strong>
                    <span>独立安静房</span>
                  </div>
                  <b>1 位</b>
                </div>
                <div className="slot">
                  <div>
                    <strong>全身精修</strong>
                    <span>需洗前评估</span>
                  </div>
                  <b>3 位</b>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head">
              <h2>洗得干净，也照顾它的情绪</h2>
              <p>
                从进店安抚到吹干梳理，每一步都有可见流程。适合日常清洁、换季护理、掉毛期整理和新手家庭第一次到店。
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div>
                    <span className="icon" aria-hidden="true">
                      {service.icon}
                    </span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="space">
          <div className="wrap">
            <div className="section-head">
              <h2>透明、分区、低噪音的洗护空间</h2>
              <p>猫犬独立等待区，工具高温消毒，吹水机分贝控制，敏感宠物可预约慢洗时段。</p>
            </div>
            <SpaceCarousel />
          </div>
        </section>

        <section className="section" id="prices">
          <div className="wrap">
            <div className="section-head">
              <h2>常用套餐</h2>
              <p>到店后会根据体型、毛量、打结程度和配合度确认最终价格。</p>
            </div>
            <div className="price-grid">
              {prices.map((plan) => (
                <article
                  className={`price-card${plan.featured ? " featured" : ""}`}
                  key={plan.title}
                >
                  <h3>{plan.title}</h3>
                  <div className="price">
                    <span>￥</span>
                    <b>{plan.price}</b>
                    <span>起</span>
                  </div>
                  <p>{plan.description}</p>
                  <ul className="checks">
                    {plan.checks.map((check) => (
                      <li key={check}>{check}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="booking">
          <div className="wrap booking">
            <div>
              <div className="section-head">
                <div>
                  <h2>预约到店</h2>
                  <p>留下信息后，店员会尽快联系你确认时间、宠物状态和注意事项。</p>
                </div>
              </div>
              <div className="booking-info">
                <div className="info-line">
                  <span className="icon" aria-hidden="true">
                    <LocationIcon />
                  </span>
                  <div>
                    <strong>门店地址</strong>
                    <span>上海市宜川路街道陕西北路1620号</span>
                  </div>
                </div>
                <div className="info-line">
                  <span className="icon" aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  <div>
                    <strong>联系电话</strong>
                    <span>138-0000-0000 · 09:30-20:30</span>
                  </div>
                </div>
                <div className="info-line">
                  <span className="icon" aria-hidden="true">
                    <CalendarIcon />
                  </span>
                  <div>
                    <strong>营业时间</strong>
                    <span>周一至周日 09:30-20:30，节假日正常预约</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="map-card" aria-label="门店地图">
              <h3>门店位置</h3>
              <p>上海市宜川路街道陕西北路1620号，沿陕西北路到店清晰好找。</p>
              <div className="store-map" role="img" aria-label="沐宠小院门店位置示意地图">
                <span className="map-pin" aria-hidden="true">
                  <LocationIcon />
                </span>
                <div className="map-label">
                  <strong>沐宠小院</strong>
                  <span>陕西北路1620号</span>
                </div>
              </div>
              <div className="map-meta">
                <span>营业时间 09:30-20:30</span>
                <a className="secondary-btn" href="tel:13800000000">
                  电话咨询
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>老客评价</h2>
              <p>每次洗护完成后，我们会记录毛发、耳道、皮肤和情绪状态，方便下次护理延续。</p>
            </div>
            <div className="reviews">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="stars">★★★★★</div>
                  <p>{review.text}</p>
                  <div className="reviewer">
                    <span className="avatar">{review.initial}</span>
                    {review.name}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <strong>沐宠小院宠物洗护点</strong>
          <span>猫狗分区 · 透明洗护 · 预约优先 · 上海静安</span>
        </div>
      </footer>
    </>
  );
}

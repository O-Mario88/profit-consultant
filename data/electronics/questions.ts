import { PillarId, QuestionDefinition, SignalTag } from '../../types';

type Pair = {
  textA: string;
  textB: string;
};

type PillarQuestionBank = {
  prefix: string;
  pillar: PillarId;
  signalTags: SignalTag[];
  quickScan: Pair[];
  deepScan: Pair[];
};

const q = (
  qid: string,
  pillar: PillarId,
  signal_tags: SignalTag[],
  textA: string,
  textB: string,
  weight = 1.0,
  line_type: string[] = ['all']
): QuestionDefinition => ({
  qid,
  industry: 'retail',
  line_type,
  pillar,
  signal_tags,
  weight,
  textA,
  textB
});

// Mapping of the retail-specific pillars to the app's canonical scoring pillars:
// P1 Offer & Merchandising -> Leadership
// P2 Marketing & Demand -> Innovation
// P3 Sales & Conversion -> Market
// P4 Operations & Inventory -> Operations
// P5 Finance & Cash Control -> Money
// P6 People & Execution -> People
// P7 Customer Trust & Retention -> Risk
const BANKS: PillarQuestionBank[] = [
  {
    prefix: 'P1_OFFER',
    pillar: 'Leadership',
    signalTags: ['assortment_confusion', 'pricing_inconsistency', 'bundle_blindspot', 'slow_mover_attachment'],
    quickScan: [
      {
        textA: 'We keep a tight top-sellers list and reorder those first.',
        textB: 'We prefer to bring variety so customers always see something new.'
      },
      {
        textA: 'We price used phones by grading and test results.',
        textB: 'We price used phones mainly by market price and appearance.'
      },
      {
        textA: 'We bundle accessories with phones using preset tiers.',
        textB: 'We let customers choose accessories freely based on preference.'
      },
      {
        textA: 'We choose stock based on weekly demand signals.',
        textB: 'We choose stock based on supplier deals and availability.'
      }
    ],
    deepScan: [
      {
        textA: 'We separate new, used, and refurb categories clearly in-store and online.',
        textB: 'We mix them but explain differences during conversation.'
      },
      {
        textA: 'We have margin targets per category (phones, accessories, repairs).',
        textB: 'We set prices mainly to stay competitive and move volume.'
      },
      {
        textA: 'We avoid stocking items without warranty support or reliable supplier proof.',
        textB: 'We stock them cautiously if the price allows quick turnover.'
      },
      {
        textA: 'We track dead stock days and run planned clearance.',
        textB: 'We prefer occasional promos when we feel stock is heavy.'
      },
      {
        textA: 'We buy fewer models but deeper quantities.',
        textB: 'We buy more models but in smaller quantities.'
      },
      {
        textA: 'We stock premium accessories (higher margin, fewer returns).',
        textB: 'We stock budget accessories (faster sales, broad demand).'
      },
      {
        textA: 'We push service add-ons (setup, transfer, screen protection).',
        textB: 'We focus mainly on device sales and treat services as optional.'
      },
      {
        textA: 'We keep spare parts inventory tied to repair history.',
        textB: 'We keep spare parts based on what suppliers offer cheaply.'
      },
      {
        textA: 'We treat chargers and cables as a curated quality line.',
        textB: 'We offer many options at different prices and let customers decide.'
      },
      {
        textA: 'We standardize trade-in offers with a rubric.',
        textB: 'We negotiate trade-ins case-by-case.'
      },
      {
        textA: 'We run a monthly model exit plan for slow sellers.',
        textB: 'We keep slow sellers until the right buyer comes.'
      },
      {
        textA: 'We use a written grading label customers can see.',
        textB: 'We explain grading verbally during the sale.'
      },
      {
        textA: 'We price bundles to protect margin first.',
        textB: 'We price bundles to feel like a strong customer deal first.'
      },
      {
        textA: 'We avoid brands and models with high return history.',
        textB: 'We keep them because demand remains strong.'
      },
      {
        textA: 'We track accessory attach rate weekly.',
        textB: 'We track accessories as total sales, not tied to phone sales.'
      },
      {
        textA: 'We limit SKUs to reduce complexity.',
        textB: 'We expand SKUs to capture more niches.'
      },
      {
        textA: 'We set minimum profit per phone sold.',
        textB: 'We accept low profit if it brings customer volume.'
      },
      {
        textA: 'We stock fewer trending items unless demand is proven.',
        textB: 'We stock trending items early to catch the wave.'
      },
      {
        textA: 'We use written product descriptions online per device.',
        textB: 'We rely on photos and reply to questions in messages.'
      },
      {
        textA: 'We do planned pricing reviews weekly.',
        textB: 'We adjust prices when competitors move.'
      }
    ]
  },
  {
    prefix: 'P2_MARKETING',
    pillar: 'Innovation',
    signalTags: ['no_testing_rhythm', 'offer_measurement_gap', 'no_market_feedback_loop', 'followup_gap'],
    quickScan: [
      {
        textA: 'We prioritize maps and search visibility plus review growth.',
        textB: 'We prioritize social content and direct messaging.'
      },
      {
        textA: 'We run campaigns with a clear offer and expiry.',
        textB: 'We run campaigns mainly to stay visible and remind people.'
      },
      {
        textA: 'We track leads by source (calls, DMs, walk-ins).',
        textB: 'We track overall sales and judge marketing by busy-ness.'
      },
      {
        textA: 'We partner with groups (offices, schools, SMEs).',
        textB: 'We rely on walk-in traffic and referrals naturally.'
      }
    ],
    deepScan: [
      {
        textA: 'We post proof (tests, warranty, repairs) as much as products.',
        textB: 'We post products mostly and handle proof in conversation.'
      },
      {
        textA: 'We build audience lists (broadcasts, email, CRM).',
        textB: 'We focus on fast response in DMs and comments.'
      },
      {
        textA: 'We run offers built around problems (battery, screen, storage).',
        textB: 'We run offers built around products (new arrivals, price drops).'
      },
      {
        textA: 'We use customer testimonials and before-after repairs.',
        textB: 'We use clean product photos and specs to sell.'
      },
      {
        textA: 'We do weekly content themes (for example battery week).',
        textB: 'We post based on what is available and trending.'
      },
      {
        textA: 'We use paid ads carefully with tracking.',
        textB: 'We prefer organic reach and community sharing.'
      },
      {
        textA: 'We measure conversion from inquiries to purchases.',
        textB: 'We measure engagement (views, likes) as the main indicator.'
      },
      {
        textA: 'We publish pricing ranges to reduce low-quality leads.',
        textB: 'We keep pricing in DMs to encourage conversation.'
      },
      {
        textA: 'We optimize store visuals (signage, offers, trust cues).',
        textB: 'We optimize speed (reply fast, deliver fast).'
      },
      {
        textA: 'We focus on fewer channels but do them consistently.',
        textB: 'We try many channels and keep whichever feels active.'
      },
      {
        textA: 'We ask every buyer for a review.',
        textB: 'We ask for reviews mainly after big purchases.'
      },
      {
        textA: 'We create deal drops on a schedule.',
        textB: 'We announce deals whenever stock arrives.'
      },
      {
        textA: 'We have a referral reward structure.',
        textB: 'We prefer surprise bonuses for referrals.'
      },
      {
        textA: 'We run seasonal campaigns (back-to-school, holidays).',
        textB: 'We run evergreen campaigns (always-on offers).'
      },
      {
        textA: 'We maintain a customer FAQ (warranty, authenticity).',
        textB: 'We answer FAQs individually in messages.'
      },
      {
        textA: 'We use landing pages and catalogs for quick browsing.',
        textB: 'We use chat as the main browsing experience.'
      },
      {
        textA: 'We capture leads even when out of stock (waitlist).',
        textB: 'We tell customers to check back later.'
      },
      {
        textA: 'We build B2B relationships for steady volume.',
        textB: 'We focus on retail because it is simpler.'
      },
      {
        textA: 'We track marketing spend versus gross profit.',
        textB: 'We track marketing spend versus total sales.'
      },
      {
        textA: 'We test one new offer angle per week.',
        textB: 'We reuse the same best offer most weeks.'
      }
    ]
  },
  {
    prefix: 'P3_SALES',
    pillar: 'Market',
    signalTags: ['service_inconsistency', 'bundle_engine_missing', 'value_story_gap', 'discounting_leak'],
    quickScan: [
      {
        textA: 'We use a needs-analysis script before showing options.',
        textB: 'We show options quickly and refine based on reactions.'
      },
      {
        textA: 'We present three tiers (good, better, best).',
        textB: 'We present the customer\'s requested option first.'
      },
      {
        textA: 'We bundle accessories by default.',
        textB: 'We bundle only when the customer asks.'
      },
      {
        textA: 'We document warranty and returns at checkout.',
        textB: 'We explain warranty and returns verbally to keep checkout fast.'
      }
    ],
    deepScan: [
      {
        textA: 'We coach objection handling weekly.',
        textB: 'We let staff learn objection handling through experience.'
      },
      {
        textA: 'We offer setup and data transfer as a paid service.',
        textB: 'We include setup and data transfer to create goodwill.'
      },
      {
        textA: 'We upsell protection based on lifestyle risk questions.',
        textB: 'We upsell protection based on bundle discounts.'
      },
      {
        textA: 'We track returns by reason and fix root causes.',
        textB: 'We handle returns case-by-case without categorizing.'
      },
      {
        textA: 'We use a checkout checklist (accessories, warranty, receipt).',
        textB: 'We let each rep run checkout in their own style.'
      },
      {
        textA: 'We prefer fewer discounts and stronger value explanation.',
        textB: 'We prefer flexible pricing to close faster.'
      },
      {
        textA: 'We quote customers with written breakdowns.',
        textB: 'We quote customers with a single total price.'
      },
      {
        textA: 'We keep quotes time-bound (valid for 24-48 hours).',
        textB: 'We keep quotes open-ended to stay friendly.'
      },
      {
        textA: 'We track conversion by rep and time blocks.',
        textB: 'We track conversion mainly at store level.'
      },
      {
        textA: 'We use add-on prompts at POS.',
        textB: 'We rely on rep memory for add-ons.'
      },
      {
        textA: 'We offer trade-in as a structured option.',
        textB: 'We offer trade-in mainly when the customer mentions it.'
      },
      {
        textA: 'We emphasize authenticity proof (tests and serial checks) early.',
        textB: 'We emphasize authenticity proof after price agreement.'
      },
      {
        textA: 'We cross-sell gadgets based on customer use case.',
        textB: 'We cross-sell gadgets based on current promos.'
      },
      {
        textA: 'We follow up on abandoned inquiries.',
        textB: 'We wait for customers to return when ready.'
      },
      {
        textA: 'We present financing options with clear terms.',
        textB: 'We avoid financing complexity unless the customer insists.'
      },
      {
        textA: 'We standardize delivery and payment rules.',
        textB: 'We customize delivery and payment per customer situation.'
      },
      {
        textA: 'We do end-of-day review of wins and losses in sales.',
        textB: 'We do weekly review when time allows.'
      },
      {
        textA: 'We maintain a top 20 objection script library.',
        textB: 'We prefer natural conversation to avoid sounding scripted.'
      },
      {
        textA: 'We treat accessories as part of the solution, not extras.',
        textB: 'We treat accessories as optional extras.'
      },
      {
        textA: 'We set targets for AOV and attach rate per rep.',
        textB: 'We set targets mainly for total sales volume.'
      }
    ]
  },
  {
    prefix: 'P4_OPERATIONS',
    pillar: 'Operations',
    signalTags: ['inventory_accuracy_gap', 'no_standard_work', 'supplier_doc_gap', 'shrinkage_leak'],
    quickScan: [
      {
        textA: 'We cycle-count high-value items routinely.',
        textB: 'We do full counts occasionally when we suspect mismatch.'
      },
      {
        textA: 'Repairs have ticketing and approvals.',
        textB: 'Repairs are managed via messages and memory.'
      },
      {
        textA: 'Used phones must pass a test checklist before display.',
        textB: 'Used phones are tested mainly when a customer is serious.'
      },
      {
        textA: 'We lock and log high-value stock access.',
        textB: 'We rely on staff trust and store awareness.'
      }
    ],
    deepScan: [
      {
        textA: 'We separate fast-movers from high-value items in storage.',
        textB: 'We store by category for easy picking.'
      },
      {
        textA: 'We log stock transfers and adjustments with reasons.',
        textB: 'We adjust stock quickly to keep selling moving.'
      },
      {
        textA: 'We track shrink as a KPI and investigate patterns.',
        textB: 'We treat shrink as occasional unavoidable loss.'
      },
      {
        textA: 'We use ABC rules to decide count frequency.',
        textB: 'We count based on available time and staff.'
      },
      {
        textA: 'We quarantine returned devices for QA re-check.',
        textB: 'We restock returns quickly if they look fine.'
      },
      {
        textA: 'We photograph repair intake condition.',
        textB: 'We note intake condition in writing only.'
      },
      {
        textA: 'We require customer approval before part replacement.',
        textB: 'We replace parts quickly to save turnaround time.'
      },
      {
        textA: 'We maintain parts usage tracking per repair type.',
        textB: 'We restock parts when they run low.'
      },
      {
        textA: 'We maintain a repair rework log to fix root causes.',
        textB: 'We handle rework quietly to protect reputation.'
      },
      {
        textA: 'We enforce standardized testing before handover.',
        textB: 'We test based on the reported issue only.'
      },
      {
        textA: 'We keep high-risk accessories (tiny, high-theft) behind counter.',
        textB: 'We display accessories openly to increase browsing.'
      },
      {
        textA: 'We use device status checks where possible for used intake.',
        textB: 'We rely on seller reputation and quick resale.'
      },
      {
        textA: 'We run receiving checks versus invoices.',
        textB: 'We accept supplier deliveries and confirm later.'
      },
      {
        textA: 'We separate display stock from back stock.',
        textB: 'We pull from one pool to simplify.'
      },
      {
        textA: 'We have clear repair pricing menus for common issues.',
        textB: 'We quote repairs after inspection each time.'
      },
      {
        textA: 'We record serials and IMEIs at sale for warranty tracing.',
        textB: 'We record only receipt details to keep checkout fast.'
      },
      {
        textA: 'We maintain an incident log (lost items, disputes).',
        textB: 'We solve incidents immediately and move on.'
      },
      {
        textA: 'We limit who can approve stock write-offs.',
        textB: 'We allow supervisors to adjust stock to stay accurate.'
      },
      {
        textA: 'We schedule maintenance for tools and testers.',
        textB: 'We fix tools when they fail.'
      },
      {
        textA: 'We treat operations as a system with audits.',
        textB: 'We treat operations as experience and common sense.'
      }
    ]
  },
  {
    prefix: 'P5_FINANCE',
    pillar: 'Money',
    signalTags: ['pricing_margin_blindspot', 'discounting_leak', 'cash_recon_gap', 'payment_terms_risk'],
    quickScan: [
      {
        textA: 'We track gross profit daily.',
        textB: 'We track sales daily and check profit later.'
      },
      {
        textA: 'We control discounts with rules.',
        textB: 'We allow flexible discounts to close deals.'
      },
      {
        textA: 'We reconcile cash and POS daily.',
        textB: 'We reconcile cash and POS a few times per week.'
      },
      {
        textA: 'We treat payment security as part of trust (baseline PCI mindset).',
        textB: 'We rely on our payment provider to handle most security.'
      }
    ],
    deepScan: [
      {
        textA: 'We calculate true margin including refurb, parts, and labor.',
        textB: 'We estimate margin mainly from buy versus sell price.'
      },
      {
        textA: 'We maintain a weekly cashflow forecast.',
        textB: 'We manage cash day-to-day based on urgent needs.'
      },
      {
        textA: 'We separate owner withdrawals from business expenses.',
        textB: 'We mix sometimes, but track later.'
      },
      {
        textA: 'We monitor discount percentage as a KPI.',
        textB: 'We monitor total sales as the main KPI.'
      },
      {
        textA: 'We track supplier payment terms and negotiate.',
        textB: 'We pay suppliers when cash is available.'
      },
      {
        textA: 'We track chargebacks and refunds and improve evidence.',
        textB: 'We treat chargebacks and refunds as customer service costs.'
      },
      {
        textA: 'We standardize return and refund approvals.',
        textB: 'We handle refunds case-by-case to keep customers happy.'
      },
      {
        textA: 'We record all repair costs and parts used.',
        textB: 'We record repair revenue and estimate costs.'
      },
      {
        textA: 'We set category margin targets and enforce them.',
        textB: 'We aim for overall profit and adjust as needed.'
      },
      {
        textA: 'We maintain tax readiness as a monthly routine.',
        textB: 'We handle tax when deadlines approach.'
      },
      {
        textA: 'We review expenses weekly (stop leaks early).',
        textB: 'We review expenses monthly (less admin overhead).'
      },
      {
        textA: 'We watch inventory days on hand.',
        textB: 'We watch stock availability more than days on hand.'
      },
      {
        textA: 'We price financing and trade-in risks into offers.',
        textB: 'We keep financing and trade-in simple to avoid complexity.'
      },
      {
        textA: 'We keep receipts and invoices organized for audits and claims.',
        textB: 'We store key documents and search when needed.'
      },
      {
        textA: 'We reconcile marketplace payouts and fees weekly.',
        textB: 'We check marketplace payouts mainly when cash is tight.'
      },
      {
        textA: 'We track payment fees and choose best methods.',
        textB: 'We accept fees as cost of doing business.'
      },
      {
        textA: 'We restrict who can issue refunds.',
        textB: 'We empower staff to resolve issues quickly.'
      },
      {
        textA: 'We set an internal fraud checklist.',
        textB: 'We rely on experience to spot fraud.'
      },
      {
        textA: 'We separate cash float from revenue.',
        textB: 'We use cash on hand as needed and refill.'
      },
      {
        textA: 'We use a monthly P and L review to set targets.',
        textB: 'We set targets based on sales goals and intuition.'
      }
    ]
  },
  {
    prefix: 'P6_PEOPLE',
    pillar: 'People',
    signalTags: ['role_clarity_gap', 'training_gap', 'incentive_misalignment', 'accountability_soft'],
    quickScan: [
      {
        textA: 'We use role scorecards and review weekly.',
        textB: 'We manage performance through daily supervision.'
      },
      {
        textA: 'We reward attach rate, low returns, and reviews.',
        textB: 'We reward total sales volume mostly.'
      },
      {
        textA: 'We train weekly with scripts and product updates.',
        textB: 'We train when new products arrive.'
      },
      {
        textA: 'We schedule shifts to match traffic patterns.',
        textB: 'We schedule shifts based on availability and fairness.'
      }
    ],
    deepScan: [
      {
        textA: 'We have clear job descriptions per role.',
        textB: 'We keep roles flexible to cover gaps.'
      },
      {
        textA: 'We coach using numbers (AOV, attach, returns).',
        textB: 'We coach using observation and feedback.'
      },
      {
        textA: 'We use SOP checklists to reduce errors.',
        textB: 'We rely on senior staff to guide juniors.'
      },
      {
        textA: 'We train integrity and fraud awareness explicitly.',
        textB: 'We expect integrity and correct problems when found.'
      },
      {
        textA: 'We hold short daily huddles.',
        textB: 'We prefer fewer meetings so staff can sell and repair.'
      },
      {
        textA: 'We promote based on consistency and trust.',
        textB: 'We promote based on talent and sales ability.'
      },
      {
        textA: 'We rotate staff through roles with certification steps.',
        textB: 'We keep staff in roles they prefer.'
      },
      {
        textA: 'We measure productivity per staff hour.',
        textB: 'We measure total output per day.'
      },
      {
        textA: 'We track mistakes and fix root causes in training.',
        textB: 'We correct mistakes individually as they happen.'
      },
      {
        textA: 'We maintain a knowledge base for common device issues.',
        textB: 'We rely on technician experience and learning.'
      },
      {
        textA: 'We enforce punctuality and attendance policies.',
        textB: 'We stay flexible for staff personal situations.'
      },
      {
        textA: 'We standardize customer greetings and discovery questions.',
        textB: 'We let staff be natural for better rapport.'
      },
      {
        textA: 'We use probation checklists for new hires.',
        textB: 'We assess new hires based on daily performance.'
      },
      {
        textA: 'We track turnover and reasons.',
        textB: 'We replace staff quickly when they leave.'
      },
      {
        textA: 'We set weekly targets for each rep.',
        textB: 'We set store targets and let reps contribute.'
      },
      {
        textA: 'We reward teamwork (handoffs, support).',
        textB: 'We reward individual performance (competition).'
      },
      {
        textA: 'We do quarterly skills assessments.',
        textB: 'We assess skills informally.'
      },
      {
        textA: 'We use escalation rules for conflicts and disputes.',
        textB: 'We handle conflicts case-by-case.'
      },
      {
        textA: 'We maintain a standard onboarding plan.',
        textB: 'We onboard by shadowing.'
      },
      {
        textA: 'We run performance reviews monthly.',
        textB: 'We run performance reviews when issues arise.'
      }
    ]
  },
  {
    prefix: 'P7_TRUST',
    pillar: 'Risk',
    signalTags: ['policy_vagueness', 'complaint_handling_gap', 'followup_gap', 'supplier_doc_gap'],
    quickScan: [
      {
        textA: 'We document warranty terms at sale.',
        textB: 'We keep warranty flexible to preserve goodwill.'
      },
      {
        textA: 'We follow up after purchase and repair.',
        textB: 'We wait for customers to return if they need help.'
      },
      {
        textA: 'We actively request reviews and respond to them.',
        textB: 'We focus on service and assume reviews will come.'
      },
      {
        textA: 'We educate customers on repair options and long-term care.',
        textB: 'We focus on solving today\'s need quickly.'
      }
    ],
    deepScan: [
      {
        textA: 'We treat returns as data to improve sales and QA.',
        textB: 'We treat returns as customer service and move on.'
      },
      {
        textA: 'We have a written returns policy visible in-store and online.',
        textB: 'We explain returns policy verbally to stay flexible.'
      },
      {
        textA: 'We give proof at handover (tests done).',
        textB: 'We give proof when the customer asks.'
      },
      {
        textA: 'We resolve complaints with an escalation timeline.',
        textB: 'We resolve complaints as soon as possible without a formal timeline.'
      },
      {
        textA: 'We offer a warranty option menu (basic and extended).',
        textB: 'We offer one warranty approach for simplicity.'
      },
      {
        textA: 'We track repeat purchase rate.',
        textB: 'We notice repeat customers informally.'
      },
      {
        textA: 'We keep a customer list for targeted offers.',
        textB: 'We prefer broad offers to avoid being intrusive.'
      },
      {
        textA: 'We request reviews at the moment of satisfaction.',
        textB: 'We request reviews later via broadcast.'
      },
      {
        textA: 'We respond to reviews within 24-48 hours.',
        textB: 'We respond when time allows.'
      },
      {
        textA: 'We use loyalty rewards tied to profitable behaviors.',
        textB: 'We use loyalty rewards to increase visits generally.'
      },
      {
        textA: 'We proactively educate about device care and protection.',
        textB: 'We focus on selling protection products during checkout.'
      },
      {
        textA: 'We maintain clear warranty exclusions to prevent disputes.',
        textB: 'We keep exclusions flexible to reduce customer friction.'
      },
      {
        textA: 'We photograph intake and handover for repairs.',
        textB: 'We keep records mainly via receipts and messages.'
      },
      {
        textA: 'We offer trade-in return windows with clear rules.',
        textB: 'We keep trade-in final to reduce complications.'
      },
      {
        textA: 'We design store experience around trust cues.',
        textB: 'We design store experience around speed and convenience.'
      },
      {
        textA: 'We handle data transfer with customer consent steps.',
        textB: 'We handle data transfer quickly to reduce time.'
      },
      {
        textA: 'We market repairability and repair services as a trust signal.',
        textB: 'We keep repairs as a back-end service, not a marketing focus.'
      },
      {
        textA: 'We publish warranty claim steps clearly.',
        textB: 'We handle warranty claims through direct conversation.'
      },
      {
        textA: 'We track complaint categories and staff retraining needs.',
        textB: 'We solve complaints individually without categorizing.'
      },
      {
        textA: 'We measure lifetime value using repeat plus referrals proxy.',
        textB: 'We focus on daily sales targets as the main driver.'
      }
    ]
  }
];

const buildQuestionSet = (): QuestionDefinition[] => {
  const out: QuestionDefinition[] = [];

  BANKS.forEach((bank) => {
    bank.quickScan.forEach((pair, index) => {
      out.push(
        q(
          `QS_${bank.prefix}_${String(index + 1).padStart(2, '0')}`,
          bank.pillar,
          bank.signalTags,
          pair.textA,
          pair.textB,
          1.0
        )
      );
    });

    bank.deepScan.forEach((pair, index) => {
      out.push(
        q(
          `DS_${bank.prefix}_${String(index + 1).padStart(2, '0')}`,
          bank.pillar,
          bank.signalTags,
          pair.textA,
          pair.textB,
          1.0
        )
      );
    });
  });

  return out;
};

export const questions: QuestionDefinition[] = buildQuestionSet();

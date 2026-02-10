export type SparePartsTone = 'executive' | 'street';

export type SparePartsToneVariant = {
  mission: string;
  deep: string;
  actionPacks: string[];
};

type ToneVariantByHook = Record<SparePartsTone, SparePartsToneVariant>;

const SPARE_PARTS_TONE_VARIANTS: Record<string, ToneVariantByHook> = {
  'Fitment Roulette': {
    executive: {
      mission: "Your current pattern indicates elevated fitment error risk, which typically shows up as returns, disputes, and replacement cost. The larger risk is reputational: one wrong-fit incident lowers repeat purchase probability, especially for mechanic accounts that prioritize certainty and speed. Cliffhanger: Deep Scan will isolate the failure point and lock a standardized fitment workflow.",
      deep: "Fitment Roulette indicates compatibility is being confirmed through inconsistent methods across shifts. That inconsistency inflates refund loss, dispute time, and repeat-customer attrition. The hidden cost is account migration: mechanics do not argue repeatedly; they re-route demand to a shop with higher confidence. Next step: deploy a Fitment Confirmation System with mandatory questions, proof capture, and staff certification within 30 days.",
      actionPacks: ['OPS-P1', 'PPL-P1']
    },
    street: {
      mission: "Boss, this is Fitment Roulette. Today the sale looks clean; tomorrow the customer returns angry. Even when it is not your fault, you still pay with refunds, stress, and lost trust. One wrong fit can push a mechanic away for good. Cliffhanger: Deep Scan will lock this with a simple checklist and script.",
      deep: "You are selling with confidence but not with consistent fitment proof. Under pressure, staff skips key questions, then the same jobs return as disputes. That means double cost: lost time now and reduced loyalty later. Next step: make model/year/engine/variant questions mandatory, collect fitment proof before release, and coach staff weekly until wrong-fit incidents trend down.",
      actionPacks: ['OPS-P1', 'PPL-P1']
    }
  },
  'Stockout Tax': {
    executive: {
      mission: "Inventory signals show stockout-driven leakage on fast movers. In this market, one missing item often loses the full basket and accelerates account migration. Cliffhanger: Deep Scan will build a Top 50 protection model with min-max and lead-time discipline.",
      deep: "Stockout Tax is usually a control issue rather than a demand issue. Reorders based on shelf impression create recurring availability gaps, and urgent buyers immediately defect. The financial effect compounds through lost basket value and weakened mechanic trust. Next step: implement Top 50 fast-mover controls, supplier cadence, and weekly cycle counts tied to stockout KPIs.",
      actionPacks: ['OPS-P2']
    },
    street: {
      mission: "This is Stockout Tax. You miss one filter or plug and the customer buys everything next shop. That is how repeat buyers quietly shift. Cliffhanger: Deep Scan will set Top 50 reorder triggers so fast movers stop embarrassing the counter.",
      deep: "You are noticing stockouts too late, usually when the customer is already waiting. By then the sale is at risk, and urgent buyers rarely wait. The damage is daily and cumulative: fewer baskets, fewer repeats, weaker mechanic confidence. Next step: protect fast movers with min levels, lead-time planning, and a simple weekly stock discipline.",
      actionPacks: ['OPS-P2']
    }
  },
  'SKU Fog / Bin Chaos': {
    executive: {
      mission: "You likely have on-hand inventory that is not discoverable at counter speed. This creates conversion loss and operational friction during peak windows. Cliffhanger: Deep Scan will identify bin logic and labeling breakdowns and implement find-in-seconds retrieval.",
      deep: "SKU Fog occurs when part-number discipline and bin mapping are inconsistent. The customer experiences delay as uncertainty, and uncertainty reduces close rate even when stock exists. Team productivity also falls as search time displaces selling time. Next step: deploy SKU/bin truth controls with receiving-to-bin compliance audits and quote-time tracking.",
      actionPacks: ['OPS-P3']
    },
    street: {
      mission: "This is SKU Fog. The part is inside, but you cannot find it fast, so you look out of stock in front of the customer. Cliffhanger: Deep Scan will clean your bin and label system so finding stock is instant.",
      deep: "Right now too much depends on memory. When the rush starts, searching eats time and confidence drops. Customers interpret delay as lack of stock and walk. Next step: set bin codes, tighten receiving labels, and run short daily checks until time-to-find comes down.",
      actionPacks: ['OPS-P3']
    }
  },
  'Return Recycle Leak': {
    executive: {
      mission: "There is return-process contamination risk: returned parts may re-enter sellable stock without consistent grading. This increases repeat disputes and credibility loss. Cliffhanger: Deep Scan will install quarantine grading and evidence-led return control.",
      deep: "Return Recycle Leak creates second-order losses. A rushed return that goes back to shelf can trigger a new failure cycle and a stronger customer complaint. The business then absorbs duplicate cost across refund, rework, and reputation. Next step: implement quarantine grading, reason coding, and dispute-proof return evidence before restocking any returned unit.",
      actionPacks: ['OPS-P4', 'RSK-P4']
    },
    street: {
      mission: "This is Return Recycle Leak. A returned item looks okay, goes back on shelf, then fails again and comes back as your problem. You pay twice. Cliffhanger: Deep Scan will set quarantine rules so returns stop poisoning your stock.",
      deep: "When the shop is busy, returns get pushed quickly back to shelf. That shortcut creates mystery defects later and bigger disputes. Customers remember the failure, not your explanation. Next step: enforce return quarantine, condition grading, and photo proof before any item is accepted back into active stock.",
      actionPacks: ['OPS-P4', 'RSK-P4']
    }
  },
  'Procurement Lag': {
    executive: {
      mission: "Demand capture is constrained by reorder timing that is out of sync with supplier lead times. In urgent purchase behavior, delayed availability translates directly to lost account share. Cliffhanger: Deep Scan will align procurement cadence to demand velocity.",
      deep: "Procurement Lag is typically driven by reactive replenishment and weak missing-request capture. The result is predictable: demand appears, commitment is made, then fulfillment slips. Repeated slippage retrains buyers toward faster competitors. Next step: integrate missing-request logs into reorder planning and enforce lead-time-based replenishment windows.",
      actionPacks: ['OPS-P2']
    },
    street: {
      mission: "This is Procurement Lag. Customer asks now, stock comes later, and later means sale gone. Cliffhanger: Deep Scan will build reorder timing that meets real demand speed.",
      deep: "You are buying after demand, not ahead of demand. That gap is where urgent sales die. It also causes panic buying when pressure rises. Next step: capture requested-but-missing items daily and tie them to supplier lead times and Top 50 replenishment rules.",
      actionPacks: ['OPS-P2']
    }
  },
  'Margin Mirage': {
    executive: {
      mission: "Revenue is active, but margin quality appears unstable due to discounting, return drag, and category mix variance. This is a high-sales, low-retained-profit profile. Cliffhanger: Deep Scan will quantify category profitability and isolate the largest margin leaks.",
      deep: "Margin Mirage is a visibility problem first, a sales problem second. Without category-level economics, discount and return behavior can quietly override gross revenue gains. This creates cash pressure despite strong activity. Next step: implement category margin mapping with weekly leak review across discounts, refunds, and supplier drift.",
      actionPacks: ['MNY-P1']
    },
    street: {
      mission: "This is Margin Mirage. The counter is busy, but profit is thin. Sales are moving, pocket is not. Cliffhanger: Deep Scan will show exactly which categories pay you and which ones drain you.",
      deep: "You are judging performance by movement, not by clean margin. Discounts, returns, and weak category control are eating the profit silently. Next step: map margin by category, then fix the top leaks first so growth actually keeps cash in the business.",
      actionPacks: ['MNY-P1']
    }
  },
  'Bargain Drift': {
    executive: {
      mission: "Pricing discipline is weakening as negotiation becomes the default close tactic. This compresses margin and destabilizes market positioning. Cliffhanger: Deep Scan will install discount bands and scripts that preserve close rates without margin erosion.",
      deep: "Bargain Drift is a behavioral control issue. Once staff discount patterns vary by person, customers optimize around negotiation rather than value. Over time, realized pricing declines and forecast accuracy drops. Next step: deploy clear discount authority bands, scripts, and audit checks by staff.",
      actionPacks: ['MNY-P2']
    },
    street: {
      mission: "This is Bargain Drift. Every deal turns into bargaining, and your true price keeps falling. Cliffhanger: Deep Scan will give discount bands and talking scripts so your team protects margin.",
      deep: "Staff is discounting to finish quickly, and customers now expect it every time. That habit is training the market against your profit. Next step: lock simple discount rules, coach the team on value-based responses, and track discounts by staff.",
      actionPacks: ['MNY-P2']
    }
  },
  'Credit Sink': {
    executive: {
      mission: "Receivable exposure indicates inventory is leaving faster than cash is returning. This weakens fast-mover restocking capacity and raises liquidity risk. Cliffhanger: Deep Scan will implement credit ceilings, aging controls, and stop-rules.",
      deep: "Credit Sink emerges when credit is relationship-led without enforcement cadence. Working capital is then redirected to finance external operations while your own availability declines. This drives both stockout risk and borrowing pressure. Next step: standardize account limits, due-date governance, and daily collections rhythm by aging bucket.",
      actionPacks: ['MNY-P3']
    },
    street: {
      mission: "This is Credit Sink. Parts leave now, money comes later, and later turns into stress. Cliffhanger: Deep Scan will lock credit limits and follow-up rhythm so cash stays alive.",
      deep: "Credit is helping customers but hurting your restock power. When debtor control is weak, your shelves suffer first. Next step: set clear credit terms, stop overdue accounts from taking new stock, and track 7/30/60 buckets every week.",
      actionPacks: ['MNY-P3']
    }
  },
  'Cash Drawer Drift / Momo Fog': {
    executive: {
      mission: "Transaction control appears exposed to daily variance leakage. In high-frequency retail, unresolved variances degrade both margin integrity and decision confidence. Cliffhanger: Deep Scan will enforce reconciliation SOP and exception ownership.",
      deep: "Cash Drawer Drift/Momo Fog is usually tolerated because losses look small in isolation. Aggregated monthly, they become material and hard to attribute. This erodes internal trust and weakens control culture. Next step: implement end-of-day reconciliation, variance coding, and role separation across sell/receive/close.",
      actionPacks: ['MNY-P4']
    },
    street: {
      mission: "This is Cash Drawer Drift and Momo Fog. Small daily differences become big month-end pain. Cliffhanger: Deep Scan will set a strict close routine that catches leakage fast.",
      deep: "When close routines are inconsistent, nobody owns the variance and the leak becomes normal. That hurts profit and creates suspicion in the team. Next step: run a non-negotiable daily close checklist and investigate repeated variance patterns by shift/staff.",
      actionPacks: ['MNY-P4']
    }
  },
  'Dead Stock Jail': {
    executive: {
      mission: "Working capital is likely locked in low-velocity SKUs, reducing flexibility for fast-mover replenishment. This creates a dual drag on growth and margin. Cliffhanger: Deep Scan will classify dead stock and execute controlled cash release.",
      deep: "Dead Stock Jail is a capital allocation issue: slow lines accumulate while winners starve. The business then compensates with late discounts and reactive buying. Next step: define dead-stock thresholds, release tactics (bundle/swap/clear), and hard stop-rules for repeat overbuying.",
      actionPacks: ['MNY-P5']
    },
    street: {
      mission: "This is Dead Stock Jail. Cash is sleeping in parts that do not move, while fast movers finish. Cliffhanger: Deep Scan will show what to clear, bundle, or stop buying.",
      deep: "Dead stock looks like inventory, but it behaves like locked cash. It blocks restocking and forces you into weak pricing later. Next step: identify dead lines, release them with a plan, and protect buying decisions with sell-through rules.",
      actionPacks: ['MNY-P5']
    }
  },
  'WhatsApp Blackhole': {
    executive: {
      mission: "Response latency is likely suppressing urgent-demand conversion on chat channels. In this category, speed is a primary differentiator. Cliffhanger: Deep Scan will deploy SLA, templates, and quote workflow controls.",
      deep: "WhatsApp Blackhole appears when response ownership, template quality, and stock confirmation flow are weak. Buyers interpret delay as low availability certainty and defect quickly. Next step: set reply-time targets, standard quote templates, and first-response catalog links to improve conversion.",
      actionPacks: ['MKT-P4']
    },
    street: {
      mission: "This is WhatsApp Blackhole. Reply comes late, customer already bought. Spare parts buyers are urgent, not browsing. Cliffhanger: Deep Scan will install fast reply templates and quote flow.",
      deep: "Your response speed is leaking easy sales. Most losses happen before pricing discussion starts. Next step: assign chat ownership, use ready templates, and track response time daily until conversion improves.",
      actionPacks: ['MKT-P4']
    }
  },
  'Trust Gap': {
    executive: {
      mission: "Market confidence friction is reducing close probability, especially for higher-value parts. Trust requires repeatable proof, not verbal reassurance. Cliffhanger: Deep Scan will operationalize authenticity and warranty proof assets.",
      deep: "Trust Gap expands when authenticity and warranty signals differ by staff or transaction. Buyers then discount your credibility and negotiate harder. Next step: standardize proof-based selling with supplier evidence, warranty clarity, and receipt discipline at point of sale.",
      actionPacks: ['MKT-P2', 'RSK-P1']
    },
    street: {
      mission: "This is Trust Gap. Customers fear fakes, so even when you have stock they hesitate. Cliffhanger: Deep Scan will build trust proof so people buy with confidence.",
      deep: "Verbal assurance is not enough in this market. Buyers want visible proof and clear warranty terms. Next step: show authenticity signals consistently, train staff scripts, and make every sale feel safe.",
      actionPacks: ['MKT-P2', 'RSK-P1']
    }
  },
  'Mechanic Migration': {
    executive: {
      mission: "Repeat account demand is likely leaking due to under-managed mechanic relationships. Without account discipline, demand defaults to the fastest responder. Cliffhanger: Deep Scan will build a mechanic account operating model.",
      deep: "Mechanic Migration is often silent: account loss appears as normal demand volatility. In practice, it is a service and follow-up control gap. Next step: prioritize top mechanic accounts, set follow-up cadence, and align delivery/credit offers to profitable retention.",
      actionPacks: ['MKT-P1']
    },
    street: {
      mission: "This is Mechanic Migration. Mechanics do not announce exit; they simply start buying elsewhere. Cliffhanger: Deep Scan will set a mechanic follow-up engine to lock repeat demand.",
      deep: "Without account management, your shop keeps chasing random buyers while repeat mechanics drift. Next step: build top-mechanic list, call rhythm, and tailored offers so they keep buying from you first.",
      actionPacks: ['MKT-P1']
    }
  },
  'Catalog Gap': {
    executive: {
      mission: "Quoting speed is constrained by catalog structure and model-job visibility. This increases dependency on individual memory and reduces scalable conversion. Cliffhanger: Deep Scan will implement model-based catalog and common-job menu assets.",
      deep: "Catalog Gap slows response and increases wrong-fit risk because substitutes and equivalents are not standardized. The commercial effect is lower conversion and weaker staff consistency. Next step: create top-model menu, common-job kits, and shared catalog assets across all counter staff.",
      actionPacks: ['MKT-P3']
    },
    street: {
      mission: "This is Catalog Gap. Quoting takes too long because everything is in memory or chat. Customer loses patience. Cliffhanger: Deep Scan will build a top-model catalog for instant quoting.",
      deep: "When only one person knows the catalog, speed drops whenever that person is busy or absent. Next step: publish model-based part menus and substitute options so every staff can quote fast and accurately.",
      actionPacks: ['MKT-P3']
    }
  },
  'KPI Darkness': {
    executive: {
      mission: "The business is likely operating without sufficient weekly visibility on core leakage drivers. Without KPI discipline, control becomes reactive and margin volatility rises. Cliffhanger: Deep Scan will define and operationalize the minimum control dashboard.",
      deep: "KPI Darkness reduces management leverage because decisions are made after losses materialize. Teams then optimize for urgency instead of economics. Next step: establish a seven-metric control wall with ownership and weekly closure cadence.",
      actionPacks: ['LDR-P1']
    },
    street: {
      mission: "This is KPI Darkness. Work is happening, but you cannot clearly see what is eating profit. Cliffhanger: Deep Scan will put the key numbers on one page for weekly control.",
      deep: "Without clear KPIs, leaks hide in routine activity and keep repeating. Next step: track wrong-fit, discounts, returns, stockouts, shrink, debtors, and dead stock every week with one owner each.",
      actionPacks: ['LDR-P1']
    }
  },
  'Approval Bottleneck': {
    executive: {
      mission: "Decision velocity is constrained by concentrated approvals on routine exceptions. This lowers throughput and creates inconsistent customer experience during peaks. Cliffhanger: Deep Scan will deploy delegated limits with audit controls.",
      deep: "Approval Bottleneck is a governance design issue. When boundaries are unclear, staff escalates excessively or improvises unsafely. Both outcomes reduce conversion quality. Next step: define approval tiers by scenario, train role limits, and review latency metrics weekly.",
      actionPacks: ['LDR-P2']
    },
    street: {
      mission: "This is Approval Bottleneck. Staff keeps waiting for one person, customer gets tired, sale cools down. Cliffhanger: Deep Scan will set decision limits so the counter keeps moving.",
      deep: "Too many small approvals are slowing service and frustrating buyers. Next step: write clear rules for discounts, returns, and exceptions so staff can act fast without creating chaos.",
      actionPacks: ['LDR-P2']
    }
  },
  'Repeat Leak Tax': {
    executive: {
      mission: "Recurring incident patterns indicate tactical fixes are not being converted into system controls. This creates repeat cost and leadership overload. Cliffhanger: Deep Scan will convert recurring failures into standards and audit cycles.",
      deep: "Repeat Leak Tax is paid when the same issue is solved repeatedly without process redesign. The business absorbs recurring losses in disputes, errors, and escalation effort. Next step: run weekly top-3 recurrence review and close each with SOP updates and accountability.",
      actionPacks: ['LDR-P3']
    },
    street: {
      mission: "This is Repeat Leak Tax. Same mistakes keep coming back, and you keep paying again. Cliffhanger: Deep Scan will identify the top repeating leak and lock a permanent fix.",
      deep: "You are solving problems, but not updating the system. That keeps the shop in firefighting mode. Next step: weekly audit of recurring leaks, then convert each into a clear routine the team must follow.",
      actionPacks: ['LDR-P3']
    }
  },
  'Bundle Blindness': {
    executive: {
      mission: "There is a missed AOV and margin opportunity due to low solution bundling. Job-based kits improve conversion quality without relying on discounting. Cliffhanger: Deep Scan will design and operationalize top-performing kits by segment.",
      deep: "Bundle Blindness keeps the business in single-line sales while customer need is job-level resolution. This suppresses basket value and weakens loyalty. Next step: define top job kits, align shelf and script execution, and track bundle adoption by model segment.",
      actionPacks: ['INN-P1']
    },
    street: {
      mission: "This is Bundle Blindness. Customer needs full job solution, but you sell one part and they finish elsewhere. Cliffhanger: Deep Scan will build job kits so each sale carries higher value.",
      deep: "Selling singles leaves money on the table and sends the customer to another shop for completion. Next step: package service/brake/clutch kits and train staff to offer them naturally every time.",
      actionPacks: ['INN-P1']
    }
  },
  'Counterfeit Landmine': {
    executive: {
      mission: "Counterfeit exposure remains a high-impact reputational and commercial risk. Even isolated incidents can materially reduce trust and increase dispute rate. Cliffhanger: Deep Scan will install supplier authenticity firewall controls.",
      deep: "Counterfeit Landmine risk is highest when supplier verification is relationship-led without documented checks. Once confidence breaks, conversion and referral behavior degrade rapidly. Next step: implement approved supplier rules, verification evidence, and immediate escalation workflow for authenticity concerns.",
      actionPacks: ['RSK-P1']
    },
    street: {
      mission: "This is Counterfeit Landmine. One fake incident or rumor can spoil your name fast. Cliffhanger: Deep Scan will lock supplier verification so trust is protected.",
      deep: "Even a single suspicious part can trigger refund pressure and reputation damage. Next step: use approved suppliers only, verify batches consistently, and train staff on authenticity proof at the counter.",
      actionPacks: ['RSK-P1']
    }
  },
  'Warranty Ambush': {
    executive: {
      mission: "Warranty exposure is elevated due to ambiguous terms and inconsistent claim handling. This increases dispute cost and weakens close quality. Cliffhanger: Deep Scan will standardize policy, evidence, and communication scripts.",
      deep: "Warranty Ambush appears when claim decisions vary by staff or context. This invites boundary-testing and inflates refund workload. Next step: formalize warranty scope, exclusion, and claim-proof requirements; then enforce with role-based decision controls.",
      actionPacks: ['RSK-P2']
    },
    street: {
      mission: "This is Warranty Ambush. Rules are unclear, so every claim turns into argument. Cliffhanger: Deep Scan will set clear warranty terms and scripts so the team handles claims the same way.",
      deep: "When warranty changes by person, customers push harder and disputes increase. Next step: write policy clearly, display it, and require evidence before claim approval.",
      actionPacks: ['RSK-P2']
    }
  },
  'Theft Tax': {
    executive: {
      mission: "Shrink exposure on small high-value items is likely under-controlled. Gradual losses in this class materially affect retained margin over time. Cliffhanger: Deep Scan will implement high-value SKU controls with minimal service friction.",
      deep: "Theft Tax persists where high-value parts are not separated, logged, and access-restricted. Loss appears minor daily but becomes significant monthly. Next step: lock-log-access controls, high-risk SKU audits, and close-routine exception tracking.",
      actionPacks: ['RSK-P3']
    },
    street: {
      mission: "This is Theft Tax. Small high-value parts disappear quietly until profit is gone. Cliffhanger: Deep Scan will identify high-risk items and lock simple controls.",
      deep: "No one notices the leak immediately because each loss is small. But month-end margin tells the truth. Next step: separate high-value items, control access, and track variance daily.",
      actionPacks: ['RSK-P3']
    }
  },
  'Wrong-Part Dispute Tax': {
    executive: {
      mission: "Dispute costs are elevated because fitment and return evidence controls are inconsistent. This increases refund exposure and reduces trust quality. Cliffhanger: Deep Scan will implement documentation-first dispute defense workflows.",
      deep: "Wrong-Part Dispute Tax grows when fitment confirmation, receipts, and return rules are weakly enforced. Each case then turns into a negotiated settlement rather than controlled resolution. Next step: standardize fitment proof, return grading, and documented decision pathways.",
      actionPacks: ['RSK-P4', 'OPS-P1']
    },
    street: {
      mission: "This is Wrong-Part Dispute Tax. Without proof and clear rules, every dispute becomes a fight and your margin bleeds. Cliffhanger: Deep Scan will install fitment proof + terms so disputes reduce fast.",
      deep: "When evidence is missing, the shop gives in to calm conflicts. That habit becomes expensive. Next step: require fitment check proof and run disputes through one clear SOP every time.",
      actionPacks: ['RSK-P4', 'OPS-P1']
    }
  },
  'Scriptless Fitment': {
    executive: {
      mission: "Fitment quality variance indicates a training and scripting control gap across staff. Standardized questioning improves accuracy and repeat trust. Cliffhanger: Deep Scan will deploy certification and coaching controls for fitment consistency.",
      deep: "Scriptless Fitment is a capability system issue, not an individual talent issue. Under pressure, staff shortens discovery and error rates rise. Next step: implement mandatory fitment scripts, staff certification, and weekly coaching audits tied to wrong-fit KPIs.",
      actionPacks: ['PPL-P1']
    },
    street: {
      mission: "This is Scriptless Fitment. Staff is trying, but key questions are skipped when busy, then mistakes happen. Cliffhanger: Deep Scan will lock fitment scripts so every sale is checked properly.",
      deep: "Without one script, each person sells differently and accuracy drops. Next step: train everyone on the same fitment checklist and review wrong-fit by staff every week.",
      actionPacks: ['PPL-P1']
    }
  },
  'Discount Culture': {
    executive: {
      mission: "Incentive and behavior signals suggest over-discounting is being used as a close mechanism. This drives margin dilution and unstable pricing credibility. Cliffhanger: Deep Scan will align incentives and discount governance to protect realized margin.",
      deep: "Discount Culture forms when volume is rewarded more than margin quality. Staff then optimizes for quick closes, not profitable closes. The market adapts by negotiating harder, further weakening pricing integrity. Next step: link incentives to margin and return quality, then enforce discount bands with audit.",
      actionPacks: ['PPL-P2', 'MNY-P2']
    },
    street: {
      mission: "This is Discount Culture. Team is closing deals fast but giving away profit. Customers now expect bargaining every time. Cliffhanger: Deep Scan will set discount rules and incentives that protect margin.",
      deep: "When rewards are based on volume only, discounting becomes habit. You win the sale and lose the money. Next step: pay for profitable sales, not just sales count, and coach staff to hold value with clear scripts.",
      actionPacks: ['PPL-P2', 'MNY-P2']
    }
  }
};

const normalizeHook = (hook: string): string => hook.trim().toLowerCase();

const HOOK_LOOKUP = Object.keys(SPARE_PARTS_TONE_VARIANTS).reduce<Record<string, string>>((acc, hook) => {
  acc[normalizeHook(hook)] = hook;
  return acc;
}, {});

export const getSparePartsToneVariant = (
  hook: string,
  tone: SparePartsTone
): SparePartsToneVariant | null => {
  const canonical = HOOK_LOOKUP[normalizeHook(hook)];
  if (!canonical) return null;
  return SPARE_PARTS_TONE_VARIANTS[canonical][tone] || null;
};

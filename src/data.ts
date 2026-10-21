import { Service, Mechanic, Brand, PricingPlan, GalleryItem, BlogPost } from './types';
import mechanic1Img from '@/assets/mechanic-1.png';
import mechanic2Img from '@/assets/mechanic-2.jpg';
import mechanic3Img from '@/assets/mechanic-3.png';
import gallery1Img from '@/assets/gallery-1.jpg';
import gallery2Img from '@/assets/gallery-2.png';
import gallery3Img from '@/assets/gallery-3.jpg';
import gallery4Img from '@/assets/gallery-4.jpg';
import repair1Img from '@/assets/repair-1.jpg';
import repair2Img from '@/assets/repair-2.jpg';
import repair3Img from '@/assets/repair-3.jpg';
import tech1Img from '@/assets/tech-1.png';
import tech2Img from '@/assets/tech-2.jpg';
import tech3Img from '@/assets/tech-3.jpg';
import delivery1Img from '@/assets/delivery-1.jpg';
import delivery2Img from '@/assets/delivery-2.jpg';

export const SERVICES: Service[] = [
  {
    id: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    iconName: 'Cpu',
    shortDesc: 'State-of-the-art scanning to read fault codes, analyze engine health, and pinpoint hidden electrical or mechanical issues.',
    fullOverview: 'Modern vehicles are controlled by advanced onboard computers that monitor emissions, engine heat, and electrical components. Our state-of-the-art diagnostic scanners query your car\'s Engine Control Unit (ECU) to extract real-time sensor readings and logged fault codes, allowing our mechanics to fix the root cause, not just the symptoms.',
    whatsIncluded: [
      'Comprehensive computer system scanning & error code extraction',
      'Live sensor data stream verification (oxygen, mass airflow, fuel trim)',
      'Ignition system analysis (spark plugs, coils, timing)',
      'Fuel system pressure & injector performance testing',
      'Detailed technician health report with recommended actions'
    ],
    benefits: [
      'Prevents expensive major engine failures before they happen',
      'Optimizes fuel efficiency and restores engine power',
      'Clears frustrating dashboard indicators (Check Engine Light)',
      'Ensures your car passes emission compliance standards'
    ],
    estimatedTime: '45 - 90 Minutes',
    basePrice: '₹799',
    beforeImg: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600', // engine with fault
    afterImg: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600', // clean diagnostic setup
    faqs: [
      { question: 'Why is my Check Engine Light on?', answer: 'It is triggered by your ECU detecting a sensor reading outside safe thresholds. It can be something minor like a loose gas cap or critical like a catalytic converter failure. A diagnostic scan is the only way to know.' },
      { question: 'Does a scan fix the issue automatically?', answer: 'No, the scan retrieves error codes that act as clues. Our master mechanics then perform secondary physical tests to confirm and repair the exact failure.' }
    ]
  },
  {
    id: 'oil-change',
    title: 'Oil & Filter Change',
    iconName: 'Droplet',
    shortDesc: 'Keep your engine running silky-smooth with premium synthetic lubricants, a new OEM-quality filter, and a multi-point inspection.',
    fullOverview: 'Engine oil is the lifeblood of your vehicle, reducing friction, carrying away heat, and capturing metal filings. Over time, high temperatures break down oil, turning it into a sludge that accelerates engine wear. We replace it with premium synthetic lubricants and a fresh filter to guarantee longevity and peak performance.',
    whatsIncluded: [
      'Complete drainage of old engine oil',
      'Installation of premium full-synthetic oil (custom viscosity matching)',
      'Replacement of oil filter with OEM-grade premium filter',
      'Inspection of engine air filter and cabin microfilter',
      'Complementary fluid top-up (coolant, washer fluid, brake fluid)'
    ],
    benefits: [
      'Extends overall engine lifespan and prevents friction damage',
      'Improves fuel economy by reducing internal engine resistance',
      'Keeps internal engine components clean and free of carbon sludge',
      'Maintains new car manufacturer warranties'
    ],
    estimatedTime: '30 - 45 Minutes',
    basePrice: '₹999',
    beforeImg: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600', // mechanic working under hood
    afterImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600', // fresh clean enginebay
    faqs: [
      { question: 'How often should I change my engine oil?', answer: 'For modern full-synthetic oils, we recommend every 7,500 to 10,000 miles or every 6-12 months, whichever comes first.' },
      { question: 'What is the difference between synthetic and conventional oil?', answer: 'Synthetic oil contains fewer impurities, flows better in extreme temperatures, and resists breaking down under intense heat much longer than conventional mineral oil.' }
    ]
  },
  {
    id: 'brake-repair',
    title: 'Brake Repair & Service',
    iconName: 'ShieldAlert',
    shortDesc: 'Stop on a dime. Professional brake pad replacement, rotor resurfacing, caliper servicing, and brake fluid flushes.',
    fullOverview: 'Your braking system is your vehicle\'s most critical safety feature. Over time, friction material on brake pads wears down, and rotors can warp or develop grooves, resulting in squeaking, vibrations, or reduced stopping distance. We perform thorough microscopic inspections and replace worn items with heavy-duty ceramic pads and balanced rotors.',
    whatsIncluded: [
      'Detailed caliper, pad, rotor, and brake line wear assessment',
      'Installation of premium low-dust ceramic or semi-metallic brake pads',
      'Precision resurfacing or replacement of brake rotors',
      'Caliper pin lubrication and dust boot replacement',
      'Brake fluid moisture check and complete hydraulic system bleeding'
    ],
    benefits: [
      'Guarantees immediate, short, and silent stopping response',
      'Prevents costly damage to calipers and wheel hubs',
      'Eliminates annoying brake squeal and steering wheel vibration',
      'Provides peace of mind during emergency braking conditions'
    ],
    estimatedTime: '1 - 2 Hours',
    basePrice: '₹1,499',
    beforeImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'Why are my brakes squeaking?', answer: 'Brakes can squeak due to accumulated brake dust, glaze on the pads, or because the wear indicator metal tab is contacting the rotor, signaling that your pads are dangerously thin.' },
      { question: 'How often should brake fluid be flushed?', answer: 'Brake fluid is hygroscopic (absorbs moisture). We recommend flushing it every 2 years or 30,000 miles to prevent internal corrosion and spongy pedals.' }
    ]
  },
  {
    id: 'wheel-alignment',
    title: '3D Wheel Alignment',
    iconName: 'Compass',
    shortDesc: 'Laser-guided wheel alignment to correct steering pull, reduce tire wear, and improve high-speed cruising stability.',
    fullOverview: 'Potholes, curb clips, and standard suspension wear throw your wheels out of their factory-specified alignment angles (Camber, Caster, Toe). This leads to your vehicle pulling to one side and causes premature tire baldness. Our laser 3D alignment rig measures orientation to the millimeter, resetting your suspension to perfect tracking.',
    whatsIncluded: [
      '3D laser-guided measurement of Camber, Caster, and Toe angles',
      'Steering wheel centering and suspension bushing inspection',
      'Precision adjustment of front and rear suspension linkages',
      'Tire pressure adjustments and test drive calibration'
    ],
    benefits: [
      'Saves hundreds of dollars by preventing uneven tire wear',
      'Improves vehicle handling, steering precision, and highway safety',
      'Reduces rolling resistance, boosting fuel efficiency',
      'Eliminates vehicle drifting or steering wheel pulling'
    ],
    estimatedTime: '45 - 60 Minutes',
    basePrice: '₹799',
    beforeImg: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'What are the signs of bad wheel alignment?', answer: 'If your car drifts to one side, the steering wheel is crooked when driving straight, or you notice feathered/uneven wear on tire edges, your wheels need alignment.' },
      { question: 'Is wheel alignment the same as tire balancing?', answer: 'No. Alignment adjusts the angles of the tires relative to the frame. Balancing corrects weight imbalances within the tire/wheel assembly itself.' }
    ]
  },
  {
    id: 'tire-replacement',
    title: 'Tire Replacement & Balancing',
    iconName: 'CircleDot',
    shortDesc: 'Premium tires from top global brands (Michelin, Bridgestone, Continental) with computerized balancing and mounting.',
    fullOverview: 'Your tires are the only contact point between your car and the asphalt. Worn tread increases braking distance exponentially and causes hydroplaning on wet roads. We stock and install ultra-high-performance, touring, and all-weather tires, offering computerized dynamic balancing for a quiet, vibration-free ride.',
    whatsIncluded: [
      'Removal of worn tires and valve stems',
      'Professional mounting of new premium tires on rims',
      'Computerized dynamic tire balancing using precision weights',
      'Installation of new rubber leak-proof tubeless valves',
      'TPMS (Tire Pressure Monitoring System) sensor reset'
    ],
    benefits: [
      'Drastically increases wet and dry road traction',
      'Reduces braking distance on wet surfaces, avoiding collisions',
      'Delivers a quiet, smooth, and vibration-free ride at highway speeds',
      'Assures maximum safety against high-speed tire blowouts'
    ],
    estimatedTime: '45 - 60 Minutes',
    basePrice: '₹699',
    beforeImg: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'How do I know when I need new tires?', answer: 'Replace your tires if the tread depth falls below 2/32" (or reaches the wear bars), if you see dry rot cracks, sidewall bulges, or if the tires are more than 6 years old.' },
      { question: 'Why is tire balancing necessary?', answer: 'An unbalanced tire creates heavy spots that cause high-speed wheel vibration, stressing the suspension and leading to irregular tread cupping.' }
    ]
  },
  {
    id: 'battery-replacement',
    title: 'Battery Replacement & Testing',
    iconName: 'Zap',
    shortDesc: 'Cold-crank diagnostics, electrical leakage tests, terminal corrosion cleaning, and reliable brand new battery installs.',
    fullOverview: 'Extreme summer heat and winter cold degrade battery cells, draining their voltage. We perform full electrical load testing of your battery, alternator, and starter motor. If a replacement is needed, we install heavy-duty, long-warranty AGM or lead-acid batteries and apply corrosion-resistant terminal coatings.',
    whatsIncluded: [
      'Digital battery health and cold-cranking amps (CCA) test',
      'Alternator charging output and voltage regulator diagnostics',
      'Removal and eco-friendly disposal of the old lead-acid battery',
      'Installation of premium replacement battery matching OEM specs',
      'Anti-corrosion felt washer application and protective terminal grease'
    ],
    benefits: [
      'Guarantees instant starting in extreme cold or hot weather',
      'Prevents getting stranded on roads with a sudden dead battery',
      'Maintains stable power supply to your car\'s sensitive computers',
      'Comes with a 3-year comprehensive replacement warranty'
    ],
    estimatedTime: '20 - 30 Minutes',
    basePrice: '₹3,499',
    beforeImg: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'What is the average life of a car battery?', answer: 'Most car batteries last between 3 and 5 years, depending on climate, driving habits, and vehicle electrical demands.' },
      { question: 'What are signs of a failing battery?', answer: 'Slow engine crank, dim headlights when the engine is off, a dashboard battery light, or clicking sounds when turning the key indicate battery decay.' }
    ]
  },
  {
    id: 'ac-repair',
    title: 'AC Repair & Gas Recharge',
    iconName: 'Wind',
    shortDesc: 'Cool breeze on hot days. Recharging refrigerant, detecting leaks using UV dye, replacing cabin filters and compressors.',
    fullOverview: 'Car AC systems lose refrigerant gradually over time, lowering cooling performance. Our service includes evacuating stale gas, vacuum-testing lines for microscopic cracks, injecting specialized UV detection dye, and recharging refrigerant precisely to factory weight specifications to restore ice-cold airflow.',
    whatsIncluded: [
      'Air duct temperature and blower fan speed test',
      'Evacuation of old refrigerant gas and moisture removal',
      'High-vacuum pressure test to inspect for systemic leaks',
      'UV dye injection and precise eco-friendly gas recharge (R134a or R1234yf)',
      'AC belt inspection and cabin pollen filter replacement'
    ],
    benefits: [
      'Restores freezing-cold air vents, making hot drives pleasurable',
      'De-humidifies cabin air, preventing windows from fogging up',
      'Clears cabin mold and bacteria, easing breathing and allergies',
      'Prevents expensive compressor failures by ensuring proper lubricating oil'
    ],
    estimatedTime: '1 Hour',
    basePrice: '₹1,299',
    beforeImg: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'Why is my AC blowing warm air?', answer: 'Usually, it is due to a low refrigerant level caused by a minor leak. Other causes include a failed compressor clutch, blown fuse, or blocked cabin filter.' },
      { question: 'What is the purpose of the UV dye?', answer: 'It flows with the refrigerant and oil. If there is a slow leak, it seeps out and glows under UV light, showing our mechanics the exact leak spot.' }
    ]
  },
  {
    id: 'suspension-repair',
    title: 'Suspension & Steering',
    iconName: 'Wrench',
    shortDesc: 'Restore a smooth, stable ride. We replace worn shock absorbers, struts, ball joints, control arms, and tie rods.',
    fullOverview: 'Suspension keeps tires planted on the road and isolates passengers from bumps. Faulty struts or worn bushings compromise your vehicle\'s stability, leading to excessive body roll, bouncy driving, and increased braking distance. We install heavy-duty shock absorbers to restore factory ride compliance.',
    whatsIncluded: [
      'Visual check of shocks, struts, coil springs, and stabilizer links',
      'Steering gear box, power steering fluid, and boot inspection',
      'Replacement of leaking strut cartridges or assemblies',
      'Installation of heavy-duty ball joints, control arms, and tie rod ends',
      'Post-repair ride height check and steering calibration'
    ],
    benefits: [
      'Restores smooth luxury riding comfort, erasing pothole bumps',
      'Significantly reduces vehicle body roll and swaying around curves',
      'Improves emergency braking responsiveness and steering control',
      'Eliminates annoying metal clunking noises over bumps'
    ],
    estimatedTime: '2 - 3 Hours',
    basePrice: '₹899',
    beforeImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'How do I know my shock absorbers are bad?', answer: 'If your car bounces excessively after a bump, dips forward when braking, has uneven tire tread wear, or has fluid leaking from the strut cylinders, they need replacement.' },
      { question: 'Should I replace shocks in pairs?', answer: 'Yes. Replacing both front or both rear shocks ensures uniform steering damping and prevents safety imbalances.' }
    ]
  },
  {
    id: 'transmission-service',
    title: 'Transmission Service',
    iconName: 'Settings',
    shortDesc: 'Keep shifts smooth. Transmission oil flush, filter change, pressure diagnostics, and solenoid repairs for automatic and manual systems.',
    fullOverview: 'The transmission transfers engine power to the wheels. High heat degrades transmission fluid, causing rough shifts, gear slippage, or costly internal gear damage. We flush out old sludge, clean the pan magnets, replace filters, and fill with premium synthetic gear oil to guarantee butter-smooth shifts.',
    whatsIncluded: [
      'Transmission fluid level and contamination inspection',
      'Full flushing of old hydraulic fluid using specialized machines',
      'Transmission pan removal, cleaning of magnet debris, gasket replacement',
      'Replacement of internal transmission fluid filter',
      'Electronic transmission control module software update & diagnostics'
    ],
    benefits: [
      'Eliminates harsh, delayed, or jerking gear shifts',
      'Prevents catastrophic transmission lockups and gears burning',
      'Lowers internal gearbox operating temperature, extending life',
      'Improves fuel economy and power delivery responsiveness'
    ],
    estimatedTime: '1.5 - 2.5 Hours',
    basePrice: '₹2,999',
    beforeImg: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'What are the signs of transmission issues?', answer: 'Slipping gears, delayed acceleration, burning smells, fluid puddles under the car, or loud grinding noises while in neutral indicate critical gearbox trouble.' },
      { question: 'How often should transmission fluid be changed?', answer: 'We recommend servicing automatic transmissions every 50,000 to 60,000 miles to keep the internal valve bodies clean.' }
    ]
  },
  {
    id: 'car-detailing',
    title: 'Car Wash & Detailing',
    iconName: 'Sparkles',
    shortDesc: 'A showroom-quality finish. Deep foam wash, interior vacuuming and sterilization, leather conditioning, clay-bar prep, and high-gloss ceramic wax.',
    fullOverview: 'Your car is exposed to road salt, UV rays, bird droppings, and cabin grime. Our professional detailing service is an intensive multi-step cosmetic overhaul. We perform gentle hand washing, deep interior sanitization, exterior paint claying to remove embedded contaminants, and finish with a high-end protective ceramic wax coating.',
    whatsIncluded: [
      'Multi-stage active snow foam hand wash & microfiber dry',
      'Clay-bar treatment to remove paint grit, tree sap, and rust spots',
      'Machine dual-action compound polishing to erase minor swirl marks',
      'Deep interior upholstery hot-water extraction & leather conditioning',
      'Application of high-gloss hydrophobic hybrid ceramic wax sealant'
    ],
    benefits: [
      'Restores deep mirror paint gloss, elevating your vehicle\'s resale value',
      'Creates a powerful hydrophobic layer that repels dirt and rain',
      'Removes interior food spills, mold spores, and stubborn smoke odors',
      'Protects dashboard plastic and seats from UV sun fading and cracks'
    ],
    estimatedTime: '2 - 4 Hours',
    basePrice: '₹499',
    beforeImg: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600', // dirty car wash
    afterImg: 'https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&q=80&w=600', // polished shiny red car
    faqs: [
      { question: 'What is clay-bar treatment?', answer: 'A detailing clay bar is rubbed over the paint to gently pull out microscopic embedded contaminants like brake dust, rail dust, and industrial fallout that washing can\'t remove.' },
      { question: 'How long does ceramic wax protect the paint?', answer: 'Our premium ceramic sealant provides active hydrophobic protective layers and gloss for 6 to 9 months under normal conditions.' }
    ]
  },
  {
    id: 'dent-paint',
    title: 'Dent & Paint Repair',
    iconName: 'Paintbrush',
    shortDesc: 'Paintless dent removal (PDR), scratch removal, bumper repair, and computerized paint matching for factory-fresh bodywork.',
    fullOverview: 'Accidents happen, but you don\'t have to live with dents or scratches. Our skilled body shop technicians utilize specialized tools for Paintless Dent Repair (PDR) to massage out dents without disturbing the original finish. For deep scrapes, we use computerized paint spectrometers to match your exact color code, followed by factory-grade clear coats.',
    whatsIncluded: [
      'Computerized paint-color spectroscopy for 100% color matching',
      'Paintless Dent Repair (PDR) massaging for minor body impacts',
      'Precision sanding, rust treatment, and dual-layer primer application',
      'High-solids basecoat painting inside a dust-free heated paint booth',
      'Ultra-hard protective clear coating and paint blending/buffing'
    ],
    benefits: [
      'Fully restores original car beauty, making accidents invisible',
      'PDR saves original factory paint, preserving maximum vehicle value',
      'Seals open scratches, preventing metal panels from rust oxidation',
      'Quick turnaround for bumper scrapes and parking lot dings'
    ],
    estimatedTime: '1 - 2 Days',
    basePrice: '₹1,500',
    beforeImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'What is Paintless Dent Repair (PDR)?', answer: 'PDR is a skilled technique of accessing the back of a dented metal panel and using custom rods to gently press and reshape the metal back to flat, requiring no paint or body filler.' },
      { question: 'Can you match metallic or pearl finishes?', answer: 'Absolutely. We use a digital spectrophotometer to analyze your specific weathered paint color and mix paints on-site to match the exact pearl or metallic grain.' }
    ]
  },
  {
    id: 'car-inspection',
    title: 'Comprehensive Vehicle Inspection',
    iconName: 'FileCheck',
    shortDesc: 'Perform a complete inspection of the engine, brakes, suspension, tires, lights, battery, and other key systems to ensure your vehicle is road-ready.',
    fullOverview: 'Whether preparing for a long road trip or buying a pre-owned car, a complete bumper-to-bumper check gives you total clarity. Our master technicians inspect all major systems—brakes, steering, fluid condition, electronics, chassis integrity, and scan for hidden historical fault codes, giving you an exhaustive, unbiased report.',
    whatsIncluded: [
      'Comprehensive 150-point checklist inspection',
      'Chassis structural analysis and undercarriage rust check',
      'Fluid level, viscosity, and chemical contamination testing',
      'Full electronic module scan and battery/alternator health log',
      'Extensive road test evaluating gear shifts, alignment, and brake pedal feel'
    ],
    benefits: [
      'Saves you thousands by identifying hidden problems before purchasing a used car',
      'Guarantees your vehicle is roadworthy and safe for family road trips',
      'Provides a leverage report to negotiate used car buying prices down',
      'Includes photographic evidence of all flagged mechanical defects'
    ],
    estimatedTime: '1.5 - 2 Hours',
    basePrice: '₹1,999',
    beforeImg: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'Should I get a pre-purchase inspection?', answer: 'Yes, absolutely. A used car can look pristine on the outside but suffer from hidden transmission failures, structural weld repairs, or oil leaks that are scrubbed clean. Our inspection finds these instantly.' },
      { question: 'How long is the inspection report valid?', answer: 'It is a detailed snapshot of the car\'s current physical and electronic state at that exact hour, serving as an excellent baseline.' }
    ]
  },
  {
    id: 'engine-repair',
    title: 'Engine Repair',
    iconName: 'Cpu',
    shortDesc: 'Diagnose and repair engine issues to restore performance, reliability, and fuel efficiency.',
    fullOverview: 'Engines are complex machinery requiring exact tolerances and calibrations. We diagnose and repair all engine components, including cylinders, valves, pistons, gaskets, and timing chains, restoring factory specifications.',
    whatsIncluded: [
      'Cylinder compression testing and calibration check',
      'Valve and cylinder head repairs or carbon cleaning',
      'Timing belt or timing chain replacements',
      'Engine gasket leak repairs (head gasket, valve cover)',
      'Oil pump and cooling system audits'
    ],
    benefits: [
      'Restores original horsepower and engine torque output',
      'Increases fuel economy and reduces exhaust emissions',
      'Prevents catastrophic mechanical failures on the road',
      'Extends overall vehicle longevity and resale value'
    ],
    estimatedTime: '3 - 6 Hours',
    basePrice: '₹3,999',
    beforeImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'How do I know my engine needs repair?', answer: 'Common indicators include loud knocking noises, heavy smoke from the tailpipe, excessive oil consumption, loss of acceleration, or the check engine light flashing.' }
    ]
  },
  {
    id: 'fluid-inspection',
    title: 'Fluid Inspection & Top-Up',
    iconName: 'Droplet',
    shortDesc: 'Check and refill coolant, brake fluid, transmission fluid, power steering fluid, and windshield washer fluid.',
    fullOverview: 'Fluids keep your vehicle components lubricated, cooled, and pressurized. We inspect all essential fluids, checking their levels, contamination status, and top them up with original manufacturer specifications.',
    whatsIncluded: [
      'Coolant verification and top-up using premium anti-freeze',
      'Brake fluid level and moisture content checks',
      'Power steering fluid level testing and system inspection',
      'Windshield washer fluid top-up and nozzle cleaning',
      'Transmission and differential fluid check'
    ],
    benefits: [
      'Prevents steering gear and transmission overheating',
      'Maintains optimal brake pedal pressure and safety',
      'Ensures clear visibility in dusty or wet weather',
      'Extends the lifespan of internal rubber seals and gaskets'
    ],
    estimatedTime: '20 - 30 Minutes',
    basePrice: '₹599',
    beforeImg: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'How often should fluids be topped up?', answer: 'We suggest checking fluid levels during every oil change. Low levels can indicate internal leaks or evaporation, which should be repaired.' }
    ]
  },
  {
    id: 'car-wash',
    title: 'Premium Car Wash',
    iconName: 'Waves',
    shortDesc: 'Professional exterior wash to remove dirt, dust, and road grime while protecting the vehicle\'s finish.',
    fullOverview: 'A premium exterior foam wash designed to remove dirt, brake dust, and mud safely without scratching the clear coat. We use dual-bucket techniques and soft microfibers to ensure a streak-free clean.',
    whatsIncluded: [
      'Multi-stage high-pressure foam wash',
      'Underbody mud and salt removal',
      'Wheel rim and tire cleaning',
      'Glass and mirror drying',
      'Tire shine dresser application'
    ],
    benefits: [
      'Safely removes damaging road chemicals and salt',
      'Protects clear coat paint from fading due to road film',
      'Improves vehicle aesthetic appeal',
      'Ensures clear vision through windows'
    ],
    estimatedTime: '30 - 45 Minutes',
    basePrice: '₹499',
    beforeImg: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'Is a foam wash safe for ceramic coated cars?', answer: 'Yes, our foam wash utilizes pH-neutral soap that is 100% safe for ceramic coatings and waxes, helping preserve the coating.' }
    ]
  },
  {
    id: 'interior-cleaning',
    title: 'Interior Deep Cleaning',
    iconName: 'Wind',
    shortDesc: 'Clean and sanitize seats, carpets, dashboard, and cabin surfaces for a fresh interior.',
    fullOverview: 'Deep vacuuming, stain treatment, and steam sanitization of the cabin. We clean dashboard panels, door trims, carpets, and air vents to eliminate odors and leave your interior smelling showroom fresh.',
    whatsIncluded: [
      'Full cabin deep vacuuming of carpets and seats',
      'Upholstery stain extraction and disinfection',
      'Dashboard and door panel dressing with UV protection',
      'Air vent sanitization and dusting',
      'AC cabin odor neutralizer treatment'
    ],
    benefits: [
      'Removes deep-seated allergens, dust, and pet hair',
      'Eliminates stubborn odors like smoke or food spills',
      'Protects vinyl and leather from cracking due to solar heat',
      'Leaves a clean, hygienic cabin space'
    ],
    estimatedTime: '1 - 2 Hours',
    basePrice: '₹999',
    beforeImg: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'How often should the interior be deep cleaned?', answer: 'We recommend deep cleaning every 6 months to maintain cabin hygiene and preserve seat fabrics.' }
    ]
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    iconName: 'Layers',
    shortDesc: 'Apply a long-lasting protective coating that enhances gloss and shields the paint from UV rays, dirt, and minor scratches.',
    fullOverview: 'A highly durable liquid polymer coating applied by hand to the exterior paintwork. It chemically bonds with the clear coat to create a hydrophobic protective barrier that repels water, dirt, and prevents oxidation.',
    whatsIncluded: [
      'Paint decontamination and clay-bar preparation',
      'Multi-stage machine paint correction and polishing',
      'Hand application of 9H premium ceramic coating layers',
      'Infrared heat curing for structural bonding',
      'Hydrophobic topcoat sealer application'
    ],
    benefits: [
      'Provides a deep, glass-like showroom reflection',
      'Hydrophobic properties make washing extremely easy',
      'Shields paint from bird droppings, acid rain, and UV fading',
      'Protects against minor paint oxidation and swirls'
    ],
    estimatedTime: '1 - 2 Days',
    basePrice: '₹9,999',
    beforeImg: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'How long does ceramic coating last?', answer: 'Our premium 9H ceramic coating lasts between 2 and 5 years, depending on maintenance washes and road conditions.' }
    ]
  },
  {
    id: 'paint-polishing',
    title: 'Paint Correction & Polishing',
    iconName: 'Sparkles',
    shortDesc: 'Remove swirl marks, light scratches, and oxidation to restore a deep, glossy finish.',
    fullOverview: 'Machine paint correction using compounding and polishing pads. We remove fine microscopic scratches, spider-web swirl marks from standard washing, and oxidation to restore the paint\'s original optical clarity.',
    whatsIncluded: [
      'Exterior hand wash and paint preparation',
      'Diagnostic paint depth measurements',
      'Dual-action machine paint compounding',
      'Ultra-fine finishing paint polishing',
      'Synthetic wax sealant protection'
    ],
    benefits: [
      'Eliminates up to 80-90% of visible light scratches',
      'Restores deep, dark reflection on colored paint',
      'Removes haze and oxidation dullness',
      'Creates a smooth base for coatings or waxes'
    ],
    estimatedTime: '3 - 5 Hours',
    basePrice: '₹1,999',
    beforeImg: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&q=80&w=600',
    faqs: [
      { question: 'Can polishing remove deep scratches?', answer: 'Polishing removes clear-coat imperfections. Scratches that have penetrated through the paint to the metal or primer require paint touch-ups instead.' }
    ]
  }
];

export const TEAM: Mechanic[] = [
  {
    name: 'Alex Rivers',
    role: 'Senior Master Mechanic',
    experience: '15+ Years',
    specialty: 'Engine Rebuilds & Complex Mechanical Systems',
    certifications: ['ASE Master Technician', 'BMW & Mercedes Certified Elite', 'Advanced Engine Performance Specialist'],
    image: mechanic1Img,
    bio: 'Alex has spent over a decade rebuilding high-performance engines and luxury drivetrains. His passion is diagnosing and restoring classical and ultra-modern powertrains to absolute peak factory tolerances.'
  },
  {
    name: 'Marcus Vance',
    role: 'Diagnostic & Electronics Specialist',
    experience: '10+ Years',
    specialty: 'ECU Programming, Hybrid Circuits & Advanced Sensor Tuning',
    certifications: ['ASE L3 Hybrid/EV Certified', 'Bosch Master Systems Specialist', 'Toyota Hybrid Expert'],
    image: mechanic2Img,
    bio: 'Marcus is the garage\'s resident wizard for tricky wiring faults and hybrid electric circuits. He operates our advanced laser scopes and computerized dyno analyzers with master precision.'
  },
  {
    name: 'Adi Prasetyo',
    role: 'Mechanical & Performance Specialist',
    experience: '8 Years',
    specialty: 'High-Performance Tuning, Gearboxes & Transmission Overhauls',
    certifications: ['ASE Certified Master Tech', 'Advanced Powertrain Diagnostics', 'High-Performance Systems Expert'],
    image: mechanic3Img,
    bio: 'Adi is our highly skilled mechanical technician. With a passion for tuning and high-performance calibration, he ensures every vehicle is restored to peak factory tolerances.'
  }
];

export const BRANDS: Brand[] = [
  { name: 'Toyota', country: 'Japan', logoUrl: 'T' },
  { name: 'Honda', country: 'Japan', logoUrl: 'H' },
  { name: 'Hyundai', country: 'South Korea', logoUrl: 'Hy' },
  { name: 'Kia', country: 'South Korea', logoUrl: 'K' },
  { name: 'Suzuki', country: 'Japan', logoUrl: 'S' },
  { name: 'Tata', country: 'India', logoUrl: 'Ta' },
  { name: 'Mahindra', country: 'India', logoUrl: 'M' },
  { name: 'MG', country: 'UK', logoUrl: 'MG' },
  { name: 'BMW', country: 'Germany', logoUrl: 'B' },
  { name: 'Mercedes-Benz', country: 'Germany', logoUrl: 'MB' },
  { name: 'Audi', country: 'Germany', logoUrl: 'A' },
  { name: 'Volkswagen', country: 'Germany', logoUrl: 'VW' },
  { name: 'Skoda', country: 'Czech Republic', logoUrl: 'Sk' },
  { name: 'Nissan', country: 'Japan', logoUrl: 'N' },
  { name: 'Renault', country: 'France', logoUrl: 'R' },
  { name: 'Ford', country: 'USA', logoUrl: 'F' }
];

export const PRICING_PACKAGES: PricingPlan[] = [
  {
    name: 'Basic Service',
    price: '$89',
    billing: 'Per Visit',
    popular: false,
    desc: 'Essential routine servicing to keep your car operating safely and smoothly on standard commutes.',
    features: [
      'Full Synthetic Engine Oil Change',
      'Premium Oil Filter Replacement',
      'Top-up of 4 Essential Fluids',
      '30-Point Safety & Wear Inspection',
      'Tire Pressure Check & Fill',
      'Complementary Exterior Spray Wash'
    ]
  },
  {
    name: 'Standard Service',
    price: '$169',
    billing: 'Per Visit',
    popular: true,
    desc: 'Our most popular comprehensive maintenance package. Highly recommended every 10,000 miles.',
    features: [
      'Everything in Basic Package',
      'Engine Air Filter Replacement',
      'Cabin Micro-Air Filter Replacement',
      'Full 4-Wheel Brake Wear Diagnostic',
      'Computerized Battery & Alternator Test',
      'Comprehensive 75-point Health Scan',
      'Tire Rotation & Tread Life Check'
    ]
  },
  {
    name: 'Premium Service',
    price: '$299',
    billing: 'Per Visit',
    popular: false,
    desc: 'Ultimate care detailing and mechanical rejuvenation. Ideal for pre-season or severe weather preparation.',
    features: [
      'Everything in Standard Package',
      'Computerized 3D Wheel Alignment',
      'Brake Hydraulic Fluid Flush',
      'Fuel Injector Intensive Cleaning',
      'Spark Plug Operational Analysis',
      'Full Under-chassis Lubrication',
      'Showroom Foam Wash & Interior Detailing'
    ]
  },
  {
    name: 'Annual Maintenance Plan',
    price: '$399',
    billing: 'Per Year',
    popular: false,
    desc: 'Total peace of mind. Covers all scheduled services for 12 months, plus priority perks and roadside support.',
    features: [
      '2 Standard Scheduled Services per year',
      'Unlimited 24/7 Roadside Towing Support',
      'Complementary Pickup & Drop off service',
      '15% Flat Discount on all secondary repairs',
      'Priority express service bays (No Waiting)',
      'Free loaner car during major garage repairs'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'signs-car-needs-service',
    title: '5 Crucial Signs Your Car Needs Immediate Servicing',
    excerpt: 'Ignore these warning indicators at your own peril. Learn how to identify brake wear, sensor failure, and steering drifts.',
    content: 'Modern automobiles are masterpieces of engineering, but they are subject to heavy physical friction and stress. Often, cars whisper warnings before they suffer catastrophic breakdowns. 1. Dashboard Warning Lights: Never ignore a flashing Check Engine Light. It signals a critical malfunction like catalytic issues or cylinder misfires. 2. Squeaking or Grinding Brakes: This means your ceramic pads have worn to the safety indicator. Driving further will destroy your expensive iron rotors. 3. Strange Smells: A sweet maple-syrup smell points to a highly toxic coolant leak, while a acrid burning smell indicates slipping clutch plates or oil hitting hot exhaust manifolds. 4. Unexplained Vibrations: If your steering wheel shakes at highway speeds, your wheels are unbalanced or suspension bushings have cracked. 5. Pulling or Drifting: If your vehicle steers itself to the left or right, your alignment needs setting.',
    date: 'July 10, 2026',
    author: 'Alex Rivers',
    category: 'Maintenance',
    readTime: '4 Min Read',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'oil-change-guide',
    title: 'How Often Should You Really Change Engine Oil?',
    excerpt: 'Demystifying the 3,000-mile myth. Understanding full-synthetic limits, driving habits, and oil oxidation.',
    content: 'For decades, quick-lube shops drilled the "3,000-mile or 3-month" rule into drivers\' heads. But is this still true? Modern full-synthetic lubricants are heavily engineered chemical complexes containing friction modifiers and anti-oxidative additives. Today, most modern vehicles running high-quality synthetics easily drive 7,500 to 10,000 miles before needing an oil change. Factors that influence oil life include cold starts, stop-and-go city traffic, and driving in Dusty or extreme temperature environments. Always consult your dashboard oil-life monitor and rely on professional oil testing.',
    date: 'June 28, 2026',
    author: 'Sarah Jenkins',
    category: 'Pro Tips',
    readTime: '5 Min Read',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'battery-maintenance-tips',
    title: 'Battery Maintenance: How to Extend Lead-Acid Life',
    excerpt: 'Prevent being stranded. Learn how to clean terminal oxidation, check alternator outputs, and protect battery health.',
    content: 'A dead battery is the leading cause of roadside emergency calls. To get the maximum 5-year lifetime out of your battery, follow these expert rules. First, check terminals for white, crusty copper sulfate corrosion. Clean it with a baking soda paste and seal with dielectric grease. Second, secure the battery bracket tight—engine vibrations degrade the lead cell grids internally. Third, minimize electrical drain when the engine is off (e.g. charging laptops or playing high-watt subwoofers). Have your alternator tested twice a year.',
    date: 'May 15, 2026',
    author: 'Marcus Chen',
    category: 'Electrical',
    readTime: '3 Min Read',
    imageUrl: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'tire-care-guide',
    title: 'The Ultimate Guide to Tire Care and Tread Longevity',
    excerpt: 'Maximize safety and save money. Simple checks for tire rotation, laser alignments, and correct psi.',
    content: 'Tires are the single most active safety device on your vehicle. Taking care of them keeps money in your wallet and rubber on the road. 1. Maintain Correct PSI: Under-inflated tires cause excessive sidewall heat and rapid shoulder wear. Over-inflation creates a stiff center ride prone to blowout damage. 2. Rotate Every 6,000 Miles: Front tires steer and brake, absorbing double the force. Rotating them to the rear assures uniform wearing. 3. Monitor Tread Depth: Insert a penny upside down; if you see Lincoln\'s entire head, your tread is under 2/32" and dangerously bald on wet asphalt.',
    date: 'April 20, 2026',
    author: 'Alex Rivers',
    category: 'Safety',
    readTime: '6 Min Read',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'monsoon-car-care',
    title: 'Monsoon Car Care Tips: Prepare for Torrential Rain',
    excerpt: 'Essential wet-weather checks including hydroplaning defense, rubber wiper blades, and electrical sealing.',
    content: 'Driving in heavy rainstorm conditions requires perfect mechanical preparedness. Water acts as a powerful lubricant, reducing road adhesion. 1. Inspect Wiper Blades: If your rubber wipers leave streaks or squeak, they are dried out and must be replaced to maintain visibility. 2. Clean Rain Scuppers: Pine needles and debris plug the drains below the windshield, causing rain to flood into your electronic fuse boxes under the dash. 3. Brake Drying: After driving through deep puddles, tap your brakes gently to heat the rotors and dry off moisture, ensuring stopping power is available when needed.',
    date: 'March 08, 2026',
    author: 'Sarah Jenkins',
    category: 'Seasonal',
    readTime: '4 Min Read',
    imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Classic Restoration Servicing Bay', category: 'garage', imageUrl: gallery1Img },
  { id: 'g2', title: 'Modern Hydraulic Lift Bays', category: 'garage', imageUrl: gallery2Img },
  { id: 'g3', title: 'Classic Performance Engine Overhaul', category: 'repairs', imageUrl: repair1Img },
  { id: 'g4', title: 'Precision Calibration Workbench', category: 'workshop', imageUrl: tech1Img },
  { id: 'g5', title: 'Front Suspension & Drivetrain Repair', category: 'repairs', imageUrl: repair2Img },
  { id: 'g6', title: 'Premium Fleet Alignment Garage', category: 'garage', imageUrl: gallery4Img },
  { id: 'g7', title: 'Undercarriage & Brake System Diagnosis', category: 'repairs', imageUrl: repair3Img },
  { id: 'g8', title: 'Engine Rebuild Components Workshop', category: 'workshop', imageUrl: tech2Img },
  { id: 'g9', title: 'Automotive Diagnostics Tooling Assembly', category: 'workshop', imageUrl: tech3Img },
  { id: 'g10', title: 'White SUV Premium Transport Delivery', category: 'deliveries', imageUrl: delivery1Img },
  { id: 'g11', title: 'Transporter Valet Delivery Service', category: 'deliveries', imageUrl: delivery2Img }
];

export const TESTIMONIALS = [
  {
    name: 'David K.',
    vehicle: 'BMW 530i',
    rating: 5,
    review: 'DriveCare is the only shop I trust with my BMW. Marcus found an electrical short in my ECU that the dealership wanted to charge me $3,000 to replace. Fixed it in two hours! Unmatched integrity.',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Melissa P.',
    vehicle: 'Toyota RAV4 Hybrid',
    rating: 5,
    review: 'The online booking process is incredible. I opted for the Pickup & Drop service. They collected my SUV from my office at 9 AM, completed the 30k standard service, washed it inside and out, and returned it before my 5 PM meeting. Superb customer care!',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'James L.',
    vehicle: 'Porsche Cayman S',
    rating: 5,
    review: 'Had my wheels aligned and brake rotors resurfaced here. The laser alignment rig they use is state-of-the-art. No more micro-vibrations at 80 MPH. The team is friendly and highly professional.',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  }
];

export const FAQS = [
  {
    question: 'How long does a standard servicing take?',
    answer: 'A routine basic servicing takes between 30 to 45 minutes, while standard and premium servicing takes approximately 1.5 to 3 hours. We always provide an estimated completion time upon intake.'
  },
  {
    question: 'Do you provide doorway vehicle pickup and drop services?',
    answer: 'Yes! We offer a professional, fully insured valet pickup and drop service. You can request pickup, drop-off, or both during the online booking process.'
  },
  {
    question: 'Is there a warranty available on mechanical repairs?',
    answer: 'Absolutely. All our mechanical repairs, parts replacement, and servicing carry a comprehensive 12-month or 12,000-mile nationwide warranty, covering both parts and labor.'
  },
  {
    question: 'Which specific brands of cars are you certified to service?',
    answer: 'Our mechanics are ASE-certified and factory-trained to service all major global brands, including Toyota, Honda, Hyundai, Kia, BMW, Mercedes-Benz, Audi, Volkswagen, Skoda, Nissan, and Ford.'
  },
  {
    question: 'Can I book an appointment and select specific mechanics online?',
    answer: 'Yes! Our custom Book Service tool lets you choose your desired service, date, time slot, input vehicle specs, select pick-up/drop preferences, and secure an instant confirmation.'
  }
];

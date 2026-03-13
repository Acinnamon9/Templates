import os

with open(r"S:\Templates\Aura_James\1_Wealth_Heritage\index.html", "r", encoding="utf-8") as f:
    template = f.read()

# --- LUXURY ESTATE ---
est = template.replace("--black: #101E2C;", "--black: #111111; /* Brutalist Black */")
est = est.replace("--hotshot: #D4AF37;", "--hotshot: #555555; /* Concrete Gray */")
est = est.replace("--hotshot-10: #FDF9EA;", "--hotshot-10: #F0F0F0; /* Light Gray */")
est = est.replace("--mdy-light: #F4E8D7;", "--mdy-light: #E0E0E0; /* Foundation Gray */")

est = est.replace("Aura Heritage | Governance for the Modern Estate", "Aura Heritage | Generational Real Estate")
est = est.replace("Fiduciary Stewardship for high-velocity capital. We build the architecture of attendance for your generational legacy.", "Architectural permanence for legacy land. We build the stewardship models for your physical properties.")
est = est.replace("PRIVATE COUNCIL ADVISORY: OPEN ACCESS FOR NEXT 14 CLIENTS ONLY.", "ESTATE ADVISORY: ACQUISITION ACCESS OPEN FOR NEXT 7 CLIENTS ONLY.")
est = est.replace("The Council", "The Portfolio")
est = est.replace("Programs", "Developments")
est = est.replace("Briefing", "Strategy")
est = est.replace("Portal", "Investor Portal")
est = est.replace("Institutional Elite Stewardship", "Generational Land Acquisition")
est = est.replace("Governance for the Modern Estate.", "Architectural Permanence.")
est = est.replace("Wealth is not a number; it is a fiduiciary legacy. We provide the structural stewardship required to maintain zero-party capital velocity across generations.", "Land is not a commodity; it is a physical legacy. We provide the real estate stewardship required to maintain zero-party property velocity across generations.")
est = est.replace("Access the Council", "Access the Portfolio")
est = est.replace("The Thesis", "The Blueprint")

est = est.replace("https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bed548179ed021687d.png", "https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bed548179ed021687d.png") 
est = est.replace("https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befb38cabb229231e2.png", "https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b43b27eba4875b6d267ef7.png") 
est = est.replace("https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png", "https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439beeba48751402641db.png") 
est = est.replace("https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c582337626116.png", "https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befc5128f11e732220.png") 

est = est.replace("You deserve the structural integrity of a sovereign nation.", "You deserve the architectural permanence of a sovereign state.")
est = est.replace("Most wealth managers act as navigators; we act as architects. A portfolio without a governance structure is merely a collection of bets. We build the architecture of attendance for your capital.", "Most developers act as flippers; we act as stewards. A property portfolio without a governance structure is merely a collection of addresses. We build the physical architecture for your legacy.")
est = est.replace("Architects of the Sovereign Estate.", "Architects of Generational Land.")
est = est.replace("As former institutional governance specialists, we realized the elite private structures once reserved for the 0.1% were becoming increasingly fragile in the modern digital age.", "As former institutional property specialists, we realized the elite real estate acquisitions once reserved for the 0.1% were becoming increasingly fragile in the shifting global market.")
est = est.replace("We founded Aura Heritage to bridge the gap between legacy capital and the rapid decoupling of global markets.", "We founded Aura Heritage to bridge the gap between legacy land and the rapid decentralization of global real estate.")
est = est.replace("Meet the Council", "Meet the Developers")
est = est.replace("What is your Heritage Velocity Score?", "What is your Property Velocity Score?")
est = est.replace("Discover whether your capital is currently structured for stewardship or merely parked in exposure. Take our 2-minute Heritage Audit.", "Discover whether your land is currently structured for generational stewardship or merely parking capital in exposure. Take our 2-minute Property Audit.")
est = est.replace("3 Steps to Finding Capital Freedom", "3 Steps to Finding Geographic Freedom")
est = est.replace("Ready to give your financial world a glow-up? Here is the practical sequence for Aura alignment.", "Ready to give your physical footprint a structural upgrade? Here is the practical sequence for Aura alignment.")
est = est.replace("Decide to take control.", "Map the territory.")
est = est.replace("Kick off your financial transformation with our proprietary \"Master Your Capital\" briefing. Learn to dodge pesky market traps and think like the sovereign entity you are.", "Kick off your property transformation with our proprietary \"Master Your Land\" briefing. Learn to dodge pesky market traps and build like the sovereign entity you are.")
est = est.replace("Learn financial skills.", "Acquire the asset.")
est = est.replace("Enroll in the Aura Heritage stewardship program. Each tier delivers a clear, step-by-step blueprint for your generational success. No more guesswork, no more uncertainty.", "Enroll in the Aura Property stewardship program. Each tier delivers a clear, step-by-step blueprint for your estate success. No more guesswork, no more bad zoning.")
est = est.replace("Step into your power.", "Command the landscape.")
est = est.replace("Shake off debt, nestle into a cushion of multi-currency assets, and command investments to work for you. It's time for your capital to become your ally in creating your dream legacy.", "Shake off bad debt, nestle into a cushion of multi-jurisdictional properties, and command physical assets to work for you. It's time for land to become your ally.")
est = est.replace("Join our private briefing to take control of your estate today.", "Join our private briefing to take control of your properties today.")
est = est.replace("The Council Ecosystem", "The Estate Ecosystem")
est = est.replace("Zero-Party Capital", "Zero-Party Real Estate")
est = est.replace("PRIVATE EQUITY BRIEFING • CHF/USD • REAL ESTATE VELOCITY • PRECIOUS METALS • ZERO-PARTY • FAMILY OFFICE STRUCTURE •", "ESTATE BRIEFING • ARCHITECTURAL SCALE • REAL ESTATE VELOCITY • PHYSICAL ASSETS • ZERO-PARTY • FAMILY COMPOUND STRUCTURE •")

with open(r"S:\Templates\Aura_James\3_Luxury_Estate\index.html", "w", encoding="utf-8") as f:
    f.write(est)

# --- MINDSET MASTERY ---
mind = template.replace("--black: #101E2C;", "--black: #050505; /* Pure Black */")
mind = mind.replace("--hotshot: #D4AF37;", "--hotshot: #E63946; /* Aggressive Red */")
mind = mind.replace("--hotshot-10: #FDF9EA;", "--hotshot-10: #FDEBEB; /* Red Tint */")
mind = mind.replace("--pearl: #F5F4F3;", "--pearl: #141414;") # Dark Pearl for contrast
mind = mind.replace("--mdy-light: #F4E8D7;", "--mdy-light: #331A1C; /* Dark Red */")

mind = mind.replace("Aura Heritage | Governance for the Modern Estate", "Aura Heritage | Sovereign Executive Mindset")
mind = mind.replace("PRIVATE COUNCIL ADVISORY: OPEN ACCESS FOR NEXT 14 CLIENTS ONLY.", "EXECUTIVE ADVISORY: MENTORSHIP ACCESS OPEN FOR NEXT 5 FOUNDERS ONLY.")
mind = mind.replace("The Council", "The Network")
mind = mind.replace("Programs", "Intensives")
mind = mind.replace("Briefing", "Masterclass")
mind = mind.replace("Portal", "Executive Login")
mind = mind.replace("Institutional Elite Stewardship", "Psychological Leverage & Mastery")
mind = mind.replace("Governance for the Modern Estate.", "Decision Architecture.")
mind = mind.replace("Wealth is not a number; it is a fiduiciary legacy. We provide the structural stewardship required to maintain zero-party capital velocity across generations.", "Success is not an accident; it is an engineered reality. We provide the cognitive stewardship required to maintain peak executive execution across industries.")
mind = mind.replace("Access the Council", "Access the Network")
mind = mind.replace("The Thesis", "The Mindset")

mind = mind.replace("bg-pearl { background-color: var(--pearl); }", "bg-pearl { background-color: var(--pearl); color: var(--white); }")
mind = mind.replace('<h2 class="manifesto-h2">', '<h2 class="manifesto-h2" style="color: white;">')
mind = mind.replace('<h2 style="font-size: 48px; margin-bottom: 60px;">', '<h2 style="font-size: 48px; margin-bottom: 60px; color: white;">')
mind = mind.replace("background: white; padding: 40px;", "background: #000; padding: 40px; border: 1px solid #333;")

mind = mind.replace("You deserve the structural integrity of a sovereign nation.", "You deserve the psychological resilience of a sovereign founder.")
mind = mind.replace("Most wealth managers act as navigators; we act as architects. A portfolio without a governance structure is merely a collection of bets. We build the architecture of attendance for your capital.", "Most coaches act as cheerleaders; we act as architects. A mind without a decision structure is merely a collection of reactions. We build the psychological architecture for your success.")

mind = mind.replace("Architects of the Sovereign Estate.", "Architects of Peak Execution.")
mind = mind.replace("As former institutional governance specialists, we realized the elite private structures once reserved for the 0.1% were becoming increasingly fragile in the modern digital age.", "As former executive operators, we realized the elite psychological frameworks once reserved for the 0.1% were completely obscured in the modern self-help space.")
mind = mind.replace("We founded Aura Heritage to bridge the gap between legacy capital and the rapid decoupling of global markets.", "We founded Aura Heritage to bridge the gap between reactive hustle and the proactive scaling of sovereign power.")
mind = mind.replace("Meet the Council", "Meet the Mentors")

mind = mind.replace("What is your Heritage Velocity Score?", "What is your Execution Velocity Score?")
mind = mind.replace("Discover whether your capital is currently structured for stewardship or merely parked in exposure. Take our 2-minute Heritage Audit.", "Discover whether your mind is currently structured for mastery or merely reacting to exposure. Take our 2-minute Psychological Audit.")

mind = mind.replace("3 Steps to Finding Capital Freedom", "3 Steps to Finding Cognitive Freedom")
mind = mind.replace("Ready to give your financial world a glow-up? Here is the practical sequence for Aura alignment.", "Ready to give your executive mindset a full rebuild? Here is the practical sequence for Aura alignment.")
mind = mind.replace("Decide to take control.", "Master the internal.")
mind = mind.replace("Learn financial skills.", "Engineered decisions.")
mind = mind.replace("Step into your power.", "Command the room.")

mind = mind.replace("Join our private briefing to take control of your estate today.", "Join our executive masterclass to take control of your reality today.")
mind = mind.replace("The Council Ecosystem", "The Executive Ecosystem")

with open(r"S:\Templates\Aura_James\4_Mindset_Mastery\index.html", "w", encoding="utf-8") as f:
    f.write(mind)


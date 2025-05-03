[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/m3rrFl41)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19329410&assignment_repo_type=AssignmentRepo)
## MDDN 242 2025 Assignment 2

# ☕ Lavazza-Inspired Parametric Type System

> *“Good design starts with observation — a shot of espresso can spark an idea.”*  
> — *Bruno Hart*, Interaction Designer & Coffee Enthusiast

In early April 2025, creativity felt as sluggish as cold coffee. I stared at the blank page as if it were fogged glass, each idea evaporating in a haze. This README is my cinematic design diary – a blend of personal essay and technical journey, tracing how hand-drawn espresso imagery and code fused into a living, liquid typeface. Over the next few weeks, each date became a milestone, from burnout to breakthrough, each entry brewed in equal parts film, coffee, and code.


<div align="center">
  ![Lavazza](./letterforms-brunohart/assets/lavazzaPackaging.jpeg)  
</div>

### April 7, 2025 – Morning Blue Haze

#### April 13, 2025 – Ink and Affirmations

### By April 13 I reached for analog: a Lamy fountain pen and a fresh notebook of daily affirmations

### April 17, 2025 – A Mubi Breakthrough

I brewed a Lavazza espresso and hit play on William Kentridge’s My Life as a Coffee Pot (streaming on Mubi). As the flipbook-animation unfolded on screen, I saw pencil marks come alive – dancing shapes, overlapping narratives, a doppelgänger arguing with itself about inspiration. In that moment, Kentridge’s world of imperfect, smoky sketches felt kin to my own. The chaos on the screen echoed the swirl of cream in my cup. Suddenly, ideas percolated: what if type could move and breathe like Kentridge’s charcoal lines, and taste as rich as this espresso?

The Lavazza capsule box I held in my hand became an unexpected muse. Its bold blue color and Italian lettering flashed on my mind’s screen. I realized Lavazza’s visual identity – from its capsule design to packaging and typography – blended heritage and modernity.

In partiuclar I loved the thick and creamy font of the egustora. The way it kind of feels like a fun, playful coffee 

### April 22, 2025 – From Espresso Machine to Code

By April 22 my sketchbook pages were cluttered with napkin drawings of coffee machines and type. I imagined an espresso machine with letter keys, each part translating into a parameter. Analog scribbles evolved into digitized curves. I sketched three master shapes – one for a thick espresso-brown pour line, one for a soft oat-milk cream swirl, and one for a rich americano-black stroke

### April 26-3 May - Focus on Interpolation and final details
I really wanted to make sure everything was balanced and that this felt like something that I could use in my portfoilo to be proud of. As a result I kept delaying hand off even amidst a crazy scheduele becuase I wanted my design ideas to be realised in my own way. This came down to getting the details of the interpolation just right to try and create an effect of a drop of coffee creating a mixing effect in a nespresso ad (thank you George Clooney)
---

## 🎬 The Spark: From Creative Funk to Caffeine Epiphany

In mid-April, Sisyphus himself would’ve paused to sip espresso. Between juggling uni classes, acting gigs, and that ever-draining creative block, I found myself scribbling mantras on page after page with my trusty Lamy fountain pen. Every dawn and dusk, hand-drawn letterforms greeted me first — my attempt to *become* the project, rather than merely execute it.

** I dont have a file on hand of this and I am out on set rn but I will upload tomz morning 
<div align="center">
  <!-- Replace with your photo of hand-drawn type -->
  ![Morning pages of hand-drawn type](./assets/handwritten.jpg)  
</div>

> *“Type is the first thing I see… and the last thing I saw before nodding off over this time.”*

<div align="center">
  ![sketchesNespresso](.assets/sketchesOfNespresso.png)  
</div>

<div align="center">
  ![sketchesNoTwo](.assets/sketchesNoTwo.png)  
</div>

---

## 🍿 Cinematic Fuel: William Kentridge Meets Lavazza

One twilight, while watching William Kentridge’s *My Life as a Coffee Pot* on Mubi, I realized caffeine itself could *be* the design. The thrum of the espresso machine, the geometry of Lavazza capsules, the playful “Egusta” script on their packaging — all whispered a parametric alphabet waiting to be born.

<div align="center">
  <!-- Replace with your Mubi poster screenshot -->
  ![My Life as a Coffee Pot poster](.assets/myLifeAsACoffeePotPoster.jpg)  
  *Kentridge’s blend of film and coffee art ignited my own process.*
</div>

---

## 🛠 Technical Trials & Triumphs

- **Original Attempt**  
  A straightforward `drawLetter()` mapped cup-like parameters to letter strokes, but lacked that *brewtiful* motion.

- **Layered Curves**  
  Borrowing from a fellow student’s “stacked sine-waves” approach introduced dynamic color lerping, but duplicated lines felt heavy and static.

- **Single-Line “Chucky Curves”**  
  → **Breakthrough:** Three independent curves, each with programmable **thickness**, flowing like cream cutting through espresso.  

- **Interpolation Evolution**  
  - **Phase 1 (0→20%)**: old → “mid” (default) with gentle lerp  
  - **Phase 2 (20→80%)**: mid → **crema blob** rippling across all pours  
  - **Phase 3 (80→100%)**: mid → new letter form  
  - **Pulse**: a subtle 5% scale bump, like a latte-art heartbeat  
  - **Drops**: three staggered espresso/oat-milk/crema droplets that *leap* into the letterform  

> *“I stole the LERP idea — and made it foam becuase I thought it was the most genius way to solve my conceptual design problem.”*

---

## ☕ Coffee-Themed Parameter Glossary

| Original         | Coffee Name          | Why?                                  |
| ---------------- | -------------------- | ------------------------------------- |
| `offsetx/y`      | `pourDistance1x/y`   | Distance pour travels                |
| `offsetx2/y2`    | `pourDistance2x/y2`  | Second segment of the pour            |
| `offsetx3/y3`    | `pourDistance3x/y3`  | Third segment — final flourish        |
| `waveL1/2/3`     | `cremaFlow1/2/3`     | How the crema waves across the cup    |
| `rotate1/2/3`    | `tiltAngle1/2/3`     | Tilt of the pitcher or portafilter    |
| `peaks1/2/3`     | `foamPeaks1/2/3`     | Number of foam peaks                  |
| `peak1H/2H/3H`   | `foamHeight1/2/3`    | Amplitude — height of the foam        |
| `strokeWeight1/2/3` | `milkBody1/2/3`  | Thickness — body of steamed milk      |
| `number`         | `brewDigit`          | Letter ID — like a brew order ticket  |

---

## 🔭 Conceptual Evolution

1. **Hand-Drawn Dreams**  
   I wanted my pen’s curves to live in code — tactile, imperfect, alive.

2. **Coffee Capsule Geometry**  
   Studied Lavazza’s packaging: **capsule** curvature, **logo** typographic rhythms, **machine** spout arcs.

3. **Parametric Poetry**  
   Three curves → three pours → one letter.  
   Color leaps between **Espresso** (deep brown), **Oat Milk** (soft cream), **Americano** (pure black).

4. **Cinematic Sensibility**  
   Every transition choreographed like a film cut — sometimes playful, sometimes contemplative, always smooth.

---
## Final results 

The lettering and the words seem to go hand in hand and create this beautiful, distinct and rich dance with each other as a series of organic geometric forms. Theres a playfulness but a seriousness to the way the words present that invites the viewer to twist and turn their eye and really indulge in the pleasures of form and the eccentricity of life. I just think the design came out beautifully. 

The letters sometimes spill over the bounding boxes into the other letters and there is an overall playful dynamic and sense of movement that was critical to convey the feeling behind the design. 

<div align="center">
  <!-- Replace with your Mubi poster screenshot -->
  ![Classico](.assets/Classico.png)  
</div>

<div align="center">
  <!-- Replace with your Mubi poster screenshot -->
  ![Italiano](.assets/Italiano.png)  
</div>

<div align="center">
  <!-- Replace with your Mubi poster screenshot -->
  ![Alphabet](.assets/Alphabet.png) 
</div>

## 🚀 How to Explore

1. **Clone this repo** and open in VS Code.  
2. **Run the p5.js editor** to tweak sliders — watch pours morph and droplets leap.  
3. **Inspect `alphabet.js`** for the parametric data driving each glyph.  
4. **Read the comments** in `drawLetter.js` & `interpolate_letter()` for a 'behind-the-scenes' narrative.-> often scriblings of a mad man

---

## 🎞️ Final Credits

This type system is more than code — it’s a **conversation** between hand and machine, like pouring the perfect shot of espresso. It’s where **cinema**, **coffee**, and **code** converge into a single, bubbling experience. Thank you for sharing this cup.

> *“Drink deep, design deeper.”*  
> — Senior Interaction Designer at Bruno Inc & lifelong coffee cinephile  

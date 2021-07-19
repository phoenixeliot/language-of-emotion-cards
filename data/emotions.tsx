const emotionsData = {
  anger: {
    title: "Anger",
    subtitle1: "Protection and Restoration",
    subtitle2: "Includes Rage, Fury, and the Healing of Trauma",
    gifts: [
      "Honor",
      "Conviction",
      "Proper boundaries",
      "Protection of yourself and others",
      "Healthy detachment",
    ],
    questions: ["What must be protected?", "What must be restored?"],
    signsOfObstruction: (
      <>
        <p>
          <u>Repressive:</u>
          <br />
          Enmeshment, self-abandonment, apathy,
          <br />
          depression, boundary loss
        </p>
        <p>
          <u>Expressive:</u>
          <br />
          Cycling rages that create harsh boundaries;
          hatred&nbsp;and&nbsp;prejudice; isolation
        </p>
      </>
    ),
    practice:
      "Channel the fiery intensity of anger into your boundary instead of repressing it or exploding with it — then speak your truth or make your correcting actions. This will reset your boundaries in healthy ways, which will protect you and your relationships.",
  },

  "apathy-and-boredom": {
    title: "Apathy & Boredom",
    subtitle1: "The Mask for Anger",
    subtitle2: null,
    gifts: [
      "Detachment",
      "Boundary-setting",
      "Separation",
      "Taking a time-out",
    ],
    questions: ["What is being avoided?", "What must be made conscious?"],
    signsOfObstruction: (
      <p>
        Monotonous indifference, impassivity, or&nbsp;distractibility that halts
        creative action
      </p>
    ),
    practice:
      "Honor your need to be separate and detached without taking yourself out of commission. Use the anger beneath apathy to reset your boundaries in healthy ways.",
  },

  "guilt-and-shame": {
    title: "Guilt & Shame",
    subtitle1: "Restoring Integrity",
    subtitle2: null,
    gifts: ["Atonement", "Integrity", "Self-respect", "Behavioral change"],
    questions: ["Who has been hurt?", "What must be made right?"],
    signsOfObstruction: (
      <p>
        Crippling, repetitive guilty feelings that do not instruct you or heal
        your relationships; or shamelessness where you are endangered by your
        own behavior
      </p>
    ),
    practice:
      "Channel this intense emotion to set a strong boundary and create a sacred space in which you can atone for your transgressions, amend your behaviors, throw off manufactured shame, and heal your heart and your relationships.",
  },

  hatred: {
    title: "Hatred",
    subtitle1: "The Profound Mirror",
    subtitle2: "Includes Resentment, Contempt, Disgust, and Shadow Work",
    gifts: [
      "Intense awareness",
      "Piercing vision",
      "Sudden evolution",
      "Shadow work",
    ],
    questions: [
      "What has fallen into my shadow?",
      "What must be reintegrated?",
    ],
    signsOfObstruction: (
      <p>
        Fierce, laser-focused attacks on the souls of others without concurrent
        self-awareness
      </p>
    ),
    practice: (
      <>
        Retrieve your shadow material from your hate partner by describing in
        detail the serious faults you perceive. Say hello to your lost self,
        pour your hatred into your boundary, incinerate your contracts with
        these despised behaviors, and restore your psyche to wholeness.
      </>
    ),
  },

  fear: {
    title: "Fear",
    subtitle1: "Intuition and Action",
    subtitle2: "Includes Anxiety, Worry, and the Healing of Trauma",
    gifts: [
      "Intuition",
      "Focus",
      "Clarity",
      "Attentiveness",
      "Readiness",
      "Vigor",
    ],
    questions: ["What action should be taken?"],
    signsOfObstruction: (
      <p>
        Constant worries or anxieties that
        <br />
        decrease your focus and clarity
      </p>
    ),
    practice: (
      <>
        Focus your attention on your fears. Prepare yourself, act and move
        consciously, and revitalize your psyche with the dynamic focus fear
        brings you.
      </>
    ),
  },

  confusion: {
    title: "Confusion",
    subtitle1: "The Mask for Fear",
    subtitle2: null,
    gifts: [
      "Diffused awareness",
      "Innocence",
      "Malleability",
      "Taking a time-out",
    ],
    questions: ["What is my intention?", "What action should be taken?"],
    signsOfObstruction: (
      <p>
        Being unable to decide, act, or believe in yourself or your decisions
      </p>
    ),
    practice: (
      <>
        Honor this time-out and stop looking outside yourself for answers. Ask
        your internal questions; they’ll restore your instincts and your
        decisiveness. Intention ends all ambiguity.
      </>
    ),
  },

  "jealousy-and-envy": {
    title: "Jealousy and Envy",
    subtitle1: "Relational Radar",
    subtitle2: "Includes Greed",
    gifts: ["Fairness", "Commitment", "Security", "Connection", "Loyalty"],
    questions: ["What has been betrayed?", "What must be healed and restored?"],
    signsOfObstruction: (
      <p>
        Cycling suspicions that don’t bring useful awareness to you or stability
        to your relationships; or fevered avarice that places your needs above
        all other things, including&nbsp;logic&nbsp;and&nbsp;honor
      </p>
    ),
    practice: (
      <>
        Discern whether you’re responding to disloyalty and unfairness in others
        or to your own lack of self-regard and worthiness. In either case,
        restore your boundaries first; then listen to your intuition and honor
        the anger and fear inside jealousy and envy.
      </>
    ),
  },

  "panic-and-terror": {
    title: "Panic and Terror",
    subtitle1: "Frozen Fire",
    subtitle2: "Includes Healing from Trauma",
    gifts: [
      "Sudden energy",
      "Fixed attention",
      "Absolute stillness",
      "Healing from trauma",
    ],
    questions: [
      "What has been frozen in time?",
      "What healing action must be taken?",
    ],
    signsOfObstruction: (
      <p>Cycling attacks of panic and terror that immobilize and torment you</p>
    ),
    practice: (
      <>
        Focus yourself on your internal questions. Remember: You’ve already
        survived. Panic and terror exist to help you renegotiate your trauma and
        move from survival into wholeness.
      </>
    ),
  },

  sadness: {
    title: "Sadness",
    subtitle1: "Release and Rejuvenation",
    subtitle2: "Includes Despair and Despondency",
    gifts: ["Release", "Fluidity", "Grounding", "Relaxation", "Revitalization"],
    questions: ["What must be released?", "What must be rejuvenated?"],
    signsOfObstruction: (
      <p>
        Unmoving despair that does not bring resolution&nbsp;or&nbsp;relaxation
      </p>
    ),
    practice: (
      <>
        Release that which no longer serves you; this will restore flow, tears,
        and healing water to your body and your soul. When you can truly let go,
        rejuvenation and relaxation will surely follow.
      </>
    ),
  },

  grief: {
    title: "Grief",
    subtitle1: "The Deep River of the Soul",
    subtitle2: null,
    gifts: ["Complete immersion in the river of all souls"],
    questions: ["What must be mourned?", "What must be released completely?"],
    signsOfObstruction: (
      <p>
        Unwillingness to accept or honor loss, death, or profound transitions
      </p>
    ),
    practice: (
      <>
        Stop, drop everything, and ask your internal questions. When the river
        of the soul takes your weight unto itself, you can release that which
        has died into the next world so that you may live more fully in this
        one.
      </>
    ),
  },

  depression: {
    title: "Depression",
    subtitle1: "Ingenious Stagnation",
    subtitle2: "Focusing on Situational Depression",
    gifts: ["The brilliant stop sign of the soul"],
    questions: ["Where has my energy gone?", "Why was it sent away?"],
    signsOfObstruction: (
      <p>
        Cycling despairs, angers, shames, anxieties, and manic elations that
        disturb or halt your forward progress
      </p>
    ),
    practice: (
      <>
        Listen closely. There is always good reason for energy and flow to
        vacate your psyche, whether it’s related to health, brain chemistry,
        injustice, relationships, career, or old traumas. You should not attempt
        to move forward until you understand the intelligence inherent in your
        depression.
      </>
    ),
  },

  "suicidal-urges": {
    title: "Suicidal Urges",
    subtitle1: "The Darkness Before Dawn",
    subtitle2: null,
    gifts: ["Certainty", "Resolve", "Liberty", "Transformation", "Rebirth"],
    questions: [
      "What idea or behavior must end now?",
      "What can no longer be tolerated in my soul?",
    ],
    signsOfObstruction: (
      <p>
        Bleak, agonizing feelings that threaten your physical life instead of
        offering transformation and reawakening
      </p>
    ),
    practice: (
      <>
        Use your skills to burn your contracts and create a sacred ceremonial
        death for that which torments you. If you honor and attend to your
        suicidal urges in a grounded, empathic way, they will stand up for your
        lost dreams and clear away everything inside you that threatens them.
        Channeling your suicidal urges will, in essence, give you a new life—it
        will give you your own life back. However, if you’re in crisis, please
        seek help immediately.
      </>
    ),
  },

  happiness: {
    title: "Happiness",
    subtitle1: "Amusement and Anticipation",
    subtitle2: null,
    gifts: [
      "Merriment",
      "Gaiety",
      "Hope",
      "Delight",
      "Wonder",
      "Playfulness",
      "Invigoration",
    ],
    statements: ["Thank you for this lively celebration!"],
    signsOfObstruction: (
      <p>
        Lack of belief in possibilities or the future; the unwillingness to
        play; or the inability to release happiness and feel your deeper
        emotions
      </p>
    ),
    practice: (
      <>
        Celebrate your happiness and let it go; it can only flow freely when you
        allow all of your emotions to flow.
      </>
    ),
  },

  contentment: {
    title: "Contentment",
    subtitle1: "Appreciation and Recognition",
    subtitle2: null,
    gifts: [
      "Enjoyment",
      "Satisfaction",
      "Self-esteem",
      "Renewal",
      "Fulfillment",
    ],
    statements: ["Thank you for renewing my faith in myself!"],
    signsOfObstruction: (
      <p>
        Inability to feel satisfied with yourself, or the unwillingness to
        challenge yourself and risk failure
      </p>
    ),
    practice: (
      <>
        Celebrate your excellent fortune and skills; then move on to your next
        challenge. Real contentment follows real accomplishments.
      </>
    ),
  },

  joy: {
    title: "Joy",
    subtitle1: "Affinity and Communion",
    subtitle2: "Includes Exhilaration and Honoring Happiness in Others",
    gifts: [
      "Expansion",
      "Communion",
      "Inspiration",
      "Splendor",
      "Radiance",
      "Bliss",
    ],
    statements: ["Thank you for this radiant moment!"],
    signsOfObstruction: (
      <p>
        Inability to feel connected to humanity or the world,
        or&nbsp;unwillingness to release joy and feel your other emotions
      </p>
    ),
    practice: (
      <>
        Celebrate your joyousness and let it flow naturally. Joy&nbsp;will seek
        you out if you let it move in its own time and in its own way—not in
        yours.
      </>
    ),
  },

  // "stress-and-resistance": {
  //   title: "Stress and Resistance",
  //   subtitle1: "Understanding Emotional Physics",
  //   subtitle2: null,
  //   gifts: [""],
  //   questions: [""],
  //   signsOfObstruction: <p></p>,
  //   practice: <></>,
  // },
};

export default emotionsData;

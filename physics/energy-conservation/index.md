# Conservation of energy: a roller coaster's bookkeeping

> Work, kinetic and potential energy, and the work-energy theorem, derived from F = ma and used to find a coaster's speed anywhere and the height a loop needs.

Series: Physics (https://www.monocurl.com/monocurl-essays/physics/)
Canonical: https://www.monocurl.com/monocurl-essays/physics/energy-conservation/
Keywords: conservation of energy, work-energy theorem, kinetic energy, gravitational potential energy, work done by a force, loop the loop minimum height, mechanical energy, friction and energy

[Figure 1, animation: A 500 kg roller coaster cart released from rest 20 m up, on a track without friction, in real time. The bar splits its energy into potential energy (blue) and kinetic energy (orange); the split changes all the time and the total never does.]

A roller coaster cart is released from rest at the top of a 20 m drop. How fast is it going at the bottom of the first valley, and does it have enough speed to get over the next hill?

Newton's second law can answer this in principle. In practice the slope of the track is different at every point, so the cart's acceleration changes continuously, and the constant-acceleration equations never apply for more than an instant. Yet the answer is easy, and it does not depend on the shape of the track at all: only on how far the cart has descended. This lesson finds the quantity that makes that true.

## A clue: three ramps of the same height

Start with something we can solve. A block slides from rest down a frictionless ramp that is 5 m high and tilted at $30°$. From [the lesson on Newton's second law](@physics/newtons-second-law), its acceleration along the ramp is $a = g\sin\theta = 9.8 \times 0.5 = 4.9$ m/s², where $g = 9.8$ m/s². The ramp's length is $L = 5/\sin 30° = 10$ m. For constant acceleration from rest, $v^2 = 2aL$, so $v^2 = 2 \times 4.9 \times 10 = 98$ and $v = 9.9$ m/s at the bottom.

**Pause and try.** Repeat the calculation for a steeper ramp of the same height: 5 m high, tilted at $60°$. Before you compute, guess whether the block arrives faster, slower, or at the same speed. Then do the case of a straight 5 m drop.

**Answer.** At $60°$: $a = 9.8\sin 60° = 8.49$ m/s² and $L = 5/\sin 60° = 5.77$ m, so $v^2 = 2 \times 8.49 \times 5.77 = 98$, and $v = 9.9$ m/s again. Straight drop: $v^2 = 2 \times 9.8 \times 5 = 98$. The steeper the ramp, the larger the acceleration and the shorter the distance, and the two effects cancel exactly.

[Figure 2, animation: Three blocks released together from a height of 5 m, in real time: down a 30 degree ramp, down a 60 degree ramp, and in free fall. They arrive at different times and at the same speed, 9.9 m/s.]

In every case $v^2 = 2gh$, with $h$ the height descended. The route changed the time taken and left the final speed alone. Something is being traded, height for speed squared, at a fixed rate of exchange. To find out what, we need a way to measure what a force accomplishes over a distance.

## Work: force along the motion, times distance

Take the $30°$ ramp again and multiply both sides of $v^2 = 2aL$ by half the block's mass $m$:

$$
\tfrac12 m v^2 = (ma)\,L.
$$

On the right, $ma$ is the net force along the ramp, and $L$ is the distance moved along the ramp. The product of a force and the distance moved in the force's direction is called the **work** done by the force. The left side is what the block got for it.

Usually a force is not lined up with the motion. Pull a sled along level snow with a rope that slants upward, and only part of your pull moves the sled along; the rest just lifts a little of its weight off the snow. The second law tells us which part matters: the acceleration along the ground comes from the component of force along the ground.

[Figure 3, image: A sled dragged 4 m along level ground by a 50 N pull that slants upward. Only the 40 N component along the displacement does work; the 30 N component perpendicular to it does none.]

**Definition.** Let a constant force $\vec F$ act on an object while the object undergoes a displacement $\vec d$ (the arrow from where it started to where it ended, of length $d$). If $\phi$ is the angle between the force and the displacement, the **work** done by the force is

$$
W = F\,d\cos\phi,
$$

the component of the force along the displacement times the distance. Its unit is the joule: $1 \text{ J} = 1 \text{ N·m}$. In components, with $\vec F = (F_x, F_y)$ and $\vec d = (\Delta x, \Delta y)$,

$$
W = F_x\,\Delta x + F_y\,\Delta y.
$$

The second formula is the first in different clothes. Point the $x$ axis along the displacement, so that $\vec d = (d, 0)$ and $\vec F = (F\cos\phi, F\sin\phi)$; then $F_x\Delta x + F_y\Delta y = F d\cos\phi$. The combination $F_x\Delta x + F_y\Delta y$ is called the **dot product** of the two vectors, written $\vec F \cdot \vec d$, and its value does not depend on which perpendicular axes you choose (the lesson on the [dot product](@linear-algebra/dot-product) proves this). For the sled, $\vec F = (40, 30)$ N and $\vec d = (4, 0)$ m, so $W = 40 \times 4 + 30 \times 0 = 160$ J.

Work is a number with a sign, and three cases are worth separating. A force with a component along the motion ($\phi < 90°$) does positive work. A force perpendicular to the motion ($\phi = 90°$) does zero work, however large it is: the normal force from a frictionless track is always of this kind. A force with a component against the motion ($\phi > 90°$) does negative work, and kinetic friction is the standard example, with $\phi = 180°$ and $W = -f d$.

## The work-energy theorem

The ramp calculation suggested that the net work on an object shows up as a change in $\tfrac12 mv^2$. That is true in general.

**Definition.** The **kinetic energy** of an object of mass $m$ moving at speed $v$ is $K = \tfrac12 m v^2$, in joules. (Units: kg·m²/s² = (kg·m/s²)·m = N·m.)

**Theorem.** (Work-energy theorem.) In an inertial frame, let a point object of mass $m$ move under a constant net force $\vec F_{\text{net}}$ through a displacement $\vec d$, its speed changing from $v_i$ to $v_f$. Then the work done by the net force equals the change in kinetic energy:

$$
W_{\text{net}} = \vec F_{\text{net}} \cdot \vec d = \tfrac12 m v_f^2 - \tfrac12 m v_i^2.
$$

Moreover $W_{\text{net}}$ is the sum of the works done by the individual forces.

**Proof.** By the second law the acceleration has constant components $a_x = F_x/m$ and $a_y = F_y/m$, where $(F_x, F_y)$ are the components of the net force. For motion with constant acceleration along an axis, the [constant-acceleration equations](@physics/motion-graphs) give $v_f^2 = v_i^2 + 2a\,\Delta x$. Apply this to each axis:

$$
v_{fx}^2 = v_{ix}^2 + 2a_x\,\Delta x, \qquad v_{fy}^2 = v_{iy}^2 + 2a_y\,\Delta y.
$$

Add the two. Since speed squared is $v_x^2 + v_y^2$ (Pythagoras), the sum reads $v_f^2 = v_i^2 + 2(a_x\Delta x + a_y\Delta y)$. Multiply by $\tfrac12 m$ and use $ma_x = F_x$, $ma_y = F_y$:

$$
\tfrac12 m v_f^2 - \tfrac12 m v_i^2 = F_x\Delta x + F_y\Delta y = \vec F_{\text{net}}\cdot\vec d.
$$

Finally, the components of the net force are the sums of the components of the individual forces, so $F_x\Delta x + F_y\Delta y$ splits into one such expression per force: the net work is the sum of the individual works.

If the forces change along the way, cut the path into short pieces on which they are nearly constant, apply the theorem to each piece, and add. The kinetic energy changes telescope, leaving the final minus the initial, and the works add up to the total work. Making "nearly constant" exact is a limit argument that belongs to [integral calculus](@calculus/integrals); here it is a sketch, and for any path made of straight segments with constant forces on each, such as a track built from ramps, the result is fully proved.

Notice what the theorem does not contain: time. It connects speeds to positions directly.

## Gravity's work depends only on the change in height

Now look at the work done by gravity. The weight is the constant force $(0, -mg)$, taking $y$ upward. For any displacement $(\Delta x, \Delta y)$,

$$
W_{\text{grav}} = 0 \cdot \Delta x + (-mg)\,\Delta y = -mg\,\Delta y.
$$

The horizontal part of the displacement does not appear. Sliding down a ramp, falling straight, or following any chain of straight segments from height $y_i$ to height $y_f$, gravity does the same total work, $mg(y_i - y_f)$, because the $\Delta y$'s of the segments add up to $y_f - y_i$ regardless of how the path wanders.

[Figure 4, steps: A 2 kg block descends 5 m along a curved slide, and the slide is replaced by staircases with more and more steps. Gravity does work only on the vertical drops, and those drops always add up to the same 5 m.]

  - step: Replace the slide by four steps. On each flat run the weight is perpendicular to the motion and does no work.
  - step: Eight steps. Each drop is smaller, but there are more of them, and the work adds up to the same 98 J.
  - step: Thirty-two steps hug the slide closely. The total is still 2 kg times 9.8 m/s² times 5 m, or 98 J.
Because the work depends only on the two heights, we can keep accounts with a single function of position.

**Definition.** Near the Earth's surface, where the weight $mg$ is constant, the **gravitational potential energy** of an object of mass $m$ at height $y$ above a chosen reference level is $U = mgy$, in joules. The work done by gravity between two points is the decrease in $U$: $W_{\text{grav}} = U_i - U_f$.

The reference level is arbitrary. Raising it by 10 m lowers every $U$ by the same amount, and only differences of $U$ ever enter a calculation.

**Theorem.** (Conservation of mechanical energy.) Suppose that, throughout some motion of an object, gravity is the only force that does work on it (any other force, such as the normal force of a frictionless track, being perpendicular to the velocity at every instant). Then the **mechanical energy** $E = \tfrac12 mv^2 + mgy$ has the same value at every point of the motion.

**Proof.** Between any two points of the motion, the work-energy theorem gives $K_f - K_i = W_{\text{net}} = W_{\text{grav}} + 0 = U_i - U_f$. Rearranging, $K_f + U_f = K_i + U_i$.

**Key idea.** When only gravity does work, $\tfrac12 mv^2 + mgy$ stays constant. Kinetic energy can be bought only with height, and height only with kinetic energy.

This is the bookkeeping the roller coaster obeys. Divide $\tfrac12 mv_f^2 + mgy_f = \tfrac12 mv_i^2 + mgy_i$ by $m$ and solve:

$$
v_f = \sqrt{v_i^2 + 2g\,(y_i - y_f)}.
$$

The mass has cancelled, so a loaded cart and an empty one have the same speed at every point, and the shape of the track does not appear, which explains the three ramps.

**Pause and try.** The cart in the opening animation starts from rest at 20 m. The floor of the first valley is 2 m high and the top of the next hill is 16 m high. Find the cart's speed at each, and its kinetic and potential energy there, given that its mass is 500 kg.

**Answer.** Total energy: $E = mgy = 500 \times 9.8 \times 20 = 98\,000$ J $= 98$ kJ, all potential at the start. *Valley:* $U = 500 \times 9.8 \times 2 = 9.8$ kJ, so $K = 88.2$ kJ, and $v = \sqrt{2 \times 9.8 \times 18} = 18.8$ m/s. *Hilltop:* $U = 78.4$ kJ, $K = 19.6$ kJ, $v = \sqrt{2 \times 9.8 \times 4} = 8.9$ m/s. The cart clears the hill with speed to spare. It could not clear any hill higher than 20 m, where $K$ would have to be negative.

[Figure 5, image: The coaster's energies plotted against its position along the ground. The potential energy curve has the shape of the track; the kinetic energy is whatever is left of the constant 98 kJ total.]

## With friction, mechanical energy is not conserved

Real tracks resist. Suppose a resisting force of constant size $f$ acts on the cart, always directed against its motion. Over a path of length $s$ it does work $-fs$, and the work-energy theorem now reads $K_f - K_i = (U_i - U_f) - fs$, that is,

$$
E_f = E_i - f s.
$$

The mechanical energy drops by the force times the distance travelled. Two things are different from gravity. The work is always negative, whichever way the cart moves. And it depends on the length of the route taken, so no "friction potential energy" can be defined: a longer path between the same two points loses more.

[Figure 6, animation: The same cart on the same track with a 400 N resisting force. Mechanical energy drains into thermal energy (gold) at 400 J for every meter travelled, and the cart stops just short of the top of the hill.]

In the animation the cart has travelled about 51 m of track when it stops, so it has lost $400 \times 51 \approx 20$ kJ of its 98 kJ, and what remains, about 78 kJ, is the potential energy of a 500 kg cart 15.8 m up. The top of the hill is at 16 m. Without resistance it cleared that hill at 8.9 m/s.

The lost 20 kJ has not vanished. The rubbing surfaces and the air are warmer, and careful measurement (first done by James Joule in the 1840s) shows that the thermal energy gained equals the mechanical energy lost. The statement that the total of all forms of energy is constant is the law of conservation of energy, also called the first law of thermodynamics. We are citing it, and it cannot be derived from Newton's laws alone: it is an experimental law that reaches well beyond mechanics. What we have proved is the mechanical part: $E$ is constant when only gravity does work, and falls by $fs$ under a resisting force $f$.

## Worked examples

**Worked example.** **Several forces on the sled.** The 10 kg sled of the figure starts from rest and is pulled 4 m by the 50 N rope force, of which 40 N is horizontal. Friction with the snow is 25 N. How fast is it moving at the end?

We want a speed after a known distance, with no time mentioned, which is what the work-energy theorem is for. List the work of every force on the sled. Rope: $40 \times 4 = +160$ J. Friction: $-25 \times 4 = -100$ J. Weight and normal force: both perpendicular to the motion, 0 J. Net work: $+60$ J. So $\tfrac12 (10) v^2 - 0 = 60$, and $v = \sqrt{12} = 3.5$ m/s.

*Check* with the second law: the net horizontal force is $40 - 25 = 15$ N, so $a = 1.5$ m/s², and $v^2 = 2 \times 1.5 \times 4 = 12$.

**Worked example.** **A ramp with friction.** A 2 kg block slides from rest down a ramp 5 m high, tilted at $30°$, with coefficient of kinetic friction 0.2. Find its speed at the bottom.

The path is $L = 5/\sin 30° = 10$ m long. Friction has size $f = \mu_k N = \mu_k\,mg\cos 30° = 0.2 \times 2 \times 9.8 \times 0.866 = 3.39$ N, so it removes $fL = 33.9$ J. Take the bottom as the reference level. Initially $E_i = mgh = 2 \times 9.8 \times 5 = 98$ J, all potential. At the bottom $E_f = 98 - 33.9 = 64.1$ J, all kinetic. So $\tfrac12 (2) v^2 = 64.1$ and $v = 8.0$ m/s, compared with 9.9 m/s without friction.

*Check* with the second law: $a = g(\sin\theta - \mu_k\cos\theta) = 3.203$ m/s², and $v^2 = 2 \times 3.203 \times 10 = 64.1$ to three figures.

## The loop-the-loop

A frictionless track comes down a hill and then turns through a vertical circular loop of radius $R$. A cart is released from rest at height $h$ above the bottom of the loop, and it is not attached to the track: it can press on the track but the track cannot pull it. How large must $h$ be for the cart to get all the way round?

**Pause and try.** The top of the loop is at height $2R$. Is $h = 2R$ enough? Argue from energy, and then ask what the cart would be doing at the top.

**Answer.** Energy conservation allows it: released from $2R$, the cart can reach height $2R$, with zero kinetic energy left. But then it would be at the top of the loop, upside down, at rest, and a cart at rest under a track simply falls. Having enough energy to reach a height is a necessary condition and does not guarantee that the track can steer the cart there.

To see what else is needed, look at the forces at the top of the loop. We need one fact about circular motion, derived in the lesson on [circular motion and orbits](@physics/circular-motion-and-orbits): an object moving at speed $v$ on a circle of radius $R$ has an acceleration of magnitude $v^2/R$ directed toward the center.

[Figure 7, image: The cart at the top of the loop, upside down. Its weight and the push of the track both point down, toward the center, while its velocity is horizontal; together the two forces must supply the acceleration that circular motion requires.]

**Theorem.** (Loop-the-loop.) A point cart slides without friction on a track that leads into a vertical circular loop of radius $R$, on the inside of the loop, and is released from rest at height $h$ above the loop's lowest point. The cart completes the loop in contact with the track if and only if

$$
h \ge \tfrac{5}{2}R.
$$

**Proof.** *At the top.* The forces on the cart there are its weight $mg$, downward, and the normal force $N$ from the track, which is above the cart and so also pushes downward. Down is toward the center, so the second law gives $N + mg = mv_{\text{top}}^2/R$, where $v_{\text{top}}$ is the speed at the top. The track can only push, so contact requires $N \ge 0$, that is,

$$
\frac{mv_{\text{top}}^2}{R} \ge mg, \qquad\text{or}\qquad v_{\text{top}}^2 \ge gR.
$$

*Energy.* The normal force is perpendicular to the velocity and does no work, so mechanical energy is conserved between the release point (height $h$, speed 0) and the top of the loop (height $2R$): $mgh = mg(2R) + \tfrac12 mv_{\text{top}}^2$, so $v_{\text{top}}^2 = 2g(h - 2R)$.

Combining, the condition at the top is $2g(h - 2R) \ge gR$, which is $h \ge \tfrac52 R$.

*Elsewhere on the loop.* The top is the worst point: the cart is slowest there, and it is the only point where the whole weight points toward the center and so does the most to supply the required acceleration unaided. A problem below shows directly that $N \ge 0$ at the top implies $N \ge 0$ at every other point of the loop. If instead $h < \tfrac52 R$ the condition fails at the top, so the cart does not get there in contact with the track: released from $h \le R$ it never passes the loop's mid-height and slides back down, and released from between $R$ and $\tfrac52 R$ it leaves the track somewhere in the upper half.

The extra $\tfrac12 R$ of height above the top of the loop buys exactly the kinetic energy $\tfrac12 mv^2 = \tfrac12 mgR$ that the cart needs there. The mass cancels again, and $h/R$ is a pure number, as a ratio of two lengths must be.

[Figure 8, steps: A cart released above a loop of radius 4 m, in real time. From 8 m, the height of the top of the loop, it leaves the track partway up. From 10 m, which is 5R/2, it stays on all the way round.]

  - step: The natural guess: release the cart from 8 m, level with the top of the loop.
  - step: It is too slow on the way up. At a height of 6.7 m the track stops pushing on it, and the cart falls away.
  - step: Raise the release point to 10 m, which is 5R/2.
  - step: Now the cart reaches the top at 6.3 m/s, just fast enough for the track to hold it, and completes the loop.
## Limits and common mistakes

Energy conservation gives speeds from heights, and it is silent about time and direction. The three blocks at the start had equal final speeds and unequal travel times, and to get the times we needed the second law. The loop shows the same limitation from another side: energy said the cart could reach $2R$, and only the force analysis showed it would not.

The formula $U = mgy$ assumes a constant weight, so it holds near the Earth's surface and fails for a satellite. The loop result assumes a sliding point cart; a small solid ball that rolls without slipping also has energy of rotation and needs a higher start, $h = 2.7R$.

**Common mistake.** **"Work is force times distance."** Without the direction this is wrong as often as it is right. Carry a 20 kg suitcase 100 m along a level corridor at steady speed: you push up on it with 196 N, it moves 100 m, and the work you do on it is zero, because the force is perpendicular to the displacement. Its kinetic energy and height are both unchanged, which is what zero work means. Only the component of force along the motion counts.

**Common mistake.** **Using $\tfrac12 mv^2 + mgy = \text{constant}$ when friction acts.** The conservation theorem has a hypothesis: only gravity does work. With friction or air resistance present, mechanical energy decreases, and the equation must include the work done by those forces, $E_f = E_i - fs$. Before writing a conservation equation, list the forces and check which ones do work.

**Check yourself.** A ball is dropped from a window. A second, identical ball starts from rest at the same height and slides down a frictionless curved chute to the ground. Neglecting air resistance, how do their speeds at ground level compare?
Answer: They have the same speed Only gravity does work on either ball, and it does the same work $mgh$ on both, so both end with $\tfrac12 mv^2 = mgh$. Their velocities point in different directions, and the dropped ball lands first.

**Recap.** - Work by a constant force: $W = Fd\cos\phi = F_x\Delta x + F_y\Delta y$, in joules. Perpendicular forces do no work; opposing forces do negative work.
- Work-energy theorem: the net work on an object equals the change in its kinetic energy $\tfrac12 mv^2$. It follows from $F = ma$.
- Gravity's work is $-mg\Delta y$ whatever the path, so it can be tracked with the potential energy $U = mgy$.
- If only gravity does work, $\tfrac12 mv^2 + mgy$ is constant, and $v_f = \sqrt{v_i^2 + 2g(y_i - y_f)}$ for any mass and any path.
- A resisting force $f$ over a path of length $s$ lowers the mechanical energy by $fs$; the missing energy becomes thermal.
- A sliding cart completes a frictionless loop of radius $R$ only if released from $h \ge \tfrac52 R$, because it needs $v^2 \ge gR$ at the top.

The next lesson finds a second conserved quantity, [momentum](@physics/momentum-collisions), which stays constant in collisions even when mechanical energy does not.

## Problems

Use $g = 9.8$ m/s². State the reference level for potential energy in each solution.

**Problem 1.** A 20 kg crate at rest on a level floor is pushed 6 m by a horizontal 80 N force, against a friction force of 50 N. Find the work done by each force on the crate and its final speed.

**Solution.** Push: $80 \times 6 = +480$ J. Friction: $-50 \times 6 = -300$ J. Weight and normal force: perpendicular to the motion, 0 J each. Net work: $+180$ J. Work-energy theorem: $\tfrac12(20)v^2 = 180$, so $v^2 = 18$ and $v = 4.2$ m/s. Check: net force 30 N gives $a = 1.5$ m/s² and $v^2 = 2(1.5)(6) = 18$.

**Problem 2.** A ball is thrown from a balcony 3 m above the ground at 4 m/s. Find its speed just before it reaches the ground if it is thrown (a) straight down, (b) straight up, (c) horizontally. Neglect air resistance.

**Solution.** Reference level: the ground. Only gravity does work, so $\tfrac12 mv_f^2 = \tfrac12 mv_i^2 + mg(3)$ in all three cases, because the conservation equation contains the initial speed and not its direction. $v_f = \sqrt{4^2 + 2(9.8)(3)} = \sqrt{74.8} = 8.6$ m/s for (a), (b) and (c). The three throws differ in the time taken and in the direction of the final velocity.

**Problem 3.** The lesson's coaster cart is released from rest at 20 m on the frictionless track. How fast is it moving at a point where the track is 12 m high? Does the answer depend on whether it is on the way down into the valley or on the way up the next hill?

**Solution.** Reference level: the ground. $v = \sqrt{2g(y_i - y)} = \sqrt{2 \times 9.8 \times 8} = \sqrt{156.8} = 12.5$ m/s. The speed depends only on the height, so it is 12.5 m/s at every point of the track that is 12 m high, going down or going up. The direction of the velocity differs.

**Problem 4.** A pendulum bob hangs on a 1.5 m string. It is pulled aside until the string makes $40°$ with the vertical and released from rest. Find its speed at the lowest point, and explain why the string's tension can be ignored in the energy equation.

**Solution.** Reference level: the lowest point. At $40°$ the bob is below the pivot by $1.5\cos 40° = 1.149$ m, so it is $h = 1.5 - 1.149 = 0.351$ m above the lowest point. The tension points along the string, and the bob moves along a circle centered on the pivot, so the tension is perpendicular to the velocity at every instant and does no work. Only gravity does work: $\tfrac12 mv^2 = mgh$, and $v = \sqrt{2 \times 9.8 \times 0.351} = 2.6$ m/s.

**Problem 5.** A 70 kg skier starts from rest at the top of a hill 30 m high and reaches the bottom, after 120 m of slope, moving at 18 m/s. How much mechanical energy was lost, and what was the average resisting force?

**Solution.** Reference level: the bottom. $E_i = mgh = 70 \times 9.8 \times 30 = 20\,580$ J. $E_f = \tfrac12(70)(18)^2 = 11\,340$ J. Lost: $9240$ J. From $E_f = E_i - fs$: $f = 9240/120 = 77$ N on average. Without resistance the skier would have arrived at $\sqrt{2 \times 9.8 \times 30} = 24.2$ m/s.

**Problem 6.** A car moving at speed $v$ on a level road brakes with locked wheels; the coefficient of kinetic friction between tires and road is $\mu_k$. Use the work-energy theorem to find the stopping distance. Evaluate it for $v = 25$ m/s and $\mu_k = 0.7$, and say what happens to it when the speed doubles.

**Solution.** On a level road $N = mg$, so the friction force is $\mu_k mg$ and its work over a distance $d$ is $-\mu_k mg\,d$. The weight and normal force do no work. Work-energy: $0 - \tfrac12 mv^2 = -\mu_k mg\,d$, so $d = \dfrac{v^2}{2\mu_k g}$. For the numbers given, $d = 625/(2 \times 0.7 \times 9.8) = 45.6$ m. Doubling $v$ multiplies $d$ by four: the car has four times the kinetic energy, and friction removes it at the same number of joules per meter.

**Problem 7.** A cart is released from rest at height $h = 3R$ above the bottom of a frictionless loop of radius $R$. Find the normal force on it, as a multiple of its weight, at the top of the loop and at the bottom.

**Solution.** Reference level: the bottom of the loop. *Top:* $v^2 = 2g(3R - 2R) = 2gR$. Toward the center (down): $N + mg = mv^2/R = 2mg$, so $N = mg$. *Bottom:* $v^2 = 2g(3R) = 6gR$. Here the center is above the cart; toward the center (up): $N - mg = mv^2/R = 6mg$, so $N = 7mg$. A rider feels pressed into the seat with seven times their weight at the bottom, which is why real coaster loops are not circles.

**Problem 8.** For a frictionless loop of radius $R$, let the cart be at the point of the loop whose radius makes angle $\alpha$ with the upward vertical (so $\alpha = 0$ is the top). (a) Show that $N = \dfrac{mv^2}{R} - mg\cos\alpha$ there. (b) Show that if $N \ge 0$ at the top, then $N \ge 0$ at every point of the loop. (c) If the cart is released from $h = 2R$, at what height does it leave the track?

**Solution.** (a) The point is at height $R + R\cos\alpha$ above the bottom. The forces are the normal force $N$, toward the center, and the weight, whose component toward the center is $mg\cos\alpha$ (the whole weight at the top, none at the side where $\alpha = 90°$, and directed away from the center in the lower half, where $\cos\alpha < 0$). The second law toward the center: $N + mg\cos\alpha = mv^2/R$. (b) Energy conservation gives $v^2 = 2g(h - R - R\cos\alpha)$, so

$$
N = \frac{2mg(h - R - R\cos\alpha)}{R} - mg\cos\alpha = mg\left(\frac{2(h - R)}{R} - 3\cos\alpha\right).
$$

This is smallest where $\cos\alpha$ is largest, at $\alpha = 0$, the top. So if $N \ge 0$ at the top, it is at least as large everywhere else. (c) With $h = 2R$: $N = mg(2 - 3\cos\alpha)$, which reaches zero when $\cos\alpha = \tfrac23$. The height there is $R + \tfrac23 R = \tfrac53 R$. For the 4 m loop in the lesson's figure that is 6.7 m. From that point on the cart is a projectile.

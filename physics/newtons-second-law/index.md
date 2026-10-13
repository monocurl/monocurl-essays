# Newton's second law, F = ma: what force really does

> Forces change an object's velocity; none is needed to keep it moving. Newton's three laws, free-body diagrams, the incline and the Atwood machine in full.

Series: Physics (https://www.monocurl.com/monocurl-essays/physics/)
Canonical: https://www.monocurl.com/monocurl-essays/physics/newtons-second-law/
Keywords: Newton's second law, F = ma, net force, free-body diagram, Newton's laws of motion, block on an incline, Atwood machine, weight versus mass

[Figure 1, animation: Three pucks pushed off at 2 m/s across carpet, a wood floor and ice, in real time. The arrow on each puck is its velocity. The smoother the surface, the more slowly the velocity is lost.]

Give a puck a shove across a carpet and it stops within half a meter. Aristotle looked at motions like that one and drew the obvious conclusion: things move only while something pushes them, and stop when the pushing stops. For two thousand years this was physics.

Now give the same shove on a wood floor, and then on ice. The puck goes one meter, then nearly seven. Nothing about the puck or the shove changed; only the surface did. Galileo asked what the sequence is heading toward: on a surface with no friction at all, the puck would have no reason ever to stop. If that is right, Aristotle had it backward: the carpet is what stops the puck, and nothing at all is needed to keep it going.

## Without a net force, velocity does not change

In the animation each puck loses velocity at a steady rate, and that rate is set by the surface: 4.9 m/s every second on the carpet, 1.96 on the wood, 0.29 on the ice. (These follow from friction coefficients of 0.5, 0.2 and 0.03; we will see how below.) As the friction force shrinks toward zero, so does the rate at which velocity is lost. The limiting case is Newton's first law.

It needs one piece of vocabulary. A **force** is a push or a pull on one object by another: it has a size, measured in newtons (N), and a direction, so it is a vector. When several forces act on one object, their vector sum is the **net force**.

**Key idea.** **Newton's first law.** There are frames of reference, called **inertial frames**, in which an object with zero net force on it moves with constant velocity: at rest if it was at rest, and in a straight line at steady speed otherwise.

The clause about frames is needed. Watch a ball on the floor of a bus as the bus brakes: the ball rolls forward with no force pushing it. The law has not failed. A braking bus is not an inertial frame, and the law makes no claim there. For most purposes the ground is inertial to good accuracy, and every problem below is described from the ground.

Notice what the law says about the puck on carpet. Its velocity changes, so the net force on it cannot be zero, and the friction force is the only horizontal force around. Force is linked to the *change* of velocity. The next step is to find out exactly how.

## The same push on different masses

Here is an experiment that can be done on an air-hockey table, where friction is negligible. Pull a puck with a spring held at a fixed stretch, so that the pull is constant, and record the motion. Then change the puck, or pull with two identical springs side by side for double the force.

[Figure 2, animation: Three pucks on a frictionless table, each pulled by the same constant 2 N force, in real time. A dot is left behind every half second. The pucks' masses are 0.5 kg, 1 kg and 2 kg.]

The dots spread out, so each puck is speeding up, and a measurement of the spacing shows that each one has a constant acceleration (the slope of its velocity graph; see [the previous lesson](@physics/motion-graphs)). Here are the values such an experiment gives.

| Force (N) | Mass of puck (kg) | Acceleration (m/s²) |
|---|---|---|
| 2 | 0.5 | 4 |
| 2 | 1 | 2 |
| 2 | 2 | 1 |
| 1 | 1 | 1 |
| 4 | 1 | 4 |

**Pause and try.** Find the pattern in the table. Then predict the acceleration of a 4 kg puck pulled with 2 N, and of a 1.5 kg puck pulled with 6 N.

**Answer.** For a fixed puck, doubling the force doubles the acceleration (rows 4, 2 and 5). For a fixed force, doubling the mass halves the acceleration (rows 1 to 3). Both are covered by $a = F/m$: every row has acceleration equal to force divided by mass. The predictions are $2/4 = 0.5$ m/s² and $6/1.5 = 4$ m/s².

[Figure 3, image: Acceleration against force for the three pucks. Each puck's points lie on a straight line through the origin, and the slope of the line is 1 divided by the puck's mass.]

## Newton's second law

**Key idea.** **Newton's second law.** In an inertial frame, an object of constant mass $m$ acted on by forces with vector sum $\vec F_{\text{net}}$ has acceleration $\vec a$ given by

$$
\vec F_{\text{net}} = m\,\vec a.
$$

Mass is in kilograms (kg), acceleration in m/s², and force in newtons, where $1 \text{ N} = 1 \text{ kg·m/s}^2$.

Each clause connects to something we have seen. "Net" is there because the puck on carpet responds to the total of the forces on it. The acceleration points along the net force, which is why friction, pointing backward, slows the puck. And $m$ measures how hard the object is to accelerate: the 2 kg puck needs twice the force of the 1 kg puck for the same acceleration. This resistance to acceleration is called **inertia**, and mass is its measure.

You might object that the law is circular: we measure force by the acceleration it causes and then announce that force causes acceleration. Part of the law is indeed a definition, since it fixes the size of the newton. But the table contains facts that no definition could force on nature: two identical springs give exactly twice the acceleration of one, and two identical pucks stuck together accelerate exactly half as much as one. Forces add, masses add, and one equation relates them. That is the experimental content, and it has been confirmed to high precision for everyday objects.

The law also answers the opening question precisely. What a force produces is acceleration, the rate of change of velocity. With zero net force the acceleration is zero and the velocity stays whatever it was, which is the first law again.

## Several forces add as vectors

The second law is a vector equation. Suppose a 2 kg puck on the frictionless table is pushed with 3 N toward the east and, at the same time, 4 N toward the north. It does not accelerate at $7/2$ m/s².

[Figure 4, steps: A 2 kg puck seen from above, pushed by 3 N to the east and 4 N to the north. The two forces add tip to tail, and the puck accelerates along their sum.]

  - step: Two pushes act on a 2 kg puck seen from above: 3 N east and 4 N north.
  - step: Slide the second arrow to the tip of the first. Forces add tip to tail, as displacements do.
  - step: The arrow from start to finish is the net force: 5 N, pointing 53 degrees north of east.
  - step: The puck accelerates along the net force at 5 N / 2 kg = 2.5 m/s². Here is its first second.
Forces combine the way displacements do, tip to tail (the lesson on [vectors](@linear-algebra/vectors) explains this addition in detail). Here the two pushes are perpendicular, so the Pythagorean theorem gives the size of the sum, $\sqrt{3^2 + 4^2} = 5$ N, and the acceleration is $5/2 = 2.5$ m/s² along that diagonal.

In practice we rarely draw the triangle. We choose perpendicular $x$ and $y$ axes, describe each force by its components along them, and use the second law once per axis:

$$
\sum F_x = m a_x, \qquad \sum F_y = m a_y.
$$

For the puck, $a_x = 3/2 = 1.5$ m/s² and $a_y = 4/2 = 2$ m/s², and $\sqrt{1.5^2 + 2^2} = 2.5$ m/s² as before.

## Weight is a force; mass is not

Near the Earth's surface, every object dropped in a vacuum falls with the same acceleration, $g \approx 9.8$ m/s² downward. Read through the second law, that fact tells us the force of gravity on an object of mass $m$: it must have magnitude $mg$.

**Definition.** The **weight** of an object is the gravitational force on it. Near the Earth's surface it has magnitude $W = mg$, with $g \approx 9.8$ m/s² (equivalently 9.8 N/kg), and points straight down.

A 2 kg block has a weight of $2 \times 9.8 = 19.6$ N. Its mass is a property of the block and is 2 kg anywhere. Its weight depends on where it is: on the Moon, where $g$ is 1.62 m/s², the same block weighs 3.2 N and is exactly as hard to shove sideways as on Earth.

## Forces come in pairs

A book lying on a table has weight, yet it does not accelerate, so some other force must balance its weight. The table pushes up on it. A force that a surface exerts at right angles to itself is called a **normal force** ("normal" meaning perpendicular).

Where there is a force there are always two objects, and the third law says the interaction is symmetric.

**Key idea.** **Newton's third law.** If object A exerts a force on object B, then B exerts a force on A of equal magnitude and opposite direction. The two forces are of the same kind and act on *different* objects.

The book pushes down on the table as hard as the table pushes up on the book. The Earth pulls the book down with 19.6 N, say, and the book pulls the Earth up with 19.6 N. The Earth's acceleration in response is that force divided by $6 \times 10^{24}$ kg, which is why nobody notices it.

**Common mistake.** **"Action and reaction cancel, so nothing can move."** They are equal and opposite, but they act on different objects, and the second law is applied to one object at a time. Only forces on the *same* object are added. In particular, the book's weight and the normal force on it are not a third-law pair: both act on the book. They happen to be equal here because the book's acceleration is zero, and in an accelerating elevator they are not equal.

## Free-body diagrams: the method

Almost every mechanics problem is solved by the same procedure, and it is worth following it rigidly until it is automatic.

- Choose one object.
- Draw it alone, and draw an arrow for every force exerted *on* it by something else: its weight, plus one force for each thing touching it (surfaces, strings, hands). This drawing is a **free-body diagram**.
- Choose axes, with one of them along the direction of the acceleration if you know it.
- Split each force into components along the axes.
- Write $\sum F = ma$ for each axis and solve.
- Check units, and check a special case where you know the answer.

The standard first test of the method is a block sliding down a ramp. Take a 2 kg block on a frictionless ramp tilted at $30°$.

**Pause and try.** Before working it out, predict: is the block's acceleration down the ramp equal to $g$, half of $g$, or something else? And will a heavier block slide down faster?

**Answer.** The figure and derivation below give exactly half of $g$ for a $30°$ ramp, 4.9 m/s², because only half of the weight points along the ramp. The mass cancels, so a heavier block has the same acceleration.

[Figure 5, steps: The free-body diagram of a 2 kg block on a frictionless ramp tilted at 30 degrees, built one step at a time. The weight is split into a part along the ramp and a part pressing into it.]

  - step: Isolate the block. Everything else matters only through the forces it exerts on the block.
  - step: Gravity pulls straight down with the block's weight: 2 kg times 9.8 m/s², or 19.6 N.
  - step: The ramp pushes on the block at right angles to its surface. This is the normal force N.
  - step: Tilt the axes: x points down the ramp and y points out of it. The block can only move along x.
  - step: Split the weight along the axes: 9.8 N down the ramp and 17.0 N into the ramp.
  - step: Out of the ramp the forces cancel, so N = 17.0 N. Down the ramp, 9.8 N is left unbalanced: the net force.
The one piece of geometry in that figure is the angle between the weight and the $y$ axis. Tilting a ramp by $\theta$ from the horizontal tilts its perpendicular by the same $\theta$ from the vertical, so the weight makes angle $\theta$ with the perpendicular. Its component along the perpendicular is therefore $mg\cos\theta$, and its component along the ramp is $mg\sin\theta$.

A real ramp also has friction. For a block that is sliding, the friction force is found by experiment to be roughly proportional to the normal force, $f = \mu_k N$, directed against the sliding, where the number $\mu_k$ (the **coefficient of kinetic friction**) depends on the two surfaces. This is an empirical rule that holds well for dry solids, and it is a model, with nothing like the standing of Newton's laws.

**Theorem.** (Block on an incline.) A block of mass $m$ slides down a fixed ramp that makes an angle $\theta$ with the horizontal, where $0° < \theta < 90°$. Assume the frame is inertial and the only forces on the block are its weight, the normal force, and kinetic friction $f = \mu_k N$ (take $\mu_k = 0$ for a frictionless ramp). Then the normal force and the block's acceleration down the ramp are

$$
N = mg\cos\theta, \qquad a = g\,(\sin\theta - \mu_k\cos\theta).
$$

**Proof.** Take $x$ down the ramp and $y$ perpendicularly out of it. The forces on the block have components: weight, $(mg\sin\theta,\ -mg\cos\theta)$; normal force, $(0,\ N)$; friction, $(-\mu_k N,\ 0)$, since the block slides in the $+x$ direction and friction opposes that.

The block stays on the surface, so its $y$ coordinate does not change and $a_y = 0$. The second law along $y$ gives $N - mg\cos\theta = 0$, so $N = mg\cos\theta$.

Along $x$: $mg\sin\theta - \mu_k N = ma$. Substituting $N$ gives $mg\sin\theta - \mu_k mg\cos\theta = ma$, and dividing by $m$ gives $a = g(\sin\theta - \mu_k\cos\theta)$.

The checks from step 6: $\sin\theta$ and $\cos\theta$ and $\mu_k$ are pure numbers, so $a$ has the units of $g$. With no friction, a flat ramp ($\theta \to 0°$) gives $a \to 0$ and a vertical one ($\theta \to 90°$) gives $a \to g$, free fall. And the mass has cancelled, for the same reason all objects fall together: a heavier block is pulled harder and is harder to accelerate, in the same proportion.

For our block at $30°$ with no friction, $a = 9.8 \times 0.5 = 4.9$ m/s². With $\mu_k = 0.2$, the friction force is $0.2 \times 17.0 = 3.4$ N and $a = 9.8\,(0.5 - 0.2 \times 0.866) = 3.2$ m/s². If friction is strong enough that $\mu_k > \tan\theta$, the formula gives a negative $a$: a block already sliding down slows, and once it stops it is no longer sliding, so the theorem no longer describes it.

[Figure 6, animation: A 2 kg block on a ramp whose angle sweeps from 10 to 80 degrees. The weight (orange) never changes; its part along the ramp grows with the angle while its part pressing into the ramp shrinks.]

[Figure 7, animation: Two identical blocks released from rest on 30 degree ramps, in real time, each sliding 5 m. Without friction the acceleration is 4.9 m/s²; with a friction coefficient of 0.2 it is 3.2 m/s², and the block arrives a third of a second later.]

We can now account for the opening figure. A puck on a level surface has $N = mg$, so friction is $\mu_k mg$ and the puck's acceleration is $-\mu_k g$: $-4.9$ m/s² for $\mu_k = 0.5$, $-0.29$ m/s² for $\mu_k = 0.03$.

## Worked examples

**Worked example.** **A scale in an elevator.** A 60 kg person stands on a bathroom scale in an elevator. What does the scale read when the elevator accelerates upward at 1.5 m/s²?

A scale reports the force pressing on it, which by the third law equals the normal force $N$ it exerts on the person. So we need $N$. *Object:* the person. *Forces on the person:* weight $mg = 60 \times 9.8 = 588$ N down, and $N$ up. *Axis:* up is positive, and $a = +1.5$ m/s². The second law gives $N - mg = ma$, so

$$
N = m(g + a) = 60 \times 11.3 = 678 \text{ N}.
$$

A scale marked in kilograms divides by 9.8 and shows 69.2 kg. The person's weight is still 588 N; the floor has to push harder than that to accelerate them upward.

*Checks.* With $a = 0$ (at rest, or moving at steady speed in either direction) $N = mg$, the usual reading. With $a = -g$, a cut cable, $N = 0$: the scale reads zero while the weight is unchanged.

A harder problem has two objects tied together. In an **Atwood machine** two masses hang from a string that passes over a pulley. Take $m_1 = 3$ kg and $m_2 = 2$ kg, released from rest.

**Pause and try.** The heavier mass will fall and the lighter one rise. Before reading on, decide: is the tension in the string equal to the heavier weight (29.4 N), equal to the lighter weight (19.6 N), or somewhere between? Use the second law on each mass to justify your choice.

**Answer.** Between. The 3 kg mass accelerates downward, so the net force on it is downward and the string must pull up with *less* than 29.4 N. The 2 kg mass accelerates upward, so the string must pull up with *more* than 19.6 N. The example finds the value.

**Worked example.** **The Atwood machine.** Find the acceleration of the masses and the tension in the string.

*Assumptions.* The string has negligible mass and does not stretch; the pulley has negligible mass and turns without friction. Then the tension $T$ is the same along the whole string, and the two masses always have equal speeds, so their accelerations have the same magnitude $a$.

*Mass 1 (3 kg), taking down as positive since it moves down.* Forces: weight $m_1 g$ down, tension $T$ up.

$$
m_1 g - T = m_1 a.
$$

*Mass 2 (2 kg), taking up as positive since it moves up.* Forces: tension $T$ up, weight $m_2 g$ down.

$$
T - m_2 g = m_2 a.
$$

Adding the two equations eliminates $T$: $(m_1 - m_2)\,g = (m_1 + m_2)\,a$, so

$$
a = \frac{m_1 - m_2}{m_1 + m_2}\,g = \frac{1}{5} \times 9.8 = 1.96 \text{ m/s}^2.
$$

Then from the second equation, $T = m_2(g + a) = 2 \times 11.76 = 23.5$ N, between the two weights as predicted. In general $T = \dfrac{2 m_1 m_2}{m_1 + m_2}\,g$.

*Checks.* Equal masses give $a = 0$ and $T = mg$: balance. If $m_2 = 0$ then $a = g$ and $T = 0$: mass 1 falls freely. The formula for $a$ is a ratio of masses times $g$, so its units are m/s².

[Figure 8, animation: The Atwood machine with 3 kg and 2 kg masses, released from rest, in real time. The string pulls up on both masses with the same 23.5 N, which is less than the left weight and more than the right one, so the left mass accelerates down and the right one up at 1.96 m/s².]

## Where the laws apply

Each hypothesis in the second law marks a boundary. The frame must be inertial: inside the braking bus, or on a spinning carousel, objects accelerate with no force on them, and the law has to be supplemented before it can be used there. The object is treated as a single point with one acceleration; a block that tips or a wheel that spins needs more than this lesson. The mass must stay constant, which rules out a rocket burning its fuel. And at speeds near that of light, about $3 \times 10^8$ m/s, the law itself gives way to special relativity. For cars, balls and planets it is accurate far beyond what you can measure in a school laboratory.

**Common mistake.** **"The normal force equals the weight."** It does for an object at rest on a level floor with nothing else pushing on it, and students carry $N = mg$ everywhere. On the $30°$ ramp $N = mg\cos\theta = 17.0$ N, less than the 19.6 N weight. In the rising elevator $N$ was 678 N against a weight of 588 N. The normal force is whatever the second law requires perpendicular to the surface, so find it from the free-body diagram each time.

**Check yourself.** A book lies at rest on a table. The Earth pulls down on the book. Which force is the third-law partner of that pull?
Answer: The book's upward gravitational pull on the Earth The pair is "Earth pulls book" and "book pulls Earth": the same two objects with the roles swapped, the same kind of force, equal in size and opposite in direction.

**Recap.** - First law: in an inertial frame, zero net force means constant velocity. Motion needs no force; a change of motion does.
- Second law: $\vec F_{\text{net}} = m\vec a$ for an object of constant mass in an inertial frame, with $1 \text{ N} = 1 \text{ kg·m/s}^2$. Use it one axis at a time.
- Third law: forces come in equal and opposite pairs acting on different objects, so the pair never cancels on one object.
- Weight is the force $mg$ and changes with location; mass is the measure of inertia and does not.
- Method: one object, a free-body diagram of the forces on it, axes, components, $\sum F = ma$ per axis, checks.
- Sliding down an incline: $N = mg\cos\theta$ and $a = g(\sin\theta - \mu_k\cos\theta)$, whatever the mass.

The next lesson, on [projectile motion](@physics/projectile-motion), applies the two component equations to a ball in flight, where the only force is gravity.

## Problems

Use $g = 9.8$ m/s². Draw a free-body diagram for every problem that involves forces on an object.

**Problem 1.** A 1200 kg car experiences a net forward force of 3000 N. Find its acceleration, the time it takes to go from rest to 25 m/s, and the distance covered in that time.

**Solution.** $a = F_{\text{net}}/m = 3000/1200 = 2.5$ m/s². From $v = at$: $t = 25/2.5 = 10$ s. Distance: $\tfrac12 at^2 = \tfrac12(2.5)(10)^2 = 125$ m. Units check for the first step: N/kg = (kg·m/s²)/kg = m/s².

**Problem 2.** A 6.5 kg sled on frictionless ice is pulled by two ropes: 5 N toward the east and 12 N toward the north. Find the magnitude and direction of its acceleration.

**Solution.** The forces are perpendicular, so the net force has magnitude $\sqrt{5^2 + 12^2} = 13$ N. Its direction is $\tan^{-1}(12/5) \approx 67.4°$ north of east. The acceleration is $13/6.5 = 2$ m/s² in that direction. By components: $a_x = 5/6.5 = 0.769$ and $a_y = 12/6.5 = 1.846$ m/s², and $\sqrt{0.769^2 + 1.846^2} = 2.0$ m/s².

**Problem 3.** An astronaut has a mass of 70 kg. Find her weight on the Earth and on the Moon ($g_{\text{Moon}} = 1.62$ m/s²). On which is it harder to push her horizontally from rest to 1 m/s on a frictionless floor in one second?

**Solution.** On Earth $W = 70 \times 9.8 = 686$ N; on the Moon $W = 70 \times 1.62 = 113$ N. The horizontal push needs $F = ma = 70 \times 1 = 70$ N in both places, because the push has to overcome her inertia, which is her mass, and her mass is 70 kg everywhere. Weight is vertical and does not enter the horizontal equation.

**Problem 4.** A crate slides down a $20°$ ramp with $\mu_k = 0.15$. Find its acceleration. If it starts from rest, how fast is it moving after sliding 2 m?

**Solution.** $a = g(\sin\theta - \mu_k\cos\theta) = 9.8\,(0.3420 - 0.15 \times 0.9397) = 9.8 \times 0.2011 = 1.97$ m/s². With constant acceleration from rest, $v^2 = 2a\,\Delta x = 2 \times 1.97 \times 2 = 7.88$, so $v = 2.81$ m/s. The mass was not given and is not needed.

**Problem 5.** A block slides down a ramp with $\mu_k = 0.3$ at constant velocity. What is the angle of the ramp? Would a heavier block also slide at constant velocity on it?

**Solution.** Constant velocity means $a = 0$, so $\sin\theta - \mu_k\cos\theta = 0$, that is, $\tan\theta = \mu_k = 0.3$ and $\theta = 16.7°$. The mass does not appear in the condition, so any block with the same $\mu_k$ slides at constant velocity on this ramp: the pull along the ramp and the friction force are both proportional to $m$.

**Problem 6.** A 60 kg person stands on a scale in an elevator, and the scale reads 52 kg. Find the elevator's acceleration. Can you tell whether the elevator is going up or down?

**Solution.** The scale's reading means the normal force is $N = 52 \times 9.8 = 509.6$ N. With up positive, $N - mg = ma$ gives $a = N/m - g = 509.6/60 - 9.8 = 8.49 - 9.8 = -1.31$ m/s². The acceleration is 1.31 m/s² downward. That does not fix the direction of motion: the elevator could be moving down and speeding up, or moving up and slowing down. Force determines acceleration, and the velocity can be anything.

**Problem 7.** Two blocks sit touching on a frictionless table: 4 kg on the left, 2 kg on the right. A horizontal 12 N force pushes on the left block toward the right. (a) Find the acceleration. (b) Find the force the 4 kg block exerts on the 2 kg block. (c) Repeat (b) if the 12 N force instead pushes on the right block toward the left. Why do the answers differ?

**Solution.** (a) The blocks move together, so treat them as one 6 kg object. The only horizontal external force is 12 N, and $a = 12/6 = 2$ m/s². (b) Now isolate the 2 kg block. The only horizontal force on it is the contact force $C$ from the 4 kg block, so $C = 2 \times 2 = 4$ N. Check with the 4 kg block: by the third law the 2 kg block pushes back on it with 4 N, so the net force is $12 - 4 = 8$ N, and $8/4 = 2$ m/s². (c) The acceleration is again 2 m/s², now to the left. Isolate the 4 kg block: the only horizontal force on it is the contact force, so $C = 4 \times 2 = 8$ N. The contact force is whatever is needed to accelerate the block that the hand is *not* touching, and in (c) that block has twice the mass.

**Problem 8.** "A horse pulls on a cart. By the third law the cart pulls back on the horse with an equal force. The two forces cancel, so the horse can never get the cart moving." Find the error, and explain with the second law how the cart, and the horse, do accelerate.

**Solution.** The two forces named act on different objects: the horse's pull acts on the cart, and the cart's pull acts on the horse. Forces are added only when they act on the same object, so these two never appear in the same sum and cannot cancel. *The cart:* the horizontal forces on it are the horse's forward pull $P$ and backward friction and rolling resistance $f_c$. It accelerates forward when $P > f_c$. *The horse:* the horizontal forces on it are the cart's backward pull, of magnitude $P$, and the forward force $F_g$ that the ground exerts on its hooves. (The horse pushes backward on the ground; by the third law the ground pushes forward on the horse.) It accelerates forward when $F_g > P$. So both accelerate provided $F_g > P > f_c$. On frictionless ice $F_g = 0$ and the horse could not start the cart, which shows that the ground's push, and not the third-law pair in the argument, is what decides the matter.

# Circular motion, gravity and why the Moon doesn't fall

> The acceleration v²/r of circular motion, derived from the velocity triangle, and what it says about satellites, Kepler's third law and weightlessness.

Series: Physics (https://www.monocurl.com/monocurl-essays/physics/)
Canonical: https://www.monocurl.com/monocurl-essays/physics/circular-motion-and-orbits/
Keywords: centripetal acceleration, uniform circular motion, Newton's cannonball, orbital speed, Kepler's third law, geostationary orbit, weightlessness, law of universal gravitation

[Figure 1, animation: Newton's cannonball, computed from the inverse-square law of gravity. Four balls are fired horizontally from a tower drawn 640 km high. At 4, 6 and 7 km/s they curve down and land. At 7.54 km/s the ground curves away as fast as the ball falls, and it never comes down. One second of animation is 13 minutes.]

The Earth pulls on the Moon with a force of about $2 \times 10^{20}$ newtons. Nothing holds the Moon up. So why has it not fallen on us?

The usual answers are that gravity is weak out there, or that some outward force balances it. Both are wrong. The Moon is falling: it has been falling toward the Earth without pause for four billion years, and it gets no closer. To see how that can be, we first have to settle what acceleration means for something moving in a circle.

## Changing direction is accelerating

Whirl a puck on a string around a peg on an air table, at a steady speed. Then cut the string.

[Figure 2, animation: A 0.2 kg puck on a 0.5 m string, moving at a steady 2 m/s, at half speed. While the string pulls toward the peg (orange) the puck's velocity (blue) keeps turning. When the string is cut the puck leaves along the tangent, in a straight line at the same speed.]

The puck does not fly outward from the peg, and it does not keep curving. It goes straight, along the tangent to the circle at the point where it was released. That is [Newton's first law](@physics/newtons-second-law): with no net force, velocity stays constant in size and in direction.

Run the logic backward. While the puck was on the circle its speed was constant and its direction was not, so its velocity, which is a [vector](@linear-algebra/vectors), was changing all the time. A changing velocity is an acceleration, and by the second law an acceleration needs a net force. The string supplied it, and the string can only pull toward the peg. Moving in a circle at constant speed is accelerated motion, with the acceleration directed inward.

## How large is the acceleration?

Take numbers. A car goes round a circular bend of radius $r = 100$ m at a steady $v = 20$ m/s. In $\Delta t = 0.5$ s it covers 10 m of arc, so the line from the center to the car turns through $10/100 = 0.1$ [radians](@trigonometry/radians), and the velocity arrow turns through the same angle, since it is always perpendicular to that line. The velocities at the start and end are two arrows of length 20 m/s with $0.1$ rad between them. Their difference $\Delta\vec v$ is the short side of a thin isosceles triangle, of length $2 \times 20 \times \sin(0.05) = 1.999$ m/s. So the average acceleration over that half second has size $1.999/0.5 = 3.998$ m/s².

**Pause and try.** Repeat the calculation for $\Delta t = 1$ s. Then compare both answers with $v^2/r$.

**Answer.** In 1 s the car covers 20 m of arc and turns through 0.2 rad. $|\Delta\vec v| = 2 \times 20 \times \sin(0.1) = 3.993$ m/s, so the average acceleration is 3.993 m/s². And $v^2/r = 400/100 = 4$ m/s². The shorter the interval, the closer the average is to 4.

The number $v^2/r$ is no accident, and the triangle shows why.

[Figure 3, steps: An object moving at constant speed on a circle, at two moments. The triangle made by the two radii and the triangle made by the two velocities have the same shape, and that gives the acceleration.]

  - step: In a time Δt the object moves from one point to another. The two radii and the chord Δs between the points make an isosceles triangle with angle Δθ.
  - step: The velocity at each point is tangent to the circle, perpendicular to the radius there. The two velocities have the same length v.
  - step: Draw the two velocities from one point. Each is a quarter turn from its radius, so the angle between them is the same Δθ. The change in velocity closes the triangle.
  - step: Two isosceles triangles with the same angle are similar, so their sides are in proportion.
  - step: Shrink the time. The chord approaches the arc, of length vΔt, and the change in velocity turns to point at the center. Dividing by Δt gives v²/r.
**Definition.** An object is in **uniform circular motion** if it moves along a circle at constant speed. Its **period** $T$ is the time for one revolution, so its speed is $v = 2\pi r/T$.

**Theorem.** (Centripetal acceleration.) An object in uniform circular motion with speed $v$ on a circle of radius $r$ has, at every instant, an acceleration of magnitude

$$
a = \frac{v^2}{r} = \frac{4\pi^2 r}{T^2}
$$

directed from the object toward the center of the circle.

**Proof.** Let the object be at $P_1$ at time $t$ and at $P_2$ at time $t + \Delta t$, with center $O$. The arc from $P_1$ to $P_2$ has length $v\,\Delta t$, so the angle at $O$ is $\Delta\theta = v\,\Delta t/r$.

*Two similar triangles.* Triangle $OP_1P_2$ is isosceles with two sides $r$ and apex angle $\Delta\theta$. The velocities $\vec v_1, \vec v_2$ both have length $v$, and each is perpendicular to its radius, so rotating the pair of radii by a quarter turn gives the directions of the pair of velocities: the angle between $\vec v_1$ and $\vec v_2$ is also $\Delta\theta$. Drawn from a common point, $\vec v_1$, $\vec v_2$ and $\Delta\vec v = \vec v_2 - \vec v_1$ form an isosceles triangle with two sides $v$ and apex angle $\Delta\theta$. The triangles are similar, so $|\Delta\vec v|/v = |P_1P_2|/r$.

*Magnitude.* The chord of an isosceles triangle with sides $r$ and apex angle $\Delta\theta$ is $|P_1P_2| = 2r\sin(\Delta\theta/2)$. So $|\Delta\vec v| = 2v\sin(\Delta\theta/2)$, and with $\Delta t = r\,\Delta\theta/v$ the average acceleration has magnitude

$$
\frac{|\Delta\vec v|}{\Delta t} = \frac{v^2}{r}\cdot\frac{\sin(\Delta\theta/2)}{\Delta\theta/2}.
$$

As $\Delta t \to 0$ the angle $\Delta\theta/2 \to 0$, and the ratio $\sin x / x$ approaches 1 as $x \to 0$ (a limit proved in the lesson on [the derivative of sine](@calculus/derivative-of-sine); for $x = 0.05$ it is already 0.9996, as the car showed). The instantaneous acceleration therefore has magnitude $v^2/r$.

*Direction.* In the velocity triangle, the base $\Delta\vec v$ is perpendicular to the bisector of the apex angle. That bisector points along the velocity at the midpoint $M$ of the arc, which is perpendicular to $OM$. So $\Delta\vec v$ is parallel to $OM$, and it points inward because $\vec v_2$ is $\vec v_1$ turned toward the center's side. As $\Delta t \to 0$, $M$ approaches $P_1$, so the acceleration at $P_1$ points from $P_1$ to $O$.

Finally, $v = 2\pi r/T$ gives $v^2/r = 4\pi^2 r/T^2$.

The word **centripetal** means "center-seeking". Check the units: $(\text{m/s})^2/\text{m} = \text{m/s}^2$. This is the fact that [the lesson on energy](@physics/energy-conservation) borrowed for the loop-the-loop.

**Key idea.** Moving on a circle of radius $r$ at speed $v$ requires an acceleration $v^2/r$ toward the center, so the net force on the object must be $mv^2/r$ toward the center. Without that force the object leaves along the tangent.

"Centripetal force" names a requirement on the net force, and some ordinary force has to meet it. No extra arrow goes on the diagram. The requirement is met by the string's tension for the puck ($0.2 \times 2^2/0.5 = 1.6$ N), friction from the road for a car on a level bend, the track's push for a roller coaster. For a satellite, it is gravity.

## Newton's cannonball

Now the Moon. Newton's way in was a thought experiment. Stand on a very high mountain, above the air, and fire a cannonball horizontally. It is a [projectile](@physics/projectile-motion): it keeps its horizontal velocity and falls from the line of fire by $\tfrac12 gt^2$. Fire it faster and it lands farther away. But the Earth is round, so the ground also falls away from the line of fire.

**Pause and try.** The ball falls 4.9 m below its line of fire in the first second. The Earth's radius is $R = 6370$ km. Over what horizontal distance $d$ does the Earth's surface drop 4.9 m below a horizontal line? (Use the right triangle with sides $R$ and $d$ and hypotenuse $R + h$, and neglect $h^2$.) What does that suggest about a ball fired at $d$ meters per second?

**Answer.** $(R + h)^2 = R^2 + d^2$ gives $2Rh + h^2 = d^2$, and since $h$ is tiny compared with $R$, $d^2 \approx 2Rh = 2 \times 6.37 \times 10^6 \times 4.9$, so $d = 7900$ m. A ball fired at 7.9 km/s has, after one second, fallen 4.9 m and traveled 7.9 km, and the ground has dropped away by the same 4.9 m. The ball is no closer to the ground than when it started.

[Figure 4, image: The geometry of the cannonball, not to scale. In the time the ball travels a distance d along its line of fire, it falls by h. If the Earth's surface drops by the same h over that distance, the ball stays at a constant height.]

In general, set the ground's drop $d^2/2R$, with $d = vt$, equal to the ball's fall $\tfrac12 gt^2$: the $t^2$ cancels and $v^2 = gR$. The speed for skimming the surface forever is

$$
v = \sqrt{gR} = \sqrt{9.8 \times 6.37 \times 10^6} = 7.9 \text{ km/s}.
$$

The centripetal theorem gives this in one line and without the small-$h$ approximation. A ball circling at radius $R$ needs acceleration $v^2/R$ toward the center. Gravity supplies an acceleration $g$ toward the center. So $v^2/R = g$. The two arguments are the same idea: an orbit is free fall in which the falling is entirely used up in turning. The opening animation shows it happening, with the paths computed from the law of gravity.

## Gravity far from the ground

The Moon is far from skimming the surface: it is 384 000 km away, about 60 Earth radii, and takes 27.3 days to go round. If gravity out there were the same 9.8 m/s² as here, the Moon would need a speed of $\sqrt{9.8 \times 3.84 \times 10^8} = 61$ km/s. Its actual speed is about 1 km/s. So gravity must be much weaker at the Moon's distance. How much weaker?

**Pause and try.** Compute the Moon's centripetal acceleration from $a = 4\pi^2 r/T^2$, with $r = 3.84 \times 10^8$ m and $T = 27.3$ days $= 2.36 \times 10^6$ s. Compare it with $g = 9.8$ m/s². Then compare the ratio with the ratio of the distances from the Earth's center, 60 to 1.

**Answer.** $a = 4\pi^2 \times 3.84 \times 10^8 / (2.36 \times 10^6)^2 = 0.00272$ m/s². That is $9.8/0.00272 = 3600$ times smaller than $g$, and $3600 = 60^2$. At 60 times the distance, gravity's acceleration is $60^2$ times weaker.

Newton made this comparison in the 1660s and found that the numbers "answer pretty nearly". It is the evidence for an inverse-square law, which he then stated for all matter.

**Definition.** (Newton's law of universal gravitation.) Two point masses $m_1$ and $m_2$ a distance $r$ apart attract each other with a force of magnitude

$$
F = \frac{G m_1 m_2}{r^2}, \qquad G = 6.674 \times 10^{-11}\ \text{N·m}^2/\text{kg}^2,
$$

directed along the line joining them. A uniform sphere attracts objects outside it as if all its mass were at its center (a theorem of Newton's, which we are citing), so for a planet $r$ is measured from its center.

This is an experimental law. It is extremely accurate for planets, moons and spacecraft, and it is corrected by Einstein's general relativity where gravity is very strong or precision is extreme. Dividing the force on a mass $m$ by $m$, the acceleration due to a planet of mass $M$ at distance $r$ from its center is $GM/r^2$. For the Earth, $M = 5.972 \times 10^{24}$ kg, so $GM = 3.986 \times 10^{14}$ m³/s², and at the surface $GM/R^2 = 9.8$ m/s², as it must be.

[Figure 5, image: The acceleration due to the Earth's gravity against distance from the Earth's center, with four places marked. At the height of the space station gravity is still 89% of its surface value.]

## Orbits: speed, period and Kepler's third law

Put the two results together for a satellite of mass $m$ in a circular orbit of radius $r$ around a planet of mass $M$. The only force on it is gravity, toward the planet's center, and that must be the centripetal force:

$$
\frac{GMm}{r^2} = \frac{mv^2}{r}.
$$

**Theorem.** (Circular orbits.) A satellite in a circular orbit of radius $r$ about the center of a spherical body of mass $M$, much greater than the satellite's mass, acted on only by that body's gravity, has speed and period

$$
v = \sqrt{\frac{GM}{r}}, \qquad T = 2\pi\sqrt{\frac{r^3}{GM}}.
$$

In particular $T^2 = \dfrac{4\pi^2}{GM}\,r^3$: the square of the period is proportional to the cube of the radius (**Kepler's third law**, for circular orbits).

**Proof.** The net force is gravity, of size $GMm/r^2$ toward the center, and the acceleration of uniform circular motion is $v^2/r$ toward the center. The second law gives $GMm/r^2 = mv^2/r$; cancel $m$ and one factor of $r$ to get $v^2 = GM/r$. The period is the circumference over the speed: $T = 2\pi r/v = 2\pi r\sqrt{r/GM} = 2\pi\sqrt{r^3/GM}$. Squaring gives the last statement.

The satellite's mass has canceled, so a bolt and a space station at the same radius orbit side by side. There is no freedom in the speed: each radius has exactly one speed for a circular orbit, lower for larger orbits. (The assumption $M \gg m$ lets us treat the planet's center as fixed. When the masses are comparable both bodies circle their [center of mass](@physics/momentum-collisions).)

Johannes Kepler found the $T^2 \propto r^3$ rule in 1619 by staring at planetary data, with no dynamical explanation for why it held. With the Sun as the central body and units of years and astronomical units (the Earth's orbital radius), the constant is 1, and the law says $T^2 = r^3$.

[Figure 6, image: Kepler's third law for the four inner planets, whose orbits are nearly circular. With the period T in years and the orbit radius r in astronomical units, the points lie on the line T^2 = r^3.]

[Figure 7, animation: Three satellites in circular orbits around the Earth, each moving at the speed \sqrt{GM/r} for its radius. The outermost takes one sidereal day, the same as the Earth's rotation, so it stays over the marked point on the equator. One second of animation is three hours.]

## Worked examples

**Worked example.** **A car on a level bend.** A car takes a level circular bend of radius 60 m. The coefficient of static friction between tires and road is 0.8. What is the greatest speed at which it can hold the circle?

The only horizontal force on the car is friction from the road, so friction must supply the centripetal force $mv^2/r$. Static friction can be at most $\mu_s N = \mu_s mg$ on level ground. So $mv^2/r \le \mu_s mg$, and $v \le \sqrt{\mu_s g r} = \sqrt{0.8 \times 9.8 \times 60} = 21.7$ m/s, about 78 km/h. The mass canceled. On a wet road with $\mu_s = 0.4$ the limit falls to 15.3 m/s: halving the grip cuts the speed by $\sqrt2$, not by 2.

**Worked example.** **The space station.** The International Space Station orbits about 400 km above the surface. Find its speed and period.

The radius of the orbit is measured from the Earth's center: $r = 6.371 \times 10^6 + 0.400 \times 10^6 = 6.771 \times 10^6$ m. Then $v = \sqrt{GM/r} = \sqrt{3.986 \times 10^{14}/6.771 \times 10^6} = 7670$ m/s, and $T = 2\pi r/v = 2\pi \times 6.771 \times 10^6/7670 = 5547$ s, which is 92 minutes. The station circles the Earth about 15.6 times a day.

*Check* against the cannonball: slightly slower than 7.9 km/s, as a slightly larger orbit should be.

**Worked example.** **The geostationary orbit.** A satellite that stays above one point on the equator must go round once per rotation of the Earth, $T = 86\,164$ s (the sidereal day, about four minutes short of 24 hours). How high is it, and how fast does it move?

We know $T$ and want $r$, so solve $T^2 = 4\pi^2 r^3/GM$ for $r$:

$$
r = \left(\frac{GM\,T^2}{4\pi^2}\right)^{1/3} = \left(\frac{3.986 \times 10^{14} \times (86\,164)^2}{39.48}\right)^{1/3} = 4.216 \times 10^7 \text{ m}.
$$

That is 42 160 km from the center, 6.6 Earth radii, or 35 790 km above the surface. The speed is $2\pi r/T = 3.07$ km/s.

There is exactly one such radius, which is why every geostationary satellite shares a single ring above the equator. The orbit must be over the equator because its plane has to contain the Earth's center, where the force points.

## Weightlessness

Astronauts on the space station float. The tempting explanation is that there is no gravity up there, but the graph above says otherwise: at 400 km, gravity's acceleration is 8.7 m/s², 89% of its value on the ground. If it were absent the station would leave along a tangent.

What you feel as your weight is the floor pushing up on you; gravity itself, acting equally on every part of you, cannot be felt. Stand on a bathroom scale: the scale reads the normal force $N$ it exerts on you. At rest, $N - mg = 0$, so it reads $mg$. In an elevator accelerating downward at $a$, $mg - N = ma$, so it reads $m(g - a)$, less than your weight. If the cable snapped and the elevator fell freely, $a = g$ and the scale would read zero.

[Figure 8, image: A 70 kg person on a scale, on the ground and in the space station. On the ground the scale pushes up with 686 N. In orbit gravity still pulls with 609 N, but the person, the scale and the station all fall together, so nothing presses on anything and the scale reads zero. The green arrow is the acceleration they share.]

An orbit is that free fall, continued indefinitely. The station and everything in it have the same acceleration, $GM/r^2$ toward the Earth, so the floor never has to push on the astronaut's feet. In symbols, the astronaut needs net force $mv^2/r$, gravity supplies $GMm/r^2$, and for the orbit these are equal, leaving $N = 0$. **Weightlessness** is the absence of the supporting force. Gravity is fully present.

## Limits and common mistakes

Everything here assumed circles. Real orbits are ellipses, of which the circle is a special case; Kepler's third law survives with the radius replaced by half the long axis of the ellipse, a result we are citing. The cannonballs that landed in the first animation were on ellipses that happened to intersect the ground. The formula $a = v^2/r$ holds at each instant even when the speed is changing, but then it gives only the part of the acceleration perpendicular to the velocity, and there is another part along it.

**Common mistake.** **Adding a "centrifugal force".** A common diagram of a satellite shows gravity inward and a centrifugal force outward, balancing. If the forces on the satellite balanced, the net force would be zero and it would move in a straight line. In an inertial frame there is one force on the satellite, gravity, and it is unbalanced; that is why the path curves. The outward push you feel in a turning car is your body trying to go straight while the seat pushes you inward.

**Common mistake.** **Measuring $r$ from the surface.** In $GM/r^2$ and $\sqrt{GM/r}$, $r$ is the distance from the planet's center. A satellite 400 km up has $r = 6771$ km, not 400 km. Using the altitude gives a speed of 32 km/s for the space station, four times too large.

**Check yourself.** A satellite in a circular orbit is moved to a new circular orbit with four times the radius. What happens to its speed and its period?
Answer: Speed halves, period becomes 8 times longer $v \propto 1/\sqrt r$, so the speed is multiplied by $1/\sqrt4 = \tfrac12$. $T \propto r^{3/2}$, and $4^{3/2} = 8$.

**Recap.** - Uniform circular motion is accelerated: the velocity changes direction. The acceleration is $v^2/r = 4\pi^2 r/T^2$, toward the center, from the similar triangles of radii and velocities.
- The net force must be $mv^2/r$ toward the center, supplied by real forces: tension, friction, a normal force, gravity.
- Gravity: $F = Gm_1m_2/r^2$, so the acceleration at distance $r$ from a planet's center is $GM/r^2$. The Moon's acceleration confirms the inverse square.
- Circular orbit: $v = \sqrt{GM/r}$ and $T^2 = (4\pi^2/GM)\,r^3$, independent of the satellite's mass. Near the Earth's surface, $v = \sqrt{gR} = 7.9$ km/s.
- Geostationary orbit: $T$ = one sidereal day gives $r = 42\,160$ km.
- An orbiting astronaut is in free fall. Gravity acts; the supporting force is zero.

## Problems

Use $g = 9.8$ m/s², $G = 6.674 \times 10^{-11}$ N·m²/kg², and for the Earth $M = 5.97 \times 10^{24}$ kg, $GM = 3.986 \times 10^{14}$ m³/s², $R = 6.371 \times 10^6$ m.

**Problem 1.** A 1200 kg car rounds a level bend of radius 50 m at 15 m/s. Find its acceleration, the force required and what supplies it, and the smallest coefficient of static friction that will do.

**Solution.** $a = v^2/r = 225/50 = 4.5$ m/s², toward the center of the bend. Force: $ma = 1200 \times 4.5 = 5400$ N, supplied by static friction between the tires and the road. Friction can be at most $\mu_s mg$, so we need $\mu_s \ge a/g = 4.5/9.8 = 0.46$.

**Problem 2.** A bucket of water is swung in a vertical circle of radius 0.9 m. What is the least speed at the top of the circle for which the water stays in the bucket? Why does it not fall out, given that gravity pulls it down and nothing holds it up?

**Solution.** At the top the water moves on a circle, so it needs acceleration $v^2/r$ downward, toward the center. The forces on it are gravity $mg$ and the push $N$ of the bucket's bottom, both downward: $mg + N = mv^2/r$. The bucket can only push, so $N \ge 0$, which requires $v^2/r \ge g$: $v \ge \sqrt{gr} = \sqrt{9.8 \times 0.9} = 2.97$ m/s. The water *is* falling: at the least speed it is in free fall, accelerating downward at $g$. The bucket is accelerating downward just as fast, so the water does not leave it. Faster than that, the water would fall less steeply than the bucket turns, and the bucket has to push it down.

**Problem 3.** The Moon orbits at $r = 3.84 \times 10^8$ m with period 27.3 days. Using only these numbers and $G$, find the Moon's speed and the mass of the Earth.

**Solution.** $T = 27.3 \times 86\,400 = 2.36 \times 10^6$ s. Speed: $v = 2\pi r/T = 2\pi \times 3.84 \times 10^8/2.36 \times 10^6 = 1020$ m/s. From $T^2 = 4\pi^2 r^3/GM$: $M = \dfrac{4\pi^2 r^3}{G T^2} = \dfrac{39.48 \times (3.84 \times 10^8)^3}{6.674 \times 10^{-11} \times (2.36 \times 10^6)^2} = 6.0 \times 10^{24}$ kg. An orbit weighs the body at its center. The mass of the Moon itself does not enter, and cannot be found this way.

**Problem 4.** Jupiter orbits the Sun at 5.20 astronomical units. Use Kepler's third law to find its period in years. Then explain why you could not find the period of the Moon around the Earth from the same formula $T^2 = r^3$.

**Solution.** In years and astronomical units $T^2 = r^3$ for bodies orbiting the Sun, so $T = 5.20^{3/2} = 11.9$ years. The constant in $T^2 = (4\pi^2/GM)\,r^3$ contains the mass $M$ of the central body. It equals 1 in these units only when $M$ is the Sun's mass. The Moon orbits the Earth, whose mass is 333 000 times smaller, so the constant is different: Kepler's law compares satellites of the same central body.

**Problem 5.** A student says: "The astronauts on the space station are weightless, so gravity must be zero there. And since gravity is zero, no force acts on the station." Find two errors, and compute the gravitational force on a 70 kg astronaut 400 km above the surface.

**Solution.** First error: weightlessness means the supporting force is zero, not gravity. Gravity's acceleration at $r = 6.771 \times 10^6$ m is $GM/r^2 = 3.986 \times 10^{14}/(6.771 \times 10^6)^2 = 8.69$ m/s², so the force on the astronaut is $70 \times 8.69 = 609$ N, against 686 N on the ground. Second error: with no force the station would obey the first law and move in a straight line at constant speed, leaving the Earth along a tangent. It moves in a circle, so a net force toward the center must act on it, and gravity is that force.

**Problem 6.** Mars has mass $6.42 \times 10^{23}$ kg and radius 3390 km, and rotates once in 88 600 s. Find the radius and altitude of a "stationary" orbit above the Martian equator, and the satellite's speed.

**Solution.** $GM = 6.674 \times 10^{-11} \times 6.42 \times 10^{23} = 4.285 \times 10^{13}$ m³/s². $r = \left(GM\,T^2/4\pi^2\right)^{1/3} = \left(4.285 \times 10^{13} \times (8.86 \times 10^4)^2/39.48\right)^{1/3} = (8.52 \times 10^{21})^{1/3} = 2.04 \times 10^7$ m, which is 20 400 km from the center and 17 000 km above the surface. Speed: $2\pi r/T = 2\pi \times 2.04 \times 10^7/8.86 \times 10^4 = 1450$ m/s. Check with $\sqrt{GM/r} = \sqrt{4.285 \times 10^{13}/2.04 \times 10^7} = 1450$ m/s.

**Problem 7.** Show that the period of a satellite skimming the surface of a uniform spherical planet depends only on the planet's density $\rho$, and not on its size: $T = \sqrt{3\pi/(G\rho)}$. Evaluate it for the Earth ($\rho = 5510$ kg/m³). What does the result say about a small asteroid of the same density?

**Solution.** For an orbit at the surface, $r = R$ and $T^2 = 4\pi^2 R^3/(GM)$. A uniform sphere has $M = \rho \cdot \tfrac43\pi R^3$, so $T^2 = \dfrac{4\pi^2 R^3}{G\rho\,\tfrac43\pi R^3} = \dfrac{3\pi}{G\rho}$, and the radius has canceled. For the Earth: $T = \sqrt{3\pi/(6.674 \times 10^{-11} \times 5510)} = \sqrt{2.563 \times 10^7} = 5060$ s, about 84 minutes. An asteroid of the same density, however small, also has an 84 minute surface orbit. Its orbital speed $2\pi R/T$ is proportionally smaller: around a rock 1 km in radius it is 1.2 m/s, a walking pace.

**Problem 8.** The lesson derived $a = v^2/r$ from similar triangles. Here is a check that uses the quantitative step of the proof. A point moves at 10 m/s on a circle of radius 5 m. (a) Find $\Delta\theta$ for $\Delta t = 0.1$ s, the exact $|\Delta\vec v|$, and the average acceleration. (b) By what percentage does the average differ from $v^2/r$? (c) How small must $\Delta\theta$ be for the difference to be under 0.1%, given that $\sin x/x \approx 1 - x^2/6$ for small $x$?

**Solution.** (a) $\Delta\theta = v\,\Delta t/r = 10 \times 0.1/5 = 0.2$ rad. $|\Delta\vec v| = 2v\sin(\Delta\theta/2) = 20\sin(0.1) = 1.9967$ m/s. Average acceleration: $1.9967/0.1 = 19.967$ m/s². (b) $v^2/r = 100/5 = 20$ m/s². The average is low by $0.033/20 = 0.17\%$, in agreement with the factor $\sin(0.1)/0.1 = 0.99833$. (c) We need $1 - \sin x/x \approx x^2/6 < 0.001$ with $x = \Delta\theta/2$, so $x < \sqrt{0.006} = 0.077$ rad and $\Delta\theta < 0.155$ rad, about $9°$.

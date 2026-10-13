# The unit circle: sine and cosine as coordinates

> Sine and cosine start as ratios in a right triangle, which stops at 90°. Placing the triangle in a circle of radius 1 extends them to every angle.

Series: Trigonometry (https://www.monocurl.com/monocurl-essays/trigonometry/)
Canonical: https://www.monocurl.com/monocurl-essays/trigonometry/unit-circle/
Keywords: unit circle, sine and cosine definition, sin of angles greater than 90, signs of sine and cosine by quadrant, reference angle, graph of sine, sin 120 degrees

[Figure 1, animation: A point turns around a circle of radius 1. Its horizontal position is the cosine of the angle turned and its height is the sine. The sweep ends at 120°, where the cosine is -0.50 and the sine is 0.87.]

Type $\sin 120°$ into a calculator and it answers $0.8660$ without complaint. Yet sine, as most people first meet it, is "opposite over hypotenuse" in a right triangle containing the angle, and no right triangle contains an angle of 120°. [The angles of a triangle add to 180°](@geometry/triangle-angle-sum), the right angle uses 90° of that, and so each of the other two is less than 90°.

So the calculator is working from some other definition, one that agrees with the triangle for small angles and keeps going where the triangle gives out. You might try to guess it. Perhaps $\sin 120° = \sin 90° + \sin 30° = 1 + 0.5 = 1.5$? The calculator says $0.8660$, so that guess is wrong, and we will see later that a sine can never exceed 1. To find the real definition we go back to the triangle and look at what it is measuring.

## Sine and cosine in a right triangle

Take a right triangle and pick one of its two acute angles, $\theta$. The side across from $\theta$ is the **opposite** side, the leg touching $\theta$ is the **adjacent** side, and the longest side, across from the right angle, is the **hypotenuse**. The triangle definitions are

$$
\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \qquad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}.
$$

These definitions only make sense if the ratio is the same in every right triangle with the angle $\theta$, large or small. Here is that fact on one angle.

[Figure 2, image: Three right triangles that share a 30° angle, with hypotenuses 1, 2 and 3. Their opposite sides are 0.5, 1 and 1.5, so opposite divided by hypotenuse is 0.5 in each.]

The three triangles have the same three angles, 30°, 60° and 90°. [Triangles with the same angles are similar](@geometry/similar-triangles), meaning each is a scaled copy of the others, and scaling multiplies every side by the same factor. So when the hypotenuse doubles, the opposite side doubles too, and their ratio does not change. That holds for any angle, which is why $\sin\theta$ is a property of the angle alone.

For 30° we can also say why the ratio is exactly $\frac{1}{2}$. Two copies of the triangle placed back to back along the adjacent side form a triangle whose angles are all 60°, an equilateral triangle. Its side is the hypotenuse, and the two opposite sides together make up one side. So the opposite side is half the hypotenuse, and $\sin 30° = \frac{1}{2}$.

The adjacent side comes from the [Pythagorean theorem](@geometry/pythagorean-theorem), which says the squares of the two legs add up to the square of the hypotenuse. With hypotenuse 1 and opposite side $\frac{1}{2}$, the adjacent side is $\sqrt{1 - \frac{1}{4}} = \frac{\sqrt{3}}{2} \approx 0.8660$, so $\cos 30° = \frac{\sqrt 3}{2}$. Those are the calculator's digits for $\sin 120°$, which is a hint worth keeping in mind.

Since the size of the triangle does not matter, choose the most convenient size: **make the hypotenuse 1**. Dividing by 1 changes nothing, so in such a triangle $\sin\theta$ is the length of the opposite side and $\cos\theta$ is the length of the adjacent side.

**Pause and try.** A right triangle has a 45° angle and hypotenuse 1. Find the lengths of its two legs exactly, and so find $\sin 45°$ and $\cos 45°$.

**Answer.** The third angle is $180° - 90° - 45° = 45°$, so the triangle has two equal angles and therefore two equal legs. Call each leg $x$. By the Pythagorean theorem $x^2 + x^2 = 1$, so $x^2 = \frac{1}{2}$ and $x = \frac{1}{\sqrt 2} = \frac{\sqrt 2}{2} \approx 0.7071$. Hence $\sin 45° = \cos 45° = \frac{\sqrt 2}{2}$.

The 60° angle uses the 30° triangle again, viewed from its other acute corner, where the roles of opposite and adjacent swap. That gives three angles with exact values.

| $\theta$ | 30° | 45° | 60° |
|---|---|---|---|
| $\cos\theta$ | $\frac{\sqrt 3}{2} \approx 0.866$ | $\frac{\sqrt 2}{2} \approx 0.707$ | $\frac{1}{2}$ |
| $\sin\theta$ | $\frac{1}{2}$ | $\frac{\sqrt 2}{2} \approx 0.707$ | $\frac{\sqrt 3}{2} \approx 0.866$ |

## The triangle inside a circle

A triangle with hypotenuse 1 still stops at 90°. What rescues us is a change of viewpoint about what the two legs are. Step through the figure.

[Figure 3, steps: A right triangle with hypotenuse 1 is laid on a coordinate grid. Its legs become the coordinates of its far corner, the corner traces a circle of radius 1 as the angle changes, and the corner keeps its coordinates after the angle passes 90°.]

  - step: A right triangle with a 35° angle and hypotenuse 1. Its adjacent leg has length cos 35° ≈ 0.82 and its opposite leg has length sin 35° ≈ 0.57.
  - step: Lay it on a coordinate grid with the angle at the origin and the adjacent leg along the x axis. The far corner is 0.82 across and 0.57 up: it is the point (cos 35°, sin 35°).
  - step: Change the angle. The far corner moves, but the hypotenuse keeps it at distance 1 from the origin, so it travels along a circle of radius 1.
  - step: Keep turning. At 120° there is no right triangle with that angle, but the point is still there and still has coordinates: −0.50 across and 0.87 up.
In the second step nothing about the triangle changed. We only named its legs differently: the adjacent leg is how far the far corner lies to the right of the origin, and the opposite leg is how far it lies above. For an acute angle, then, $\cos\theta$ and $\sin\theta$ are the $x$ and $y$ coordinates of a point. In the third step that point stays on a circle, because a hypotenuse of length 1 keeps it at distance 1 from the origin. The circle of radius 1 centered at the origin is called the **unit circle**.

Coordinates do not care whether a triangle exists. Every point of the circle has an $x$ and a $y$, including the points that a radius reaches after turning more than 90°. That suggests the definition the calculator must be using: turn through the angle, then read off the coordinates.

## Past 90 degrees

**Pause and try.** Before reading on, find the exact coordinates of the point on the unit circle reached by turning 120° counterclockwise from the positive $x$ axis. (The radius to it makes an angle of 60° with the negative $x$ axis.)

**Answer.** Drop a vertical line from the point to the $x$ axis. It forms a right triangle with hypotenuse 1 and a 60° angle at the origin, on the left of the $y$ axis. Its legs are $\cos 60° = \frac{1}{2}$ along the axis and $\sin 60° = \frac{\sqrt 3}{2}$ upward. The point is half a unit to the *left* of the origin and $\frac{\sqrt 3}{2}$ above, so its coordinates are $\left(-\frac{1}{2}, \frac{\sqrt 3}{2}\right) \approx (-0.5, 0.866)$.

[Figure 4, image: The points of the unit circle at 60° and at 120° are mirror images in the y axis. They have the same height, \frac{\sqrt 3}{2}, and opposite horizontal positions, \frac{1}{2} and -\frac{1}{2}.]

The height of that point is $\frac{\sqrt 3}{2} \approx 0.8660$, which is the calculator's answer for $\sin 120°$. Its horizontal coordinate is $-\frac{1}{2}$, and a calculator does report $\cos 120° = -0.5$. A negative value could never come out of a ratio of two lengths. It comes out of a coordinate without any trouble, since it only says that the point is to the left of the origin.

Here is the definition in full.

**Definition.** Let $\theta$ be any real number, read as an angle in degrees. Start at the point $(1, 0)$ and rotate it about the origin through the angle $\theta$: counterclockwise if $\theta > 0$, clockwise through $|\theta|$ if $\theta < 0$, and not at all if $\theta = 0$. Call the point that is reached $P(\theta)$. Then

$$
\cos\theta = \text{the } x \text{ coordinate of } P(\theta), \qquad \sin\theta = \text{the } y \text{ coordinate of } P(\theta).
$$

"Any real number" is the gain: 120°, 270°, 1000° and $-45°$ are all allowed, because a rotation can continue past a full turn or run backward. "Start at $(1, 0)$" and "counterclockwise" are conventions, matching the way the triangle sat on the grid with its adjacent leg along the positive $x$ axis. A new definition that reuses an old name owes us a check that the two agree where both apply.

**Theorem.** Let $0° < \theta < 90°$. In every right triangle that has an acute angle $\theta$, the ratio of the opposite side to the hypotenuse equals the $y$ coordinate of $P(\theta)$, and the ratio of the adjacent side to the hypotenuse equals its $x$ coordinate.

**Proof.** Write $P(\theta) = (x, y)$ and let $O$ be the origin. A rotation about $O$ does not change distance from $O$, so $OP = 1$. Since the turn is more than 0° and less than a quarter turn, $P$ lies strictly inside the first quadrant, so $x > 0$ and $y > 0$. Let $F = (x, 0)$ be the point of the $x$ axis directly below $P$. The triangle $OFP$ has a right angle at $F$. Its angle at $O$ lies between the positive $x$ axis, which is where the radius started, and the radius $OP$, which is where the turn through $\theta$ left it, so that angle is $\theta$. The triangle has legs $OF = x$ and $FP = y$, and hypotenuse 1.

Now take any right triangle with an acute angle $\theta$. Its angles are $\theta$, 90° and $90° - \theta$, the same as those of $OFP$, so the two triangles are similar and corresponding sides are in the same ratio. Therefore opposite over hypotenuse equals $\frac{y}{1} = y$, and adjacent over hypotenuse equals $\frac{x}{1} = x$.

The proof is the second step of the figure, with similar triangles supplying the reason that one triangle of hypotenuse 1 speaks for all the others.

**Key idea.** For every angle $\theta$, the point reached by turning $(1, 0)$ through $\theta$ about the origin is $(\cos\theta, \sin\theta)$. Cosine is how far across, sine is how far up.

## Signs in the four quadrants

The axes cut the plane into four **quadrants**, numbered I to IV counterclockwise starting from the upper right. Which quadrant $P(\theta)$ lands in settles the signs of $\cos\theta$ and $\sin\theta$ at once, since these are coordinates.

[Figure 5, image: One point of the unit circle in each quadrant, at 40°, 140°, 220° and 320°, with the signs of its coordinates. Cosine is positive on the right half of the circle and sine is positive on the top half.]

On the axes themselves one coordinate is zero. A quarter turn takes $(1, 0)$ to the top of the circle, so $P(90°) = (0, 1)$, which gives $\cos 90° = 0$ and $\sin 90° = 1$. In the same way $P(0°) = (1, 0)$, $P(180°) = (-1, 0)$ and $P(270°) = (0, -1)$. These angles have no triangle at all, and the definition handles them without a special case.

**Pause and try.** Without a calculator, decide the signs of $\sin 200°$ and $\cos 200°$. Then decide which of the two is further from zero.

**Answer.** 200° is 20° past the half turn at 180°, so $P(200°)$ is in quadrant III, a little below the leftmost point $(-1, 0)$. Both coordinates are negative. The point is far to the left and only slightly down, so the cosine is the one further from zero. (The values are $\cos 200° \approx -0.940$ and $\sin 200° \approx -0.342$.)

## Symmetries that give new values from old ones

The figure for 120° worked by reflecting the 60° point in the $y$ axis. The circle has other symmetries, and each of them turns into a rule about sine and cosine.

[Figure 6, animation: Turning the plane a quarter turn about the origin carries the point at angle \theta to the point at \theta + 90°. The triangle under the point turns with it, so its horizontal leg becomes vertical and its vertical leg becomes horizontal, pointing left.]

**Theorem.** Let $\theta$ be any angle, with $\cos\theta = x$ and $\sin\theta = y$. Then:

- (full turn) $\cos(\theta + 360°) = x$ and $\sin(\theta + 360°) = y$;
- (mirror in the $x$ axis) $\cos(-\theta) = x$ and $\sin(-\theta) = -y$;
- (mirror in the $y$ axis) $\cos(180° - \theta) = -x$ and $\sin(180° - \theta) = y$;
- (quarter turn) $\cos(\theta + 90°) = -y$ and $\sin(\theta + 90°) = x$.

**Proof.** We take two facts about rotations about the origin from geometry without proving them: turning through $\alpha$ and then through $\beta$ is the same as turning through $\alpha + \beta$, and a reflection in a line through the origin turns a counterclockwise rotation into a clockwise rotation of the same size.

- A turn of 360° returns every point to where it started, so $P(\theta + 360°) = P(\theta)$.
- Reflect in the $x$ axis. The starting point $(1, 0)$ stays put and the turn through $\theta$ reverses direction, so the mirror image of $P(\theta)$ is $P(-\theta)$. The mirror image of $(x, y)$ in the $x$ axis is $(x, -y)$.
- Reflect in the $y$ axis. The starting point $(1, 0)$ goes to $(-1, 0) = P(180°)$, and the turn through $\theta$ reverses direction. So the mirror image of $P(\theta)$ is reached from $P(180°)$ by turning backward through $\theta$, which makes it $P(180° - \theta)$. The mirror image of $(x, y)$ in the $y$ axis is $(-x, y)$.
- A quarter turn counterclockwise carries the $x$ axis onto the $y$ axis, with the positive half going to the positive half, and the $y$ axis onto the $x$ axis, with the positive half going to the negative half. It keeps distances from the origin, so it carries $(x, 0)$ to $(0, x)$ and $(0, y)$ to $(-y, 0)$, whatever the signs of $x$ and $y$. A rotation carries a rectangle to a rectangle. So the rectangle with corners $(0,0)$, $(x, 0)$, $(x, y)$, $(0, y)$ goes to the rectangle with corners $(0, 0)$, $(0, x)$, $(-y, x)$, $(-y, 0)$, as in the animation, and its corner $(x, y)$ goes to $(-y, x)$. (If $x$ or $y$ is zero the rectangle collapses to a segment on an axis, and the point is one of those already dealt with.) Turning through $\theta$ and then through 90° is turning through $\theta + 90°$, so the quarter turn carries $P(\theta)$ to $P(\theta + 90°)$.

With these rules, the three exact triangles from the start of the lesson supply exact values all the way around the circle.

**Worked example.** **Find $\sin 150°$ and $\cos 150°$.**

150° is in quadrant II, and $150° = 180° - 30°$, so rule 3 applies with $\theta = 30°$. We know $P(30°) = \left(\frac{\sqrt 3}{2}, \frac{1}{2}\right)$. Mirroring in the $y$ axis flips the sign of the first coordinate: $P(150°) = \left(-\frac{\sqrt 3}{2}, \frac{1}{2}\right)$. So $\cos 150° = -\frac{\sqrt 3}{2}$ and $\sin 150° = \frac{1}{2}$.

*Check.* In quadrant II a point is left of the origin and above it, so a negative cosine and positive sine are the right signs.

The acute angle between the radius and the $x$ axis, 30° here, is called the **reference angle** of 150°. The sine and cosine of an angle have the same sizes as those of its reference angle, and the quadrant supplies the signs.

**Worked example.** **Find $\sin 225°$ and $\cos 225°$.**

$225° = 45° + 180°$, a half turn beyond 45°. A half turn is two quarter turns, so we apply rule 4 twice: $(x, y)$ goes to $(-y, x)$ and then to $(-x, -y)$. Starting from $P(45°) = \left(\frac{\sqrt 2}{2}, \frac{\sqrt 2}{2}\right)$ we get $P(225°) = \left(-\frac{\sqrt 2}{2}, -\frac{\sqrt 2}{2}\right)$, so $\sin 225° = \cos 225° = -\frac{\sqrt 2}{2} \approx -0.707$.

*Check.* 225° is in quadrant III, where both coordinates are negative.

**Worked example.** **Find every angle $\theta$ with $0° \le \theta < 360°$ and $\sin\theta = -\frac{1}{2}$.**

We want the points of the circle at height $-\frac{1}{2}$. The one height we know is $\sin 30° = +\frac{1}{2}$, so start there and use symmetry to get below the axis. Rule 2 gives $\sin(-30°) = -\frac{1}{2}$, and by rule 1 the angle $-30°$ is the same point as $-30° + 360° = 330°$. Rule 3 applied to $\theta = -30°$ gives a second point at the same height: $180° - (-30°) = 210°$.

There are no others, because the horizontal line $y = -\frac{1}{2}$ crosses the circle in exactly two points. The answer is $\theta = 210°$ and $\theta = 330°$.

## The graphs of sine and cosine

So far $\theta$ has been one angle at a time. Let it run, and record the height of the point against the angle.

**Pause and try.** Sketch a graph of the height of $P(\theta)$ against $\theta$ for $0° \le \theta \le 360°$, before you play the animation. Mark where the height is 0, where it is largest and where it is smallest. Is the graph made of straight pieces?

**Answer.** The height is 0 at 0°, 180° and 360°, largest ($1$) at 90° and smallest ($-1$) at 270°. The pieces are not straight. Near 0° the point is moving almost straight up, so the height rises quickly; near 90° it is moving almost sideways, so the height hardly changes. For example the height is already $0.5$ at 30°, a third of the way to 90°. The graph is steep at the crossings and flat at the top and bottom.

[Figure 7, animation: The height of a point on the unit circle is carried across to a graph whose horizontal axis is the angle turned. One full turn draws one full wave of \sin\theta.]

The wave is the height of the point, read out as the angle advances. It repeats every 360° by rule 1, and it never leaves the band between $-1$ and $1$, because no point of a circle of radius 1 is more than 1 above or below the center.

Recording the horizontal coordinate instead gives the graph of cosine.

[Figure 8, image: The graphs of \sin\theta and \cos\theta from -90° to 450°. The cosine graph is the sine graph moved 90° to the left: each feature of sine, such as its peak at 90°, happens to cosine 90° earlier.]

The two curves have the same shape. Rule 4 says why: $\sin(\theta + 90°) = \cos\theta$, so the value cosine has at $\theta$ is the value sine will have 90° later. Whatever sine does, cosine did it a quarter turn earlier.

## Limits of the definition, and two mistakes

The triangle definition is the unit circle definition restricted to $0° < \theta < 90°$. Outside that range the phrase "opposite over hypotenuse" has no meaning and only the coordinates remain.

The circle also sets limits. Since $-1 \le \sin\theta \le 1$ and $-1 \le \cos\theta \le 1$ for every $\theta$, an equation such as $\sin\theta = 1.5$ has no solution, which is the reason the opening guess had to fail. And when a solution exists it is not unique. The third example found two angles in one turn with the same sine, and adding 360° to either gives more. A calculator's inverse sine key returns only one of them.

**Common mistake.** **Treating sine as if it scaled with the angle.** It is tempting to say that since $\sin 30° = 0.5$, doubling the angle doubles the sine, so $\sin 60° = 1$. But $\sin 60° = \frac{\sqrt 3}{2} \approx 0.866$. The same slip produced $\sin 120° = \sin 90° + \sin 30°$ at the start. The graph shows what is wrong. A straight line through the origin, $y = k\theta$, does satisfy $y(2\theta) = 2y(\theta)$ and $y(\alpha + \beta) = y(\alpha) + y(\beta)$, and these rules are being borrowed from it. The sine graph is a wave, and the two counterexamples above show it obeys neither rule. The height of a point on a circle does not grow in proportion to the angle turned.

**Common mistake.** **Attaching the sign to the wrong coordinate.** A common answer for $\sin 120°$ is $-\frac{\sqrt 3}{2}$, on the grounds that "things go negative past 90°". Only the $x$ coordinate is negative in quadrant II. The point at 120° is above the $x$ axis, so its sine is positive. Decide each sign separately by asking: is the point left or right of the origin (cosine), and is it above or below (sine)?

## Looking back

The obstacle was that a definition built on right triangles cannot be asked about 120°. The way past it was to notice that the two legs of a triangle with hypotenuse 1 are also the coordinates of a point, and that coordinates remain available after the triangle is gone. Replacing a definition by an equivalent one that makes sense in more cases is a move you will see again whenever a formula is stretched beyond the setting that produced it.

Because $(\cos\theta, \sin\theta)$ is a point at distance 1 from the origin, its coordinates are tied together by the Pythagorean theorem. That relation, $\sin^2\theta + \cos^2\theta = 1$, is the subject of [the Pythagorean identity](@trigonometry/pythagorean-identity). Before that, [the lesson on radians](@trigonometry/radians) asks why a full turn should be 360 of anything.

**Check yourself.** What is $\cos 240°$?
Answer: $-\frac{1}{2}$ 240° is a half turn beyond 60°, and a half turn sends $(x, y)$ to $(-x, -y)$. So $P(240°) = \left(-\frac{1}{2}, -\frac{\sqrt 3}{2}\right)$ and the cosine is $-\frac{1}{2}$.

**Recap.** - In a right triangle with hypotenuse 1 and an acute angle $\theta$, the adjacent leg has length $\cos\theta$ and the opposite leg has length $\sin\theta$.
- For any angle $\theta$, turn the point $(1, 0)$ about the origin through $\theta$, counterclockwise for positive $\theta$. The point reached is $(\cos\theta, \sin\theta)$. For $0° < \theta < 90°$ this agrees with the triangle definition.
- Signs come from the quadrant: cosine is positive on the right half of the circle, sine on the top half.
- Exact values: $\sin 30° = \frac{1}{2}$, $\sin 45° = \frac{\sqrt 2}{2}$, $\sin 60° = \frac{\sqrt 3}{2}$, with the cosines in the reverse order. Symmetry carries them to the other quadrants.
- $\sin(-\theta) = -\sin\theta$, $\cos(-\theta) = \cos\theta$, $\sin(180° - \theta) = \sin\theta$, $\cos(180° - \theta) = -\cos\theta$, $\sin(\theta + 90°) = \cos\theta$, $\cos(\theta + 90°) = -\sin\theta$.
- Both functions repeat every 360° and stay between $-1$ and $1$. The cosine graph is the sine graph shifted 90° to the left.

## Problems

Draw the circle for each of these. The first three repeat the lesson's moves, the next three combine them, and the last two ask for an argument.

**Problem 1.** Find the exact values of $\sin 135°$ and $\cos 135°$.

**Solution.** $135° = 180° - 45°$, so $P(135°)$ is the mirror image of $P(45°) = \left(\frac{\sqrt 2}{2}, \frac{\sqrt 2}{2}\right)$ in the $y$ axis, which is $\left(-\frac{\sqrt 2}{2}, \frac{\sqrt 2}{2}\right)$. So $\sin 135° = \frac{\sqrt 2}{2}$ and $\cos 135° = -\frac{\sqrt 2}{2}$. The signs fit quadrant II.

**Problem 2.** Find the exact values of $\sin 300°$ and $\cos 300°$.

**Solution.** $300° = -60° + 360°$, so $P(300°) = P(-60°)$ by the full turn rule, and $P(-60°)$ is the mirror image of $P(60°) = \left(\frac{1}{2}, \frac{\sqrt 3}{2}\right)$ in the $x$ axis. So $P(300°) = \left(\frac{1}{2}, -\frac{\sqrt 3}{2}\right)$, giving $\cos 300° = \frac{1}{2}$ and $\sin 300° = -\frac{\sqrt 3}{2}$. The point is in quadrant IV, right of the origin and below it, which matches.

**Problem 3.** (a) In which quadrant is $\sin\theta < 0$ and $\cos\theta > 0$? (b) In which quadrant does the point at $1000°$ lie, and what are the signs of $\sin 1000°$ and $\cos 1000°$?

**Solution.** (a) A negative sine puts the point below the $x$ axis and a positive cosine puts it right of the $y$ axis. That is quadrant IV. (b) Remove full turns: $1000° - 2 \times 360° = 280°$, so $P(1000°) = P(280°)$. Since $270° < 280° < 360°$ the point is in quadrant IV, so $\sin 1000° < 0$ and $\cos 1000° > 0$. (A calculator gives about $-0.985$ and $0.174$.)

**Problem 4.** Find every angle $\theta$ with $0° \le \theta < 360°$ and $\cos\theta = -\frac{1}{2}$.

**Solution.** We need the points of the circle whose $x$ coordinate is $-\frac{1}{2}$. We know $\cos 60° = \frac{1}{2}$. Mirroring in the $y$ axis changes the sign of the cosine: $\cos(180° - 60°) = \cos 120° = -\frac{1}{2}$. Mirroring that point in the $x$ axis keeps the cosine: $\cos(-120°) = -\frac{1}{2}$, and $-120° + 360° = 240°$. The vertical line $x = -\frac{1}{2}$ meets the circle in exactly two points, so these are all: $\theta = 120°$ and $\theta = 240°$.

**Problem 5.** A circle of radius $r$ is centered at the origin. Explain why the point on it at angle $\theta$ from the positive $x$ axis is $(r\cos\theta, r\sin\theta)$, and find the point at 150° on the circle of radius 5.

**Solution.** Scaling the plane by the factor $r$ about the origin multiplies both coordinates of every point by $r$. It carries the unit circle to the circle of radius $r$, and it moves each point along its own ray from the origin, so it does not change the angle. The point $(\cos\theta, \sin\theta)$ therefore goes to the point at angle $\theta$ on the larger circle, which is $(r\cos\theta, r\sin\theta)$. For $r = 5$ and $\theta = 150°$, using $\cos 150° = -\frac{\sqrt 3}{2}$ and $\sin 150° = \frac{1}{2}$ from the first example, the point is $\left(-\frac{5\sqrt 3}{2}, \frac{5}{2}\right) \approx (-4.33, 2.5)$.

**Problem 6.** A Ferris wheel has radius 20 m and its hub is 22 m above the ground. A rider starts level with the hub, at the rightmost point, and the wheel turns counterclockwise. (a) How high is the rider after the wheel has turned 210°? (b) At which angles in the first turn is the rider 32 m above the ground?

**Solution.** Measured from the hub, the rider is at the point at angle $\theta$ on a circle of radius 20, so by the previous problem the rider's height above the hub is $20\sin\theta$ meters and the height above the ground is $22 + 20\sin\theta$ meters.

(a) $210° = 30° + 180°$, and a half turn reverses both coordinates, so $\sin 210° = -\sin 30° = -\frac{1}{2}$. The height is $22 + 20 \times \left(-\frac{1}{2}\right) = 12$ m.

(b) $22 + 20\sin\theta = 32$ gives $\sin\theta = \frac{1}{2}$. One solution is $\theta = 30°$, and its mirror image in the $y$ axis is $\theta = 180° - 30° = 150°$. A horizontal line meets the circle at most twice, so the rider is at 32 m when the wheel has turned 30° and again at 150°.

**Problem 7.** The point $(-0.6, 0.8)$ is at distance $\sqrt{0.36 + 0.64} = 1$ from the origin, so it is $P(\theta)$ for some angle $\theta$. Without finding $\theta$, give the values of $\sin\theta$, $\cos\theta$, $\sin(\theta + 180°)$, $\cos(\theta + 90°)$, $\sin(180° - \theta)$ and $\cos(-\theta)$.

**Solution.** By definition $\cos\theta = -0.6$ and $\sin\theta = 0.8$. A half turn sends $(x, y)$ to $(-x, -y)$, so $\sin(\theta + 180°) = -0.8$. The quarter turn rule gives $\cos(\theta + 90°) = -\sin\theta = -0.8$. The mirror in the $y$ axis keeps the height: $\sin(180° - \theta) = 0.8$. The mirror in the $x$ axis keeps the horizontal coordinate: $\cos(-\theta) = -0.6$.

**Problem 8.** (a) Find every angle $\theta$ with $0° \le \theta < 360°$ and $\sin\theta = \cos\theta$, and prove there are no others. (b) For which angles in that range is $\sin\theta > \cos\theta$?

**Solution.** (a) $\sin\theta = \cos\theta$ says that $P(\theta)$ has equal coordinates, so it lies on the line $y = x$. That line passes through the origin and through $P(45°) = \left(\frac{\sqrt 2}{2}, \frac{\sqrt 2}{2}\right)$. A line through the center of a circle meets the circle in exactly two points, at opposite ends of a diameter, so the only other point is the one a half turn away, $P(225°) = \left(-\frac{\sqrt 2}{2}, -\frac{\sqrt 2}{2}\right)$. The solutions are $\theta = 45°$ and $\theta = 225°$.

(b) $\sin\theta > \cos\theta$ says $y > x$, so the point lies above the line $y = x$. The line cuts the circle into two arcs, and the one above it runs counterclockwise from 45° to 225°, passing through the top of the circle. So $\sin\theta > \cos\theta$ exactly when $45° < \theta < 225°$. Check with one angle on each arc: at 90°, $1 > 0$ holds; at 0°, $0 > 1$ fails.

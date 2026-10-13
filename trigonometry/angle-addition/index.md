# Angle addition formulas: sin(a + b) from one picture

> The sine of a sum is not the sum of the sines. Two stacked right triangles show what it is, and a rotated chord proves the formulas for every angle.

Series: Trigonometry (https://www.monocurl.com/monocurl-essays/trigonometry/)
Canonical: https://www.monocurl.com/monocurl-essays/trigonometry/angle-addition/
Keywords: angle addition formula, sin(a+b) proof, cos(a+b) formula, sum and difference identities, double angle formula, sin 75 degrees exact value, sin 2x = 2 sin x cos x

[Figure 1, animation: Two right triangles are stacked, the lower with angle \alpha and the upper with angle \beta = 30° and hypotenuse 1, and a rectangle is drawn around them. As \alpha changes, the green left side has length \sin(\alpha + \beta) and always equals the blue and orange pieces of the right side together.]

You know that $\sin 30° = 0.5$ and $\sin 60° \approx 0.866$. What is $\sin(30° + 60°)$? If sine treated a sum the way multiplication by a number does, the answer would be $0.5 + 0.866 = 1.366$. But $30° + 60° = 90°$, and $\sin 90° = 1$. The guess is wrong, and it could not have been right, because a sine is the height of a point on a circle of radius 1 and no such point is 1.366 above the center.

[Figure 2, animation: The graph of \sin\theta from 0° to 96°. The heights at 30° and 60° are carried over to 90° and stacked. Together they reach 1.366, well above the true value \sin 90° = 1.]

Still, the point at 90° is reached by turning 30° and then 60° more, so its position has to be determined somehow by what we know about 30° and 60°. The question of this lesson is how. Given the sines and cosines of two angles $\alpha$ and $\beta$, what are $\sin(\alpha + \beta)$ and $\cos(\alpha + \beta)$? The answer gives exact values for new angles such as 75° and 15°, it contains the double angle formulas, and it is the step on which the [derivative of sine](@calculus/derivative-of-sine) and the addition of waves both rest.

## What we are allowed to use

Two facts from [the unit circle lesson](@trigonometry/unit-circle) carry the whole argument. The first is the definition: for any angle $\theta$, turning the point $(1, 0)$ about the origin through $\theta$ brings it to the point $(\cos\theta, \sin\theta)$. The second is what this says about a right triangle. If a right triangle has hypotenuse 1 and an acute angle $\theta$, the leg next to the angle has length $\cos\theta$ and the leg across from it has length $\sin\theta$. Scale the triangle so that its hypotenuse is $c$ and both legs scale with it, to $c\cos\theta$ and $c\sin\theta$.

That second fact converts a length along a slanted line into a horizontal part and a vertical part. We will need it three times.

## A first case: 30° plus 45°

Before any letters, take two angles whose sines and cosines we know exactly, 30° and 45°, and look for $\sin 75°$. By definition it is the height of the point $P$ that lies 1 unit from the origin $O$ in the direction 75°. Nothing we know speaks about 75° directly. What we do know about are right triangles with a 30° angle or a 45° angle, so the plan is to reach $P$ using only those.

[Figure 3, steps: Finding \sin 75° by stacking a 45° right triangle with hypotenuse 1 on top of a 30° right triangle. The height of the top corner P is the sum of two vertical pieces, 0.354 and 0.612.]

  - step: The point P is 1 unit from O in the direction 75°, so its height above the base line is sin 75°. The 75° is built as 30° and then 45° more.
  - step: Drop a perpendicular from P to the 30° ray, meeting it at B. Triangle OBP has hypotenuse 1 and a 45° angle at O, so OB = cos 45° ≈ 0.707 and BP = sin 45° ≈ 0.707.
  - step: Drop a perpendicular from B to the base line at A. Triangle OAB has hypotenuse 0.707 and a 30° angle at O, so B is 0.707 × sin 30° ≈ 0.354 above the base.
  - step: Close the rectangle through O, A and P. In the corner triangle BCP the angle at B is 30° again and the hypotenuse is BP ≈ 0.707, so P is 0.707 × cos 30° ≈ 0.612 above B.
  - step: The left side OD is the height of P, and it is as long as the right side AC. So sin 75° ≈ 0.354 + 0.612 = 0.966.
Each step used the triangle fact once. From $P$ we dropped a perpendicular to the 30° ray, because that makes a right triangle $OBP$ with the 45° angle in it and hypotenuse 1: its legs are $OB = \cos 45°$ and $BP = \sin 45°$, both $\frac{\sqrt 2}{2} \approx 0.707$. That locates $P$ by going 0.707 along the slanted ray and then 0.707 at right angles to it. Height is measured vertically, so each of those two slanted segments has to be converted into its vertical part.

The segment $OB$ is the hypotenuse of triangle $OAB$, which has the 30° angle at $O$. Its vertical leg is $AB = 0.707 \times \sin 30° \approx 0.354$. The segment $BP$ is the hypotenuse of the corner triangle $BCP$. The angle of that triangle at $B$ is 30° too, for this reason: along the vertical line through $A$, $B$ and $C$, the three angles at $B$ add to 180°. One is the angle of triangle $OAB$ at $B$, which is $90° - 30° = 60°$. The next is the right angle $OBP$. That leaves $180° - 60° - 90° = 30°$. So the vertical leg is $BC = 0.707 \times \cos 30° \approx 0.612$.

The exact values are $\frac{\sqrt 2}{2} \cdot \frac{1}{2}$ and $\frac{\sqrt 2}{2} \cdot \frac{\sqrt 3}{2}$, so

$$
\sin 75° = \frac{\sqrt 2}{4} + \frac{\sqrt 6}{4} = \frac{\sqrt 2 + \sqrt 6}{4} \approx 0.9659,
$$

which agrees with a calculator.

**Pause and try.** The same rectangle contains $\cos 75°$. It is the length of the top side from $D$ to $P$. Find it, using the bottom side $OA$ and the short piece $PC$ of the top side.

**Answer.** The bottom side is the horizontal leg of triangle $OAB$: $OA = \frac{\sqrt 2}{2}\cos 30° \approx 0.6124$. The piece $PC$ is the horizontal leg of triangle $BCP$: $PC = \frac{\sqrt 2}{2}\sin 30° \approx 0.3536$. The top side $DC$ is as long as the bottom side, so $DP = OA - PC \approx 0.6124 - 0.3536 = 0.2588$. Exactly, $\cos 75° = \frac{\sqrt 6 - \sqrt 2}{4} \approx 0.2588$. That $DP$ is the cosine of 75° follows from triangle $ODP$, which has hypotenuse $OP = 1$ and, at $P$, the angle between $OP$ and the horizontal, which is 75°.

## The same picture with letters

Nothing in that computation depended on the angles being 30° and 45°, only on their sum being less than 90°, so that the stacked triangles stay inside one quarter of the plane.

**Pause and try.** Redraw the rectangle with the lower angle called $\alpha$ and the upper angle called $\beta$, keeping $OP = 1$. Label $OB$, $BP$, and then all six segments on the boundary of the rectangle: $AB$, $BC$, $OA$, $PC$, $OD$ and $DP$.

**Answer.** $OB = \cos\beta$ and $BP = \sin\beta$. Triangle $OAB$ has hypotenuse $\cos\beta$ and angle $\alpha$, so $OA = \cos\alpha\cos\beta$ and $AB = \sin\alpha\cos\beta$. Triangle $BCP$ has hypotenuse $\sin\beta$ and angle $\alpha$ at $B$, so $BC = \cos\alpha\sin\beta$ and $PC = \sin\alpha\sin\beta$. Triangle $ODP$ has hypotenuse 1 and angle $\alpha + \beta$ at $P$, so $OD = \sin(\alpha+\beta)$ and $DP = \cos(\alpha+\beta)$. The figure below shows all of them.

[Figure 4, image: The stacked triangles for general acute angles \alpha and \beta (drawn with 25° and 30°). The left side \sin(\alpha+\beta) equals the two pieces of the right side, and the bottom side \cos\alpha\cos\beta equals the two pieces of the top side.]

A rectangle has equal opposite sides. Reading the vertical pair gives the sine of the sum, and reading the horizontal pair gives the cosine.

**Theorem.** **(Angle addition, acute case.)** Let $\alpha > 0°$ and $\beta > 0°$ with $\alpha + \beta < 90°$. Then

$$
\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta,
$$

$$
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta.
$$

**Proof.** From a point $O$ draw a horizontal ray, a second ray at angle $\alpha$ above it, and a third at angle $\beta$ above the second. Since $\alpha + \beta < 90°$ all three lie in one quarter plane. Mark $P$ on the third ray with $OP = 1$, let $B$ be the foot of the perpendicular from $P$ to the second ray, and let $A$ be the foot of the perpendicular from $B$ to the first ray.

Triangle $OBP$ has a right angle at $B$, the angle $\beta$ at $O$ and hypotenuse 1, so $OB = \cos\beta$ and $BP = \sin\beta$. Triangle $OAB$ has a right angle at $A$, the angle $\alpha$ at $O$ and hypotenuse $\cos\beta$, so $OA = \cos\alpha\cos\beta$ and $AB = \sin\alpha\cos\beta$.

Draw the horizontal line through $P$. Let it meet the vertical line $AB$ at $C$ and the vertical line through $O$ at $D$, so that $OACD$ is a rectangle. The segment $BP$ is perpendicular to the second ray, so it points up and to the left; hence $P$ is higher than $B$ and to the left of the line $AB$, which puts $B$ between $A$ and $C$, and $P$ between $D$ and $C$ (it is to the right of $D$ because $\alpha + \beta < 90°$).

At $B$, the angles $ABO$, $OBP$ and $PBC$ lie along the straight line $AC$ and add to 180°. The first is $90° - \alpha$, from the angle sum of triangle $OAB$, and the second is 90°, so angle $PBC = \alpha$. Triangle $BCP$ has a right angle at $C$, the angle $\alpha$ at $B$ and hypotenuse $\sin\beta$, so $BC = \cos\alpha\sin\beta$ and $PC = \sin\alpha\sin\beta$.

The lines $DC$ and $OA$ are parallel and $OP$ crosses both, so the alternate angles $DPO$ and $POA$ are equal: angle $DPO = \alpha + \beta$. Triangle $ODP$ has a right angle at $D$ and hypotenuse 1, so $OD = \sin(\alpha+\beta)$ and $DP = \cos(\alpha+\beta)$.

Finally $OD = AC = AB + BC$ and $DP = DC - PC = OA - PC$, which are the two formulas.

The proof is the step-through figure with the two places checked where a drawing could mislead: that the corner angle at $B$ really is $\alpha$, and that the points sit on the sides of the rectangle in the order drawn.

**Key idea.** To find the sine of a sum, each angle contributes its sine multiplied by the other angle's cosine: $\sin(\alpha+\beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$. For the cosine, multiply like with like and subtract: $\cos(\alpha+\beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$.

## What the picture does not cover

The picture needs both angles positive and their sum below 90°. Our opening example, 30° and 60°, already falls outside it: at a sum of exactly 90° the point $P$ lands on the corner $D$ and the triangle $ODP$ collapses. Beyond 90° the point $P$ moves to the left of $O$ and a different drawing is needed, and for angles such as 200° or $-40°$ there are no right triangles to stack at all.

**Pause and try.** Ignore that for a moment and put $\alpha = 30°$, $\beta = 60°$ into the sine formula. Does it give $\sin 90° = 1$? Then try $\alpha = 100°$, $\beta = 50°$ with a calculator, where the left side is $\sin 150° = 0.5$.

**Answer.** For 30° and 60°: $\sin 30°\cos 60° + \cos 30°\sin 60° = \frac{1}{2}\cdot\frac{1}{2} + \frac{\sqrt 3}{2}\cdot\frac{\sqrt 3}{2} = \frac{1}{4} + \frac{3}{4} = 1$. For 100° and 50°: $\sin 100°\cos 50° \approx 0.9848 \times 0.6428 \approx 0.6330$ and $\cos 100°\sin 50° \approx -0.1736 \times 0.7660 \approx -0.1330$, which add to $0.5000$. The formula holds in both cases, and in the second one a negative cosine was needed to make it come out.

[Figure 5, image: A check of the sine formula with \beta = 50° and \alpha running over a full turn. The dots are \sin\alpha\cos 50° + \cos\alpha\sin 50° computed every 20°, and they all land on the green curve \sin(\alpha + 50°), including where the picture proof says nothing.]

Nineteen agreeing dots are evidence, and they are not a proof. To prove the formulas for every angle we need an argument that never mentions a triangle, and the unit circle definition offers one, because it speaks about rotations and rotations do not care what size the angles are.

## A proof for every angle

Write $P(\theta)$ for the point $(\cos\theta, \sin\theta)$ of the unit circle. Take any two angles $\alpha$ and $\beta$ and join $P(\alpha)$ to $P(\beta)$ by a straight segment, a chord of the circle. Now turn the whole plane about the origin through $-\beta$. Turning through $\theta$ and then through $-\beta$ is the same as turning through $\theta - \beta$, so $P(\beta)$ goes to $P(0) = (1, 0)$ and $P(\alpha)$ goes to $P(\alpha - \beta)$.

[Figure 6, animation: The chord from P(\alpha) to P(\beta), here with \alpha = 215° and \beta = 75°, is turned back through \beta. It arrives as the chord from P(\alpha - \beta) to P(0) with its length unchanged.]

A rotation moves every point but changes no distance, so the chord has the same length before and after. Both lengths can be computed from coordinates with the distance formula, which is the [Pythagorean theorem](@geometry/pythagorean-theorem): the squared distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $(x_1 - x_2)^2 + (y_1 - y_2)^2$. Setting the two computations equal gives an equation relating $\cos(\alpha - \beta)$ to the sines and cosines of $\alpha$ and $\beta$. That is the plan. Here is the full statement and the computation.

**Theorem.** **(Angle addition and subtraction.)** For all real numbers $\alpha$ and $\beta$, read as angles,

$$
\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta, \qquad \cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta,
$$

$$
\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta, \qquad \sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta.
$$

**Proof.** *Cosine of a difference.* The squared distance between $P(\alpha) = (\cos\alpha, \sin\alpha)$ and $P(\beta) = (\cos\beta, \sin\beta)$ is

$$
(\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2 = \cos^2\alpha + \sin^2\alpha + \cos^2\beta + \sin^2\beta - 2\cos\alpha\cos\beta - 2\sin\alpha\sin\beta.
$$

By the [Pythagorean identity](@trigonometry/pythagorean-identity), $\cos^2\theta + \sin^2\theta = 1$ for every $\theta$, so this equals $2 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$. The rotation through $-\beta$ carries the two points to $P(\alpha - \beta)$ and $(1, 0)$, whose squared distance is

$$
(\cos(\alpha-\beta) - 1)^2 + \sin^2(\alpha - \beta) = 2 - 2\cos(\alpha - \beta),
$$

by the same identity. A rotation preserves distance, so the two expressions are equal, and cancelling gives the first formula. No assumption was made about the sizes or signs of $\alpha$ and $\beta$.

*Cosine of a sum.* Replace $\beta$ by $-\beta$ in the first formula and use $\cos(-\beta) = \cos\beta$ and $\sin(-\beta) = -\sin\beta$, which hold because $P(-\beta)$ is the mirror image of $P(\beta)$ in the $x$ axis.

*Complements.* Put $\alpha = 90°$ in the first formula: $\cos(90° - \beta) = 0\cdot\cos\beta + 1\cdot\sin\beta = \sin\beta$. Applying this to the angle $90° - \beta$ in place of $\beta$ gives $\cos\beta = \sin(90° - \beta)$.

*Sine of a sum.* By the complement rules and then the first formula,

$$
\sin(\alpha + \beta) = \cos\bigl((90° - \alpha) - \beta\bigr) = \cos(90° - \alpha)\cos\beta + \sin(90° - \alpha)\sin\beta = \sin\alpha\cos\beta + \cos\alpha\sin\beta.
$$

*Sine of a difference.* Replace $\beta$ by $-\beta$ in the sine of a sum.

So the stacked triangles told us what the formulas are and why the mixed products appear, and the chord shows that the same formulas hold for all angles, where no triangle is available. Nothing here depends on the unit of angle either: in [radians](@trigonometry/radians) the formulas read the same, with $\frac{\pi}{2}$ in place of 90° in the proof.

## Doubling an angle

**Pause and try.** Put $\beta = \alpha$ in the formulas for $\sin(\alpha + \beta)$ and $\cos(\alpha+\beta)$. What do they say about $\sin 2\alpha$ and $\cos 2\alpha$? Check your formula for $\sin 2\alpha$ at $\alpha = 30°$.

**Answer.** $\sin 2\alpha = \sin\alpha\cos\alpha + \cos\alpha\sin\alpha = 2\sin\alpha\cos\alpha$, and $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha$. At 30°: $2 \cdot \frac{1}{2} \cdot \frac{\sqrt 3}{2} = \frac{\sqrt 3}{2}$, which is $\sin 60°$.

These are the **double angle formulas**. For the cosine, the Pythagorean identity lets us trade $\cos^2\alpha$ for $1 - \sin^2\alpha$ or the reverse, which gives three equivalent forms:

$$
\sin 2\alpha = 2\sin\alpha\cos\alpha, \qquad \cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1.
$$

They hold for every $\alpha$, since they are special cases of the theorem. When $0° < 2\alpha < 180°$ the sine formula can also be seen directly, as two ways of measuring one area.

[Figure 7, image: An isosceles triangle with two sides of length 1 and the angle 2\alpha between them, drawn twice. With a side of length 1 as base its height is \sin 2\alpha. Cut along the bisector, its base is 2\sin\alpha and its height is \cos\alpha. Equal areas give \sin 2\alpha = 2\sin\alpha\cos\alpha.]

On the left, the triangle stands on one of its unit sides. The far end of the other unit side is at height $\sin 2\alpha$, so the area is $\frac{1}{2}\sin 2\alpha$. On the right, the bisector of the angle $2\alpha$ cuts the triangle into two congruent right triangles, each with hypotenuse 1 and angle $\alpha$, so it meets the third side at a right angle. That side has length $2\sin\alpha$ and the bisector has length $\cos\alpha$, so the area is $\sin\alpha\cos\alpha$. It is one triangle, so $\frac{1}{2}\sin 2\alpha = \sin\alpha\cos\alpha$.

**Common mistake.** **Writing $\sin 2\theta = 2\sin\theta$.** This is the opening error again, with both angles equal. At $\theta = 90°$ it claims $\sin 180° = 2$, when $\sin 180° = 0$. The correct formula carries a factor $\cos\theta$, which is what keeps the result between $-1$ and $1$.

[Figure 8, image: The graphs of 2\sin\theta and \sin 2\theta over one full turn. They differ in height and in how often they repeat, and agree only where both are zero. The dots are 2\sin\theta\cos\theta, which follows \sin 2\theta exactly.]

## Worked examples

**Worked example.** **Find $\sin 15°$ exactly.**

We want to write 15° using angles we know, and $15° = 45° - 30°$ does it. By the formula for the sine of a difference,

$$
\sin 15° = \sin 45°\cos 30° - \cos 45°\sin 30° = \frac{\sqrt 2}{2}\cdot\frac{\sqrt 3}{2} - \frac{\sqrt 2}{2}\cdot\frac{1}{2} = \frac{\sqrt 6 - \sqrt 2}{4} \approx 0.2588.
$$

*Check.* This is the value we found for $\cos 75°$, as it must be, since $\sin 15° = \cos(90° - 15°)$ by the complement rule.

**Worked example.** **The angle $\alpha$ lies in the second quadrant with $\sin\alpha = \frac{3}{5}$, and $\beta$ lies in the first quadrant with $\sin\beta = \frac{5}{13}$. Find $\sin(\alpha+\beta)$ and $\cos(\alpha+\beta)$.**

The formulas need all four of $\sin\alpha$, $\cos\alpha$, $\sin\beta$, $\cos\beta$, so first find the cosines. From $\sin^2 + \cos^2 = 1$, $\cos^2\alpha = 1 - \frac{9}{25} = \frac{16}{25}$, and in the second quadrant the cosine is negative, so $\cos\alpha = -\frac{4}{5}$. Likewise $\cos^2\beta = 1 - \frac{25}{169} = \frac{144}{169}$, and in the first quadrant $\cos\beta = \frac{12}{13}$. Then

$$
\sin(\alpha+\beta) = \frac{3}{5}\cdot\frac{12}{13} + \left(-\frac{4}{5}\right)\frac{5}{13} = \frac{36 - 20}{65} = \frac{16}{65},
$$

$$
\cos(\alpha+\beta) = \left(-\frac{4}{5}\right)\frac{12}{13} - \frac{3}{5}\cdot\frac{5}{13} = \frac{-48 - 15}{65} = -\frac{63}{65}.
$$

*Check.* The answers must themselves be the coordinates of a point of the unit circle: $16^2 + 63^2 = 256 + 3969 = 4225 = 65^2$. The picture proof could not have handled this problem, because $\alpha$ is obtuse.

**Worked example.** **A formula for $\tan(\alpha + \beta)$.**

Recall $\tan\theta = \frac{\sin\theta}{\cos\theta}$, defined when $\cos\theta \ne 0$. Dividing the two addition formulas,

$$
\tan(\alpha+\beta) = \frac{\sin\alpha\cos\beta + \cos\alpha\sin\beta}{\cos\alpha\cos\beta - \sin\alpha\sin\beta}.
$$

We would like this in terms of $\tan\alpha$ and $\tan\beta$, so divide the numerator and the denominator by $\cos\alpha\cos\beta$, which is allowed when neither cosine is zero:

$$
\tan(\alpha+\beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}.
$$

The formula requires $\cos\alpha$, $\cos\beta$ and $\cos(\alpha+\beta)$ all to be nonzero.

*Check.* With $\alpha = \beta = 30°$, where $\tan 30° = \frac{1}{\sqrt 3}$: the right side is $\frac{2/\sqrt 3}{1 - 1/3} = \frac{2}{\sqrt 3}\cdot\frac{3}{2} = \sqrt 3 = \tan 60°$. With $\alpha = \beta = 45°$ the denominator is $1 - 1 = 0$, and correctly so, because $\tan 90°$ is undefined.

**Common mistake.** **Putting a plus sign in $\cos(\alpha + \beta)$.** The sine formula has the same sign as the angle sum, so it is tempting to write $\cos(\alpha+\beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$. Test it at $\alpha = \beta = 45°$: the left side is $\cos 90° = 0$, and the right side would be $\frac{1}{2} + \frac{1}{2} = 1$. The minus sign has a reason you can remember: for acute angles, making an angle larger makes its cosine smaller, so adding $\beta$ must take something away from $\cos\alpha\cos\beta$. In the rectangle, it is the piece $PC$ being cut off the top side.

## Looking back

The obstacle was that the point at angle $\alpha + \beta$ is described most simply in a tilted frame, as so far along the $\alpha$ direction and so far across it, while sine and cosine ask for its vertical and horizontal position. The stacked triangles resolve each tilted piece into vertical and horizontal parts, which is where the four products come from. That handled acute angles, and the proof for all angles came from giving up triangles and using the one property of a rotation that holds everywhere, that it preserves distance.

Later lessons lean on these formulas. The symmetry rule $\sin(180° - \theta) = \sin\theta$ that they contain is what produces two answers in [the ambiguous case of the law of sines](@trigonometry/law-of-sines-and-cosines), and in [the lesson on sine waves](@trigonometry/sine-waves) they explain why two waves of the same frequency add up to a single wave of that frequency.

**Check yourself.** Without a calculator: what is $\sin 20°\cos 40° + \cos 20°\sin 40°$?
Answer: $\frac{\sqrt 3}{2}$ It is $\sin\alpha\cos\beta + \cos\alpha\sin\beta$ with $\alpha = 20°$ and $\beta = 40°$, so it equals $\sin 60° = \frac{\sqrt 3}{2}$.

**Recap.** - $\sin(\alpha+\beta) \ne \sin\alpha + \sin\beta$. For example $\sin 30° + \sin 60° \approx 1.366$ while $\sin 90° = 1$.
- $\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$ and $\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$, for all real $\alpha$ and $\beta$.
- Two stacked right triangles in a rectangle prove the sum formulas when $\alpha, \beta > 0°$ and $\alpha + \beta < 90°$: opposite sides of the rectangle are equal.
- For all angles, compare the chord from $P(\alpha)$ to $P(\beta)$ with its rotated copy from $P(\alpha - \beta)$ to $(1, 0)$. Equal lengths give the formula for $\cos(\alpha - \beta)$, and the other three follow from it.
- Double angles: $\sin 2\alpha = 2\sin\alpha\cos\alpha$ and $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1$.
- $\tan(\alpha+\beta) = \dfrac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}$ when all three tangents are defined.

## Problems

The first three repeat the lesson's moves, the next three combine them, and the last two extend the lesson.

**Problem 1.** Find $\cos 15°$ and $\sin 105°$ exactly. Explain without computing why they had to come out equal.

**Solution.** $\cos 15° = \cos(45° - 30°) = \cos 45°\cos 30° + \sin 45°\sin 30° = \frac{\sqrt 2}{2}\cdot\frac{\sqrt 3}{2} + \frac{\sqrt 2}{2}\cdot\frac{1}{2} = \frac{\sqrt 6 + \sqrt 2}{4} \approx 0.9659$. And $\sin 105° = \sin(60° + 45°) = \sin 60°\cos 45° + \cos 60°\sin 45° = \frac{\sqrt 3}{2}\cdot\frac{\sqrt 2}{2} + \frac{1}{2}\cdot\frac{\sqrt 2}{2} = \frac{\sqrt 6 + \sqrt 2}{4}$. They are equal because $\sin 105° = \sin(180° - 105°) = \sin 75°$ by the mirror symmetry of the circle in the $y$ axis, and $\sin 75° = \cos(90° - 75°) = \cos 15°$ by the complement rule. Both equal the $\sin 75°$ of the lesson.

**Problem 2.** An acute angle $\theta$ has $\sin\theta = \frac{3}{5}$. Find $\sin 2\theta$ and $\cos 2\theta$. In which quadrant is the point at angle $2\theta$?

**Solution.** Since $\theta$ is acute, $\cos\theta = +\sqrt{1 - \frac{9}{25}} = \frac{4}{5}$. Then $\sin 2\theta = 2\cdot\frac{3}{5}\cdot\frac{4}{5} = \frac{24}{25}$ and $\cos 2\theta = \frac{16}{25} - \frac{9}{25} = \frac{7}{25}$. Both are positive, so the point at $2\theta$ is in the first quadrant. Check: $24^2 + 7^2 = 576 + 49 = 625 = 25^2$.

**Problem 3.** Use the addition and subtraction formulas to recover two symmetry rules of the unit circle: $\sin(\theta + 90°) = \cos\theta$ and $\sin(180° - \theta) = \sin\theta$.

**Solution.** $\sin(\theta + 90°) = \sin\theta\cos 90° + \cos\theta\sin 90° = \sin\theta\cdot 0 + \cos\theta\cdot 1 = \cos\theta$. And $\sin(180° - \theta) = \sin 180°\cos\theta - \cos 180°\sin\theta = 0\cdot\cos\theta - (-1)\sin\theta = \sin\theta$. The general formulas contain the symmetry rules as the special cases where one angle is a multiple of 90°.

**Problem 4.** A student computes $\cos 75° = \cos 45°\cos 30° + \sin 45°\sin 30° \approx 0.966$. Without redoing the calculation, explain how you can tell the answer is wrong, then say what the student actually computed.

**Solution.** As the angle goes from 0° to 90° the point of the unit circle moves steadily to the left, so the cosine decreases. Since $75° > 45°$, $\cos 75°$ must be less than $\cos 45° \approx 0.707$, and $0.966$ is not. The expression with a plus sign between like products is the cosine of a difference: the student computed $\cos(45° - 30°) = \cos 15°$. The correct value is $\cos 45°\cos 30° - \sin 45°\sin 30° \approx 0.6124 - 0.3536 = 0.2588$.

**Problem 5.** One line through the origin has slope $\frac{1}{2}$ and another has slope $\frac{1}{3}$. Let $\alpha$ and $\beta$ be the angles they make with the positive $x$ axis, so that $\tan\alpha = \frac{1}{2}$ and $\tan\beta = \frac{1}{3}$. Show that $\alpha + \beta$ is exactly 45°.

**Solution.** By the tangent formula, $\tan(\alpha+\beta) = \dfrac{\frac{1}{2} + \frac{1}{3}}{1 - \frac{1}{2}\cdot\frac{1}{3}} = \dfrac{5/6}{5/6} = 1$. Both slopes are positive and less than 1, so $\alpha$ and $\beta$ are each between 0° and 45°, and their sum is between 0° and 90°. The only angle in that range with tangent 1 is 45°. (A calculator gives $\alpha \approx 26.565°$ and $\beta \approx 18.435°$.) The range check matters: $\tan 225° = 1$ as well, so the value of the tangent alone does not determine the angle.

**Problem 6.** Prove that $\sin 3\theta = 3\sin\theta - 4\sin^3\theta$ for every $\theta$, and check it at $\theta = 30°$.

**Solution.** Write $3\theta = 2\theta + \theta$. Then $\sin 3\theta = \sin 2\theta\cos\theta + \cos 2\theta\sin\theta$. Use $\sin 2\theta = 2\sin\theta\cos\theta$ and the form $\cos 2\theta = 1 - 2\sin^2\theta$, chosen because the target contains only sines:

$$
\sin 3\theta = 2\sin\theta\cos^2\theta + (1 - 2\sin^2\theta)\sin\theta.
$$

Replace $\cos^2\theta$ by $1 - \sin^2\theta$: $\sin 3\theta = 2\sin\theta - 2\sin^3\theta + \sin\theta - 2\sin^3\theta = 3\sin\theta - 4\sin^3\theta$. At 30°: $3\cdot\frac{1}{2} - 4\cdot\frac{1}{8} = \frac{3}{2} - \frac{1}{2} = 1 = \sin 90°$.

**Problem 7.** The picture proof covers only $\alpha, \beta > 0°$ with $\alpha + \beta < 90°$. Here is one step of a way to extend it without the chord. Suppose both sum formulas are known to hold for a particular pair $(\alpha, \beta)$. Using only the quarter turn rules $\sin(\theta + 90°) = \cos\theta$ and $\cos(\theta + 90°) = -\sin\theta$, show that both formulas then hold for the pair $(\alpha + 90°, \beta)$.

**Solution.** Write $\alpha' = \alpha + 90°$, so $\sin\alpha' = \cos\alpha$ and $\cos\alpha' = -\sin\alpha$. For the sine: $\sin(\alpha' + \beta) = \sin\bigl((\alpha+\beta) + 90°\bigr) = \cos(\alpha+\beta)$, which by assumption is $\cos\alpha\cos\beta - \sin\alpha\sin\beta = \sin\alpha'\cos\beta + \cos\alpha'\sin\beta$. That is the sine formula for $(\alpha', \beta)$. For the cosine: $\cos(\alpha'+\beta) = \cos\bigl((\alpha+\beta) + 90°\bigr) = -\sin(\alpha+\beta) = -\sin\alpha\cos\beta - \cos\alpha\sin\beta = \cos\alpha'\cos\beta - \sin\alpha'\sin\beta$, the cosine formula for $(\alpha', \beta)$. The same works for $\beta$, and for subtracting 90°, so once the formulas are known for all $\alpha$ and $\beta$ from 0° up to 90° they spread to every pair of angles. Getting that whole square of angles from the picture still takes separate arguments for the cases $\alpha + \beta \ge 90°$ and for an angle equal to 0°, which is why the lesson used the chord.

**Problem 8.** (a) Show that $\sin(\alpha+\beta) + \sin(\alpha-\beta) = 2\sin\alpha\cos\beta$. (b) By choosing $\alpha$ and $\beta$ suitably, deduce that for all $x$ and $y$

$$
\sin x + \sin y = 2\sin\frac{x+y}{2}\cos\frac{x-y}{2}.
$$

(c) Check (b) with $x = 90°$ and $y = 30°$.

**Solution.** (a) Add the two formulas $\sin(\alpha+\beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$ and $\sin(\alpha-\beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta$. The terms $\cos\alpha\sin\beta$ cancel and $2\sin\alpha\cos\beta$ remains. (b) We want $\alpha + \beta = x$ and $\alpha - \beta = y$. Adding these gives $\alpha = \frac{x+y}{2}$ and subtracting gives $\beta = \frac{x-y}{2}$. Substituting into (a) gives the stated formula. (c) The left side is $1 + \frac{1}{2} = \frac{3}{2}$. The right side is $2\sin 60°\cos 30° = 2\cdot\frac{\sqrt 3}{2}\cdot\frac{\sqrt 3}{2} = \frac{3}{2}$. This "sum to product" formula returns in [the lesson on sine waves](@trigonometry/sine-waves), where it explains the beating of two notes that are slightly out of tune.

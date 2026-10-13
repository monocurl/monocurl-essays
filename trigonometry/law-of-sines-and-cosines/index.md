# Law of cosines and law of sines: solving any triangle

> The law of cosines is the Pythagorean theorem corrected for angles other than 90°. With the law of sines it solves any triangle, two-answer case included.

Series: Trigonometry (https://www.monocurl.com/monocurl-essays/trigonometry/)
Canonical: https://www.monocurl.com/monocurl-essays/trigonometry/law-of-sines-and-cosines/
Keywords: law of cosines, law of sines, law of cosines proof, solving triangles, ambiguous case SSA, find third side of a triangle, area of a triangle with sine, circumradius

[Figure 1, animation: Two rods of lengths 5 and 8 are hinged at C, and the orange side c closes the triangle. At 90° the bar for c^2 matches a^2 + b^2 = 89. Closing the hinge makes c^2 fall short and opening it makes c^2 overshoot. The sweep ends at 60°, where c = 7 exactly.]

Two straight roads leave a junction. One runs 5 km to a farm and the other runs 8 km to a mill, and the angle between them at the junction is 60°. How far is it from the farm straight across to the mill?

If the angle were 90° this would be a problem for the [Pythagorean theorem](@geometry/pythagorean-theorem): the distance $c$ would satisfy $c^2 = 5^2 + 8^2 = 89$, so $c \approx 9.43$ km. But the angle is 60°, and the theorem says nothing about any angle other than a right angle. The triangle is still completely determined, since two rods of fixed length held at a fixed angle leave no freedom for the third side, so there must be a rule. The animation suggests its shape: as the hinge closes below 90° the square of the third side falls short of 89, and as it opens past 90° the square overshoots. The first aim of this lesson is to find the exact size of that shortfall.

## What happens away from 90°

Three positions of the hinge can be worked out with no trigonometry. At 90°, $c^2 = 89$. With the hinge shut, at 0°, the short rod lies along the long one and the gap between their ends is $8 - 5 = 3$, so $c^2 = 9$. With the hinge wide open, at 180°, the rods lie end to end and $c = 8 + 5 = 13$, so $c^2 = 169$. Compared with the Pythagorean value 89, these are off by $-80$, $0$ and $+80$.

For 60° we need an idea, and the natural one is to make right angles where there are none.

[Figure 2, steps: The triangle with sides 5 and 8 and a 60° angle between them. An altitude splits it into two right triangles, and the Pythagorean theorem on the second one gives the third side: exactly 7.]

  - step: Two sides, 5 and 8, with 60° between them. The third side c is unknown, and no angle of the triangle is known to be a right angle.
  - step: Drop a perpendicular from B to the side of length 8, meeting it at H. Triangle CHB has hypotenuse 5 and a 60° angle, so CH = 5 cos 60° = 2.5 and HB = 5 sin 60° ≈ 4.33.
  - step: The rest of the long side is HA = 8 − 2.5 = 5.5. Now c is the hypotenuse of the right triangle HAB, whose legs are 5.5 and HB.
  - step: By the Pythagorean theorem, c² = 5.5² + (5 sin 60°)² = 30.25 + 18.75 = 49, so c = 7.
The altitude turns one triangle without a right angle into two triangles with one each. The left one contains the 60° angle and the side of length 5, so [its legs are $5\cos 60°$ and $5\sin 60°$](@trigonometry/unit-circle). The right one then has two known legs, and its hypotenuse is the side we want. The farm is exactly 7 km from the mill, and $c^2 = 49$ falls short of 89 by 40.

**Pause and try.** Repeat the computation with the angle at $C$ equal to 120°. The foot $H$ of the perpendicular from $B$ now lands outside the triangle, on the far side of $C$ from $A$. How far is $H$ from $C$, how long are the legs of the right triangle $HAB$, and what is $c^2$?

**Answer.** The side $CB$ makes an angle of $180° - 120° = 60°$ with the extension of $AC$ beyond $C$, so $CH = 5\cos 60° = 2.5$ and $HB = 5\sin 60°$, as before. This time $H$ is on the other side of $C$, so $HA = 8 + 2.5 = 10.5$. Then $c^2 = 10.5^2 + (5\sin 60°)^2 = 110.25 + 18.75 = 129$, which is 40 more than 89.

We now have five measurements of how far $c^2$ is from $a^2 + b^2 = 89$:

| angle at $C$ | 0° | 60° | 90° | 120° | 180° |
|---|---|---|---|---|---|
| $c^2$ | 9 | 49 | 89 | 129 | 169 |
| $c^2 - 89$ | $-80$ | $-40$ | $0$ | $+40$ | $+80$ |

**Pause and try.** Find a formula for the bottom row in terms of the angle $C$. You are looking for a function of the angle that takes the values $1, \frac{1}{2}, 0, -\frac{1}{2}, -1$ at these five angles, and for the meaning of the number 80 in terms of the sides 5 and 8.

**Answer.** The cosine has exactly those values: $\cos 0° = 1$, $\cos 60° = \frac{1}{2}$, $\cos 90° = 0$, $\cos 120° = -\frac{1}{2}$, $\cos 180° = -1$. So the bottom row is $-80\cos C$, and $80 = 2 \times 5 \times 8$. The guess is $c^2 = 5^2 + 8^2 - 2\cdot 5\cdot 8\cos C$.

[Figure 3, image: The square of the third side plotted against the angle between sides 5 and 8. The five computed points lie on the curve 89 - 80\cos C, which crosses the Pythagorean value 89 at exactly 90°.]

## The law of cosines

Five points and a guess are not a derivation. To get one, redo the 60° computation with letters. From now on we use the standard labeling.

**Definition.** In a triangle $ABC$, the letters $A$, $B$, $C$ name the corners and also the angles at those corners, and $a$, $b$, $c$ are the lengths of the sides **opposite** $A$, $B$, $C$. So $a = BC$, $b = CA$ and $c = AB$, and the angle $C$ lies between the sides $a$ and $b$.

Drop the perpendicular from $B$ to the line $CA$, with foot $H$. In the right triangle $CHB$ the hypotenuse is $a$, so $HB = a\sin C$ and $CH = a\cos C$ when $C$ is acute. The remaining piece is $HA = b - a\cos C$. When $C$ is obtuse, the foot falls outside, at distance $a\cos(180° - C) = -a\cos C$ beyond $C$, and $HA = b + (-a\cos C)$, which is the same expression $b - a\cos C$. The negative cosine of an obtuse angle does the bookkeeping for us.

[Figure 4, image: Dropping the altitude from B in a triangle with an acute angle at C (left) and an obtuse angle at C (right). In both, the horizontal leg of the right triangle HAB is b - a\cos C, because \cos C is negative when C is obtuse.]

Either way, the Pythagorean theorem in triangle $HAB$ gives

$$
c^2 = (b - a\cos C)^2 + (a\sin C)^2 = b^2 - 2ab\cos C + a^2\cos^2 C + a^2\sin^2 C.
$$

The last two terms are $a^2(\cos^2 C + \sin^2 C)$, and [$\sin^2 C + \cos^2 C = 1$](@trigonometry/pythagorean-identity) for every angle, so they collapse to $a^2$.

**Theorem.** **(Law of cosines.)** In any triangle $ABC$, with sides $a$, $b$, $c$ opposite the angles $A$, $B$, $C$,

$$
c^2 = a^2 + b^2 - 2ab\cos C.
$$

The same holds for each corner: $a^2 = b^2 + c^2 - 2bc\cos A$ and $b^2 = a^2 + c^2 - 2ac\cos B$.

The picture argument needed two cases, and a third if you count $C = 90°$. Coordinates handle all of them at once.

**Proof.** Place the triangle on a coordinate grid with $C$ at the origin and $A$ on the positive $x$ axis, at $(b, 0)$, and with $B$ above the axis. The corner $B$ is at distance $a$ from the origin, in the direction that makes the angle $C$ with the positive $x$ axis. By the unit circle definition, the point at distance 1 in that direction is $(\cos C, \sin C)$, for any angle $C$ between 0° and 180°, acute or not. Scaling by $a$ puts $B$ at $(a\cos C, a\sin C)$. The distance formula gives

$$
c^2 = (a\cos C - b)^2 + (a\sin C - 0)^2 = a^2\cos^2 C - 2ab\cos C + b^2 + a^2\sin^2 C = a^2 + b^2 - 2ab\cos C,
$$

using $\cos^2 C + \sin^2 C = 1$. Relabeling the corners gives the other two forms.

**Key idea.** The law of cosines is the Pythagorean theorem with a correction term: $c^2 = a^2 + b^2 - 2ab\cos C$. The correction is zero at 90°, subtracts when $C$ is acute and adds when $C$ is obtuse.

The formula reads in two directions. Given two sides and the angle between them it produces the third side, as in the road problem. Given all three sides, it can be solved for the cosine of any angle:

$$
\cos C = \frac{a^2 + b^2 - c^2}{2ab}.
$$

**Worked example.** **Find the other two angles of the road triangle, with sides 5, 7 and 8.**

Call the sides $a = 5$, $b = 8$, $c = 7$, so that $C = 60°$ as before. We want $A$, opposite the side 5, and $B$, opposite the side 8. Solve each form of the law for its cosine:

$$
\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{64 + 49 - 25}{2\cdot 8\cdot 7} = \frac{88}{112} = \frac{11}{14}, \qquad \cos B = \frac{a^2 + c^2 - b^2}{2ac} = \frac{25 + 49 - 64}{2\cdot 5\cdot 7} = \frac{1}{7}.
$$

A calculator's inverse cosine gives $A \approx 38.21°$ and $B \approx 81.79°$.

*Check.* $38.21° + 81.79° + 60° = 180°$. Also the largest angle, $B$, is opposite the longest side, 8, and the smallest is opposite the shortest.

Because the cosine of an angle between 0° and 180° is positive exactly when the angle is acute, the sign of $a^2 + b^2 - c^2$ tells you what kind of angle $C$ is. If $c^2 = a^2 + b^2$ then $\cos C = 0$ and $C = 90°$, which is the converse of the Pythagorean theorem. If $c^2 < a^2 + b^2$ the angle is acute, and if $c^2 > a^2 + b^2$ it is obtuse. A triangle with sides 6, 7, 10 has $36 + 49 = 85 < 100$, so its largest angle is obtuse (about 100.3°).

## The law of sines

Every form of the law of cosines contains all three sides and one angle. Suppose instead that a surveyor knows one side and the angles at its two ends. With two sides unknown, no form of the law can be solved. We need a relation between sides and the angles opposite them, and an altitude supplies it again.

Take the triangle with $A = 30°$, $b = 8$ and $a = 5$, and drop the altitude from $C$ to the side $AB$. Call its length $h$. It is a leg of two right triangles at once.

[Figure 5, image: One altitude computed from both sides. In the left right triangle its length is b\sin A = 8\sin 30° = 4. In the right one it is a\sin B \approx 5\sin 53.1° \approx 4. So b\sin A = a\sin B.]

From the left triangle, $h = b\sin A$. From the right triangle, $h = a\sin B$. So $b\sin A = a\sin B$, and dividing by $\sin A\sin B$ gives $\frac{a}{\sin A} = \frac{b}{\sin B}$: each side divided by the sine of its opposite angle gives the same number. Nothing singled out the corner $C$, so the third ratio $\frac{c}{\sin C}$ must equal the other two.

The same altitude gives the area. With base $c$ and height $h = b\sin A$, the area is $\frac{1}{2}bc\sin A$: half the product of two sides and the sine of the angle between them.

**Theorem.** **(Law of sines and the area formula.)** In any triangle $ABC$ with sides $a$, $b$, $c$ opposite the angles $A$, $B$, $C$, the area is

$$
K = \tfrac{1}{2}bc\sin A = \tfrac{1}{2}ac\sin B = \tfrac{1}{2}ab\sin C, \qquad\text{and}\qquad \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}.
$$

**Proof.** Place $A$ at the origin and $B$ at $(c, 0)$, with $C$ above the $x$ axis. As in the previous proof, $C = (b\cos A, b\sin A)$, and this is valid for every angle $A$ between 0° and 180°. The height of $C$ above the line $AB$ is its $y$ coordinate $b\sin A$, which is positive. So $K = \frac{1}{2}\cdot c\cdot b\sin A$. The same argument starting from the corner $B$ or the corner $C$ gives the other two expressions for the same area. Dividing the equal quantities $\frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B = \frac{1}{2}ab\sin C$ by $\frac{1}{2}abc$ gives $\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$. All three sines are positive, so we may take reciprocals.

The coordinate proof covers the obtuse case that the two-triangle picture does not show. When $B$ is obtuse the altitude from $C$ falls outside the triangle, and its length is $a\sin(180° - B)$, which equals $a\sin B$ by the mirror symmetry of the unit circle.

**Pause and try.** For the road triangle ($a = 5$, $b = 8$, $c = 7$, with $A \approx 38.21°$, $B \approx 81.79°$, $C = 60°$), compute the three ratios $\frac{a}{\sin A}$, $\frac{b}{\sin B}$, $\frac{c}{\sin C}$ with a calculator. They agree, so their common value is some length belonging to the triangle. Any guess what it measures?

**Answer.** $\frac{5}{\sin 38.21°} \approx \frac{5}{0.6186} \approx 8.08$, $\frac{8}{\sin 81.79°} \approx \frac{8}{0.9897} \approx 8.08$ and $\frac{7}{\sin 60°} = \frac{14}{\sqrt 3} \approx 8.08$. The common value is longer than every side. It is the diameter of the circle through the three corners, as the next figure shows.

[Figure 6, image: The road triangle inside the circle through its three corners. The diameter from B ends at B'. The angles at A and at B' stand on the same chord BC, so they are equal, and triangle BB'C has a right angle at C. Hence a = 2R\sin A.]

Here is the argument for an acute angle $A$. Let the circle through $A$, $B$, $C$ have radius $R$, and draw the diameter $BB'$. By the [inscribed angle theorem](@geometry/inscribed-angle), all angles standing on the chord $BC$ from the same side are equal. Because $A$ is acute, the center of the circle lies on the same side of $BC$ as $A$, and $B'$, being on the line from $B$ through the center, lies on that side too. So the angle at $B'$ equals $A$. The same theorem says an angle standing on a diameter is a right angle, so triangle $BB'C$ has its right angle at $C$ and hypotenuse $2R$. In it, the side $a$ is opposite the angle $A$, so $a = 2R\sin A$, that is, $\frac{a}{\sin A} = 2R$. If $A = 90°$ then $BC$ is itself a diameter and $a = 2R$ directly. If $A$ is obtuse, $B'$ falls on the opposite side of $BC$ from $A$, and the same theorem makes the angle at $B'$ equal to $180° - A$, which has the same sine; we leave the details of that case as a sketch. So in every triangle the common ratio is the diameter of the circumscribed circle.

**Worked example.** **A surveyor wants the distance to a tree $C$ on the far bank of a river. She marks points $A$ and $B$ on her bank, 100 m apart, and measures the angles $A = 50°$ and $B = 60°$ of triangle $ABC$. Find $a = BC$ and $b = AC$.**

The known side is $c = 100$, and the law of sines needs its opposite angle: $C = 180° - 50° - 60° = 70°$. Then

$$
a = \frac{c\sin A}{\sin C} = \frac{100\sin 50°}{\sin 70°} \approx \frac{76.60}{0.9397} \approx 81.52 \text{ m}, \qquad b = \frac{100\sin 60°}{\sin 70°} \approx \frac{86.60}{0.9397} \approx 92.16 \text{ m}.
$$

*Check.* Use the law that we did not use. $a^2 + b^2 - 2ab\cos 70° \approx 6645.6 + 8493.6 - 15026.0 \times 0.3420 \approx 10000$, which is $c^2$.

## Two sides and an angle that is not between them

The road problem gave two sides and the angle between them, and had one answer. Keep the sides 5 and 8 but move the known angle: suppose $A = 30°$, $b = 8$ and $a = 5$, so that the angle is opposite one of the known sides. This is the triangle of the altitude figure. Was it the only one?

Think of building it. Draw the angle of 30° at $A$ and mark $C$ at distance 8 along one arm. The corner $B$ has to lie on the other arm, at distance $a$ from $C$. So hang a rod of length $a$ from $C$ and swing it until its free end touches the other arm.

[Figure 7, steps: Building a triangle from the angle A = 30°, the side b = 8 next to it and the side a opposite it. A rod of length a swings from C and must land on the ray from A. Depending on a it lands nowhere, once or twice.]

  - step: The angle at A is 30° and the side from A to C has length 8. The shortest distance from C to the other arm is the perpendicular, h = 8 sin 30° = 4.
  - step: A rod of length a = 3 is shorter than 4. It cannot reach the arm, so there is no triangle.
  - step: A rod of length a = 4 just reaches, touching the arm at a right angle. There is exactly one triangle.
  - step: A rod of length a = 5 reaches the arm in two places. The triangles AB₁C and AB₂C are different, yet both have A = 30°, b = 8 and a = 5.
  - step: A rod of length a = 8.5 is longer than b. Its circle meets the line twice, but one crossing is behind A, off the arm. There is one triangle.
So the data "two sides and an angle opposite one of them" does not always determine a triangle. For $a = 5$ there are two, and the law of sines finds both, provided we read it correctly. It gives

$$
\sin B = \frac{b\sin A}{a} = \frac{8 \times 0.5}{5} = 0.8.
$$

Two angles between 0° and 180° have sine $0.8$: an acute one, $B_1 \approx 53.13°$, and its supplement $B_2 = 180° - 53.13° = 126.87°$, because $\sin(180° - \theta) = \sin\theta$. Both leave room for a third angle, so both are real triangles:

| | $B$ | $C = 150° - B$ | $c = \dfrac{a\sin C}{\sin A} = 10\sin C$ |
|---|---|---|---|
| triangle 1 | 53.13° | 96.87° | 9.93 |
| triangle 2 | 126.87° | 23.13° | 3.93 |

In the figure these are the far landing point $B_1$ and the near one $B_2$. The triangle $CB_2B_1$ is isosceles, which is why the angles at $B_1$ and $B_2$ inside the two triangles are supplements of each other.

**Theorem.** **(The case of two sides and a non-included angle.)** Let $0° < A < 90°$, and let $a > 0$ and $b > 0$. Put $h = b\sin A$. The number of different triangles with angle $A$, side $b$ adjacent to it and side $a$ opposite it is: none if $a < h$; one if $a = h$; two if $h < a < b$; one if $a \ge b$.

**Proof.** Put $A$ at the origin, the arm that must contain $B$ along the positive $x$ axis, and $C$ at $(b\cos A, h)$. A triangle corresponds to a point $B = (x, 0)$ with $x > 0$ at distance $a$ from $C$, that is, to a positive solution of $(x - b\cos A)^2 + h^2 = a^2$. If $a < h$ there is no solution. Otherwise $x = b\cos A \pm \sqrt{a^2 - h^2}$. If $a = h$ these coincide at $x = b\cos A > 0$. If $a > h$ the two are different and the larger one is positive. The smaller one is positive exactly when $\sqrt{a^2 - h^2} < b\cos A$, and since $b\cos A > 0$ for an acute angle, that is exactly when $a^2 - h^2 < b^2\cos^2 A$, that is, when $a^2 < b^2\sin^2 A + b^2\cos^2 A = b^2$.

When $A$ is 90° or more, the same computation gives a different count, because now $b\cos A \le 0$. The root $b\cos A - \sqrt{a^2 - h^2}$ is never positive, and the root $b\cos A + \sqrt{a^2 - h^2}$ is positive exactly when $a^2 - h^2 > b^2\cos^2 A$, that is, when $a > b$. So there is one triangle if $a > b$ and none otherwise, which fits the fact that a right or obtuse angle is the largest angle of its triangle and must face the longest side.

**Common mistake.** **Trusting the inverse sine key.** A calculator's $\sin^{-1}$ returns only the angle between $-90°$ and $90°$, so from $\sin B = 0.8$ it reports 53.13° and stays silent about 126.87°. Whenever you find an angle of a triangle from its sine, the supplement is a second candidate, and you must test it: it is a genuine solution if it leaves a positive third angle. When you can, find angles with the law of cosines instead. A cosine between $-1$ and $1$ belongs to exactly one angle between 0° and 180°.

**Common mistake.** **Using an angle that is not between the two sides.** In $c^2 = a^2 + b^2 - 2ab\cos C$ the angle must be the one enclosed by the sides $a$ and $b$, opposite the side being computed. With $A = 30°$, $b = 8$, $a = 5$ it is tempting to write $c^2 = 25 + 64 - 80\cos 30° \approx 19.7$. That treats the 30° angle as if it were at $C$. The correct equation with the angle $A$ is $a^2 = b^2 + c^2 - 2bc\cos A$, a quadratic in $c$, and its two roots are the 9.93 and 3.93 of the table.

## Looking back

A triangle without a right angle can always be cut into two that have one, by an altitude. Applying the Pythagorean theorem across the cut gave the law of cosines, and measuring the altitude from both sides gave the law of sines. In each case the acute picture was easy and the obtuse one threatened a second case, and what removed the case split was the unit circle's definition of cosine and sine for angles past 90°, which makes $(a\cos C, a\sin C)$ the right coordinates for every angle.

Between them the two laws solve any triangle from any three measurements that determine it. The one configuration that needs care is two sides with an angle opposite one of them, where the swinging rod may land twice.

**Check yourself.** In triangle $ABC$, $a = 5$, $b = 8$ and the angle $C$ between them is 120°. What is $c^2$?
Answer: 129 $c^2 = 25 + 64 - 2\cdot 5\cdot 8\cos 120° = 89 + 40 = 129$. An obtuse angle makes the third side longer than Pythagoras would predict.

**Recap.** - Label a triangle so that side $a$ is opposite angle $A$, and so on.
- Law of cosines: $c^2 = a^2 + b^2 - 2ab\cos C$. It is the Pythagorean theorem when $C = 90°$; $c^2$ is smaller when $C$ is acute and larger when $C$ is obtuse.
- Solved for the angle: $\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}$. This finds angles from three sides without ambiguity.
- Area: $K = \frac{1}{2}ab\sin C$. Law of sines: $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$, the diameter of the circle through the corners.
- Two sides and the included angle, three sides, or one side and two angles determine one triangle.
- Two sides $a$, $b$ and the angle $A$ opposite $a$ (with $A$ acute and $h = b\sin A$): no triangle if $a < h$, one if $a = h$ or $a \ge b$, two if $h < a < b$.

## Problems

A calculator is needed for most of these. The first three are direct, the next three take more than one step, and the last two ask for an argument.

**Problem 1.** Two sides of a triangle are 3 and 5, and the angle between them is 120°. Find the third side.

**Solution.** $c^2 = 3^2 + 5^2 - 2\cdot 3\cdot 5\cos 120° = 9 + 25 - 30\left(-\frac{1}{2}\right) = 34 + 15 = 49$, so $c = 7$. The answer is larger than $\sqrt{34} \approx 5.83$, as it must be for an obtuse angle.

**Problem 2.** A triangle has sides 4, 5 and 6. Find its largest angle. Is the triangle acute?

**Solution.** The largest angle is opposite the longest side, 6. $\cos C = \frac{4^2 + 5^2 - 6^2}{2\cdot 4\cdot 5} = \frac{5}{40} = \frac{1}{8}$, so $C \approx 82.82°$. Since the largest angle is less than 90°, all three are, and the triangle is acute. The quick test agrees: $16 + 25 = 41 > 36$.

**Problem 3.** In triangle $ABC$, $A = 45°$, $B = 60°$ and $a = 10$. Find $b$ and $c$.

**Solution.** $C = 180° - 45° - 60° = 75°$. By the law of sines, $b = \frac{a\sin B}{\sin A} = \frac{10\sin 60°}{\sin 45°} = 10\cdot\frac{\sqrt 3/2}{\sqrt 2/2} = 5\sqrt 6 \approx 12.25$, and $c = \frac{10\sin 75°}{\sin 45°} \approx \frac{9.659}{0.7071} \approx 13.66$. The sides are in the same order as their opposite angles: $a < b < c$ and $A < B < C$.

**Problem 4.** A hiker walks 6 km due east, turns 40° to the left and walks 4 km further. How far is she from her starting point?

**Solution.** The two legs of the walk are two sides of a triangle, but the angle between them inside the triangle is not 40°. Turning 40° away from straight ahead leaves an interior angle of $180° - 40° = 140°$ at the turning point. So $d^2 = 6^2 + 4^2 - 2\cdot 6\cdot 4\cos 140° \approx 52 + 36.77 = 88.77$, and $d \approx 9.42$ km. A sanity check: a small turn should leave her nearly $6 + 4 = 10$ km away, and 9.42 is close to that. Using 40° in the formula would give 3.90 km, which is the distance after turning back sharply by 140°.

**Problem 5.** In triangle $ABC$, $A = 40°$ and $b = 10$. Find all possible triangles (give $B$, $C$ and $c$) when (a) $a = 7$, (b) $a = 6$, (c) $a = 12$.

**Solution.** Here $h = b\sin A = 10\sin 40° \approx 6.428$.

(a) $h < 7 < 10$, so there are two triangles. $\sin B = \frac{10\sin 40°}{7} \approx 0.9183$, so $B \approx 66.67°$ or $B \approx 113.33°$. In the first, $C \approx 73.33°$ and $c = \frac{7\sin C}{\sin 40°} \approx 10.43$. In the second, $C \approx 26.67°$ and $c \approx 4.89$.

(b) $6 < h$, so there is no triangle. The law of sines says the same: it would require $\sin B \approx 1.071$, which no angle has.

(c) $12 \ge 10$, so there is one triangle. $\sin B = \frac{6.428}{12} \approx 0.5357$, giving $B \approx 32.39°$ or its supplement $147.61°$. The supplement is impossible, since $40° + 147.61° > 180°$. So $B \approx 32.39°$, $C \approx 107.61°$ and $c = \frac{12\sin 107.61°}{\sin 40°} \approx 17.79$.

**Problem 6.** A parallelogram has sides $a$ and $b$, and its diagonals have lengths $p$ and $q$. Prove that $p^2 + q^2 = 2a^2 + 2b^2$.

**Solution.** Let $\theta$ be one angle of the parallelogram. The neighboring angle is $180° - \theta$, because neighboring angles of a parallelogram are supplementary. One diagonal is the third side of a triangle with sides $a$, $b$ and included angle $\theta$, so $p^2 = a^2 + b^2 - 2ab\cos\theta$. The other closes a triangle with sides $a$, $b$ and included angle $180° - \theta$, so $q^2 = a^2 + b^2 - 2ab\cos(180° - \theta) = a^2 + b^2 + 2ab\cos\theta$, using $\cos(180° - \theta) = -\cos\theta$. Adding, the cosine terms cancel and $p^2 + q^2 = 2a^2 + 2b^2$. For a rectangle, $p = q$ and this is the Pythagorean theorem.

**Problem 7.** A student solves the triangle with $a = 4$, $b = 7$ and $C = 30°$ as follows. "By the law of cosines $c^2 = 16 + 49 - 56\cos 30° \approx 16.50$, so $c \approx 4.062$. By the law of sines $\sin B = \frac{7\sin 30°}{4.062} \approx 0.8616$, so $B \approx 59.5°$, and then $A = 180° - 30° - 59.5° = 90.5°$." Find a quick reason to doubt the answer, locate the error, and give the correct angles.

**Solution.** The answer makes $A$ the largest angle, but $A$ is opposite the side $a = 4$, which is the shortest side. The largest angle must face the longest side, $b = 7$. The error is in reading $\sin B \approx 0.8616$: the angle could be $59.5°$ or $180° - 59.5° = 120.5°$, and the calculator offered only the first. The law of cosines settles it: $\cos B = \frac{a^2 + c^2 - b^2}{2ac} \approx \frac{16 + 16.50 - 49}{2\cdot 4\cdot 4.062} \approx -0.508$, which is negative, so $B$ is obtuse and $B \approx 120.5°$. Then $A \approx 180° - 30° - 120.5° = 29.5°$. Check with the law of sines: $\sin A = \frac{4\sin 30°}{4.062} \approx 0.4923$, and $\sin 29.5° \approx 0.4924$.

**Problem 8.** (a) Show that in any triangle $c = a\cos B + b\cos A$. (b) Write the two similar formulas for $a$ and $b$, and deduce the law of cosines from the three formulas using algebra only.

**Solution.** (a) Place $A$ at the origin and $B$ at $(c, 0)$, with $C$ above the axis. As in the lesson, $C = (b\cos A, b\sin A)$. Measured from $B$ instead, $C$ is at distance $a$ in a direction making the angle $B$ with the ray from $B$ toward $A$, so its $x$ coordinate is $c - a\cos B$. Equating the two expressions for the $x$ coordinate, $b\cos A = c - a\cos B$, which is the claim. It is valid for obtuse angles too, where one cosine is negative and the foot of the altitude falls outside the side.

(b) By relabeling, $a = b\cos C + c\cos B$ and $b = a\cos C + c\cos A$. Multiply the three formulas by $a$, $b$ and $c$ respectively:

$$
a^2 = ab\cos C + ac\cos B, \qquad b^2 = ab\cos C + bc\cos A, \qquad c^2 = ac\cos B + bc\cos A.
$$

Add the first two and subtract the third. The terms $ac\cos B$ and $bc\cos A$ cancel, leaving $a^2 + b^2 - c^2 = 2ab\cos C$, which is the law of cosines.

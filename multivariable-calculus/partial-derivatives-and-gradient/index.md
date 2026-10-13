# The gradient: which way is uphill?

> On a hillside the slope depends on the direction you face. Partial derivatives give two of those slopes, and the gradient packs all of them into one arrow.

Series: Multivariable Calculus (https://www.monocurl.com/monocurl-essays/multivariable-calculus/)
Canonical: https://www.monocurl.com/monocurl-essays/multivariable-calculus/partial-derivatives-and-gradient/
Keywords: gradient, partial derivatives, directional derivative, direction of steepest ascent, gradient perpendicular to level curves, differentiable function of two variables

[Figure 1, animation: Standing at the point P = (0, -1) on the hill and turning on the spot. The arrow on the map is the direction you face, and the plot records the slope of the ground in that direction. The slope is largest, about 3.61, facing a little north of east.]

Ask how steep a road is and one number answers you: it climbs 8 meters for every 100. Stand on an open hillside and ask the same question, and the honest reply is "facing which way?" Facing one direction the ground rises in front of you, facing another it drops, and somewhere in between you can walk without gaining or losing any height. A point on a hillside has a slope for every direction.

That sounds like infinitely many numbers per point. The surprise of this lesson is that for a smooth hill two numbers are enough, and that those two numbers form an arrow on the map that points straight uphill.

Our hill is the one from [the lesson on contour maps](@multivariable-calculus/functions-of-two-variables). At the map position $x$ kilometers east and $y$ kilometers north of a marker post, its height in hundreds of meters is

$$
f(x, y) = 6 + 3x - x^3 - y^2.
$$

It has a summit at $(1, 0)$, where the height is 8, and a pass at $(-1, 0)$. We stand at $P = (0, -1)$, on the south slope, where $f(0, -1) = 5$. Slopes will be in hundreds of meters per kilometer, so a slope of 3 means 300 m of climb per kilometer walked.

## Two slopes that are easy to define

The [derivative](@calculus/what-is-a-derivative) of a function of one variable is the [limit](@calculus/limits) of $\frac{g(a + h) - g(a)}{h}$ as $h \to 0$, the slope of its graph. We do not have a function of one variable, but we can make one. Walk due east from $P$. Then $y$ stays at $-1$ and only $x$ changes, so the height you see is

$$
f(x, -1) = 6 + 3x - x^3 - 1 = 5 + 3x - x^3,
$$

a function of $x$ alone. Geometrically, we have cut the hill with the vertical plane $y = -1$ and kept the curve where they meet.

[Figure 2, steps: Two vertical slices through the point P of the hill above (0, -1). The east-west slice is the curve z = f(x, -1), with slope 3 at P. The north-south slice is the curve z = f(0, y), with slope 2 at P.]

  - step: Stand at P, the point of the hill above (0, -1). The height there is 5.
  - step: Cut the hill with the vertical plane y = -1, which runs east-west through P.
  - step: At P the cut curve climbs toward the east with slope 3.
  - step: Now cut with the plane x = 0, which runs north-south through P.
  - step: At P this curve climbs toward the north with slope 2.
The slope of the east-west curve at $P$ is an ordinary derivative, and we can compute it from the definition. The difference quotient at $x = 0$ is

$$
\frac{f(0 + h, -1) - f(0, -1)}{h} = \frac{(5 + 3h - h^3) - 5}{h} = 3 - h^2 \qquad (h \neq 0),
$$

which has limit 3 as $h \to 0$. Facing east at $P$, the ground rises at slope 3.

Walking due north instead, $x$ stays at 0 and the height is $f(0, y) = 6 - y^2$. Its difference quotient at $y = -1$ is

$$
\frac{f(0, -1 + k) - f(0, -1)}{k} = \frac{(6 - (-1 + k)^2) - 5}{k} = \frac{2k - k^2}{k} = 2 - k \qquad (k \neq 0),
$$

with limit 2. Facing north the ground also rises, at slope 2.

**Definition.** Let $f$ be a function of two variables defined on an open disk centered at $(a, b)$. The **partial derivatives** of $f$ at $(a, b)$ are the limits

$$
\frac{\partial f}{\partial x}(a, b) = \lim_{h \to 0} \frac{f(a + h, b) - f(a, b)}{h}, \qquad \frac{\partial f}{\partial y}(a, b) = \lim_{k \to 0} \frac{f(a, b + k) - f(a, b)}{k},
$$

when these limits exist. They are also written $f_x(a, b)$ and $f_y(a, b)$.

The "open disk" guarantees that $f$ is defined at all the nearby points the quotients use. The first limit is the derivative of the one-variable function $x \mapsto f(x, b)$ at $x = a$, so nothing new is needed to compute it: treat $y$ as a constant and differentiate in $x$. For the hill,

$$
f_x(x, y) = 3 - 3x^2, \qquad f_y(x, y) = -2y,
$$

which gives $f_x(0, -1) = 3$ and $f_y(0, -1) = 2$ again.

**Pause and try.** Compute both partial derivatives of the hill at the summit $(1, 0)$, at the pass $(-1, 0)$, and at $(2, 1)$ on the east edge. What do the first two answers have in common, and why is that reasonable?

**Answer.** At $(1, 0)$: $f_x = 3 - 3 = 0$ and $f_y = 0$. At $(-1, 0)$: $f_x = 3 - 3 = 0$ and $f_y = 0$. At $(2, 1)$: $f_x = 3 - 12 = -9$ and $f_y = -2$. At the summit and at the pass both slices are level. At the summit each slice has a maximum there, and at the pass the east-west slice has a minimum and the north-south slice a maximum; a one-variable function has derivative zero at [an interior maximum or minimum](@calculus/optimization).

## A slope for every direction

East and north are two directions out of a full circle. To face any other way, describe the direction by a **unit vector** $\mathbf{u} = (u_1, u_2)$, a [vector](@linear-algebra/vectors) of length 1, so that $u_1^2 + u_2^2 = 1$. Walking a distance $t$ from $(a, b)$ in the direction $\mathbf{u}$ puts you at $(a + tu_1, b + tu_2)$. Because $\mathbf{u}$ has length 1, the number $t$ is the distance walked, and rise over distance is a slope.

**Definition.** Let $f$ be defined on an open disk centered at $(a, b)$, and let $\mathbf{u} = (u_1, u_2)$ be a unit vector. The **directional derivative** of $f$ at $(a, b)$ in the direction $\mathbf{u}$ is

$$
D_{\mathbf{u}} f(a, b) = \lim_{t \to 0} \frac{f(a + tu_1, b + tu_2) - f(a, b)}{t},
$$

when the limit exists.

With $\mathbf{u} = (1, 0)$ this is $f_x$, and with $\mathbf{u} = (0, 1)$ it is $f_y$. So at $P$ we know the slope facing east is 3 and facing north is 2.

**Pause and try.** Northeast is exactly halfway between east and north. Before computing anything, guess the slope at $P$ facing northeast. Then compute it: the unit vector is $\mathbf{u} = \left(\tfrac{1}{\sqrt 2}, \tfrac{1}{\sqrt 2}\right)$, so you need $f\left(\tfrac{t}{\sqrt 2}, -1 + \tfrac{t}{\sqrt 2}\right)$.

**Answer.** Write $s = t/\sqrt 2$. Then $f(s, -1 + s) = 6 + 3s - s^3 - (s - 1)^2 = 5 + 5s - s^2 - s^3$. So the quotient is $\dfrac{5s - s^2 - s^3}{t} = \dfrac{1}{\sqrt 2}\left(5 - s - s^2\right)$, with limit $\dfrac{5}{\sqrt 2} \approx 3.54$ as $t \to 0$. The natural guess, the average of 3 and 2, is $2.5$, and it is wrong: the slope facing northeast is larger than both. The correct value is $3 \cdot \tfrac{1}{\sqrt 2} + 2 \cdot \tfrac{1}{\sqrt 2}$: each partial derivative weighted by the matching component of $\mathbf{u}$.

That pattern suggests a rule: the slope in the direction $\mathbf{u}$ is $f_x u_1 + f_y u_2$. If it holds, the two partial derivatives determine every other slope. It is tempting to accept it and move on, but as stated it is false.

## Why two partial derivatives are not enough

Consider the function

$$
g(x, y) = \frac{xy}{x^2 + y^2} \quad\text{for } (x, y) \neq (0, 0), \qquad g(0, 0) = 0.
$$

On the $x$-axis, $g(x, 0) = 0$ for every $x$, so $g_x(0, 0) = 0$. On the $y$-axis, likewise, $g_y(0, 0) = 0$. The proposed rule then predicts slope $0 \cdot u_1 + 0 \cdot u_2 = 0$ in every direction. Now walk along the diagonal: $g(s, s) = \dfrac{s^2}{2s^2} = \dfrac{1}{2}$ for every $s \neq 0$, while $g(0, 0) = 0$.

[Figure 3, image: The function g(x, y) = \frac{xy}{x^2 + y^2}, with g(0,0) = 0, colored by value: orange where positive, blue where negative. It is constant along each line through the origin. Along the axes it is 0, so both partial derivatives at the origin are 0, but along the line y = x it jumps from \frac12 to 0 at the origin.]

Facing northeast at the origin, the quotient is $\dfrac{g(s, s) - g(0, 0)}{t} = \dfrac{1/2}{t}$, which grows without bound as $t \to 0$. There is no slope in that direction at all: the surface has a cliff at the origin along every line except the two axes. The partial derivatives exist and are both 0, and they tell us nothing about the other directions, because they only ever look along two lines.

So the rule cannot be a consequence of the partial derivatives existing. The hill must have some additional property that $g$ lacks, and the rule must depend on it.

## What a smooth hill has: a linear approximation

In one variable, a function with a derivative looks like its tangent line when you zoom in. Zoom in on the contour map of the hill at $P$ and watch the level curves.

[Figure 4, animation: Zooming in on the contour map at P = (0, -1). The blue curves are level curves of the hill; the green bands are the level lines of the plane 5 + 3x + 2(y + 1). As the window shrinks, the level curves become straight, parallel and evenly spaced, and settle onto the green bands. The orange arrow is the gradient (3, 2).]

Evenly spaced parallel straight lines are the contour map of a plane, as we saw in the previous lesson. So near $P$ the hill is nearly a plane, and we can find which one. Expanding the formula at a nearby point $(h, -1 + k)$,

$$
f(h, -1 + k) = 6 + 3h - h^3 - (k - 1)^2 = \underbrace{5 + 3h + 2k}_{\text{a plane}} \; \underbrace{-\, h^3 - k^2}_{\text{error}}.
$$

The plane part uses exactly the two partial derivatives, 3 and 2. The error is small in a strong sense. One step of size $0.1$ in each direction changes the plane part by tenths, while the error is $-0.001 - 0.01$. Shrink the step by 10 and the error shrinks by at least 100. That is the property to isolate: the error is small *compared with the distance* $\sqrt{h^2 + k^2}$ from the point.

**Definition.** Let $f$ be defined on an open disk centered at $(a, b)$. We say $f$ is **differentiable at $(a, b)$** if there are numbers $A$ and $B$ such that the error

$$
E(h, k) = f(a + h, b + k) - f(a, b) - Ah - Bk
$$

satisfies $\displaystyle\lim_{(h, k) \to (0, 0)} \frac{E(h, k)}{\sqrt{h^2 + k^2}} = 0$. Explicitly: for every $\varepsilon > 0$ there is a $\delta > 0$ such that $0 < \sqrt{h^2 + k^2} < \delta$ implies $|E(h, k)| \le \varepsilon\sqrt{h^2 + k^2}$. The function $L(x, y) = f(a, b) + A(x - a) + B(y - b)$ is then the **linear approximation** of $f$ at $(a, b)$, and its graph is the **tangent plane**.

[Figure 5, image: The tangent plane to the hill at P, the graph of the linear approximation L(x, y) = 5 + 3x + 2(y + 1), drawn over a square one kilometer on a side. Near P the plane and the surface are hard to tell apart; farther away the surface curves off it.]

The important word is hidden in the limit: $(h, k)$ may approach $(0, 0)$ from any direction and along any path, and the same bound must hold for all of them. That is what the partial derivatives alone could not see.

For the hill at $P$, with $A = 3$ and $B = 2$, the error is $E = -h^3 - k^2$. Since $|h| \le \sqrt{h^2 + k^2}$ and $|k| \le \sqrt{h^2 + k^2}$,

$$
\frac{|E(h, k)|}{\sqrt{h^2 + k^2}} \le \frac{|h|\,h^2 + |k|\,|k|}{\sqrt{h^2 + k^2}} \le h^2 + |k|,
$$

which tends to 0. So the hill is differentiable at $P$. The same is true at every point for every polynomial. In general there is a convenient test, which we cite without proof: if $f_x$ and $f_y$ exist throughout a disk around the point and are continuous at the point, then $f$ is differentiable there. (Analysis texts prove it with the mean value theorem, one variable at a time.) The function $g$ fails the definition at the origin, as it must; a problem below asks you to show why.

With this definition the rule we guessed becomes a theorem.

**Theorem.** **(Directional derivatives of a differentiable function.)** Suppose $f$ is differentiable at $(a, b)$, with numbers $A$ and $B$ as in the definition. Then:

- $A = f_x(a, b)$ and $B = f_y(a, b)$.
- For every unit vector $\mathbf{u} = (u_1, u_2)$, the directional derivative exists and

$$
D_{\mathbf{u}} f(a, b) = f_x(a, b)\,u_1 + f_y(a, b)\,u_2.
$$

**Proof.** Fix a unit vector $\mathbf{u}$ and let $t \neq 0$. Put $h = tu_1$ and $k = tu_2$, so that $\sqrt{h^2 + k^2} = |t|$ because $\mathbf{u}$ has length 1. By the definition of $E$,

$$
\frac{f(a + tu_1, b + tu_2) - f(a, b)}{t} = \frac{A\,tu_1 + B\,tu_2 + E(tu_1, tu_2)}{t} = Au_1 + Bu_2 + \frac{E(tu_1, tu_2)}{t}.
$$

The last term has absolute value $\dfrac{|E(h, k)|}{\sqrt{h^2 + k^2}}$, which tends to 0 as $t \to 0$, since then $(h, k) \to (0, 0)$. So the quotient has limit $Au_1 + Bu_2$; that is, $D_{\mathbf{u}} f(a, b) = Au_1 + Bu_2$.

Taking $\mathbf{u} = (1, 0)$ gives $f_x(a, b) = A$, and $\mathbf{u} = (0, 1)$ gives $f_y(a, b) = B$. That is (1), and substituting it back gives (2).

The proof shows where differentiability earns its keep: one bound on the error, valid in all directions at once, handles every $\mathbf{u}$ with the same two numbers.

## The gradient and the steepest direction

The expression $f_x u_1 + f_y u_2$ is a [dot product](@linear-algebra/dot-product): the sum of the products of matching components of two vectors.

**Definition.** If the partial derivatives of $f$ exist at $(a, b)$, the **gradient** of $f$ at $(a, b)$ is the vector

$$
\nabla f(a, b) = \bigl(f_x(a, b),\, f_y(a, b)\bigr).
$$

For the hill, $\nabla f(x, y) = (3 - 3x^2, -2y)$, and $\nabla f(0, -1) = (3, 2)$. The theorem now reads $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$. The gradient is a vector in the map plane, with an east component and a north component. It is drawn on the map, and it does not point up into the air.

Writing the slope as a dot product pays off at once, because a dot product has a geometric meaning: for vectors $\mathbf{a}$ and $\mathbf{b}$ with angle $\theta$ between them, $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}|\,|\mathbf{b}| \cos\theta$, where $|\mathbf{a}|$ is the length of $\mathbf{a}$.

**Pause and try.** At $P$ the slope in direction $\mathbf{u}$ is $3u_1 + 2u_2$. Find the unit vectors $\mathbf{u}$ for which the slope is 0, and say how they are related to the vector $(3, 2)$.

**Answer.** We need $3u_1 + 2u_2 = 0$, so $\mathbf{u}$ is a multiple of $(2, -3)$. Its length must be 1, and $|(2, -3)| = \sqrt{13}$, so $\mathbf{u} = \pm\left(\tfrac{2}{\sqrt{13}}, \tfrac{-3}{\sqrt{13}}\right) \approx \pm(0.555, -0.832)$. These are the two directions perpendicular to $(3, 2)$, since $(3, 2) \cdot (2, -3) = 0$. Facing either way you walk level.

**Theorem.** **(Steepest ascent.)** Suppose $f$ is differentiable at a point $P$ and $\nabla f(P) \neq \mathbf{0}$. For a unit vector $\mathbf{u}$, let $\theta$ be the angle between $\mathbf{u}$ and $\nabla f(P)$. Then

$$
D_{\mathbf{u}} f(P) = |\nabla f(P)| \cos\theta.
$$

Consequently the largest slope at $P$ is $|\nabla f(P)|$, attained only when $\mathbf{u}$ points along $\nabla f(P)$; the smallest is $-|\nabla f(P)|$, in the opposite direction; and the slope is 0 exactly in the two directions perpendicular to $\nabla f(P)$.

**Proof.** By the previous theorem, $D_{\mathbf{u}} f(P) = \nabla f(P) \cdot \mathbf{u} = |\nabla f(P)|\,|\mathbf{u}| \cos\theta = |\nabla f(P)| \cos\theta$, using $|\mathbf{u}| = 1$. As $\theta$ runs over all angles, $\cos\theta$ takes its largest value 1 only at $\theta = 0$, its smallest value $-1$ only at $\theta = 180^\circ$, and the value 0 only at $\theta = \pm 90^\circ$. Multiplying by the positive number $|\nabla f(P)|$ gives the three claims.

At $P$ this says: the steepest climb has slope $|(3, 2)| = \sqrt{13} \approx 3.61$ and is in the direction $(3, 2)/\sqrt{13} \approx (0.83, 0.55)$, about $34^\circ$ north of east. The animation at the top of the page is this theorem in motion. As the arrow turns, the slope traces one full cosine wave of height $\sqrt{13}$, and its peak is where the arrow lies along the gradient.

**Key idea.** For a differentiable function, the slope in the direction of a unit vector $\mathbf{u}$ is $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$. The gradient $\nabla f = (f_x, f_y)$ points in the direction of steepest ascent, and its length is the slope in that direction.

The hypothesis $\nabla f(P) \neq \mathbf{0}$ is needed. At the summit and at the pass the gradient is $(0, 0)$, every directional derivative is 0, and no direction is steepest.

## The gradient crosses level curves at right angles

The two level directions at $P$ were $\pm(2, -3)/\sqrt{13}$. On the map, the direction in which the height does not change ought to be the direction of the contour line through $P$. Check it: $P$ is at height 5, and the level curve there is $y = -\sqrt{1 + 3x - x^3}$, whose derivative at $x = 0$ is $-\dfrac{3 - 3x^2}{2\sqrt{1 + 3x - x^3}} = -\dfrac{3}{2}$. A line of slope $-\tfrac32$ has direction $(2, -3)$. So the contour is perpendicular to the gradient at $P$. To prove this in general we need the rate of change of $f$ along a curve, which need not be a straight line.

**Theorem.** **(Chain rule along a curve; gradients and level curves.)** Suppose $f$ is differentiable at $P$, and $\mathbf{r}(t) = (x(t), y(t))$ is a curve with $\mathbf{r}(t_0) = P$ whose components are differentiable at $t_0$. Write $\mathbf{r}'(t_0) = (x'(t_0), y'(t_0))$.

- The function $t \mapsto f(\mathbf{r}(t))$ is differentiable at $t_0$, with derivative $\nabla f(P) \cdot \mathbf{r}'(t_0)$.
- If the curve stays in one level set of $f$ for $t$ near $t_0$, then $\nabla f(P) \cdot \mathbf{r}'(t_0) = 0$: the gradient is perpendicular to the curve's direction.

**Proof.** Let $(h, k) = \mathbf{r}(t) - P$, which depends on $t$ and tends to $(0, 0)$ as $t \to t_0$. With $A = f_x(P)$, $B = f_y(P)$ and $E$ as in the definition of differentiability,

$$
\frac{f(\mathbf{r}(t)) - f(P)}{t - t_0} = A\,\frac{h}{t - t_0} + B\,\frac{k}{t - t_0} + \frac{E(h, k)}{t - t_0}.
$$

As $t \to t_0$, the first two terms tend to $A\,x'(t_0) + B\,y'(t_0) = \nabla f(P) \cdot \mathbf{r}'(t_0)$. For the third, if $(h, k) = (0, 0)$ it is 0, and otherwise

$$
\left|\frac{E(h, k)}{t - t_0}\right| = \frac{|E(h, k)|}{\sqrt{h^2 + k^2}} \cdot \frac{\sqrt{h^2 + k^2}}{|t - t_0|}.
$$

The first factor tends to 0 by differentiability. The second tends to $|\mathbf{r}'(t_0)|$, so it stays bounded. Their product tends to 0, which proves (1). For (2), $f(\mathbf{r}(t))$ is constant near $t_0$, so its derivative is 0.

[Figure 6, image: The gradient \nabla f = (3 - 3x^2, -2y) of the hill, drawn as an arrow at each point of a grid on the contour map. Every arrow crosses the contour through its tail at a right angle and points to higher ground. The arrows are long where the contours are close and shrink to nothing at the summit and the pass.]

Part (2) is why the arrows in the figure meet the contour lines squarely. It also ties this lesson to the previous one. There we estimated steepness as the contour interval divided by the spacing of the lines, measured straight across them. "Straight across" is the gradient direction, and the slope in that direction is $|\nabla f|$. So close contours and a long gradient are the same fact.

A hiker who always walks in the direction of the gradient crosses every contour at a right angle and gains height as fast as possible at each step.

[Figure 7, animation: Paths of steepest ascent on the hill, each starting from a ring and following the gradient at every step. They cross the contour lines at right angles. Five of the starts lead to the summit; the two that start west of the pass climb the neighboring hill instead.]

## Worked examples

**Worked example.** **A temperature field.** The temperature on a plate is $T(x, y) = x^2 y$ degrees, with $x$ and $y$ in centimeters. At the point $(1, 2)$, find the rate of change of temperature toward the point $(4, 6)$, and the direction and rate of fastest increase.

$T$ is a polynomial, so it is differentiable and the theorems apply. Treating $y$ as constant, $T_x = 2xy$; treating $x$ as constant, $T_y = x^2$. At $(1, 2)$ the gradient is $\nabla T = (4, 1)$.

The displacement from $(1, 2)$ to $(4, 6)$ is $(3, 4)$, of length 5, so the unit vector is $\mathbf{u} = (0.6, 0.8)$. We must use the unit vector, because the definition measures change per unit distance. Then $D_{\mathbf{u}} T = (4, 1) \cdot (0.6, 0.8) = 2.4 + 0.8 = 3.2$ degrees per centimeter.

The fastest increase is in the direction of $\nabla T = (4, 1)$, at the rate $|\nabla T| = \sqrt{17} \approx 4.12$ degrees per centimeter.

*Check.* $3.2 \le 4.12$, as it must be. Also, one millimeter along $\mathbf{u}$ is the point $(1.06, 2.08)$, where $T = 1.06^2 \times 2.08 \approx 2.337$. That is a rise of $0.337$ over $0.1$ cm, an average rate of $3.37$, close to $3.2$ and approaching it as the step shrinks.

**Worked example.** **Choosing a direction on the hill.** A hiker stands at $(1, 1)$, due north of the summit. In which directions should she walk to (a) climb as steeply as possible, (b) stay level, (c) descend at slope exactly 1?

Here $\nabla f(1, 1) = (3 - 3, -2) = (0, -2)$, so the slope in direction $\mathbf{u} = (u_1, u_2)$ is $-2u_2$.

(a) The steepest climb is along the gradient, due south, with slope $|\nabla f| = 2$. That is straight toward the summit, which at this particular point lies due south.

(b) Level walking needs $-2u_2 = 0$, so $\mathbf{u} = (\pm 1, 0)$: due east or due west.

(c) We need $-2u_2 = -1$, so $u_2 = \tfrac12$, and then $u_1 = \pm\sqrt{1 - \tfrac14} = \pm\tfrac{\sqrt 3}{2}$. These are the directions $30^\circ$ north of east and $30^\circ$ north of west.

*Check.* In (c) the angle between $\mathbf{u}$ and the gradient (due south) is $120^\circ$, and $|\nabla f| \cos 120^\circ = 2 \times (-\tfrac12) = -1$. In (b), the east-west line through $(1, 1)$ is tangent to the contour at height 7 there, as part (2) of the last theorem requires.

**Common mistake.** **Forgetting to make the direction a unit vector.** For "the slope at $P$ toward the northeast" it is tempting to compute $\nabla f \cdot (1, 1) = 3 + 2 = 5$. The true slope is $5/\sqrt 2 \approx 3.54$. The vector $(1, 1)$ has length $\sqrt 2$, so the dot product with it is the change in height per $\sqrt 2$ units of distance. Always divide the direction by its length first.

**Common mistake.** **Trusting partial derivatives without differentiability.** The formula $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$ is a theorem about differentiable functions. For the function $g$ above, $\nabla g(0, 0) = (0, 0)$ exists, yet the slope along the diagonal does not. Before using the formula, make sure $f$ is differentiable at the point; continuous partial derivatives are enough.

**Check yourself.** At a point of a differentiable function, $\nabla f = (4, -3)$. What is the slope facing due north?
Answer: $-3$ Due north is $\mathbf{u} = (0, 1)$, and $(4, -3) \cdot (0, 1) = -3$. It is the partial derivative $f_y$.

Step back to see what happened. A point on a hillside seemed to need a slope for every direction. For a function that is differentiable, meaning one that a plane approximates with an error small compared with the distance, all of those slopes come from two numbers by a dot product, and the geometry of the dot product then hands us the steepest direction and its relation to the contour lines. The work was in finding the right hypothesis; the function $g$ shows that the two partial derivatives alone do not justify any of it. [The next lesson](@multivariable-calculus/lagrange-multipliers) uses the perpendicularity of gradients and level curves to find the highest point on a trail.

**Recap.** - The partial derivatives $f_x$ and $f_y$ are the slopes facing due east and due north. Compute each by treating the other variable as a constant.
- The directional derivative $D_{\mathbf{u}} f$ is the slope facing along the unit vector $\mathbf{u}$.
- $f$ is differentiable at a point if $f(a + h, b + k) = f(a, b) + Ah + Bk + E$ with $E / \sqrt{h^2 + k^2} \to 0$. Then $A = f_x$ and $B = f_y$. Existence of the partial derivatives alone does not imply this.
- For differentiable $f$: $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u} = |\nabla f| \cos\theta$, where $\nabla f = (f_x, f_y)$.
- Where $\nabla f \neq \mathbf{0}$, it points in the direction of steepest ascent, its length is the steepest slope, and it is perpendicular to the level curve through the point.

## Problems

The hill is $f(x, y) = 6 + 3x - x^3 - y^2$. Problems 1 and 2 are warm-ups, 3 to 5 combine ideas, and 6 and 7 go further.

**Problem 1.** Let $q(x, y) = x^3 y - 2y^2$. Find $q_x$, $q_y$ and $\nabla q(1, 2)$. Then compute $q_x(1, 2)$ a second time, directly from the limit definition.

**Solution.** Treating $y$ as constant, $q_x = 3x^2 y$. Treating $x$ as constant, $q_y = x^3 - 4y$. At $(1, 2)$: $\nabla q = (6, -7)$. From the definition, $q(1 + h, 2) = 2(1 + h)^3 - 8 = -6 + 6h + 6h^2 + 2h^3$ and $q(1, 2) = -6$, so the quotient is $6 + 6h + 2h^2$ for $h \neq 0$, with limit 6.

**Problem 2.** At the point $(0, 1)$ of the hill, on the north slope, find the slope facing due west, the slope facing northeast, and the largest slope in any direction.

**Solution.** $\nabla f(0, 1) = (3 - 0, -2) = (3, -2)$. Due west is $\mathbf{u} = (-1, 0)$: slope $-3$. Northeast is $\mathbf{u} = (1, 1)/\sqrt 2$: slope $(3 - 2)/\sqrt 2 = 1/\sqrt 2 \approx 0.71$. The largest slope is $|\nabla f| = \sqrt{13} \approx 3.61$, in the direction $(3, -2)/\sqrt{13}$, about $34^\circ$ south of east. Northeast is about $78.7^\circ$ away from that direction, which is why the slope there is so much smaller: $3.61 \cos 78.7^\circ \approx 0.71$.

**Problem 3.** Find the equation of the tangent line to the contour line of the hill through $(2, 1)$. Confirm your answer by solving the contour's equation for $y$ and differentiating.

**Solution.** $\nabla f(2, 1) = (3 - 12, -2) = (-9, -2)$. The tangent line passes through $(2, 1)$ and is perpendicular to the gradient, so it consists of the points with $(-9, -2) \cdot (x - 2, y - 1) = 0$, that is, $9(x - 2) + 2(y - 1) = 0$, or $y = 1 - 4.5(x - 2)$. For the check: $f(2, 1) = 3$, so the contour is $y^2 = 3 + 3x - x^3$, and near $(2, 1)$, $y = \sqrt{3 + 3x - x^3}$ with $\dfrac{dy}{dx} = \dfrac{3 - 3x^2}{2y} = \dfrac{-9}{2} = -4.5$ at $x = 2$. The slopes agree.

**Problem 4.** Suppose $f$ is differentiable at $P$ and $\nabla f(P) \neq \mathbf{0}$. In which directions is the slope exactly half the maximum slope? Find them explicitly for the hill at $(0, 1)$, to two decimal places.

**Solution.** By the steepest ascent theorem the slope is $|\nabla f| \cos\theta$, which is half of $|\nabla f|$ when $\cos\theta = \tfrac12$, that is, $\theta = \pm 60^\circ$: the two directions $60^\circ$ either side of the gradient. At $(0, 1)$ the gradient $(3, -2)$ points at angle $\arctan(-2/3) \approx -33.69^\circ$ from east. The two directions are at $26.31^\circ$ and $-93.69^\circ$: $\mathbf{u} \approx (0.90, 0.44)$ and $\mathbf{u} \approx (-0.06, -1.00)$. Check the first: $3(0.896) - 2(0.443) = 1.80$, which is half of $\sqrt{13} \approx 3.61$.

**Problem 5.** Find every point of the hill's map where $\nabla f = \mathbf{0}$. For each, describe what the contour lines look like nearby, and explain why the steepest ascent theorem says nothing there.

**Solution.** We need $3 - 3x^2 = 0$ and $-2y = 0$, so $x = \pm 1$ and $y = 0$: the points $(1, 0)$ and $(-1, 0)$. At $(1, 0)$, the summit, the nearby contours are closed loops around the point. At $(-1, 0)$, the pass, the contour through the point crosses itself. In both cases every directional derivative is $\mathbf{0} \cdot \mathbf{u} = 0$, so no direction has a larger slope than another, and the angle $\theta$ between $\mathbf{u}$ and the zero vector is not defined. The theorem's hypothesis $\nabla f(P) \neq \mathbf{0}$ excludes exactly these points.

**Problem 6.** Prove that if $f$ is differentiable at $(a, b)$ then $f$ is continuous there, meaning $f(a + h, b + k) \to f(a, b)$ as $(h, k) \to (0, 0)$. Deduce that $g(x, y) = \dfrac{xy}{x^2 + y^2}$, $g(0, 0) = 0$, is not differentiable at the origin.

**Solution.** By definition $f(a + h, b + k) - f(a, b) = Ah + Bk + E(h, k)$. As $(h, k) \to (0, 0)$, $Ah \to 0$ and $Bk \to 0$. Also $|E(h, k)| = \dfrac{|E(h, k)|}{\sqrt{h^2 + k^2}} \cdot \sqrt{h^2 + k^2}$ for $(h, k) \ne (0, 0)$, a product of a factor tending to 0 and a factor tending to 0. So the difference tends to 0. For $g$: along the diagonal, $g(s, s) = \tfrac12$ for all $s \neq 0$, which does not tend to $g(0, 0) = 0$ as $s \to 0$. So $g$ is not continuous at the origin, and therefore not differentiable there.

**Problem 7.** Let $w(x, y) = \dfrac{x^2 y}{x^2 + y^2}$ for $(x, y) \neq (0, 0)$ and $w(0, 0) = 0$. (a) Show that $D_{\mathbf{u}} w(0, 0)$ exists for every unit vector $\mathbf{u}$ and equals $u_1^2 u_2$. (b) Find $\nabla w(0, 0)$. (c) Is $w$ differentiable at the origin?

**Solution.** (a) For $t \neq 0$, $w(tu_1, tu_2) = \dfrac{t^3 u_1^2 u_2}{t^2 (u_1^2 + u_2^2)} = t\,u_1^2 u_2$, since $u_1^2 + u_2^2 = 1$. The quotient $\dfrac{w(tu_1, tu_2) - 0}{t}$ equals $u_1^2 u_2$ for every $t \neq 0$, so that is its limit. (b) With $\mathbf{u} = (1, 0)$: $w_x(0, 0) = 1^2 \cdot 0 = 0$. With $\mathbf{u} = (0, 1)$: $w_y(0, 0) = 0$. So $\nabla w(0, 0) = (0, 0)$. (c) No. If $w$ were differentiable at the origin, the theorem would give $D_{\mathbf{u}} w = \nabla w \cdot \mathbf{u} = 0$ for every $\mathbf{u}$. But for $\mathbf{u} = (1, 1)/\sqrt 2$, part (a) gives $\tfrac12 \cdot \tfrac{1}{\sqrt 2} \approx 0.35 \neq 0$. So here a function has a slope in every direction and is still not differentiable: the slopes do not fit together into a single plane.

# Divergence and curl: reading a vector field

> Two numbers at each point of a flow. Divergence is the net outflow from a tiny square per unit area, and curl is the circulation around it per unit area.

Series: Multivariable Calculus (https://www.monocurl.com/monocurl-essays/multivariable-calculus/)
Canonical: https://www.monocurl.com/monocurl-essays/multivariable-calculus/divergence-and-curl/
Keywords: divergence, curl, vector field, flux, circulation, divergence and curl intuition, paddle wheel curl, source and sink

[Figure 1, animation: A wind field: the arrow at each point is the velocity of the air there, and the blue particles are carried along by it. The wind is \mathbf{W}(x, y) = (x^2 - 1,\ xy). Air streams away from the point (1, 0) and toward the point (-1, 0).]

A weather map covered in wind arrows shows where the air is going. A forecaster wants more from it: where is air piling up, and where is it spinning? Piled-up air has to rise, which makes clouds, and spinning air is a storm in the making.

Neither question can be answered by looking at one arrow. A single arrow says how fast the air moves at one point and in what direction, and that is all. Piling up and spinning are facts about how the arrows *differ* between nearby points, so we should expect derivatives. The plan is to invent two measurements that could be carried out with instruments, run them on a specific wind, and then find what they compute.

## A field of arrows

**Definition.** A **vector field** on a region $D$ of the plane is a rule $\mathbf{F}$ that assigns to each point $(x, y)$ of $D$ a vector $\mathbf{F}(x, y) = \bigl(P(x, y),\, Q(x, y)\bigr)$. The functions $P$ and $Q$ are its **components**. The field is **continuously differentiable** if the partial derivatives $P_x, P_y, Q_x, Q_y$ exist and are continuous on $D$.

Recall that the [partial derivative](@multivariable-calculus/partial-derivatives-and-gradient) $P_x$ is the derivative of $P$ in $x$ with $y$ held constant. Our running example is the wind in the animation above,

$$
\mathbf{W}(x, y) = (x^2 - 1,\ xy),
$$

so $P = x^2 - 1$ is the eastward part of the velocity and $Q = xy$ the northward part. At $(2, 1)$ the wind is $(3, 2)$: strong, toward the east-northeast. At the origin it is $(-1, 0)$, due west. At $(1, 0)$ and $(-1, 0)$ it is $(0, 0)$, dead calm, and the particles show that the two calm points are quite different: air streams out of one and into the other.

## Net flow out of a small square

To test for piling up at a place, fence off a small square there and keep accounts: how much air leaves through the fence, minus how much comes in. If more leaves than enters, the air inside is thinning out.

How much air crosses one side? Wind blowing along a fence does not cross it. Only the component of the wind perpendicular to the fence counts, and in one second the air crossing a side of length $\ell$ is that perpendicular component times $\ell$. This is the **flux** across the side. Where the wind varies along the side, we add up over short pieces, which is an integral.

Take the square with lower left corner $(1, 0.5)$ and side $0.5$.

[Figure 2, steps: Bookkeeping for the flow out of a square of side 0.5 with corner (1, 0.5) in the wind \mathbf{W}. On each side only the component of the wind across the side is drawn, orange where it points out of the square and blue where it points in. The net outflow is 0.9375.]

  - step: A square of side 0.5 with its lower left corner at (1, 0.5), fenced off in the wind.
  - step: On the right side the wind blows outward at 1.25. Flux out: 1.25 × 0.5 = 0.625.
  - step: On the left side x = 1, where the wind has no eastward part. Nothing crosses.
  - step: Air leaves through the top, flux 0.625, and enters through the bottom, flux -0.3125.
  - step: Net flow out of the square: 0.9375. Its area is 0.25, so the outflow per unit area is 3.75.
The accounts, side by side. On the right side, $x = 1.5$, the outward direction is east, and the eastward part of the wind is $P = 1.5^2 - 1 = 1.25$ all along it, so the flux out is $1.25 \times 0.5 = 0.625$. On the left side, $x = 1$, we have $P = 0$: nothing crosses. On the top, $y = 1$, outward is north and the northward part is $Q = x$, which varies, so the flux out is $\int_1^{1.5} x\,dx = 0.625$. On the bottom, $y = 0.5$, the wind's northward part $Q = 0.5x$ carries air *into* the square, and the flux out is $-\int_1^{1.5} 0.5x\,dx = -0.3125$.

The total is $0.625 + 0 + 0.625 - 0.3125 = 0.9375$. More air leaves than enters. A bigger square would lose more, so to compare places fairly we divide by the area, $0.25$, and get an outflow of $3.75$ per unit area.

That number still depends on the size of our square. To get a property of the *point* $(1, 0.5)$ we do what the [derivative](@calculus/what-is-a-derivative) does with an interval: shrink the square and look for a limit.

**Pause and try.** Repeat the bookkeeping for the square with the same corner $(1, 0.5)$ and side $0.1$. What is the net flux out per unit area? Guess the limit as the side shrinks to 0.

**Answer.** Right side: $P = 1.1^2 - 1 = 0.21$, flux $0.021$. Left side: $0$. Top, at $y = 0.6$: $\int_1^{1.1} 0.6x\,dx = 0.6 \times 0.105 = 0.063$. Bottom, at $y = 0.5$: $-\int_1^{1.1} 0.5x\,dx = -0.0525$. Net: $0.0315$. The area is $0.01$, so the outflow per unit area is $3.15$. From $3.75$ at side $0.5$ to $3.15$ at side $0.1$, the natural guess for the limit is $3$.

## Circulation around the same square

For spinning, picture a small wheel with paddles, held at one spot. Wind along the rim pushes the paddles round; wind across the rim does not. So the second measurement walks the same fence, counterclockwise, and adds up the component of the wind *along* the direction of travel, times the length traveled. This is the **circulation** around the square. Wind that helps the walker counts as positive and wind in the walker's face as negative.

[Figure 3, steps: Bookkeeping for the circulation around the same square, walked counterclockwise. On each side only the component of the wind along the side is drawn, orange where it agrees with the direction of travel and blue where it opposes it. The total is 0.1875.]

  - step: Walk around the square counterclockwise, adding up the part of the wind that blows along the direction of travel.
  - step: Bottom side, heading east with the wind: +0.2917. Right side, heading north with the wind: +0.5625.
  - step: Top side, heading west against the wind: -0.2917. Left side, heading south against the wind: -0.375.
  - step: Circulation: 0.1875. Per unit area: 0.75.
Along the bottom we head east, and the wind's eastward part is $P = x^2 - 1$: the contribution is $\int_1^{1.5} (x^2 - 1)\,dx = \frac{7}{24} \approx 0.2917$. Up the right side we head north, with $Q = 1.5y$ behind us: $\int_{0.5}^{1} 1.5y\,dy = 0.5625$. Along the top we head west, into the same eastward wind as on the bottom, which gives $-0.2917$. Down the left side we head south against $Q = y$: $-\int_{0.5}^{1} y\,dy = -0.375$.

The top and bottom cancel, and the right side beats the left: the circulation is $0.5625 - 0.375 = 0.1875$. It is positive, so a wheel here would be pushed counterclockwise, because the northward wind is stronger on its east side than on its west. Per unit area the circulation is $0.75$. With side $0.1$ the same bookkeeping gives $0.55$ per unit area.

[Figure 4, animation: The square shrinks toward its corner (1, 0.5). The net flux out and the circulation both shrink to nothing, but each divided by the area of the square approaches a limit: 3 for the flux and 0.5 for the circulation.]

## Formulas for the two limits

Shrinking squares by hand at every point is no way to read a map. We want formulas, and the bookkeeping shows where they come from. Take any continuously differentiable field $\mathbf{F} = (P, Q)$ and the square with corner $(a, b)$ and side $h$.

The right and left sides together contribute $\int_b^{b+h} \bigl(P(a + h, y) - P(a, y)\bigr)\,dy$ to the flux: what leaves on the right minus what enters on the left. The two sides are a distance $h$ apart, so to first order

$$
P(a + h, y) \approx P(a, y) + P_x(a, b)\,h,
$$

and the integrand is about $P_x(a, b)\,h$. Integrating over a side of length $h$ gives $P_x(a, b)\,h^2$. In the same way the top and bottom give about $Q_y(a, b)\,h^2$. The factor $h^2$ is the area of the square, so the outflow per unit area should approach $P_x + Q_y$.

For the circulation, the right and left sides contribute $\int_b^{b+h} \bigl(Q(a + h, y) - Q(a, y)\bigr)\,dy \approx Q_x(a, b)\,h^2$, and the bottom and top contribute $\int_a^{a+h} \bigl(P(x, b) - P(x, b + h)\bigr)\,dx \approx -P_y(a, b)\,h^2$, with a minus sign because the top is walked backwards.

**Definition.** Let $\mathbf{F} = (P, Q)$ be a continuous vector field (one whose components $P$ and $Q$ are continuous) and $S$ the square $a \le x \le a + h$, $b \le y \le b + h$. The **flux of $\mathbf{F}$ out of $S$** is

$$
\Phi = \int_b^{b+h} P(a + h, y)\,dy - \int_b^{b+h} P(a, y)\,dy + \int_a^{a+h} Q(x, b + h)\,dx - \int_a^{a+h} Q(x, b)\,dx,
$$

and the **circulation of $\mathbf{F}$ around $S$** (counterclockwise) is

$$
\Gamma = \int_a^{a+h} P(x, b)\,dx + \int_b^{b+h} Q(a + h, y)\,dy - \int_a^{a+h} P(x, b + h)\,dx - \int_b^{b+h} Q(a, y)\,dy.
$$

The four terms of $\Phi$ are the right, left, top and bottom sides, each with the component of $\mathbf{F}$ along the outward direction. The four terms of $\Gamma$ are the bottom, right, top and left sides in the order walked, each with the component along the direction of travel.

**Theorem.** Let $\mathbf{F} = (P, Q)$ be continuously differentiable on an open set containing the point $(a, b)$, and let $\Phi(h)$ and $\Gamma(h)$ be the flux out of and the circulation around the square with corner $(a, b)$ and side $h > 0$. Then

$$
\lim_{h \to 0^+} \frac{\Phi(h)}{h^2} = P_x(a, b) + Q_y(a, b), \qquad \lim_{h \to 0^+} \frac{\Gamma(h)}{h^2} = Q_x(a, b) - P_y(a, b).
$$

**Proof.** Let $\varepsilon > 0$. Because $P_x$ is continuous at $(a, b)$, there is a $\delta > 0$ such that $|P_x(x, y) - P_x(a, b)| < \varepsilon$ at every point of the square with corner $(a, b)$ and side $\delta$, and such that this square lies in the open set. Let $0 < h < \delta$.

Fix $y$ in $[b, b + h]$. By the [mean value theorem](@calculus/fundamental-theorem) applied to the function $x \mapsto P(x, y)$ on $[a, a + h]$, there is a point $\xi$ between $a$ and $a + h$ with

$$
P(a + h, y) - P(a, y) = P_x(\xi, y)\,h.
$$

The point $(\xi, y)$ lies in the square, so $P_x(\xi, y)$ is within $\varepsilon$ of $P_x(a, b)$. Hence for every such $y$,

$$
\bigl(P_x(a, b) - \varepsilon\bigr)h \;<\; P(a + h, y) - P(a, y) \;<\; \bigl(P_x(a, b) + \varepsilon\bigr)h.
$$

Integrate over $b \le y \le b + h$, an interval of length $h$: the right-and-left part of $\Phi(h)$ is within $\varepsilon h^2$ of $P_x(a, b)\,h^2$.

The same argument with $Q$ and $y$ in place of $P$ and $x$ (shrinking $\delta$ if necessary) shows that the top-and-bottom part of $\Phi(h)$ is within $\varepsilon h^2$ of $Q_y(a, b)\,h^2$. Adding and dividing by $h^2$,

$$
\left|\frac{\Phi(h)}{h^2} - \bigl(P_x(a, b) + Q_y(a, b)\bigr)\right| < 2\varepsilon \quad\text{whenever } 0 < h < \delta,
$$

which is the first limit. For $\Gamma$, group the right side with the left and the bottom with the top, as above. The mean value theorem in $x$ applied to $Q$ gives a part within $\varepsilon h^2$ of $Q_x(a, b)\,h^2$, and in $y$ applied to $P$ gives a part within $\varepsilon h^2$ of $-P_y(a, b)\,h^2$, once $\delta$ is small enough for $Q_x$ and $P_y$ as well. So $\Gamma(h)/h^2$ is within $2\varepsilon$ of $Q_x(a, b) - P_y(a, b)$ whenever $0 < h < \delta$, which is the second limit.

The proof is the first-order expansion made honest: the mean value theorem replaces "$\approx$" by an exact equation at a nearby point, and continuity of the partial derivatives says the nearby point may as well be $(a, b)$.

**Definition.** For a vector field $\mathbf{F} = (P, Q)$ whose partial derivatives exist, the **divergence** and the **curl** (in the plane, also called the scalar curl) are the functions

$$
\operatorname{div} \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}, \qquad \operatorname{curl} \mathbf{F} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}.
$$

**Key idea.** At each point, the divergence is the net flow out of a tiny square per unit area, and the curl is the counterclockwise circulation around it per unit area. Divergence adds the two "own" derivatives $P_x$ and $Q_y$; curl subtracts the two "cross" derivatives, $Q_x - P_y$.

**Pause and try.** Compute $\operatorname{div} \mathbf{W}$ and $\operatorname{curl} \mathbf{W}$ for the wind $\mathbf{W} = (x^2 - 1, xy)$. Check them against the limits $3$ and $0.5$ found at $(1, 0.5)$. Then say where on the map air is thinning out, where it is piling up, and where a wheel would turn clockwise.

**Answer.** $P_x = 2x$ and $Q_y = x$, so $\operatorname{div} \mathbf{W} = 3x$. $Q_x = y$ and $P_y = 0$, so $\operatorname{curl} \mathbf{W} = y$. At $(1, 0.5)$ these are $3$ and $0.5$, as measured. The divergence is positive in the whole eastern half of the map, $x > 0$, where air is thinning out, and negative in the western half, where it is piling up. The curl is negative in the southern half, $y < 0$, and there a wheel turns clockwise.

Notice what the formulas do not say. The air thins out everywhere east of the line $x = 0$, far from the calm point $(1, 0)$ that the particles seem to burst from, and a wheel is pushed round everywhere off the line $y = 0$, although no particle in the animation travels in a loop.

## The paddle wheel

The curl has a mechanical reading. A small paddle wheel pinned at a point turns with an angular speed of half the curl there.

[Figure 5, animation: Three paddle wheels pinned in the wind \mathbf{W}, whose curl at (x, y) is y. The wheel at (0, 0.9) turns counterclockwise and the wheel at (0, -0.9) clockwise, each at half the curl. The wheel at (1.6, 0), in the fastest air of the three, does not turn.]

Here is why, as a sketch. For the field $\mathbf{F} = \omega(-y, x)$, in which the whole plane turns rigidly about the origin at angular speed $\omega$, the curl is $\omega + \omega = 2\omega$, so the claim holds exactly. In general, a wheel of small radius $\rho$ responds to the average of the wind's component along its rim. That average is the circulation around the rim divided by the rim's length $2\pi\rho$. The circulation is about the curl times the enclosed area $\pi\rho^2$, so the rim speed is about $\operatorname{curl} \cdot \rho/2$, and dividing by the radius gives an angular speed of half the curl. Two things are missing from this argument: we proved the circulation limit for squares, not circles (the [next lesson](@multivariable-calculus/greens-theorem) covers every shape at once), and "responds to the average" is a physical model of a wheel, not a theorem.

## Four fields classified by computing

Four simple fields are worth knowing by heart, because they show each effect on its own.

**Worked example.** **Source, sink, shear, rotation.** Compute the divergence and curl of $(x, y)$, $(-x, -y)$, $(y, 0)$ and $(-y, x)$.

*Source* $(x, y)$: $P_x = 1$, $Q_y = 1$, $Q_x = 0$, $P_y = 0$. Divergence $2$, curl $0$.

*Sink* $(-x, -y)$: divergence $-2$, curl $0$.

*Shear* $(y, 0)$: $P_x = 0$ and $Q_y = 0$, so the divergence is $0$. $Q_x = 0$ and $P_y = 1$, so the curl is $0 - 1 = -1$.

*Rotation* $(-y, x)$: $P_x = 0$, $Q_y = 0$: divergence $0$. $Q_x = 1$, $P_y = -1$: curl $1 - (-1) = 2$.

Each answer is the same at every point. In particular the source has divergence $2$ at $(5, 5)$, where every nearby arrow points the same way, just as it does at the origin.

**Pause and try.** In the shear field $(y, 0)$ every particle moves in a straight horizontal line, faster the farther it is from the $x$-axis. A square of dye and a paddle wheel are placed at the origin. From the two numbers just computed, predict what happens to the area of the dye and whether the wheel turns. Then explain the wheel's behavior directly from the arrows.

**Answer.** The divergence is $0$, so there is no net flow out of any small square and the dye keeps its area, although its shape is sheared into a parallelogram. The curl is $-1$, so the wheel turns clockwise, at angular speed $\frac12$. Directly: the wind above the wheel blows east and the wind below it blows west, and both push the wheel clockwise.

[Figure 6, animation: A square of dye and a paddle wheel in each of four fields: the source (x, y), the sink (-x, -y), the shear (y, 0) and the rotation (-y, x). In the source the dye spreads and in the sink it shrinks; the wheel stays still in both. In the shear the dye keeps its area but the wheel turns clockwise. In the rotation the dye and the wheel turn together.]

The dye makes the meaning of divergence visible: where the divergence is positive, a blob carried by the flow grows, and where it is negative it shrinks. (The exact statement is that the area of a blob changes at a rate equal to the integral of the divergence over it, which for a small blob is the divergence times its area. We do not prove it here; a problem below checks a case.)

## What the eye gets wrong

Both quantities are easy to misjudge from a picture.

**Common mistake.** **"Divergence means the arrows point away from the point."** In the field $(x, 0)$ at the point $(3, 0)$, every nearby arrow points east, and none points back toward $(3, 0)$. Yet the divergence is $P_x = 1$. The arrows leaving a small square on its east side are longer than those entering on its west side, so more leaves than enters. Divergence is about the *change* in the outward component across the square, not about arrows fanning out.

**Common mistake.** **"Curl means the flow goes in circles."** The shear field has straight streamlines and curl $-1$. The opposite also happens: a flow can travel in perfect circles and have zero curl.

**Worked example.** **A whirlpool with no curl.** Let $\mathbf{V}(x, y) = \left(\dfrac{-y}{x^2 + y^2},\ \dfrac{x}{x^2 + y^2}\right)$ for $(x, y) \ne (0, 0)$. Find its curl.

At distance $r$ from the origin, $\mathbf{V}$ is the rotation field $(-y, x)$, of length $r$, divided by $r^2$. So it points along the circle, counterclockwise, with speed $\frac1r$: fast near the center, slow far out. By the quotient rule,

$$
Q_x = \frac{(x^2 + y^2) - x \cdot 2x}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2}, \qquad P_y = \frac{-(x^2 + y^2) + y \cdot 2y}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2}.
$$

They are equal, so $\operatorname{curl} \mathbf{V} = Q_x - P_y = 0$ at every point other than the origin.

*Why this is possible.* A wheel in this flow is pushed forward on its outer side by slow air and on its inner side by fast air. The faster inner air tries to turn it clockwise, the curving of the flow tries to turn it counterclockwise, and for speed exactly $\frac1r$ the two effects cancel. The wheel is carried around the center without turning, like a seat on a Ferris wheel.

[Figure 7, animation: Two flows in which every particle travels in a circle. In rigid rotation (-y, x), with curl 2, the paddle wheel turns as it is carried round, keeping the same paddle toward the center. In the whirlpool \mathbf{V}, with curl 0, the wheel is carried round without turning.]

The whirlpool also marks a limit of the theorem. Walk once around the circle of radius $R$ centered at the origin: the wind is behind you the whole way at speed $\frac1R$, over a distance $2\pi R$, so the circulation is $2\pi$, however small $R$ is. Divided by the area $\pi R^2$ it does not tend to the curl, $0$; it blows up. There is no contradiction, because the theorem requires $\mathbf{F}$ to be continuously differentiable on an open set containing the point, and $\mathbf{V}$ is not even defined at the origin. Divergence and curl describe a field near points where it is smooth, and say nothing about what happens at a point where it is not.

**Worked example.** **The gradient field of the hill.** The hill of the earlier lessons has height $f(x, y) = 6 + 3x - x^3 - y^2$, and its [gradient](@multivariable-calculus/partial-derivatives-and-gradient) $\nabla f = (f_x, f_y) = (3 - 3x^2,\ -2y)$ is a vector field that points uphill at each point of the map. Find its divergence and curl.

Here $P = 3 - 3x^2$ and $Q = -2y$. Then $P_x = -6x$ and $Q_y = -2$, so $\operatorname{div} \nabla f = -6x - 2$. And $Q_x = 0$, $P_y = 0$, so $\operatorname{curl} \nabla f = 0$.

*Reading the answers.* At the summit $(1, 0)$ the divergence is $-8$: the uphill arrows converge on the summit from all sides, so it is a sink of the gradient field. The curl is zero everywhere, and that is no accident of this hill. If the uphill arrows had positive circulation around some small loop, walking the loop would be more uphill than downhill, and you would return to your starting point higher than you left. A problem below proves that every gradient field has zero curl.

**Check yourself.** For the field $\mathbf{F}(x, y) = (y^2, x)$, what is the curl at the point $(1, 3)$?
Answer: $-5$ $Q_x = 1$ and $P_y = 2y = 6$, so the curl is $1 - 6 = -5$.

Step back. Both questions about the wind map became measurements on a small square: add up the wind across its sides, or along them. Each measurement shrinks to nothing with the square, but its ratio to the area has a limit, and the mean value theorem turns that limit into a combination of partial derivatives. The hard part was the bookkeeping of signs on the four sides, and the reusable idea is that a quantity defined by a boundary sum has a density, per unit area, at each point. The next lesson runs this in reverse: adding up the density over a region recovers the boundary sum.

**Recap.** - A vector field $\mathbf{F} = (P, Q)$ attaches a vector to each point. Flux across a side uses the component of $\mathbf{F}$ perpendicular to it; circulation uses the component along it.
- $\operatorname{div} \mathbf{F} = P_x + Q_y$ is the limit of (flux out of a small square) divided by its area. Positive: a source, air thinning out. Negative: a sink.
- $\operatorname{curl} \mathbf{F} = Q_x - P_y$ is the limit of (counterclockwise circulation around a small square) divided by its area. A small paddle wheel turns at half the curl.
- Source $(x, y)$: div 2, curl 0. Sink $(-x, -y)$: div $-2$, curl 0. Shear $(y, 0)$: div 0, curl $-1$. Rotation $(-y, x)$: div 0, curl 2.
- Neither can be read from the direction of the arrows alone: straight flows can have curl, circular flows can lack it, and parallel arrows can diverge.

## Problems

Problems 1 and 2 are warm-ups, 3 to 5 combine ideas, and 6 and 7 go further.

**Problem 1.** Find the divergence and curl of $\mathbf{F}(x, y) = (x^2 y,\ x - y^3)$ at the point $(2, 1)$.

**Solution.** $P = x^2 y$ gives $P_x = 2xy$ and $P_y = x^2$. $Q = x - y^3$ gives $Q_x = 1$ and $Q_y = -3y^2$. So $\operatorname{div} \mathbf{F} = 2xy - 3y^2$ and $\operatorname{curl} \mathbf{F} = 1 - x^2$. At $(2, 1)$: divergence $4 - 3 = 1$, curl $1 - 4 = -3$. Air is thinning out slightly there, and a wheel turns clockwise at angular speed $1.5$.

**Problem 2.** For the "traffic" field $\mathbf{F}(x, y) = (x^2, 0)$, compute the flux out of the square with corner $(a, b)$ and side $h$ directly from the definition, divide by the area, and take the limit. Compare with the formula for the divergence.

**Solution.** Since $Q = 0$, the top and bottom contribute nothing. On the right side $P = (a + h)^2$ and on the left $P = a^2$, both constant along the side, so $\Phi(h) = (a + h)^2 h - a^2 h = (2ah + h^2)\,h$. Dividing by $h^2$ gives $2a + h$, with limit $2a$. The formula gives $\operatorname{div} \mathbf{F} = P_x = 2x$, which is $2a$ at $(a, b)$. For $a > 0$ all the traffic moves east and still thins out, because it leaves the square faster than it enters.

**Problem 3.** Let $\mathbf{F}(x, y) = (\alpha x + \beta y,\ \gamma x + \delta y)$, where $\alpha, \beta, \gamma, \delta$ are constants. (a) Find its divergence and curl. (b) Find all such fields with divergence 0 and curl 0, and describe the one with $\alpha = 1$, $\beta = 0$.

**Solution.** (a) $P_x = \alpha$, $Q_y = \delta$, $Q_x = \gamma$, $P_y = \beta$. So $\operatorname{div} \mathbf{F} = \alpha + \delta$ and $\operatorname{curl} \mathbf{F} = \gamma - \beta$, both constant. (b) We need $\delta = -\alpha$ and $\gamma = \beta$, so $\mathbf{F} = (\alpha x + \beta y,\ \beta x - \alpha y)$. With $\alpha = 1$, $\beta = 0$ this is $(x, -y)$: air moves away from the $y$-axis and toward the $x$-axis. A blob of dye is stretched east-west and squeezed north-south by the same factor, so its area stays fixed (divergence 0), and the stretching is symmetric, with nothing to turn a wheel (curl 0). So there is a fifth basic field besides source, sink, shear and rotation: pure strain.

**Problem 4.** The wind $\mathbf{W} = (x^2 - 1, xy)$ has divergence $3x$. Compute the flux of $\mathbf{W}$ out of the square with corner $(a, b)$ and side $h$ exactly, and confirm that the flux per unit area is $3a + \frac32 h$. Which values in the lesson does this reproduce?

**Solution.** Right minus left: $P$ is constant along each of these sides, so the contribution is $\bigl((a + h)^2 - 1\bigr)h - (a^2 - 1)h = (2ah + h^2)h$. Top minus bottom: $\int_a^{a+h} x(b + h)\,dx - \int_a^{a+h} xb\,dx = h \int_a^{a+h} x\,dx = h \cdot \frac{(a + h)^2 - a^2}{2} = h\left(ah + \frac{h^2}{2}\right)$. The sum is $h^2\left(3a + \frac32 h\right)$, and dividing by $h^2$ gives $3a + \frac32 h$, with limit $3a$ as $h \to 0$. With $a = 1$: $h = 0.5$ gives $3.75$ and $h = 0.1$ gives $3.15$, the two values found by bookkeeping. The answer does not involve $b$.

**Problem 5.** Let $f$ be a function of two variables whose second partial derivatives exist and are continuous. Show that $\operatorname{curl} \nabla f = 0$. Then decide whether the rotation field $(-y, x)$ is the gradient of some function. (You may use Clairaut's theorem: for such $f$, the mixed partial derivatives are equal, $f_{xy} = f_{yx}$.)

**Solution.** The gradient is $\nabla f = (f_x, f_y)$, so $P = f_x$ and $Q = f_y$. Then $Q_x = f_{yx}$ and $P_y = f_{xy}$, and $\operatorname{curl} \nabla f = f_{yx} - f_{xy} = 0$ by Clairaut's theorem. The rotation field has curl $2 \ne 0$. If it were $\nabla f$, then $f_x = -y$ and $f_y = x$ would have continuous partial derivatives, so $f$ would satisfy the hypotheses and the curl would have to be 0. So $(-y, x)$ is not a gradient: no hill has uphill arrows that circle round.

**Problem 6.** Let $\mathbf{E}(x, y) = \left(\dfrac{x}{x^2 + y^2},\ \dfrac{y}{x^2 + y^2}\right)$ for $(x, y) \ne (0, 0)$, which points straight away from the origin with speed $\frac1r$. (a) Show that $\operatorname{div} \mathbf{E} = 0$ away from the origin. (b) Find the flux of $\mathbf{E}$ out of the circle of radius $R$ centered at the origin, using the fact that $\mathbf{E}$ is perpendicular to the circle. (c) Reconcile (a) and (b).

**Solution.** (a) $P_x = \dfrac{(x^2 + y^2) - 2x^2}{(x^2 + y^2)^2} = \dfrac{y^2 - x^2}{(x^2 + y^2)^2}$, and by the same computation with the letters exchanged, $Q_y = \dfrac{x^2 - y^2}{(x^2 + y^2)^2}$. Their sum is 0. (b) On the circle the field points along the outward direction with length $\frac1R$, so the flux is $\frac1R$ times the length of the circle: $\frac1R \cdot 2\pi R = 2\pi$, the same for every $R$. (c) Zero divergence says that any small square *not containing the origin* has no net outflow. The circle encloses the origin, where $\mathbf{E}$ is not defined and the theorem does not apply. All of the outflow $2\pi$ is produced at that single point: $\mathbf{E}$ is the field of a point source, and the same amount of air crosses every circle around it because none is created or destroyed in between.

**Problem 7.** Let $\mathbf{F}(x, y) = (\alpha x, \delta y)$ with constants $\alpha$ and $\delta$. A particle carried by this flow from $(x_0, y_0)$ is at $(x_0 e^{\alpha t}, y_0 e^{\delta t})$ at time $t$. (a) Verify this by differentiating. (b) A rectangle of dye with sides parallel to the axes has area $A_0$ at time 0. Find its area $A(t)$, and show that $\dfrac{A'(t)}{A(t)} = \operatorname{div} \mathbf{F}$.

**Solution.** (a) The velocity of the particle is $\left(\alpha x_0 e^{\alpha t},\ \delta y_0 e^{\delta t}\right) = (\alpha x, \delta y)$ at its current position $(x, y)$, which is $\mathbf{F}$ there; and at $t = 0$ it is at $(x_0, y_0)$. (b) Every $x$-coordinate is multiplied by $e^{\alpha t}$ and every $y$-coordinate by $e^{\delta t}$, so the rectangle remains a rectangle with its width multiplied by $e^{\alpha t}$ and its height by $e^{\delta t}$. Hence $A(t) = A_0\,e^{(\alpha + \delta)t}$, and $A'(t) = (\alpha + \delta)A(t)$. So $\dfrac{A'(t)}{A(t)} = \alpha + \delta = \operatorname{div} \mathbf{F}$: the area of the dye grows at a rate, per unit area, equal to the divergence. With $\alpha = \delta = 1$ this is the source, whose dye grows like $e^{2t}$; with $\delta = -\alpha$ it is the strain field of Problem 3, whose dye keeps its area.

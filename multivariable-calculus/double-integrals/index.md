# Double integrals: volume under a surface

> Volume under a surface is a limit of sums of thin columns. Slicing turns it into two ordinary integrals, and polar coordinates handle round regions.

Series: Multivariable Calculus (https://www.monocurl.com/monocurl-essays/multivariable-calculus/)
Canonical: https://www.monocurl.com/monocurl-essays/multivariable-calculus/double-integrals/
Keywords: double integral, volume under a surface, iterated integral, Fubini's theorem, polar coordinates double integral, r dr dtheta, Gaussian integral

[Figure 1, animation: The hill above a square of the map, replaced by 4, 16, 64 and 256 flat-topped columns, each as tall as the hill at the middle of its base. Their total volume settles toward \frac{80}{3} \approx 26.67.]

How much rock is in a hill? For a box the answer is length times width times height, but a hill has a different height over every point of its base, so there is no single height to multiply by.

The area under a curve has no single height either, and the [integral](@calculus/integrals) handles it by cutting the base into slices, treating the height as constant on each slice, adding the rectangles, and taking a limit. We will do the same with one more dimension, and find that the volume under a surface can be computed with two ordinary one-variable integrals, one inside the other.

Our hill is the one from [the lesson on contour maps](@multivariable-calculus/functions-of-two-variables). At the map position $x$ kilometers east and $y$ kilometers north of a marker post, its height in hundreds of meters is

$$
f(x, y) = 6 + 3x - x^3 - y^2.
$$

We want the volume of rock between the map plane $z = 0$ and the hill, above the square $0 \le x \le 2$, $-1 \le y \le 1$. The summit, at $(1, 0)$ with height 8, is over the center of this square. Our unit of volume is a box 1 km by 1 km and one height unit (100 m) tall, which is a tenth of a cubic kilometer.

## Four columns by hand

Start as coarsely as possible. Cut the square base into four cells, each 1 km on a side, and over each cell pretend the hill is flat, at the height it has above the middle of the cell.

[Figure 2, steps: The first estimate: four square cells, the height of the hill above the middle of each, and four columns of those heights with total volume 28.]

  - step: The piece of the hill above the square. The base is at height 0 and the summit at height 8.
  - step: Cut the base into four cells, 1 km on a side, and read the height of the hill above the middle of each cell.
  - step: Replace the hill over each cell by a flat-topped column of that height. A column's volume is its height times its base area, 1.
  - step: Add the four volumes: 7.125 + 6.875 + 7.125 + 6.875 = 28.
The middles of the cells are $(0.5, \pm 0.5)$ and $(1.5, \pm 0.5)$, and the heights there are

$$
f(0.5, \pm 0.5) = 6 + 1.5 - 0.125 - 0.25 = 7.125, \qquad f(1.5, \pm 0.5) = 6 + 4.5 - 3.375 - 0.25 = 6.875.
$$

Each column stands on a base of area 1, so its volume is its height, and the four volumes add to 28. Measuring at the middle of each cell was a choice, and a different choice gives a different number.

**Pause and try.** Keep the same four cells, but give each column the height of the hill above the cell's southwest corner instead of its middle. What total volume do you get? Which of the two estimates do you trust more, and why?

**Answer.** The southwest corners are $(0, -1)$, $(1, -1)$, $(0, 0)$ and $(1, 0)$, with heights $f = 5, 7, 6, 8$. The total is $26$. A middle is a fairer representative of a cell than a corner, where the hill is not typical of the cell (one of these corners is the summit itself). But neither estimate comes with a guarantee. So far the answer is somewhere around 26 to 28.

## Finer columns, and what the volume is

Two estimates that disagree by 2 are not an answer. The remedy is the one-variable remedy: make the cells smaller, so that the hill has less room to vary over each one. With $n$ cells along each side there are $n^2$ columns, each on a base of area $\frac{2}{n} \cdot \frac{2}{n}$, and using middles again the totals are

| cells along each side | columns | total volume |
|---|---|---|
| 2 | 4 | 28 |
| 4 | 16 | 27 |
| 8 | 64 | 26.75 |
| 16 | 256 | 26.6875 |

The animation at the top shows these four stages. The steps down shrink by a factor of 4 each time: $1$, then $0.25$, then $0.0625$. If that continues, the remaining steps add up to about $0.02$, which predicts a limit of $26\frac{2}{3}$.

We have not yet said what "the volume of the hill" means, since length times width times height applies to boxes only. As with area in one variable, the volume is *defined* to be the number these sums close in on, provided they close in on a single number however the cells and sample points are chosen.

**Definition.** Let $R$ be the rectangle $a \le x \le b$, $c \le y \le d$, and let $f$ be a function defined on $R$. Choose points $a = x_0 < x_1 < \dots < x_m = b$ and $c = y_0 < y_1 < \dots < y_n = d$. They cut $R$ into $mn$ **cells**; the cell $R_{ij}$ is $x_{i-1} \le x \le x_i$, $y_{j-1} \le y \le y_j$, with area $\Delta A_{ij} = (x_i - x_{i-1})(y_j - y_{j-1})$. The **mesh** of this partition is the largest of all the widths $x_i - x_{i-1}$ and heights $y_j - y_{j-1}$. Choose a **sample point** $(x_{ij}^*, y_{ij}^*)$ in each cell. The resulting **Riemann sum** is

$$
\sum_{i=1}^{m} \sum_{j=1}^{n} f(x_{ij}^*, y_{ij}^*)\,\Delta A_{ij}.
$$

We say $f$ is **integrable** on $R$, with **double integral** $I$, if for every $\varepsilon > 0$ there is a $\delta > 0$ such that every Riemann sum of $f$ over a partition of mesh less than $\delta$, with any choice of sample points, is within $\varepsilon$ of $I$. We then write

$$
I = \iint_R f(x, y)\,dA.
$$

Each term $f(x_{ij}^*, y_{ij}^*)\,\Delta A_{ij}$ is the volume of one column: height times base area. "Any choice of sample points" covers both the middles and the corners from the exercise, and demands that in the limit they agree. The symbol $dA$ recalls the base area $\Delta A_{ij}$.

When $f \ge 0$, the number $\iint_R f\,dA$ is what we mean by the volume under the graph of $f$ over $R$. Where $f$ is negative its columns count negatively, as area below the axis does in one variable.

The definition leaves open whether the limit exists. For the functions we care about it does.

**Theorem.** **(Continuous functions are integrable.)** If $f$ is continuous on the closed rectangle $R$, then $f$ is integrable on $R$.

We use this theorem without proof. Its proof is the two-variable version of the one-variable argument: on a closed rectangle a continuous function is uniformly continuous, so once the cells are small enough, $f$ varies by less than any prescribed amount over every cell at once, and that traps all the Riemann sums in a narrow band.

So the hill has a volume. The definition is little help in finding it, since nobody wants to sum $n^2$ columns and take a limit.

## Slabs: the volume as an integral of areas

Take all the columns that share one value of $x$. They stand in a row running south to north, and together they approximate a thin slab of the hill: the part between two vertical planes $x = \text{const}$, close together. A slab's volume is close to its thickness times the area of its face, and the area of its face is a one-variable problem.

Cut the hill with the vertical plane at a fixed $x$. The cut face is the region under the curve $z = f(x, y)$, where now only $y$ varies, from $-1$ to $1$. Its area is an ordinary integral:

$$
A(x) = \int_{-1}^{1} f(x, y)\,dy.
$$

**Pause and try.** Find the area of the cut face through the summit: compute $A(1) = \int_{-1}^{1} f(1, y)\,dy$. Then find $A(x)$ for a general $x$, remembering that $x$ is a constant while you integrate in $y$.

**Answer.** At $x = 1$ the height is $f(1, y) = 8 - y^2$, with antiderivative $8y - \frac{y^3}{3}$, so $A(1) = \left(8 - \frac13\right) - \left(-8 + \frac13\right) = 16 - \frac23 = \frac{46}{3} \approx 15.33$. In general, writing $g(x) = 6 + 3x - x^3$ for the part that does not involve $y$, the height is $g(x) - y^2$ and $A(x) = 2g(x) - \frac23 = \frac{34}{3} + 6x - 2x^3$.

The step from antiderivative to area is the [fundamental theorem of calculus](@calculus/fundamental-theorem): if $F' = f$ on $[a, b]$ and $f$ is continuous, then $\int_a^b f = F(b) - F(a)$.

Now sweep the cutting plane from $x = 0$ to $x = 2$. A slab of thickness $\Delta x$ at position $x$ has volume about $A(x)\,\Delta x$, and adding slabs is again a Riemann sum, this time for the one-variable function $A$.

[Figure 3, animation: A vertical plane sweeps east across the hill. The orange face is the cross-section at x, with area A(x), plotted on the right. The volume passed so far is the area under the graph of A up to x, and it reaches \frac{80}{3} \approx 26.67 at x = 2.]

So the volume should be the integral of the face areas:

$$
\int_0^2 A(x)\,dx = \int_0^2 \left(\frac{34}{3} + 6x - 2x^3\right) dx = \left[\frac{34}{3}x + 3x^2 - \frac{x^4}{2}\right]_0^2 = \frac{68}{3} + 12 - 8 = \frac{80}{3}.
$$

That is $26\frac{2}{3}$, the value the column sums were heading for: about $2.67$ cubic kilometers of rock.

Written without the intermediate name $A$, the computation is an **iterated integral**,

$$
\int_0^2 \left( \int_{-1}^{1} f(x, y)\,dy \right) dx,
$$

read from the inside out: integrate in $y$ with $x$ held constant, then integrate the result in $x$.

## The other order, and Fubini's theorem

We could just as well cut with planes of constant $y$ and sweep from south to north.

**Pause and try.** Do it. Compute the face area $B(y) = \int_0^2 f(x, y)\,dx$, with $y$ held constant, and then $\int_{-1}^{1} B(y)\,dy$. Before you start: must the answer be $\frac{80}{3}$ again?

**Answer.** With $y$ constant, an antiderivative of $6 + 3x - x^3 - y^2$ in $x$ is $6x + \frac32 x^2 - \frac14 x^4 - y^2 x$, so $B(y) = 12 + 6 - 4 - 2y^2 = 14 - 2y^2$. Then $\int_{-1}^{1} (14 - 2y^2)\,dy = 28 - \frac43 = \frac{80}{3}$. It had better be the same, since both computations measure the same rock.

The two answers agree, and the reason is visible at the level of columns. A Riemann sum is a sum of numbers laid out in a grid, one for each cell. You may add a grid of numbers row by row or column by column, and the grand total is the same.

[Figure 4, steps: The sixteen columns of the second estimate, grouped two ways. Pulled apart by x they form four slabs across the hill; pulled apart by y they form four slabs along it. Either way the slab volumes add to 27.]

  - step: Sixteen columns, each on a base half a kilometer on a side. Their volumes total 27.
  - step: Group them by x. Each group of four is a slab across the hill, and the four slab volumes add to 27.
  - step: Put them back and group by y instead. These four slabs run along the hill, and their volumes also add to 27.
For finite sums that settles it. For integrals a limit is involved, and the statement becomes a theorem, named for Guido Fubini.

**Theorem.** **(Fubini's theorem for continuous functions.)** Let $f$ be continuous on the rectangle $R$: $a \le x \le b$, $c \le y \le d$. Then

$$
\iint_R f(x, y)\,dA = \int_a^b \left( \int_c^d f(x, y)\,dy \right) dx = \int_c^d \left( \int_a^b f(x, y)\,dx \right) dy.
$$

We cite this theorem; here is the reason it is true and what a full proof adds. Take a Riemann sum with sample points on a grid, $(x_i^*, y_j^*)$, and group it by $x$:

$$
\sum_{i} \sum_{j} f(x_i^*, y_j^*)\,\Delta y_j\,\Delta x_i = \sum_i \left( \sum_j f(x_i^*, y_j^*)\,\Delta y_j \right) \Delta x_i.
$$

The inner sum is a one-variable Riemann sum for $A(x_i^*) = \int_c^d f(x_i^*, y)\,dy$, so it is close to $A(x_i^*)$, and then the outer sum is close to $\sum_i A(x_i^*)\,\Delta x_i$, a Riemann sum for $\int_a^b A(x)\,dx$. That is the slab picture. What is missing is control of the word "close": the inner sums must be within $\varepsilon$ of $A(x_i^*)$ for every $i$ at once, with one mesh serving all of them, or the errors could add up. Uniform continuity of $f$ on $R$ supplies that, and also shows that $A$ is continuous, so that the outer integral exists.

**Key idea.** A double integral of a continuous function over a rectangle equals an iterated integral: integrate in one variable with the other held constant, then integrate the result. Either order gives the same number.

Without the hypothesis the two orders can disagree. For $f(x, y) = \dfrac{x^2 - y^2}{(x^2 + y^2)^2}$ on the square $0 \le x \le 1$, $0 \le y \le 1$, integrating in $y$ first gives $\frac{\pi}{4}$ and integrating in $x$ first gives $-\frac{\pi}{4}$. This function is unbounded near the origin, so it is not continuous on the closed square. The last problem works through it.

## Regions that are not rectangles

Suppose the base is a region $D$ with curved sides. The definition extends with a simple device: enclose $D$ in a rectangle $R$, and let $\tilde f$ equal $f$ on $D$ and $0$ everywhere else in $R$. Columns outside $D$ then have height 0.

**Definition.** Let $D$ be a bounded region of the plane and $f$ a function defined on $D$. With $R$ and $\tilde f$ as above, the **double integral of $f$ over $D$** is

$$
\iint_D f\,dA = \iint_R \tilde f\,dA,
$$

when the integral on the right exists. The value does not depend on which enclosing rectangle is chosen, because $\tilde f$ is 0 on whatever a larger rectangle adds.

The slab picture still tells us how to compute it. Take $D$ to be the region between the parabola $y = x^2$ and the line $y = x$, which cross at $(0, 0)$ and $(1, 1)$. Fix $x$ between 0 and 1. The slice of $D$ at that $x$ is the segment from the parabola up to the line, so the face of the slab has area $\int_{x^2}^{x} f(x, y)\,dy$. The limits now depend on $x$, which is harmless, because $x$ is a constant during the inner integration.

[Figure 5, steps: The region between y = x^2 and y = x, sliced two ways: vertically at a fixed x, and horizontally at a fixed y.]

  - step: Fix x. The slice of the region runs in y from the parabola, y = x², up to the line, y = x.
  - step: Or fix y. The slice runs in x from the line, x = y, across to the parabola, x = √y.
**Theorem.** **(Iterated integrals over a region between two graphs.)** Let $g_1$ and $g_2$ be continuous on $[a, b]$ with $g_1(x) \le g_2(x)$, let $D$ be the region $a \le x \le b$, $g_1(x) \le y \le g_2(x)$, and let $f$ be continuous on $D$. Then $f$ is integrable over $D$ and

$$
\iint_D f\,dA = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y)\,dy \right) dx.
$$

The same holds with the roles of $x$ and $y$ exchanged, for a region $c \le y \le d$, $h_1(y) \le x \le h_2(y)$.

This is also cited. It does not follow at once from the version for rectangles, because $\tilde f$ jumps from $f$ to 0 across the boundary of $D$ and so is not continuous on $R$. The extra ingredient is that the boundary curves are thin: they can be covered by cells of total area as small as we like, so the columns that straddle the boundary contribute nothing in the limit.

**Worked example.** **Both orders over a curved region.** Compute $\displaystyle\iint_D xy\,dA$ for the region $D$ between $y = x^2$ and $y = x$.

*Slicing at fixed $x$.* For $0 \le x \le 1$ the slice is $x^2 \le y \le x$, so

$$
\int_0^1 \left( \int_{x^2}^{x} xy\,dy \right) dx = \int_0^1 x \left[\frac{y^2}{2}\right]_{x^2}^{x} dx = \int_0^1 \frac{x^3 - x^5}{2}\,dx = \frac12\left(\frac14 - \frac16\right) = \frac{1}{24}.
$$

*Slicing at fixed $y$.* We must describe the same region with $y$ outermost. The values of $y$ in $D$ run from 0 to 1. At a fixed $y$ the slice starts on the line, where $x = y$, and ends on the parabola, where $x = \sqrt{y}$. So

$$
\int_0^1 \left( \int_{y}^{\sqrt{y}} xy\,dx \right) dy = \int_0^1 y \left[\frac{x^2}{2}\right]_{y}^{\sqrt y} dy = \int_0^1 \frac{y^2 - y^3}{2}\,dy = \frac12\left(\frac13 - \frac14\right) = \frac{1}{24}.
$$

*Check.* The two orders agree. Also, $D$ has area $\int_0^1 (x - x^2)\,dx = \frac16$ and $0 \le xy \le 1$ on it, so the integral must lie between 0 and $\frac16$.

**Common mistake.** **Swapping the order by swapping the symbols.** To reverse $\int_0^1 \int_{x^2}^{x} f\,dy\,dx$ it is tempting to write $\int_{x^2}^{x} \int_0^1 f\,dx\,dy$. That expression has $x$ in the limits of the outer integral, so its "value" would still contain $x$, and a volume cannot depend on a variable of integration. The outer limits must be constants, and the inner limits may depend only on the outer variable. To change the order, go back to the picture of the region and describe its slices in the other direction.

## Round regions and the polar area element

Some regions resist both slicings. Take the dome $z = 1 - x^2 - y^2$ over the unit disc $x^2 + y^2 \le 1$. A slice at fixed $x$ runs from $y = -\sqrt{1 - x^2}$ to $y = \sqrt{1 - x^2}$, and the square roots make the integrals unpleasant. Yet in terms of the distance $r$ from the origin, the region is just $r \le 1$ and the height is $1 - r^2$.

So describe points by **polar coordinates**: the distance $r \ge 0$ from the origin and the angle $\theta$ counterclockwise from the positive $x$-axis, with $x = r\cos\theta$ and $y = r\sin\theta$. In these coordinates the disc is the rectangle $0 \le r \le 1$, $0 \le \theta \le 2\pi$. It is tempting to treat $r$ and $\theta$ just as we treated $x$ and $y$.

**Pause and try.** The area of a region $D$ is $\iint_D 1\,dA$, since a slab of height 1 has volume equal to its base area. Test the tempting idea on the unit disc: compute $\int_0^{2\pi} \int_0^1 1\,dr\,d\theta$. What should the answer have been?

**Answer.** The inner integral is 1 and the outer is $2\pi$, so the tempting formula gives $2\pi \approx 6.28$. The [area of the unit disc](@geometry/area-of-a-circle) is $\pi \approx 3.14$. The formula is wrong by a factor of 2, so $dr\,d\theta$ cannot be the area of a small piece.

To see what went wrong, look at the pieces. Cutting the $(r, \theta)$ rectangle into equal cells cuts the disc by circles and rays, and the resulting pieces of the disc are far from equal.

[Figure 6, image: Left: the rectangle 0 \le r \le 1, 0 \le \theta \le 2\pi cut into equal cells. Right: the same cells drawn in the disc. The blue and orange cells have the same \Delta r and \Delta\theta, but in the disc the orange one, farther from the center, has more than twice the area.]

The Riemann sum must weight each column by the true area of its base, so we need the area of one polar cell.

[Figure 7, image: One polar cell, between the circles of radius r_1 and r_2 and two rays an angle \Delta\theta apart. Its area is \Delta r times the length \bar r\,\Delta\theta of the arc through its middle.]

The cell is the difference of two circular sectors. A sector of radius $r$ and angle $\Delta\theta$ is the fraction $\frac{\Delta\theta}{2\pi}$ of a full disc, so its area is $\frac{\Delta\theta}{2\pi} \cdot \pi r^2 = \frac12 r^2 \Delta\theta$. Subtracting the inner sector from the outer one,

$$
\text{area of the cell} = \frac12 r_2^2\,\Delta\theta - \frac12 r_1^2\,\Delta\theta = \frac{r_1 + r_2}{2}\,(r_2 - r_1)\,\Delta\theta = \bar r\,\Delta r\,\Delta\theta,
$$

where $\bar r = \frac{r_1 + r_2}{2}$ is the radius at the middle of the cell. This is exact. A polar cell has the area of a rectangle with sides $\Delta r$ and $\bar r\,\Delta\theta$: one side is a step outward, and the other is an arc, whose length is the angle *times the radius*. The factor $\bar r$ is the stretching that the tempting formula ignored.

Now form a Riemann sum over polar cells, sampling $f$ at the middle of each:

$$
\sum_{i} \sum_{j} f(\bar r_i \cos\theta_j^*, \bar r_i \sin\theta_j^*)\;\bar r_i\,\Delta r_i\,\Delta\theta_j.
$$

Read this as a sum over the cells of the $(r, \theta)$ rectangle, each of area $\Delta r_i\,\Delta\theta_j$. It is then an ordinary Riemann sum for the function $f(r\cos\theta, r\sin\theta)\,r$, with the extra factor $r$ inside.

**Theorem.** **(Double integrals in polar coordinates.)** Let $0 \le a < b$ and $\alpha < \beta \le \alpha + 2\pi$, let $D$ be the set of points with polar coordinates $a \le r \le b$, $\alpha \le \theta \le \beta$, and let $f$ be continuous on $D$. Then

$$
\iint_D f(x, y)\,dA = \int_\alpha^\beta \int_a^b f(r\cos\theta, r\sin\theta)\;r\,dr\,d\theta.
$$

What we showed: sums over polar cells are Riemann sums of $f(r\cos\theta, r\sin\theta)\,r$ on a rectangle, so they converge to the iterated integral on the right. What we did not show: that sums over curved polar cells converge to the double integral on the left, which was defined with rectangular cells. That step is part of the change of variables theorem, which we cite.

With the factor $r$ the area of the unit disc comes out right: $\int_0^{2\pi} \int_0^1 r\,dr\,d\theta = 2\pi \cdot \frac12 = \pi$.

**Worked example.** **The volume under the dome.** Find the volume under $z = 1 - x^2 - y^2$ over the unit disc.

In polar coordinates the height is $1 - r^2$ and the disc is $0 \le r \le 1$, $0 \le \theta \le 2\pi$. Do not forget the factor $r$:

$$
\int_0^{2\pi} \int_0^1 (1 - r^2)\,r\,dr\,d\theta = \int_0^{2\pi} \left[\frac{r^2}{2} - \frac{r^4}{4}\right]_0^1 d\theta = \int_0^{2\pi} \frac14\,d\theta = \frac{\pi}{2}.
$$

*Check.* The dome sits inside a cylinder of volume $\pi$ and contains the cone with the same base and height, of volume $\frac{\pi}{3}$. The answer lies between.

**Common mistake.** **Dropping the $r$.** Writing $dA = dr\,d\theta$ is the most common error with polar coordinates. A quick test catches it: $\theta$ is an angle and has no units of length, so $dr\,d\theta$ is a length, not an area. The product $r\,dr\,d\theta$ is a length times a length.

## The Gaussian integral

The factor $r$ looks like a nuisance, but here it is the reason a computation works. The bell curve $e^{-x^2}$ has no antiderivative that can be written with the usual functions (a theorem of Liouville), so the fundamental theorem cannot evaluate the area under it. Yet the total area is known exactly.

Write $I(a) = \int_{-a}^{a} e^{-x^2}\,dx$. The idea is to compute $I(a)^2$ as a volume. Because $e^{-x^2 - y^2} = e^{-x^2} e^{-y^2}$, Fubini's theorem over the square $S_a$: $-a \le x \le a$, $-a \le y \le a$ gives

$$
\iint_{S_a} e^{-x^2 - y^2}\,dA = \int_{-a}^{a} e^{-x^2} \left( \int_{-a}^{a} e^{-y^2}\,dy \right) dx = I(a) \cdot I(a).
$$

The function $e^{-x^2-y^2} = e^{-r^2}$ depends only on $r$, so discs suit it better than squares. Over the disc $D_\rho$ of radius $\rho$ centered at the origin, the factor $r$ supplies exactly the derivative of the exponent that was missing in one variable.

**Pause and try.** Compute $\iint_{D_\rho} e^{-x^2 - y^2}\,dA$ in polar coordinates.

**Answer.** $\int_0^{2\pi} \int_0^\rho e^{-r^2}\,r\,dr\,d\theta$. Since the derivative of $-\frac12 e^{-r^2}$ is $r e^{-r^2}$, the inner integral is $\frac12\left(1 - e^{-\rho^2}\right)$, and the outer integral multiplies by $2\pi$. The result is $\pi\left(1 - e^{-\rho^2}\right)$.

[Figure 8, animation: The function e^{-x^2 - y^2}, darker where it is larger. The square of half-side a contains the disc of radius a and lies inside the disc of radius a\sqrt2, so the integral over the square, I(a)^2, is trapped between the integrals over the two discs. As a grows all three approach \pi.]

**Theorem.** **(The Gaussian integral.)** $\displaystyle\lim_{a \to \infty} \int_{-a}^{a} e^{-x^2}\,dx = \sqrt{\pi}$. This limit is written $\displaystyle\int_{-\infty}^{\infty} e^{-x^2}\,dx$.

**Proof.** Let $h(x, y) = e^{-x^2 - y^2}$, which is continuous and positive. Every point of the disc $D_a$ lies in the square $S_a$, and every point of $S_a$ is within distance $a\sqrt2$ of the origin, so $D_a \subset S_a \subset D_{a\sqrt2}$. Enlarging the region of integration of a positive function cannot decrease the integral, since it only adds columns of positive height. Hence

$$
\iint_{D_a} h\,dA \;\le\; \iint_{S_a} h\,dA \;\le\; \iint_{D_{a\sqrt2}} h\,dA.
$$

The middle integral is $I(a)^2$ by Fubini's theorem, as computed above. The outer two are given by the polar formula with $\rho = a$ and $\rho = a\sqrt2$. So

$$
\pi\left(1 - e^{-a^2}\right) \;\le\; I(a)^2 \;\le\; \pi\left(1 - e^{-2a^2}\right).
$$

As $a \to \infty$, both $e^{-a^2}$ and $e^{-2a^2}$ tend to 0, so both bounds tend to $\pi$, and $I(a)^2$, trapped between them, tends to $\pi$ as well. Since $I(a) > 0$ and the square root is continuous, $I(a) \to \sqrt\pi$.

A remark on the meaning of $\int_{-\infty}^{\infty}$. The usual definition of an improper integral lets the two ends go to infinity separately, as $\lim_{b \to \infty} \int_0^b + \lim_{a \to \infty} \int_{-a}^0$, and our theorem used a symmetric interval. Here the two agree: $e^{-x^2}$ is even, so each half is $\frac12 I(a)$ and tends to $\frac{\sqrt\pi}{2}$. Notice also that the proof never integrated over the whole plane. It compared integrals over bounded squares and discs, to which Fubini's theorem and the polar formula apply as stated, and took one limit at the end.

This integral is the reason the normal distribution of statistics carries a $\sqrt{2\pi}$ in its formula.

**Check yourself.** A plate covers the disc $x^2 + y^2 \le 4$, and its density at $(x, y)$ is $\sigma(x, y)$. Which integral gives its mass $\iint_D \sigma\,dA$?
Answer: $\int_0^{2\pi} \int_0^2 \sigma(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta$ The disc is $0 \le r \le 2$, $0 \le \theta \le 2\pi$, and each polar cell has area $r\,\Delta r\,\Delta\theta$.

Step back. The definition of a double integral is a limit of sums of columns, and it is the definition that says what volume means and that gives the proofs something to hold on to. But every computation here went through slabs: a volume is an integral of cross-section areas, so a double integral becomes two single ones. The hard parts were choosing how to slice, which is a question about the picture of the region, and remembering that in polar coordinates a cell's area is $r\,\Delta r\,\Delta\theta$.

**Recap.** - $\iint_R f\,dA$ is the limit of Riemann sums $\sum f(x_{ij}^*, y_{ij}^*)\,\Delta A_{ij}$ as the mesh of the partition tends to 0. For $f \ge 0$ it is the volume under the graph. Continuous functions on a closed rectangle are integrable.
- Fubini's theorem: for continuous $f$ on a rectangle, $\iint_R f\,dA = \int_a^b \int_c^d f\,dy\,dx = \int_c^d \int_a^b f\,dx\,dy$. The inner integral is the area of a cross-section.
- Over a region between two graphs, the inner limits are the curves and the outer limits are constants. To reverse the order, redescribe the region.
- In polar coordinates $dA = r\,dr\,d\theta$, because a polar cell has area exactly $\bar r\,\Delta r\,\Delta\theta$.
- $\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt\pi$, found by squaring it into a double integral and switching to polar coordinates.

## Problems

The hill is $f(x, y) = 6 + 3x - x^3 - y^2$. Problems 1 and 2 are warm-ups, 3 to 5 combine ideas, and 6 and 7 go further.

**Problem 1.** Compute $\displaystyle\iint_R (x + 2y)\,dA$ over the rectangle $0 \le x \le 3$, $0 \le y \le 2$, in both orders.

**Solution.** *$y$ first.* $\int_0^2 (x + 2y)\,dy = \left[xy + y^2\right]_0^2 = 2x + 4$, and $\int_0^3 (2x + 4)\,dx = 9 + 12 = 21$. *$x$ first.* $\int_0^3 (x + 2y)\,dx = \left[\frac{x^2}{2} + 2xy\right]_0^3 = \frac92 + 6y$, and $\int_0^2 \left(\frac92 + 6y\right) dy = 9 + 12 = 21$. The two agree, as Fubini's theorem requires for a continuous integrand.

**Problem 2.** Find the volume of the hill above the square $-1 \le x \le 1$, $-1 \le y \le 1$, which has the pass on its west edge and the summit on its east edge. Then find the average height of the hill over that square, defined as the volume divided by the area of the base.

**Solution.** Integrate in $y$ first: $\int_{-1}^{1} (6 + 3x - x^3 - y^2)\,dy = 2(6 + 3x - x^3) - \frac23$. Then in $x$ over $[-1, 1]$: the odd terms $3x$ and $x^3$ integrate to 0, leaving $\int_{-1}^{1} \left(12 - \frac23\right) dx = 24 - \frac43 = \frac{68}{3} \approx 22.67$. The base has area 4, so the average height is $\frac{17}{3} \approx 5.67$, that is, about 567 m. It lies between the lowest height on the square, 3, and the highest, 8, as an average must.

**Problem 3.** Let $T$ be the triangle with corners $(0, 0)$, $(1, 0)$ and $(0, 1)$. Compute $\displaystyle\iint_T (x + y)\,dA$.

**Solution.** The slanted side is the line $y = 1 - x$. For $0 \le x \le 1$ the slice at $x$ is $0 \le y \le 1 - x$. The inner integral is $\int_0^{1-x} (x + y)\,dy = x(1 - x) + \frac{(1-x)^2}{2} = \frac{1 - x^2}{2}$, after expanding: $x - x^2 + \frac12 - x + \frac{x^2}{2} = \frac12 - \frac{x^2}{2}$. Then $\int_0^1 \frac{1 - x^2}{2}\,dx = \frac12\left(1 - \frac13\right) = \frac13$.

**Problem 4.** Evaluate $\displaystyle\int_0^1 \left( \int_x^1 e^{y^2}\,dy \right) dx$. The inner integral cannot be done as it stands.

**Solution.** The function $e^{y^2}$ has no elementary antiderivative in $y$, so reverse the order. The limits describe the region $0 \le x \le 1$, $x \le y \le 1$: the triangle with corners $(0, 0)$, $(0, 1)$, $(1, 1)$, above the line $y = x$. Described with $y$ outermost, $y$ runs from 0 to 1 and, for each $y$, $x$ runs from 0 to $y$. The integrand is continuous, so the theorem on regions between graphs gives the same value in either order:

$$
\int_0^1 \left( \int_0^y e^{y^2}\,dx \right) dy = \int_0^1 y\,e^{y^2}\,dy = \left[\frac{e^{y^2}}{2}\right]_0^1 = \frac{e - 1}{2} \approx 0.86.
$$

The inner integration in $x$ produced the factor $y$ that makes the outer integral possible.

**Problem 5.** Use polar coordinates to find the volume of a ball of radius $a$. (The upper half of the sphere $x^2 + y^2 + z^2 = a^2$ is the graph of $z = \sqrt{a^2 - x^2 - y^2}$ over the disc of radius $a$.)

**Solution.** The ball is two equal halves, so its volume is $2\iint_D \sqrt{a^2 - x^2 - y^2}\,dA$ over the disc $D$ of radius $a$. In polar coordinates this is

$$
2\int_0^{2\pi} \int_0^a \sqrt{a^2 - r^2}\;r\,dr\,d\theta.
$$

The derivative of $-\frac13 (a^2 - r^2)^{3/2}$ with respect to $r$ is $r\sqrt{a^2 - r^2}$, so the inner integral is $\left[-\frac13 (a^2 - r^2)^{3/2}\right]_0^a = \frac{a^3}{3}$. The outer integral multiplies by $2\pi$, and the factor 2 in front gives $\frac{4}{3}\pi a^3$. This agrees with [the value Archimedes found](@geometry/volume-of-cone-and-sphere) by comparing slices.

**Problem 6.** The standard normal curve of statistics is $\varphi(x) = \dfrac{1}{\sqrt{2\pi}}\,e^{-x^2/2}$. Using the Gaussian integral, show that the total area under it is 1.

**Solution.** Substitute $x = \sqrt2\,u$, so $dx = \sqrt2\,du$ and $e^{-x^2/2} = e^{-u^2}$. As $x$ runs from $-a$ to $a$, $u$ runs from $-a/\sqrt2$ to $a/\sqrt2$, so

$$
\int_{-a}^{a} e^{-x^2/2}\,dx = \sqrt2 \int_{-a/\sqrt2}^{a/\sqrt2} e^{-u^2}\,du.
$$

As $a \to \infty$ the right side tends to $\sqrt2 \cdot \sqrt\pi = \sqrt{2\pi}$ by the theorem. Dividing by $\sqrt{2\pi}$ gives total area 1.

**Problem 7.** Let $f(x, y) = \dfrac{x^2 - y^2}{(x^2 + y^2)^2}$ for $(x, y) \ne (0, 0)$. (a) Verify that $\dfrac{\partial}{\partial y}\!\left(\dfrac{y}{x^2 + y^2}\right) = f(x, y)$. (b) Use (a) to compute $\int_0^1 \left( \int_0^1 f\,dy \right) dx$. (c) Without further integration, find $\int_0^1 \left( \int_0^1 f\,dx \right) dy$. (d) Why does this not contradict Fubini's theorem?

**Solution.** (a) By the quotient rule, $\dfrac{\partial}{\partial y}\,\dfrac{y}{x^2 + y^2} = \dfrac{(x^2 + y^2) - y \cdot 2y}{(x^2 + y^2)^2} = \dfrac{x^2 - y^2}{(x^2 + y^2)^2}$.

(b) For a fixed $x > 0$, part (a) and the fundamental theorem give $\int_0^1 f(x, y)\,dy = \left[\dfrac{y}{x^2 + y^2}\right]_{y=0}^{y=1} = \dfrac{1}{x^2 + 1}$. Then $\int_0^1 \dfrac{dx}{1 + x^2} = \arctan 1 - \arctan 0 = \dfrac{\pi}{4}$.

(c) Exchanging the names of $x$ and $y$ turns $f$ into $-f$, since the numerator changes sign and the denominator does not. So the integral in the other order is the integral in (b) with the sign reversed: $-\dfrac{\pi}{4}$.

(d) Fubini's theorem as stated needs $f$ to be continuous on the closed square. This $f$ is not defined at the origin and is unbounded near it: along the $x$-axis $f(x, 0) = \dfrac{1}{x^2}$, which grows without limit as $x \to 0$. No value assigned at the origin can make it continuous. The hypothesis fails, so the theorem says nothing, and the two iterated integrals are free to differ.

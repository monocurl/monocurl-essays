# Euler's formula: why e^(iπ) = -1

> You cannot multiply e by itself iπ times, so the famous equation needs a definition first. Compound interest supplies one, and it leads around a circle.

Series: Precalculus (https://www.monocurl.com/monocurl-essays/precalculus/)
Canonical: https://www.monocurl.com/monocurl-essays/precalculus/eulers-formula/
Keywords: euler's formula, why is e^(i pi) = -1, euler's identity explained, e to the i theta, cos theta + i sin theta, complex exponential, proof of euler's formula

[Figure 1, animation: The number \left(1 + \frac{i\pi}{n}\right)^n is reached from 1 by n multiplications, drawn here as a path with n straight steps. As n doubles from 1 to 64 the path settles onto the upper half of the unit circle (dashed) and its end closes in on -1.]

The equation $e^{i\pi} = -1$ is printed on mugs and T-shirts, and it deserves a harder look than a mug invites. A power means repeated multiplication: $e^3$ is $e \cdot e \cdot e$. Nobody can multiply $e \approx 2.718$ by itself $i\pi$ times, so before asking whether the equation is true we have to ask what its left side means.

The honest answer is that someone has to decide. The symbol $e^{i\pi}$ has no meaning until it is given one by a definition, and once it has one, "$e^{i\pi} = -1$" becomes a theorem about that definition, which can be proved. This lesson makes the definition, explains why it is the natural one, and proves the theorem. The proof gives more than one equation. For every real number $\theta$ it gives **Euler's formula**, $e^{i\theta} = \cos\theta + i\sin\theta$.

## A description of e to the x that survives a complex x

We need a way of computing $e^x$ that does not involve "multiplying $x$ times". The lesson on [compound interest](@precalculus/exponential-growth-and-e) found one. A dollar earning interest at rate $x$ per year, paid in $n$ equal instalments, is multiplied by $1 + \frac{x}{n}$ at each payment and is worth $\left(1 + \frac{x}{n}\right)^n$ at the end of the year. As the payments become more frequent this approaches a ceiling, and the ceiling is $e^x$:

$$
\lim_{n \to \infty}\left(1 + \frac{x}{n}\right)^n = e^x \qquad \text{for every real number } x.
$$

Look at what the left side asks us to do: divide $x$ by a whole number, add 1, and multiply the result by itself $n$ times, where $n$ is a whole number. The exponent $x$ has moved inside the bracket, and the only power left is a whole-number power. All of these operations make sense for [complex numbers](@precalculus/complex-numbers), which are the points $a + bi$ of the plane, multiplied by the rule $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$ that comes from $i^2 = -1$.

So let us put $x = i\pi$ into the left side and compute. With $n = 1$ there is nothing to multiply: the value is $1 + i\pi \approx 1 + 3.14i$, which is nowhere near $-1$.

**Pause and try.** Compute the case $n = 2$, that is $\left(1 + \frac{i\pi}{2}\right)^2$, by multiplying out. Use $\pi^2 \approx 9.87$. Is it closer to $-1$ than $1 + i\pi$ was?

**Answer.** $\left(1 + \frac{i\pi}{2}\right)^2 = 1 + 2 \cdot \frac{i\pi}{2} + \frac{i^2\pi^2}{4} = \left(1 - \frac{\pi^2}{4}\right) + i\pi \approx -1.47 + 3.14i$. Its real part has moved past $-1$, but it is just as high above the real axis as before, so its distance from $-1$ has only fallen from about $3.72$ to about $3.18$.

Here are more values, computed the same way (by machine, for the larger $n$).

| $n$ | $\left(1 + \frac{i\pi}{n}\right)^n$ |
|---|---|
| 1 | $1.000 + 3.142i$ |
| 2 | $-1.467 + 3.142i$ |
| 4 | $-2.321 + 1.204i$ |
| 10 | $-1.593 + 0.156i$ |
| 100 | $-1.051 + 0.001i$ |
| 1000 | $-1.005 + 0.000i$ |

The values wander through the plane and then close in on $-1$. The table shows that it happens and gives no hint of why. For that we have to watch the multiplications one at a time.

## One multiplication is a small turn and a small stretch

Take any complex number $z$ and multiply it by $1 + \frac{i\pi}{n}$:

$$
z\left(1 + \frac{i\pi}{n}\right) = z + \frac{\pi}{n}\,(iz).
$$

Multiplying by $i$ is a quarter turn about 0, so $iz$ is as long as $z$ and at a right angle to it. The new point is therefore the old point plus a step sideways: at a right angle to the line from 0 to $z$, of length $\frac{\pi}{n}$ times the distance of $z$ from 0. Here is $n = 4$, where each step is $\frac{\pi}{4} \approx 0.79$ times the current distance.

[Figure 2, steps: The four multiplications that make up \left(1 + \frac{i\pi}{4}\right)^4. Each adds a step at a right angle to the line from 0, so each builds a right triangle on the previous one. The four triangles have the same shape.]

  - step: Start at 1 and multiply by 1 + iπ/4. That adds a step of length 0.79 straight up, at a right angle to the line from 0. The point is now 1.27 from 0.
  - step: Multiply again. The step is again at a right angle to the line from 0, and 0.79 times as long as that line. The new triangle is the old one, turned and enlarged.
  - step: A third multiplication. Each one turns the point through the same angle, 0.67 radians, and multiplies its distance from 0 by the same factor, 1.27.
  - step: After four multiplications the point is 2.61 from 0, at an angle of 2.66 radians. We were hoping for distance 1 and angle π = 3.14.
From here on, angles are measured in [radians](@trigonometry/radians): the size of an angle is the length of the arc it cuts from a circle of radius 1. A full turn is $2\pi \approx 6.28$, a half turn is $\pi$, a right angle is $\frac{\pi}{2}$. The reason for the switch is in the figure. The first step has length $\frac{\pi}{4} \approx 0.785$ and turns the point through $0.666$ radians, two numbers that are suspiciously close, and with degrees ($38.1^\circ$) the kinship would be invisible.

The lesson on complex numbers proved that multiplication is a stretch together with a turn. Every complex number $w \ne 0$ has a **modulus** $|w|$, its distance from 0, and an **argument**, the angle from the positive real axis to the direction of $w$; when two numbers are multiplied, their moduli multiply and their arguments add. Our multiplier $w = 1 + \frac{i\pi}{n}$ is the point one unit right and $\frac{\pi}{n}$ up, so

$$
|w| = \sqrt{1 + \frac{\pi^2}{n^2}}, \qquad \text{argument of } w = \arctan\frac{\pi}{n}.
$$

Multiplying $n$ copies of $w$ multiplies $n$ equal moduli and adds $n$ equal arguments:

$$
\left(1 + \frac{i\pi}{n}\right)^n \text{ has modulus } \left(1 + \frac{\pi^2}{n^2}\right)^{n/2} \text{ and argument } n\arctan\frac{\pi}{n}.
$$

For $n = 4$ these are $1.2716^4 \approx 2.61$ and $4 \times 0.6658 \approx 2.66$, as in the figure. For the value to approach $-1$, the modulus must approach 1 and the argument must approach $\pi$. The second is plausible, since each turn is a bit less than $\frac{\pi}{n}$ and there are $n$ of them. The first is not obvious at all.

**Pause and try.** Every step stretches, by a factor greater than 1. Taking more steps makes each stretch milder, but there are more of them. Compute the total stretch $\left(\sqrt{1 + \pi^2/n^2}\right)^n$ for $n = 10$ and for $n = 100$ with a calculator, and decide which effect is winning.

**Answer.** For $n = 10$ each step stretches by $\sqrt{1.0987} \approx 1.0482$, and $1.0482^{10} \approx 1.60$. For $n = 100$ each step stretches by $\sqrt{1.000987} \approx 1.000493$, and $1.000493^{100} \approx 1.051$. The mildness wins. With ten times as many steps, the excess of each stretch over 1 fell by a factor of about 100 (from $0.048$ to $0.0005$), which more than pays for having ten times as many.

[Figure 3, steps: The path of \left(1 + \frac{i\pi}{n}\right)^n for n = 1, 2, 4, 10 and 100, with earlier paths left in gray. More steps give a path that stays closer to the unit circle and an end point closer to -1.]

  - step: One step: the path goes straight up from 1 to 1 + 3.14i.
  - step: Two steps of half the size. The end is 3.47 from 0, even farther out than before.
  - step: Four steps: the path of the previous figure. It has begun to curl around 0.
  - step: Ten steps. The end is 1.60 from 0 and almost on the negative real axis.
  - step: A hundred steps. The path is hard to tell from the upper half of the unit circle, and it ends at about -1.05.
Here is the reason the stretch dies out. For a small number $x$, a step of size $x$ at a right angle changes the distance from 0 from 1 to $\sqrt{1 + x^2}$, and $\sqrt{1 + x^2}$ is less than $1 + \frac{x^2}{2}$ (square both to compare). The excess depends on the *square* of the step. With $x = \frac{\pi}{n}$ each step contributes an excess of at most $\frac{\pi^2}{2n^2}$, and $n$ such contributions amount to roughly $\frac{\pi^2}{2n}$, which shrinks as $n$ grows. For $n = 100$ this estimate is $0.049$, and the true excess in the table is $0.051$. The turn, by contrast, is proportional to the step itself: about $\frac{\pi}{n}$ each, about $\pi$ in total, whatever $n$ is. A sideways step turns you in proportion to its length and pushes you outward only in proportion to its length squared.

[Figure 4, image: The modulus of \left(1 + \frac{i\pi}{n}\right)^n (orange) and its argument divided by \pi (blue), plotted against the number of steps n on a scale where each gridline is ten times more steps. Both approach 1: the modulus from above and the argument from below.]

## The definition, and Euler's formula

Nothing in this reasoning was special to $\pi$. Replace it by any real number $\theta$: each step is at a right angle and has relative size $\frac{\theta}{n}$, the total turn should be about $\theta$, and the stretch should die out. So $\left(1 + \frac{i\theta}{n}\right)^n$ ought to approach the point of the unit circle at angle $\theta$. Here is a path of 200 steps while $\theta$ runs from 0 to $2\pi$.

[Figure 5, animation: The path of \left(1 + \frac{i\theta}{200}\right)^{200} (orange) as \theta grows from 0 to 2\pi. Its end stays close to the point of the unit circle at arc length \theta from 1 (green ring), a little outside it and a little behind.]

We now state exactly what we are defining and what we claim. First, the meaning of a limit for points of the plane: it is the meaning for real numbers, with distance in the plane in place of distance on the line.

**Definition.** A sequence of complex numbers $z_1, z_2, z_3, \ldots$ **has limit $L$**, written $\lim_{n\to\infty} z_n = L$, if the distances $|z_n - L|$ have limit 0. That is, for every $\varepsilon > 0$ there is a whole number $N$ such that $|z_n - L| < \varepsilon$ for all $n \ge N$.

**Definition.** For a real number $\theta$, the symbol $e^{i\theta}$ **means**

$$
e^{i\theta} = \lim_{n \to \infty}\left(1 + \frac{i\theta}{n}\right)^n.
$$

**Theorem.** **(Euler's formula.)** For every real number $\theta$ the limit above exists, and

$$
e^{i\theta} = \cos\theta + i\sin\theta,
$$

where the cosine and sine are taken of the angle $\theta$ measured in radians. In particular $e^{i\pi} = \cos\pi + i\sin\pi = -1$.

Be clear about the roles. For a real exponent, $e^x$ already had a meaning and "$(1 + \frac{x}{n})^n \to e^x$" was a theorem. For an imaginary exponent there is no earlier meaning, so we promote that theorem to a definition. Nothing has been proved by doing so. The content is in the theorem: the limit exists, and it is the point of the unit circle that [trigonometry](@trigonometry/unit-circle) calls $(\cos\theta, \sin\theta)$.

The proof needs two estimates. The first is an inequality for whole-number powers, **Bernoulli's inequality**: if $0 \le x \le 1$ and $n \ge 1$, then $(1 - x)^n \ge 1 - nx$. It is true for $n = 1$, and if it is true for some $n$ then multiplying both sides by $1 - x \ge 0$ gives $(1 - x)^{n+1} \ge (1 - nx)(1 - x) = 1 - (n+1)x + nx^2 \ge 1 - (n+1)x$, so it is true for $n + 1$, and hence for every $n$. The second estimate compares an angle with its tangent, and it is the one place where radians are indispensable.

[Figure 6, image: The multiplier 1 + ix and the angle t it makes with the real axis, so that x = \tan t. On the unit circle the arc from 1 has length t. The arc is longer than the height \sin t of its end point and shorter than the straight step x.]

The figure shows the standard fact that $\sin t < t < \tan t$ whenever $0 < t < \frac{\pi}{2}$ and $t$ is in radians. The reason is a comparison of areas: the triangle with corners 0, 1 and the end of the arc has area $\frac12\sin t$; it sits inside the circular sector, of area $\frac12 t$; and the sector sits inside the blue triangle, of area $\frac12\tan t$. We cite this inequality and do not prove it, because a full proof has to start from a definition of arc length.

**Proof.** Fix $\theta$, and write $w_n = 1 + \frac{i\theta}{n}$ and $z_n = w_n^{\,n}$. If $\theta = 0$ every $z_n$ is 1 and the claim reads $1 = 1$. Suppose $\theta > 0$.

*Step 1: the modulus and argument of $z_n$.* The point $w_n$ is one unit to the right of 0 and $\frac{\theta}{n}$ above it, so $|w_n| = \sqrt{1 + \theta^2/n^2}$, and an argument of $w_n$ is $t_n = \arctan\frac{\theta}{n}$, the angle between 0 and $\frac{\pi}{2}$ whose tangent is $\frac{\theta}{n}$. Since moduli multiply and arguments add,

$$
z_n = r_n\,(\cos\varphi_n + i\sin\varphi_n), \qquad r_n = \left(1 + \frac{\theta^2}{n^2}\right)^{n/2}, \quad \varphi_n = n\,t_n.
$$

*Step 2: $r_n \to 1$.* Put $x = \theta^2/n^2$ and take $n > \theta^2$, so that $0 \le x < \frac1n \le 1$. Clearly $r_n \ge 1$, hence $r_n \le r_n^2 = (1 + x)^n$. Because $(1 + x)(1 - x) = 1 - x^2 \le 1$, we have $1 + x \le \frac{1}{1 - x}$, and then by Bernoulli's inequality

$$
1 \le r_n \le (1 + x)^n \le \frac{1}{(1 - x)^n} \le \frac{1}{1 - nx} = \frac{1}{1 - \theta^2/n}.
$$

The right side has limit 1 as $n \to \infty$, so $r_n$ is squeezed to 1.

*Step 3: $\varphi_n \to \theta$.* Apply $\sin t < t < \tan t$ to $t = t_n$. Here $\tan t_n = \frac{\theta}{n}$, and the point $w_n/|w_n|$ of the unit circle has height $\sin t_n = \frac{\theta/n}{\sqrt{1 + \theta^2/n^2}}$. Multiplying the inequality by $n$,

$$
\frac{\theta}{\sqrt{1 + \theta^2/n^2}} < \varphi_n < \theta.
$$

The left side has limit $\theta$, so $\varphi_n$ is squeezed to $\theta$.

*Step 4: $z_n \to \cos\theta + i\sin\theta$.* Let $u_n = \cos\varphi_n + i\sin\varphi_n$ and $L = \cos\theta + i\sin\theta$. Going from $z_n$ to $L$ by way of $u_n$ is no shorter than going directly, so

$$
|z_n - L| \le |z_n - u_n| + |u_n - L|.
$$

The first distance is $|(r_n - 1)u_n| = r_n - 1$. The second is the straight distance between two points of the unit circle whose angles differ by $\theta - \varphi_n$, and it is at most the length of the arc between them, which is $\theta - \varphi_n$. Both have limit 0 by steps 2 and 3, so $|z_n - L| \to 0$.

*Negative $\theta$.* Changing $\theta$ to $-\theta$ replaces $w_n$ by its mirror image in the real axis. The multiplication rule shows that the product of two mirror images is the mirror image of the product, so every $z_n$ is mirrored, and the limit is the mirror image $\cos\theta - i\sin\theta = \cos(-\theta) + i\sin(-\theta)$.

Three things in the proof were used without proof and should be named: the inequality $\sin t < t < \tan t$; the fact that a straight path between two points is shortest (the triangle inequality in step 4, and "chord at most arc", which Problem 8 turns into a formula); and the squeeze principle, that a sequence trapped between two sequences with the same limit has that limit too ([the lesson on limits](@calculus/limits) proves it for functions, and the proof for sequences is the same). Steps 2 and 3 also took for granted that $\frac{\theta^2}{n}$ and $\frac{\theta^2}{n^2}$ have limit 0 as $n$ grows, and step 1 used the rule from the lesson on complex numbers that moduli multiply and arguments add. Everything else was computed in front of you. Check step 2 against the table: for $\theta = \pi$ and $n = 100$ it promises $1 \le r_n \le \frac{1}{1 - 0.0987} \approx 1.110$, and the true value is $1.051$.

**Key idea.** $e^{i\theta}$ is the point you reach by starting at 1 and walking a distance $\theta$ counterclockwise along the unit circle. Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ names that point by its coordinates. Half the circle has length $\pi$, and it ends at $-1$.

[Figure 7, animation: The point e^{i\theta} as \theta grows from 0 to 2\pi. The green arc has length \theta. The real part of the point is \cos\theta (blue) and its imaginary part is \sin\theta (purple). At \theta = \pi the point is at -1.]

**Pause and try.** Someone types `e^(180i)` into a calculator, intending a half turn in degrees. By the definition, which point of the unit circle is $e^{180i}$? Give its angle as a number between 0 and $2\pi$, and in degrees.

**Answer.** The definition walks a distance of 180 around a circle whose circumference is $2\pi \approx 6.283$. That is 28 full laps ($28 \times 6.2832 = 175.93$) and $4.07$ more, so the point is at angle $4.07$ radians, which is $4.07 \times \frac{180^\circ}{\pi} \approx 233^\circ$. Its coordinates are $\cos 180 \approx -0.598$ and $\sin 180 \approx -0.801$. The formula $e^{i\theta} = \cos\theta + i\sin\theta$ is true only with $\theta$ in radians, because the step of length $\frac{\theta}{n}$ turns the point through nearly $\frac{\theta}{n}$ *units of arc*, and arc length on the unit circle is what a radian is.

## Why this definition deserves the name

A definition cannot be wrong, but it can be a poor use of a good symbol. Writing our limit as a power of $e$ is justified if it behaves like one. The property that matters most is $e^{x}e^{y} = e^{x+y}$.

**Theorem.** For all real numbers $\alpha$ and $\beta$, $\;e^{i\alpha}\,e^{i\beta} = e^{i(\alpha + \beta)}$.

**Proof.** By Euler's formula $e^{i\alpha}$ has modulus 1 and argument $\alpha$, and $e^{i\beta}$ has modulus 1 and argument $\beta$. Their product has modulus $1 \times 1 = 1$ and argument $\alpha + \beta$, so it is $\cos(\alpha + \beta) + i\sin(\alpha + \beta)$, which is $e^{i(\alpha+\beta)}$ by Euler's formula again.

Written with cosines and sines, this theorem is the pair of [angle addition formulas](@trigonometry/angle-addition). The rule "arguments add" was itself proved from those formulas, so this is the same fact in new notation and not a new proof of it. The gain is in the notation: two formulas that are hard to remember have become one law of exponents.

There is also a second route to the same function, and many books take it as the definition. Calculus shows that for real $x$

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots,
$$

the [Taylor series](@calculus/taylor-series) of the exponential. Put $x = i\theta$ and use $i^2 = -1$, $i^3 = -i$, $i^4 = 1$:

$$
1 + i\theta - \frac{\theta^2}{2!} - i\frac{\theta^3}{3!} + \frac{\theta^4}{4!} + \cdots = \left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\right) + i\left(\theta - \frac{\theta^3}{3!} + \cdots\right).
$$

The two brackets are the Taylor series of $\cos\theta$ and $\sin\theta$. This is a third piece of evidence, and it can be made into a proof, but as it stands it is a sketch: one must define what an infinite sum of complex numbers is, show that this one converges, and justify regrouping its terms. It is a theorem, which we cite, that the series converges for every complex number and has the same value as our limit. Either can be taken as the definition, and then the other is a theorem.

For a general complex exponent $a + bi$ one defines $e^{a + bi} = e^a\,e^{ib}$: the point at distance $e^a$ from 0 in the direction $b$ radians.

## Worked examples

[Figure 8, image: Values of e^{i\theta} around the unit circle. Each is found by walking the arc length \theta from 1 and reading off the coordinates \cos\theta and \sin\theta.]

**Worked example.** **Evaluate $e^{i\pi/2}$, $e^{i\pi/3}$ and $e^{2\pi i}$.**

Each is a walk along the unit circle. A quarter of the circle has length $\frac{\pi}{2}$ and ends at the top, so $e^{i\pi/2} = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} = i$. A sixth of the circle has length $\frac{\pi}{3}$, and $e^{i\pi/3} = \cos\frac{\pi}{3} + i\sin\frac{\pi}{3} = \frac12 + \frac{\sqrt3}{2}i$. The whole circle has length $2\pi$ and ends where it began: $e^{2\pi i} = 1$.

*Check with the law of exponents.* $e^{i\pi/2} \cdot e^{i\pi/2} = e^{i\pi}$, and indeed $i \cdot i = -1$.

**Worked example.** **Compute $(1 + i)^{10}$.**

Multiplying out ten brackets is slow, so we write $1 + i$ with its modulus and argument. It is at distance $\sqrt{1^2 + 1^2} = \sqrt2$ from 0, in the direction halfway between the axes, at angle $\frac{\pi}{4}$. So $1 + i = \sqrt2\,e^{i\pi/4}$, and by the law of exponents applied ten times

$$
(1 + i)^{10} = (\sqrt2)^{10}\,e^{10 i\pi/4} = 32\,e^{5\pi i/2}.
$$

A walk of $\frac{5\pi}{2}$ is one full lap, $2\pi$, and a further $\frac{\pi}{2}$, so $e^{5\pi i/2} = e^{i\pi/2} = i$ and $(1 + i)^{10} = 32i$.

*Check.* $(1 + i)^2 = 1 + 2i + i^2 = 2i$, so $(1 + i)^{10} = (2i)^5 = 32\,i^5 = 32i$.

**Worked example.** **Find formulas for $\cos 2\theta$ and $\sin 2\theta$.**

The law of exponents gives $e^{2i\theta} = \left(e^{i\theta}\right)^2$. Write both sides with Euler's formula, abbreviating $c = \cos\theta$ and $s = \sin\theta$:

$$
\cos 2\theta + i\sin 2\theta = (c + is)^2 = (c^2 - s^2) + 2cs\,i.
$$

Two complex numbers are equal only if their real parts agree and their imaginary parts agree. Hence $\cos 2\theta = \cos^2\theta - \sin^2\theta$ and $\sin 2\theta = 2\sin\theta\cos\theta$.

*Check at $\theta = \frac{\pi}{6}$,* where $c = \frac{\sqrt3}{2}$ and $s = \frac12$: $c^2 - s^2 = \frac34 - \frac14 = \frac12 = \cos\frac{\pi}{3}$, and $2cs = \frac{\sqrt3}{2} = \sin\frac{\pi}{3}$.

## Where care is needed

**Common mistake.** **Cancelling the $e$.** From $e^{2\pi i} = 1 = e^{0}$ it is tempting to conclude $2\pi i = 0$. For real exponents the step from $e^x = e^y$ to $x = y$ is valid, because $e^x$ increases with $x$ and never repeats a value. The function $e^{i\theta}$ goes around a circle and repeats every $2\pi$: $e^{i\alpha} = e^{i\beta}$ exactly when $\alpha - \beta$ is a whole multiple of $2\pi$. So an equation between two such powers gives the exponents only up to multiples of $2\pi$.

**Common mistake.** **Expecting $e^{i\theta}$ to be large when $\theta$ is.** The real exponential $e^{100}$ is a number with 44 digits. But $e^{100i}$ is a point of the unit circle, at distance exactly 1 from 0, like every $e^{i\theta}$ with $\theta$ real. An imaginary exponent turns and does not stretch; the real part of the exponent does the stretching.

Two limits of the result should be stated. The theorem is about the limit, and no term of the sequence equals it: the modulus $\left(1 + \frac{\pi^2}{n^2}\right)^{n/2}$ from step 1 is greater than 1 for every $n$, so none of the numbers $\left(1 + \frac{i\pi}{n}\right)^n$ is $-1$. And modulus 1 belongs to real $\theta$ only. For instance $e^{i \cdot i} = e^{-1} \approx 0.37$ under the general definition, a point inside the circle.

Stepping back, the hard part was the first question: what the symbol means. Once $e^{i\theta}$ is read as "take $n$ steps of relative size $\frac{\theta}{n}$ at right angles, and let $n$ grow", the circle appears because a sideways step turns a point in proportion to its length and pushes it outward only in proportion to the square. The same idea, growth at a right angle to position, is how physics and engineering describe anything that rotates or oscillates. The power series we passed over is an infinite sum, and infinite sums need a definition of their own; the next lesson builds it on the simplest example, the [geometric series](@precalculus/geometric-series).

**Check yourself.** Where in the complex plane is $e^{100i}$?
Answer: On the unit circle, at distance 1 from 0 $e^{100i} = \cos 100 + i\sin 100$, and $\cos^2 + \sin^2 = 1$. It is the end of a walk of length 100 around the circle, about 15.9 laps.

**Recap.** - $\left(1 + \frac{x}{n}\right)^n \to e^x$ for real $x$, and the left side still makes sense when $x$ is complex. For real $\theta$ we define $e^{i\theta} = \lim_{n\to\infty}\left(1 + \frac{i\theta}{n}\right)^n$.
- Multiplying by $1 + \frac{i\theta}{n}$ adds a step at a right angle: it turns by $\arctan\frac{\theta}{n}$ and stretches by $\sqrt{1 + \theta^2/n^2}$.
- After $n$ steps the argument is $n\arctan\frac{\theta}{n} \to \theta$ and the modulus is $\left(1 + \frac{\theta^2}{n^2}\right)^{n/2} \to 1$. We proved both with explicit bounds, citing $\sin t < t < \tan t$.
- Euler's formula: $e^{i\theta} = \cos\theta + i\sin\theta$, with $\theta$ in radians. It is the point at arc length $\theta$ from 1 on the unit circle, so $e^{i\pi} = -1$ and $e^{2\pi i} = 1$.
- $e^{i\alpha}e^{i\beta} = e^{i(\alpha+\beta)}$, which packages the angle addition formulas.
- The power series $1 + x + \frac{x^2}{2!} + \cdots$ at $x = i\theta$ gives the same function (cited).

## Problems

Work these on paper, with a sketch of the unit circle beside you. The first three repeat the lesson's moves, the next three combine them, and the last two go further.

**Problem 1.** Write $e^{i\pi/6}$, $e^{3\pi i/2}$, $e^{-i\pi}$ and $e^{5\pi i/4}$ in the form $a + bi$.

**Solution.** Use $e^{i\theta} = \cos\theta + i\sin\theta$. $e^{i\pi/6} = \frac{\sqrt3}{2} + \frac12 i$. $e^{3\pi i/2} = 0 + (-1)i = -i$, three quarters of the way around. $e^{-i\pi} = \cos(-\pi) + i\sin(-\pi) = -1$: half the circle walked clockwise ends at the same point as half the circle walked counterclockwise. $e^{5\pi i/4} = -\frac{\sqrt2}{2} - \frac{\sqrt2}{2}i$, in the third quadrant.

**Problem 2.** The two-step approximation to $e^{i\pi/2}$ is $\left(1 + \frac{i\pi}{4}\right)^2$. Compute it in the form $a + bi$, and find its modulus and argument. How do they compare with those of $e^{i\pi/2} = i$?

**Solution.** $\left(1 + \frac{i\pi}{4}\right)^2 = 1 - \frac{\pi^2}{16} + \frac{i\pi}{2} \approx 0.383 + 1.571i$. The modulus is the square of $|1 + \frac{i\pi}{4}|$, which is $1 + \frac{\pi^2}{16} \approx 1.617$. The argument is $2\arctan\frac{\pi}{4} \approx 2 \times 0.6658 = 1.332$ radians. The target $i$ has modulus 1 and argument $\frac{\pi}{2} \approx 1.571$. As the lesson predicts, the approximation is too far out and has not turned far enough. (These are the first two steps of the four-step figure.)

**Problem 3.** Write $\sqrt3 + i$ in the form $re^{i\theta}$ and use it to compute $(\sqrt3 + i)^6$. Check by another method.

**Solution.** The modulus is $\sqrt{3 + 1} = 2$, and $\sqrt3 + i = 2\left(\frac{\sqrt3}{2} + \frac12 i\right) = 2e^{i\pi/6}$. So $(\sqrt3 + i)^6 = 2^6 e^{i\pi} = -64$. Check: $(\sqrt3 + i)^2 = 3 + 2\sqrt3\,i - 1 = 2 + 2\sqrt3\,i$; multiplying by $\sqrt3 + i$ gives $2\sqrt3 + 2i + 6i + 2\sqrt3\,i^2 = 8i$; and $(8i)^2 = -64$.

**Problem 4.** (a) Show that $e^{-i\theta}$ is the reciprocal of $e^{i\theta}$. (b) Show that $\cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2}$ and $\sin\theta = \dfrac{e^{i\theta} - e^{-i\theta}}{2i}$.

**Solution.** (a) By the law of exponents, $e^{i\theta}e^{-i\theta} = e^{i(\theta - \theta)} = e^{0} = \cos 0 + i\sin 0 = 1$. (b) Since $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$, Euler's formula gives $e^{-i\theta} = \cos\theta - i\sin\theta$. Adding this to $e^{i\theta} = \cos\theta + i\sin\theta$ gives $2\cos\theta$, and subtracting it gives $2i\sin\theta$. Divide by 2 and by $2i$.

**Problem 5.** Use $e^{3i\theta} = \left(e^{i\theta}\right)^3$ to express $\cos 3\theta$ in terms of $\cos\theta$ alone and $\sin 3\theta$ in terms of $\sin\theta$ alone.

**Solution.** With $c = \cos\theta$, $s = \sin\theta$: $(c + is)^3 = c^3 + 3c^2(is) + 3c(is)^2 + (is)^3 = (c^3 - 3cs^2) + i(3c^2s - s^3)$. Comparing with $\cos 3\theta + i\sin 3\theta$ and using $s^2 = 1 - c^2$ and $c^2 = 1 - s^2$:

$$
\cos 3\theta = c^3 - 3c(1 - c^2) = 4\cos^3\theta - 3\cos\theta, \qquad \sin 3\theta = 3(1 - s^2)s - s^3 = 3\sin\theta - 4\sin^3\theta.
$$

Check at $\theta = \frac{\pi}{3}$: $4 \cdot \frac18 - \frac32 = -1 = \cos\pi$.

**Problem 6.** Find all complex numbers $z$ with $z^3 = -8$ by writing $z = re^{i\theta}$. Verify one non-real solution by multiplying out.

**Solution.** $z^3 = r^3e^{3i\theta}$ and $-8 = 8e^{i\pi}$. Comparing moduli, $r^3 = 8$, so $r = 2$. Comparing directions, $3\theta$ and $\pi$ differ by a multiple of $2\pi$: $3\theta = \pi, 3\pi, 5\pi$, giving $\theta = \frac{\pi}{3}, \pi, \frac{5\pi}{3}$ (the next value, $\frac{7\pi}{3}$, is the first direction again). So $z = 2e^{i\pi/3} = 1 + \sqrt3\,i$, $z = 2e^{i\pi} = -2$, or $z = 2e^{5\pi i/3} = 1 - \sqrt3\,i$. Check: $(1 + \sqrt3\,i)^2 = 1 + 2\sqrt3\,i - 3 = -2 + 2\sqrt3\,i$, and $(-2 + 2\sqrt3\,i)(1 + \sqrt3\,i) = -2 - 2\sqrt3\,i + 2\sqrt3\,i + 6i^2 = -8$.

**Problem 7.** Use the bound in step 2 of the proof to find a number of steps $n$ that guarantees the modulus of $\left(1 + \frac{i\pi}{n}\right)^n$ is within $0.001$ of 1. Then use the estimate "excess $\approx \frac{\pi^2}{2n}$" from the lesson to judge how wasteful the guarantee is.

**Solution.** Step 2 gives $1 \le r_n \le \frac{1}{1 - \pi^2/n}$ for $n > \pi^2$. We need $\frac{1}{1 - \pi^2/n} \le 1.001$, that is $1 - \frac{\pi^2}{n} \ge \frac{1}{1.001}$, that is $\frac{\pi^2}{n} \le \frac{0.001}{1.001}$, so $n \ge 1001\pi^2 \approx 9879.5$. Any $n \ge 9880$ is guaranteed to work. The estimate $\frac{\pi^2}{2n} \approx 0.001$ suggests that $n \approx 4935$ is already about enough, so the guarantee asks for twice as many steps as needed. The proof gave away a factor of 2 when it replaced $r_n$ by $r_n^2$. A bound used in a proof has to be true and simple; it does not have to be tight.

**Problem 8.** Let $\alpha$ and $\beta$ be real. Show that the straight distance between the points $e^{i\alpha}$ and $e^{i\beta}$ of the unit circle is $2\left|\sin\frac{\alpha - \beta}{2}\right|$. Deduce the fact used in step 4 of the proof: the chord is at most the arc $|\alpha - \beta|$.

**Solution.** Throughout, read $e^{i\theta}$ as a name for the point $\cos\theta + i\sin\theta$. The law of exponents for these points is the rule that arguments add, which does not depend on Euler's formula, so using it here to supply a step of that formula's proof is not circular. Let $m = \frac{\alpha + \beta}{2}$ and $\delta = \frac{\alpha - \beta}{2}$, so $\alpha = m + \delta$ and $\beta = m - \delta$. By the law of exponents, $e^{i\alpha} - e^{i\beta} = e^{im}\left(e^{i\delta} - e^{-i\delta}\right) = e^{im} \cdot 2i\sin\delta$, using Problem 4. Moduli multiply, and $|e^{im}| = 1$, $|2i| = 2$, so the distance is $2|\sin\delta|$. For the deduction we need $|\sin\delta| \le |\delta|$. If $0 < \delta < \frac{\pi}{2}$ this is the cited inequality $\sin t < t$. If $\delta \ge \frac{\pi}{2}$ then $|\sin\delta| \le 1 < \frac{\pi}{2} \le \delta$. Negative $\delta$ follows because both sides are unchanged when $\delta$ changes sign, and $\delta = 0$ gives $0 \le 0$. Hence the distance is at most $2|\delta| = |\alpha - \beta|$.

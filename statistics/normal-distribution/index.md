# The normal distribution and the 68-95-99.7 rule

> A histogram with ever narrower bins settles onto a curve whose areas are probabilities. For the bell curve, those areas give the 68-95-99.7 rule and z-scores.

Series: Statistics (https://www.monocurl.com/monocurl-essays/statistics/)
Canonical: https://www.monocurl.com/monocurl-essays/statistics/normal-distribution/
Keywords: normal distribution, bell curve, 68-95-99.7 rule, empirical rule, z-score, probability density function, standard normal, Gaussian

[Figure 1, animation: A simulation of the heights of 40,000 men, drawn as a histogram whose bins narrow from 8 cm to half a centimeter. Each bar's height is the fraction of men in the bin divided by the bin's width. The bars settle onto a smooth bell-shaped curve.]

What fraction of men are exactly 180 centimeters tall? Not 180 to the nearest centimeter, but 180.000... with zeros forever. Hardly any, and with enough decimal places demanded, none at all. The same goes for 176, for 190, and for every other height. So each exact height has probability zero, and yet every man has one, and heights near 180 are plainly more common than heights near 200.

The earlier probability lessons had no such trouble. A die has six outcomes and each gets a positive probability. Height is a measurement on a continuous scale, and on a continuous scale the question "how likely is this exact value?" has the same useless answer everywhere. We need a different way to say where the values tend to fall. This lesson builds it, and then studies the most important example, the bell curve, far enough to see where the numbers 68, 95 and 99.7 come from.

## From a histogram to a curve

Our data are simulated: 40,000 heights of men, generated so that their mean is 176 cm and their standard deviation is 7 cm, which is roughly right for adult men in many countries. Recall from [the first lesson](@statistics/mean-median-spread) that the mean is the balance point of the data and the standard deviation is the root of the mean squared deviation, a typical distance from the mean.

The standard picture of such data is a histogram. Cut the height axis into bins, and over each bin draw a bar whose height is the fraction of the data that falls in it. With bins 8 cm wide, the tallest bar covers 172 to 180 cm and holds about 43% of the men.

We would like the picture to be as detailed as possible, so we should narrow the bins.

**Pause and try.** The bin from 176 to 184 cm holds 37.1% of the men. Split it into two bins 4 cm wide, then split again. Roughly what fraction does a bin 1 cm wide hold? What happens to every bar's height if we keep narrowing?

**Answer.** Halving a bin's width roughly halves its contents, a little more or less depending on which side of the peak it is on. The bin from 176 to 180 holds 21.5%, from 176 to 178 it is 11.2%, and from 176 to 177 it is 5.6%. Each halving of the width roughly halves every bar, so the whole histogram sinks toward the axis. In the limit every bar has height zero, which is the opening puzzle again.

[Figure 2, animation: The same 40,000 simulated heights, with each bar's height equal to the plain fraction of men in its bin. As the bins narrow from 8 cm to half a centimeter, every bar shrinks, and the picture collapses toward the axis. The dashed gray outline, labelled "before", is the 8 cm histogram it started from.]

The collapse has a simple cause, and the cause suggests the repair. A bar shrinks because its bin shrinks. The fraction in a narrow bin is roughly proportional to the bin's width, so the quantity that stays put is the fraction *divided by the width*: the fraction of men per centimeter of height. For the bins starting at 176 that ratio is $0.371/8 \approx 0.046$, then $0.215/4 \approx 0.054$, then $0.112/2 = 0.056$, then $0.056/1 = 0.056$ per centimeter. It is settling down.

So redraw the histogram with bar height equal to fraction divided by bin width. That is the figure at the top of the page. Now narrowing the bins sharpens the picture without flattening it, and the tops of the bars close in on a curve. With this scaling a bar's *area* has a meaning: height times width is (fraction per cm) times (cm), which is the fraction of men in the bin. The heights of the bars are no longer probabilities, but their areas are.

## Area is probability

[Figure 3, steps: Areas as probabilities for the heights. In the histogram, the bars between 180 and 190 cm have total area equal to the fraction of the sample in that range. Under the limiting curve, the same range has almost the same area. As the range closes down on the single height 180, its area goes to zero.]

  - step: With bins 2 cm wide, the five bars from 180 to 190 cm have total area 0.2596: that fraction of the 40,000 simulated men is in the range.
  - step: Replace the bars by the curve they were settling onto. The area under the curve from 180 to 190 is 0.2611.
  - step: Narrow the range to 180 to 181 cm. The area, and so the probability, drops to 0.0464.
  - step: Narrow it to a tenth of a centimeter and the area is 0.0048. A single exact height is a range of width zero, with area zero.
This resolves the opening puzzle. The probability of a range of heights is an area, and a single exact height is a range of width zero, so its area is zero however tall the curve is there. The height of the curve at 180 is a rate, probability per centimeter, and it becomes a probability only when multiplied by a width.

To state this exactly we need the area under a curve, which is what an integral is. Recall from [the lesson on integrals](@calculus/integrals) that $\int_a^b f(x)\,dx$ is the area between the graph of $f$ and the axis from $x = a$ to $x = b$, defined as the limit of the total area of thin rectangles of height $f(x)$ as their widths shrink to zero. A histogram with narrow bins is such a collection of rectangles.

**Definition.** A **probability density** is a function $f$ defined on the real line with $f(x) \ge 0$ for every $x$ and total area $\int_{-\infty}^{\infty} f(x)\,dx = 1$. A random quantity $X$ **has density $f$** if for all numbers $a \le b$,

$$
P(a \le X \le b) = \int_a^b f(x)\,dx.
$$

The two conditions are the two rules of probability in new clothes: probabilities are never negative, and the probability that $X$ lands somewhere is 1. The integral over the whole line means the limit of $\int_{-R}^{R} f$ as $R$ grows. And since single points have area zero, $P(a \le X \le b)$ and $P(a < X < b)$ are equal, so for densities we can stop worrying about whether endpoints are included.

**Pause and try.** A density has the value 3 at some point. Does that contradict the rule that probabilities are at most 1? To decide, consider the density that equals 3 on the interval from 0 to $\frac13$ and equals 0 everywhere else.

**Answer.** There is no contradiction. That function is never negative, and its total area is $3 \times \frac13 = 1$, so it is a density. The probability of landing between 0 and 0.1 is the area $3 \times 0.1 = 0.3$. A density can be as tall as you like on a narrow enough range, because only areas are probabilities.

The mean and standard deviation carry over from data to densities with sums replaced by integrals. The mean is $\mu = \int x f(x)\,dx$, the balance point of the region under the curve, and the variance is $\sigma^2 = \int (x - \mu)^2 f(x)\,dx$, both taken over the whole line. (For some densities these integrals do not settle on a finite value, and then the mean or the variance does not exist; the next lesson meets one. Every density used below has both.)

## The formula for the bell curve

The curve that the height histogram settled onto has a formula. It is built from the function $e^{-z^2/2}$, where $e \approx 2.718$ is the base of natural logarithms, and each of the remaining pieces is there for a reason that we can now state.

[Figure 4, steps: Building the standard bell curve. The function e^{-z^2/2} has the right shape, but the area under it is about 2.5066. Dividing by that number, which equals \sqrt{2\pi}, makes the area 1; the dashed curve is the original for comparison.]

  - step: The function e^(-z^2/2) is 1 at z = 0 and falls away on both sides, slowly at first and then very fast: 0.61, 0.14 and 0.011 at z = 1, 2 and 3.
  - step: The area under it, found here by adding up thin slices, is 2.5066. A density must have area 1.
  - step: Divide every height by 2.5066. The peak drops to 0.3989 and the area becomes 1. This is the standard normal density.
The exponent $-z^2/2$ is what makes the bell. Squaring makes the curve symmetric about zero, and the minus sign makes it fall as $|z|$ grows. It falls extremely fast: $e^{-z^2/2}$ is 0.61 at $z = 1$ but about $3.7 \times 10^{-6}$ at $z = 5$. That speed is the feature of the normal distribution that matters most in practice, and it is why values many standard deviations from the mean essentially never happen.

The constant in front only fixes the area. The area under $e^{-z^2/2}$ is exactly $\sqrt{2\pi} \approx 2.5066$. That is a theorem (the Gaussian integral) whose usual proof needs integrals in two variables and is beyond this lesson; the figure checks it numerically. Dividing by $\sqrt{2\pi}$ gives the **standard normal density**

$$
\varphi(z) = \frac{1}{\sqrt{2\pi}}\,e^{-z^2/2}.
$$

It has mean 0, by symmetry, and standard deviation 1. The second fact also needs a computation that I am leaving out, an integration by parts showing $\int z^2\varphi(z)\,dz = 1$; a numerical integration agrees to four decimal places.

A bell for heights must be centered at 176 and be 7 times as wide. Moving the center is a shift: replace $z$ by $x - \mu$. Widening by a factor $\sigma$ means replacing $z$ by $(x - \mu)/\sigma$, so that $x$ has to travel $\sigma$ units to do what $z$ did in one. But stretching a region sideways by a factor $\sigma$ multiplies its area by $\sigma$, and the area must stay 1, so every height is divided by $\sigma$ to compensate. Shifting and stretching act on the mean and standard deviation as they did for data in the first lesson: if $Z$ has mean 0 and standard deviation 1, then $\sigma Z + \mu$ has mean $\mu$ and standard deviation $\sigma$, which is why the two parameters in the definition below carry those names.

**Definition.** The **normal distribution** with mean $\mu$ and standard deviation $\sigma > 0$ is the distribution with density

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x - \mu)^2}{2\sigma^2}} = \frac{1}{\sigma}\,\varphi\!\left(\frac{x - \mu}{\sigma}\right).
$$

[Figure 5, animation: One normal density as its two parameters change. Changing \sigma from 7 to 3.5 to 10 makes the bell narrow and tall, then wide and low, with area 1 throughout. The orange bar is one standard deviation long. Changing \mu slides the whole bell without changing its shape.]

For the heights, the peak is $\frac{1}{7\sqrt{2\pi}} \approx 0.057$ per cm, which matches the top of the histogram. Halve $\sigma$ and the peak doubles.

## Measuring in standard deviations

Every normal density is the standard one, shifted and stretched. That suggests measuring every normal quantity on a common scale.

**Definition.** The **z-score** of a value $x$, relative to a mean $\mu$ and standard deviation $\sigma$, is

$$
z = \frac{x - \mu}{\sigma}.
$$

The z-score says how many standard deviations $x$ lies above the mean, with negative values below. A height of 190 cm has $z = \frac{190 - 176}{7} = 2$, and a height of 169 cm has $z = -1$. The point of the definition is the following theorem, which says that for a normal quantity, probabilities depend on z-scores and on nothing else.

**Theorem.** Let $X$ have the normal distribution with mean $\mu$ and standard deviation $\sigma$, and let $a \le b$. Then

$$
P(a \le X \le b) = \int_{\alpha}^{\beta} \varphi(z)\,dz, \qquad \text{where } \alpha = \frac{a - \mu}{\sigma},\ \beta = \frac{b - \mu}{\sigma}.
$$

**Proof.** The left side is $\int_a^b f(x)\,dx$ with $f(x) = \frac1\sigma\varphi\bigl(\frac{x - \mu}{\sigma}\bigr)$. Both integrals are limits of sums of thin rectangles, so compare the rectangles. Cut $[a, b]$ into $n$ equal pieces of width $\Delta x = \frac{b - a}{n}$ with left ends $x_k = a + k\,\Delta x$. The z-scores $z_k = \frac{x_k - \mu}{\sigma}$ of those points cut $[\alpha, \beta]$ into $n$ equal pieces of width $\Delta z = \frac{\Delta x}{\sigma}$. The $k$th rectangle under $f$ has area

$$
f(x_k)\,\Delta x = \frac{1}{\sigma}\,\varphi(z_k) \cdot \sigma\,\Delta z = \varphi(z_k)\,\Delta z,
$$

which is the area of the $k$th rectangle under $\varphi$. So for every $n$ the two sums of rectangles are equal. Both functions are continuous, so as $n \to \infty$ the sums converge to the two integrals, which are therefore equal.

Each rectangle became $\sigma$ times narrower and $\sigma$ times taller, which is the stretching argument made exact. The theorem reduces every question about every normal distribution to areas under one curve.

## Where 68, 95 and 99.7 come from

So we need areas under $\varphi$. Here there is an obstacle of a kind you may not have met before: the function $e^{-z^2/2}$ has no antiderivative that can be written with the usual functions (powers, exponentials, logarithms, trigonometric functions). This is a theorem of Liouville from the 1830s. Nobody is missing a trick. The areas are perfectly definite numbers, but they have to be computed numerically, by adding up thin slices, and that is what the next figure does.

**Pause and try.** Before looking: the area under $\varphi$ between $-1$ and $1$ is the probability that a normal quantity lands within one standard deviation of its mean. Use the peak height $\varphi(0) \approx 0.40$ and the height $\varphi(1) \approx 0.24$ to decide whether that probability is nearer 0.5, 0.65 or 0.8.

**Answer.** The region is 2 wide. Its height falls from 0.40 in the middle to 0.24 at each end, so its area is between $2 \times 0.24 = 0.48$ and $2 \times 0.40 = 0.80$. The curve is rounded outward over that range, so it stays closer to 0.40 than a straight line would, and the area should be above the midpoint 0.64 of those bounds. Nearer 0.65 is the right choice; the computed value is 0.6827.

[Figure 6, steps: The areas under the standard normal density within 1, 2 and 3 standard deviations of the mean, each computed in the figure by Simpson's rule. The second row of labels gives the corresponding heights of men, for mean 176 cm and standard deviation 7 cm.]

  - step: Within one standard deviation of the mean, from z = -1 to z = 1, the area is 0.6827. About 68%% of men are between 169 and 183 cm.
  - step: Within two standard deviations the area is 0.9545. About 95%% of men are between 162 and 190 cm.
  - step: Within three standard deviations the area is 0.9973. Only 0.27%% of men, about 1 in 370, are shorter than 155 cm or taller than 197 cm.
**Key idea.** For a normal quantity, about 68% of the probability lies within one standard deviation of the mean, about 95% within two, and about 99.7% within three. These are the areas 0.6827, 0.9545 and 0.9973 under the standard normal density, and by the theorem above they are the same for every $\mu$ and $\sigma$.

The simulated sample agrees: of the 40,000 heights, 68.05% fell within 7 cm of 176, 95.49% within 14 cm and 99.74% within 21 cm.

Compare this with the only promise that holds for every shape, which was a problem in [the first lesson](@statistics/mean-median-spread) (Chebyshev's inequality). For any data set whatever, at most $\frac14$ of the values lie two or more standard deviations from the mean. For normal data the true share is under 5%. The general bound has to allow for every possible shape, and the normal shape is far more concentrated than the worst case.

## Worked examples

**Worked example.** **How unusual is 190 cm?** What fraction of men are taller than 190 cm, if heights are normal with mean 176 and standard deviation 7?

The z-score is $\frac{190 - 176}{7} = 2$, so we want the area under $\varphi$ to the right of 2. The rule gives the area between $-2$ and $2$ as 0.9545, which leaves $1 - 0.9545 = 0.0455$ for the two tails together. The curve is symmetric, so the tails are equal, and the right one is $0.0455 / 2 \approx 0.0228$. About 2.3% of men, 1 in 44, are taller than 190 cm.

*Check.* In the simulation, 947 of the 40,000 heights exceeded 190, which is 2.4%.

[Figure 7, image: The worked example as areas. The middle region, within two standard deviations of the mean, has area 0.9545. What remains is split equally between two tails, so the fraction of men taller than 190 cm is about 0.0228.]

**Worked example.** **A range that is not symmetric.** What fraction of men are between 169 and 190 cm?

The z-scores are $-1$ and $2$. Split the range at the mean. From $z = -1$ to $0$ is half of the one-standard-deviation band, $0.6827/2 = 0.3413$. From $z = 0$ to $2$ is half of the two-standard-deviation band, $0.9545/2 = 0.4772$. The total is $0.8186$, so about 82% of men are in that range.

**Worked example.** **Comparing across scales.** Ana scores 650 on an exam whose scores are approximately normal with mean 500 and standard deviation 100. Ben scores 28 on a different exam with mean 21 and standard deviation 5. Who did better relative to the other test takers?

The raw scores cannot be compared, so convert both to z-scores. Ana: $\frac{650 - 500}{100} = 1.5$. Ben: $\frac{28 - 21}{5} = 1.4$. Ana is further above her exam's mean in units of its spread, so if both sets of scores are normal she outperformed a larger fraction of her group. The rule brackets how large: a z-score between 1 and 2 beats between 84% and 97.7% of the group, since the area below $z = 1$ is $0.5 + 0.3413$ and the area below $z = 2$ is $0.5 + 0.4772$.

## When the rule does not apply

The 68-95-99.7 rule is a property of one particular shape. It is tempting to apply it to any data with a mean and a standard deviation, and it can fail badly.

Take the waiting time for a bus that arrives at random moments, five minutes apart on average. The standard model for such waits, the exponential distribution, is very different from a bell: short waits are the most common, and long ones trail off to the right. Its mean and its standard deviation are both 5 minutes.

[Figure 8, image: A simulation of 20,000 waiting times with mean 5 minutes and standard deviation 5 minutes, and the normal density with the same mean and standard deviation (dashed). The band within one standard deviation of the mean holds about 86% of the waits, where the normal rule says 68%, and the normal curve puts 16% of its area on waits below zero.]

The normal model is wrong here in a way that needs no calculation: it assigns probability 0.16 to waits shorter than zero. Incomes, city sizes and anything else with a long tail on one side fail in the same way. Even symmetric data can fail, if extreme values are more common than the fast-falling bell allows; daily changes in stock prices are a well-known case, with far too many "five standard deviation" days.

Heights of adults of one sex, measurement errors, and averages of many small independent effects are well described by a normal distribution. Why that last category is so large is the subject of [the next lesson](@statistics/central-limit-theorem). In every case the normal curve is a model, to be checked against a histogram before its percentages are trusted.

**Common mistake.** **Reading the height of the curve as a probability.** The peak of the height density is 0.057, and it is tempting to say "5.7% of men are 176 cm tall". The density is a rate, 0.057 per centimeter. The fraction of men between 175.5 and 176.5 cm is about $0.057 \times 1 = 5.7\%$, and the fraction between 175.95 and 176.05 is about 0.57%. Always ask for the width of the range.

**Common mistake.** **Forgetting to split the tails.** "95% are within two standard deviations, so 5% are above $\mu + 2\sigma$." The 5% outside is shared between two tails. About 2.5% are above, and about 2.5% are below.

## Stepping back

The hard step was the first one: giving up on the probability of a single value and assigning probability to ranges instead, as area under a density. After that, the normal distribution is one function, $\varphi$, together with two operations, shift by $\mu$ and stretch by $\sigma$. The z-score undoes those operations, and that is why a single short list of areas, 68, 95 and 99.7, serves for heights, exam scores and anything else that is normal. The same reduction will be used constantly from here on: convert to z-scores, then look up an area.

**Check yourself.** Bottles are filled with a mean of 500 ml and a standard deviation of 4 ml, and the amounts are normally distributed. About what fraction of bottles contain less than 492 ml?
Answer: 2.5% The z-score is $(492 - 500)/4 = -2$. About 95% lie within two standard deviations, leaving about 5% in two equal tails, so about 2.5% lie below.

**Recap.** - On a continuous scale, single values have probability zero. Probability is assigned to ranges, as area under a density $f$: $P(a \le X \le b) = \int_a^b f(x)\,dx$, with $f \ge 0$ and total area 1.
- A density's height is probability per unit of $x$. It can exceed 1; areas cannot.
- The normal density is $f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/(2\sigma^2)}$: the bump $e^{-z^2/2}$, centered at $\mu$, stretched by $\sigma$, and scaled to have area 1.
- The z-score $z = (x - \mu)/\sigma$ counts standard deviations from the mean. For a normal quantity, the probability of a range is the area under the standard normal density $\varphi$ between the z-scores of its ends.
- Those areas have no elementary formula and are computed numerically: 0.6827 within 1 standard deviation, 0.9545 within 2, 0.9973 within 3.
- The rule belongs to the normal shape. Skewed or heavy-tailed data do not obey it.

## Problems

The first three use the rule directly. The next three ask you to reason about densities. The last two go further.

**Problem 1.** Scores on a test are normal with mean 100 and standard deviation 15. Using the 68-95-99.7 rule, find the approximate fraction of scores (a) between 85 and 115, (b) above 130, (c) below 55.

**Solution.** (a) These are $z = -1$ and $z = 1$: about 68%. (b) $z = 2$. About 95% of scores are within two standard deviations, so about 5% are outside, half of them above: about 2.5% (more exactly, $0.0455/2 = 2.3\%$). (c) $z = -3$. About 0.27% are outside three standard deviations, half of them below: about 0.135%, or 1 in 740.

**Problem 2.** A machine fills bags with a mean of 1000 g and a standard deviation of 5 g, normally distributed. (a) What range contains the middle 95% of bags? (b) In a shipment of 2000 bags, about how many weigh more than 1015 g?

**Solution.** (a) Two standard deviations either side of the mean: 990 g to 1010 g. (b) 1015 g is $z = 3$. The fraction above is half of $1 - 0.9973 = 0.0027$, that is, 0.00135. Out of 2000 bags that is $2000 \times 0.00135 = 2.7$, so about 3 bags.

**Problem 3.** Compute the standard normal density $\varphi(z) = \frac{1}{\sqrt{2\pi}}e^{-z^2/2}$ at $z = 0$, $1$ and $2$, using $\sqrt{2\pi} \approx 2.5066$, $e^{-1/2} \approx 0.6065$ and $e^{-2} \approx 0.1353$. Then find the peak height of the normal density with $\sigma = 0.1$. Is anything wrong with a height above 1?

**Solution.** $\varphi(0) = 1/2.5066 \approx 0.3989$, $\varphi(1) = 0.6065/2.5066 \approx 0.2420$ and $\varphi(2) = 0.1353/2.5066 \approx 0.0540$. The peak of a normal density is $\frac{1}{\sigma}\varphi(0)$, which for $\sigma = 0.1$ is about 3.99. Nothing is wrong: the density is a rate. Almost all of the area sits within $3\sigma = 0.3$ of the mean, and a region 0.6 wide can have area 1 only if it is tall.

**Problem 4.** Let $f(x) = \frac{1}{10}$ for $0 \le x \le 10$ and $f(x) = 0$ otherwise. (a) Check that $f$ is a density. (b) Find $P(2 \le X \le 5)$ and $P(X = 3)$. (c) What fraction of the probability lies within one standard deviation of the mean, given that the standard deviation is $10/\sqrt{12} \approx 2.89$? Compare with 68%.

**Solution.** (a) $f \ge 0$ everywhere, and the region under it is a rectangle 10 wide and $\frac{1}{10}$ tall, with area 1. (b) The area over $[2, 5]$ is $3 \times \frac{1}{10} = 0.3$. A single point has width zero, so $P(X = 3) = 0$. (c) The mean is 5 by symmetry. The range $5 \pm 2.89$ has width 5.77 and lies inside $[0, 10]$, so its probability is $5.77 \times \frac{1}{10} \approx 0.58$. That is noticeably less than 68%: the flat density is not normal, and the rule does not apply to it.

**Problem 5.** The heights of men are normal with mean 176 and standard deviation 7. Without computing any new areas, find the height that is exceeded by about 16% of men, and the height below which about 0.135% of men fall.

**Solution.** The area within one standard deviation is 0.6827, so the two tails beyond hold 0.3173 together and 0.1587 each. About 16% of men are therefore above $z = 1$, which is $176 + 7 = 183$ cm. Similarly the tails beyond three standard deviations hold $0.0027/2 = 0.00135$ each, so 0.135% of men are below $z = -3$, which is $176 - 21 = 155$ cm.

**Problem 6.** Suppose the standard deviation of the heights were 3.5 cm, half its real value, with the mean still 176. (a) What happens to the peak height of the density? (b) What fraction of men would then be between 169 and 183 cm? (c) Explain why the answer to (b) had to go up.

**Solution.** (a) The peak is $\frac{1}{\sigma\sqrt{2\pi}}$, so halving $\sigma$ doubles it, from about 0.057 to about 0.114 per cm. (b) Now 169 and 183 are $z = \pm 2$, so the fraction is about 95.45%. (c) The total area is fixed at 1. A narrower bell piles more of that area near the mean, so any fixed range around the mean captures more of it. The same 14 cm range that was two standard deviations wide is now four.

**Problem 7.** Estimate the area under $\varphi$ from $z = 0$ to $z = 1$ by hand, using two trapezoids of width $\frac12$ and the values $\varphi(0) = 0.3989$, $\varphi(0.5) = 0.3521$, $\varphi(1) = 0.2420$. Double your answer and compare with 0.6827. Is your estimate too high or too low, and why?

**Solution.** A trapezoid of width $w$ with parallel sides $p$ and $q$ has area $w(p + q)/2$. The two trapezoids have areas $\frac12 \cdot \frac{0.3989 + 0.3521}{2} = 0.18775$ and $\frac12 \cdot \frac{0.3521 + 0.2420}{2} = 0.14853$, totalling $0.3363$. Doubling gives 0.6726, about 1.5% below 0.6827. The estimate is too low because between $z = -1$ and $z = 1$ the curve bulges above each chord joining two of its points, so every trapezoid lies under the curve. (The next problem shows that this bulging stops exactly at $z = \pm 1$.) More and thinner trapezoids close the gap, and that is how the areas above were computed.

**Problem 8.** (Requires derivatives.) Show that $\varphi'(z) = -z\,\varphi(z)$ and $\varphi''(z) = (z^2 - 1)\,\varphi(z)$. Conclude that the bell curve changes from bending downward to bending upward exactly at $z = \pm 1$, so that for a general normal density the standard deviation is the distance from the mean to the points where the bending changes.

**Solution.** By the chain rule, the derivative of $e^{-z^2/2}$ is $e^{-z^2/2}$ times the derivative of $-z^2/2$, which is $-z$. The constant $\frac{1}{\sqrt{2\pi}}$ carries through, so $\varphi'(z) = -z\varphi(z)$. Differentiating again with the product rule, $\varphi''(z) = -\varphi(z) - z\varphi'(z) = -\varphi(z) + z^2\varphi(z) = (z^2 - 1)\varphi(z)$. Since $\varphi(z) > 0$ always, the sign of $\varphi''$ is the sign of $z^2 - 1$: negative for $|z| < 1$, where the curve bends downward, and positive for $|z| > 1$, where it bends upward. The change happens at $z = \pm 1$, which for a normal density with parameters $\mu$ and $\sigma$ are the points $x = \mu \pm \sigma$. So $\sigma$ can be read off a drawing of the bell: it is the horizontal distance from the center to the point where the curve is steepest.

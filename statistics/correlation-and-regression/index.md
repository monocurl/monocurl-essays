# Correlation and the line of best fit, derived

> We derive the least-squares line, define the correlation r and prove it lies between -1 and 1, then explain regression to the mean and why r is not causation.

Series: Statistics (https://www.monocurl.com/monocurl-essays/statistics/)
Canonical: https://www.monocurl.com/monocurl-essays/statistics/correlation-and-regression/
Keywords: correlation coefficient, line of best fit, least squares regression, r squared, regression to the mean, correlation does not imply causation, Cauchy-Schwarz inequality, confounding variable

[Figure 1, animation: A simulation of 300 fathers and their adult sons, with heights that have correlation 0.5. Each blue dot is one pair. The orange dots are the average height of the sons for fathers of each height, and they follow the green line of best fit, which is flatter than the dashed line where a son is exactly as tall as his father.]

Tall fathers have tall sons, but not as tall as themselves: fathers who stand 184 cm have sons who average about 180. Short fathers have short sons, but not as short: fathers of 168 cm have sons who average about 172. Each generation, it seems, is pulled toward the middle.

Follow that thought and you reach an absurd conclusion. If every generation is closer to average than the one before, then after enough generations everyone should be nearly the same height. Yet the spread of heights among sons is the same as among fathers. Francis Galton noticed this pattern in the 1880s and called it "regression towards mediocrity", which is where the word *regression* in statistics comes from. Resolving the paradox takes three things: what it means to fit a line to scattered data, a number that measures how tightly the data follow the line, and a hard look at what that number can and cannot tell you.

## A cloud of points and a line through it

The figure above is a **scatter plot**: each dot stands for one father-son pair, placed at the father's height horizontally and the son's height vertically. The dots form a tilted cloud. Knowing the father's height tells you something about the son's, but far from everything.

To see how a line gets fitted to a cloud, we shrink the problem until it can be done by hand. Five students practice for $x = 1, 2, 3, 4, 5$ hours and score $y = 2, 4, 5, 4, 5$ on a test. A line $y = a + bx$ ([intercept $a$, slope $b$](@algebra/slope-and-lines)) predicts a score for each student, and the prediction misses by $y_i - (a + bx_i)$. This vertical miss is called a **residual**.

What should "best" mean? We want all the residuals small at once, so we need one number that summarizes them. Their plain sum will not do: a line that misses one point by $+10$ and another by $-10$ would get a perfect total of zero. The same problem came up for the spread of data in [the first lesson of this series](@statistics/mean-median-spread), and we adopt the same repair. Square each residual, so that misses in both directions count against the line, and add.

**Pause and try.** An obvious candidate is the line through the first and last points, $(1, 2)$ and $(5, 5)$, which is $y = 1.25 + 0.75x$. Find its five residuals and the sum of their squares.

**Answer.** The line predicts $2, 2.75, 3.5, 4.25, 5$. The residuals are $2 - 2 = 0$, $4 - 2.75 = 1.25$, $5 - 3.5 = 1.5$, $4 - 4.25 = -0.25$ and $5 - 5 = 0$. The squares are $0, 1.5625, 2.25, 0.0625, 0$, with sum $3.875$.

[Figure 2, image: The five data points and the line through the first and last of them. Each residual is drawn as a square whose side is the vertical miss, so the line's total squared error, 3.875, is the total red area. Two of the residuals are zero and have no square.]

That line runs too low through the middle: two points sit well above it, and none is far below. Tilting and shifting it should shrink the squares.

[Figure 3, animation: The line pivots and then slides, and the squares on the residuals grow and shrink with it. The total area starts at 6 for a flat line through the mean score, and is smallest, 2.4, when the slope is 0.6 and the line passes through the point of means (3, 4).]

The animation suggests that the best line has slope 0.6 and passes through $(3, 4)$, the point whose coordinates are the mean of the $x$ values and the mean of the $y$ values. An animation tries only some lines. We want a proof that covers all of them, and a formula that works for any data.

## Deriving the least-squares line

Let the data be $(x_1, y_1), \dots, (x_n, y_n)$, with means $\bar x$ and $\bar y$, and suppose the $x_i$ are not all equal. The quantity to minimize is

$$
Q(a, b) = \sum_{i=1}^{n} \bigl(y_i - a - bx_i\bigr)^2.
$$

The means are the natural reference point, so measure everything from them. Write $u_i = x_i - \bar x$ and $v_i = y_i - \bar y$ for the deviations, and note that $\sum u_i = 0$ and $\sum v_i = 0$, because deviations from a mean always sum to zero. Three sums will appear over and over:

$$
S_{xx} = \sum u_i^2, \qquad S_{yy} = \sum v_i^2, \qquad S_{xy} = \sum u_i v_i.
$$

For the five students, $u = (-2, -1, 0, 1, 2)$ and $v = (-2, 0, 1, 0, 1)$, so $S_{xx} = 10$, $S_{yy} = 6$ and $S_{xy} = 4 + 0 + 0 + 0 + 2 = 6$.

**Theorem.** Let $(x_1, y_1), \dots, (x_n, y_n)$ be data in which the $x_i$ are not all equal. Then $Q(a, b)$ has exactly one minimum, at

$$
b = \frac{S_{xy}}{S_{xx}}, \qquad a = \bar y - b\bar x,
$$

and the minimum value is $S_{yy} - \dfrac{S_{xy}^2}{S_{xx}}$. The line $y = a + bx$ with these coefficients is the **least-squares line**, or **regression line** of $y$ on $x$.

**Proof.** Substitute $x_i = \bar x + u_i$ and $y_i = \bar y + v_i$ into a residual:

$$
y_i - a - bx_i = (v_i - bu_i) + c, \qquad \text{where } c = \bar y - a - b\bar x.
$$

The number $c$ is the same for every $i$: it is the vertical gap between the point of means and the line. Squaring and summing,

$$
Q = \sum (v_i - bu_i)^2 + 2c\sum (v_i - bu_i) + nc^2.
$$

The middle sum is $\sum v_i - b\sum u_i = 0$. So

$$
Q = \sum (v_i - bu_i)^2 + nc^2 = S_{yy} - 2bS_{xy} + b^2 S_{xx} + nc^2.
$$

The first three terms form a quadratic in $b$ with leading coefficient $S_{xx}$, which is positive because the $x_i$ are not all equal. Complete the square:

$$
S_{xx}b^2 - 2S_{xy}b + S_{yy} = S_{xx}\Bigl(b - \frac{S_{xy}}{S_{xx}}\Bigr)^2 + S_{yy} - \frac{S_{xy}^2}{S_{xx}}.
$$

Therefore

$$
Q(a, b) = S_{xx}\Bigl(b - \frac{S_{xy}}{S_{xx}}\Bigr)^2 + nc^2 + \Bigl(S_{yy} - \frac{S_{xy}^2}{S_{xx}}\Bigr).
$$

The last bracket does not involve $a$ or $b$. The first two terms are squares with positive coefficients, so each is at least 0, and both are 0 exactly when $b = S_{xy}/S_{xx}$ and $c = 0$, that is, $a = \bar y - b\bar x$. At that one point $Q$ equals the last bracket, and everywhere else it is larger.

Each term has a meaning. The term $nc^2$ is the penalty for a line that misses the point of means, and it vanishes when $c = 0$: the best line always passes through $(\bar x, \bar y)$. The term with $b$ is the penalty for a wrong tilt. A reader who knows calculus can reach the same formulas by setting the derivatives of $Q$ with respect to $a$ and $b$ to zero, as in [the lesson on optimization](@calculus/optimization). [Completing the square](@algebra/completing-the-square) has the advantage of proving at the same stroke that the point found is a minimum and the only one.

For the five students, $b = 6/10 = 0.6$ and $a = 4 - 0.6 \times 3 = 2.2$. The best line is $y = 2.2 + 0.6x$, and its total squared error is $6 - 36/10 = 2.4$, as the animation found.

[Figure 4, image: The total squared error of lines through the point of means (3, 4), as a function of their slope b, for the five students. It is the parabola 10(b - 0.6)^2 + 2.4, lowest at slope 0.6. A flat line, slope 0, has error S_{yy} = 6.]

## Correlation: how tightly the points follow the line

The slope tells us how steep the line is. It does not tell us how well the points stick to it, and it changes if we change units: measure practice in minutes and the slope becomes 0.01. We want a measure of the *strength* of the linear association that ignores units.

The sum $S_{xy} = \sum (x_i - \bar x)(y_i - \bar y)$ already detects association. A point above both means, or below both, contributes a positive product. A point above one mean and below the other contributes a negative product. If high $x$ tends to go with high $y$, positive products dominate.

[Figure 5, image: The father-son data divided at the two means. In the blue quadrants both heights lie on the same side of their means, and the product of deviations is positive. In the orange quadrants they lie on opposite sides. Two thirds of the pairs are blue, which is what makes the correlation positive.]

$S_{xy}$ still depends on the units and on $n$. Dividing by the geometric mean of $S_{xx}$ and $S_{yy}$ removes both.

**Definition.** For data $(x_1, y_1), \dots, (x_n, y_n)$ in which neither the $x_i$ nor the $y_i$ are all equal, the **correlation coefficient** is

$$
r = \frac{S_{xy}}{\sqrt{S_{xx}\,S_{yy}}} = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2\,\sum (y_i - \bar y)^2}}.
$$

The condition that neither variable is constant keeps the denominator from being zero. Since the sample standard deviations are $s_x = \sqrt{S_{xx}/(n-1)}$ and $s_y = \sqrt{S_{yy}/(n-1)}$, the same number can be written $r = \frac{1}{n-1}\sum \frac{x_i - \bar x}{s_x} \cdot \frac{y_i - \bar y}{s_y}$: the average product of the two variables once each is expressed in standard deviations from its mean. Changing units rescales a deviation and its standard deviation together, so $r$ has no units.

**Pause and try.** Compute $r$ for the five students, using $S_{xx} = 10$, $S_{yy} = 6$, $S_{xy} = 6$.

**Answer.** $r = \dfrac{6}{\sqrt{10 \times 6}} = \dfrac{6}{\sqrt{60}} \approx 0.775$.

For the simulated fathers and sons, $r = 0.51$. How large can $r$ be? The answer comes from a famous inequality, and we already hold its proof.

**Theorem.** (Cauchy-Schwarz inequality) For any real numbers $u_1, \dots, u_n$ and $v_1, \dots, v_n$,

$$
\Bigl(\sum u_i v_i\Bigr)^2 \le \Bigl(\sum u_i^2\Bigr)\Bigl(\sum v_i^2\Bigr).
$$

If the $u_i$ are not all zero, equality holds exactly when there is a number $b$ with $v_i = bu_i$ for every $i$.

**Proof.** If every $u_i$ is zero, both sides are 0. Otherwise $\sum u_i^2 > 0$, and for any number $b$, completing the square as before gives

$$
\sum (v_i - bu_i)^2 = \sum u_i^2\,\Bigl(b - \frac{\sum u_iv_i}{\sum u_i^2}\Bigr)^2 + \sum v_i^2 - \frac{(\sum u_iv_i)^2}{\sum u_i^2}.
$$

Choose $b = \sum u_iv_i / \sum u_i^2$. The left side is a sum of squares, so it is at least 0, and the first term on the right is 0. Hence $\sum v_i^2 - \frac{(\sum u_iv_i)^2}{\sum u_i^2} \ge 0$, which rearranges to the inequality. Equality means the left side is 0 for this $b$, which happens exactly when every $v_i - bu_i$ is 0. Conversely, if $v_i = bu_i$ for all $i$, both sides equal $b^2(\sum u_i^2)^2$.

**Theorem.** For any data with a correlation coefficient, $-1 \le r \le 1$. Moreover $r = \pm 1$ exactly when all the points lie on one straight line, which slopes upward if $r = 1$ and downward if $r = -1$.

**Proof.** Apply Cauchy-Schwarz to the deviations $u_i = x_i - \bar x$ and $v_i = y_i - \bar y$: it says $S_{xy}^2 \le S_{xx}S_{yy}$, so $r^2 \le 1$. Equality holds exactly when $v_i = bu_i$ for all $i$, that is, $y_i = \bar y + b(x_i - \bar x)$: every point is on a line of slope $b$. In that case $S_{xy} = bS_{xx}$, so $r$ has the sign of $b$. (Here $b \ne 0$, because the $y_i$ are not all equal.)

## What $r^2$ measures

The least-squares theorem gave the smallest possible total squared error as $S_{yy} - S_{xy}^2/S_{xx}$. Factor out $S_{yy}$ and the definition of $r$ appears:

$$
\text{minimum of } Q = S_{yy}\Bigl(1 - \frac{S_{xy}^2}{S_{xx}S_{yy}}\Bigr) = S_{yy}\,(1 - r^2).
$$

Now $S_{yy}$ is itself a total squared error: it is the error of the flat line $y = \bar y$, the best prediction available to someone who ignores $x$ altogether. So $1 - r^2$ is the fraction of that error which remains after the line is fitted, and $r^2$ is the fraction removed.

[Figure 6, image: The same five points measured two ways. Left: squares on the deviations from the mean score, the flat line at 4, with total area S_{yy} = 6. Right: squares on the residuals from the least-squares line, with total area 2.4. The line removes 60% of the squared error, and r^2 = 0.6.]

**Key idea.** The least-squares line is $y = \bar y + b(x - \bar x)$ with $b = S_{xy}/S_{xx}$. The correlation $r = S_{xy}/\sqrt{S_{xx}S_{yy}}$ lies between $-1$ and $1$, and $r^2$ is the fraction of the squared variation in $y$ that the line accounts for.

The fraction is sobering for moderate correlations. The fathers and sons have $r \approx 0.5$, so $r^2 \approx 0.25$: knowing the father's height removes only a quarter of the squared error in predicting the son's.

## Regression to the mean

The slope and the correlation are connected. Because $b = \frac{S_{xy}}{S_{xx}}$ and $r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$,

$$
b = r\,\sqrt{\frac{S_{yy}}{S_{xx}}} = r\,\frac{s_y}{s_x}.
$$

Put this into the line $\hat y - \bar y = b(x - \bar x)$, where $\hat y$ denotes the predicted value, and divide by $s_y$:

$$
\frac{\hat y - \bar y}{s_y} = r \cdot \frac{x - \bar x}{s_x}.
$$

In words: if $x$ is $z$ standard deviations above its mean, the predicted $y$ is $rz$ standard deviations above its mean.

**Pause and try.** Take fathers and sons to have mean 176 cm and standard deviation 7 cm in both generations, with $r = 0.5$. A father is 190 cm tall. What does the regression line predict for his son? And if all you know is that a *son* is 190 cm, what is the prediction for his father?

**Answer.** The father is $(190 - 176)/7 = 2$ standard deviations above the mean. The prediction for the son is $0.5 \times 2 = 1$ standard deviation above, which is 183 cm, not 190. The second question has the same answer by the same calculation with the roles exchanged: the predicted father of a 190 cm son is 183 cm, not 204.

Since $|r| < 1$ unless the data are perfectly linear, the prediction for any $x$ other than $\bar x$ is fewer standard deviations from the mean than the input. This is **regression to the mean**, and the second half of that answer shows that it has nothing to do with the passage of time. Tall sons have fathers who are, on average, shorter than they are.

[Figure 7, steps: Regression to the mean in the father-son data, in both directions. Fathers in a tall band have sons who average less than the fathers do, and fathers in a short band have sons who average more. But sons in a tall band also have fathers who average less than the sons do.]

  - step: The dashed line marks sons exactly as tall as their fathers. If height were simply copied, the cloud would lie along it.
  - step: Fathers between 182 and 186 cm average 183.9 cm. Their sons average 181.3 cm: tall, but closer to the mean than their fathers. The ring is below the dashed line.
  - step: Fathers between 166 and 170 cm average 168.1 cm, and their sons average 171.7 cm. The ring is above the dashed line.
  - step: Now select by the sons. Sons between 182 and 186 cm average 183.5 cm, and their fathers average only 180.3 cm. Regression runs both ways.
Here is the resolution of the opening paradox. A father's height only partly determines his son's. Among fathers of 190 cm, the sons scatter around 183 cm, with a spread nearly as large as that of the whole population: the leftover fraction is $1 - r^2 = 0.75$ of the variance. Some of those sons are 195 cm. Meanwhile, some sons of average fathers are 190 cm too. The very tall men of the next generation are supplied by fathers of every height, mostly ones shorter than themselves. The averages regress, the scatter restores the spread, and the distribution of heights stays the same from one generation to the next.

Regression to the mean appears wherever two measurements are imperfectly correlated. Students with the highest scores on a first test score lower, on average, on the second, and those with the lowest scores improve. No explanation in terms of effort or complacency is needed, although one is nearly always offered.

## Correlation is not causation

A correlation says that two variables move together in the data. It does not say why. Over a year of days in a seaside town, ice cream sales and the number of swimmers rescued by lifeguards are strongly correlated. Nobody concludes that ice cream makes people drown.

[Figure 8, image: A simulation of 400 days in a seaside town. Each day's temperature raises both ice cream sales and lifeguard rescues, and neither affects the other. Left: across all days the two are clearly correlated. Right: among days with nearly the same temperature, 18 to 22 °C, the correlation is gone.]

In the simulation $r = 0.62$ across all 400 days. Hot days are in the upper right of the cloud and cold days in the lower left, and that arrangement is the whole correlation. Among the 72 days when the temperature was between 18 and 22 °C, $r = -0.08$, which is indistinguishable from zero. Temperature here is a **confounder**, or lurking variable: a third quantity that influences both of the others. Holding it nearly fixed removes the association it created.

When $x$ and $y$ are correlated, at least four explanations are open: $x$ influences $y$; $y$ influences $x$; a third variable influences both; or the correlation is a chance pattern in a small sample, which is a question for [a hypothesis test](@statistics/p-values). The data alone cannot choose among them. What can is an experiment in which the experimenter sets $x$ by a random device, so that nothing else can be systematically tied to it. Give out free ice cream on randomly chosen days, and the rescues will not change.

## Worked examples

**Worked example.** **A line and a correlation from scratch.** Find the least-squares line and $r$ for the points $(0, 1), (1, 3), (2, 2), (3, 5), (4, 4)$.

The means are $\bar x = 2$ and $\bar y = 3$. The deviations are $u = (-2, -1, 0, 1, 2)$ and $v = (-2, 0, -1, 2, 1)$. Then $S_{xx} = 4 + 1 + 0 + 1 + 4 = 10$, $S_{yy} = 4 + 0 + 1 + 4 + 1 = 10$, and $S_{xy} = 4 + 0 + 0 + 2 + 2 = 8$. So $b = 8/10 = 0.8$ and $a = 3 - 0.8 \times 2 = 1.4$: the line is $y = 1.4 + 0.8x$. The correlation is $r = 8/\sqrt{100} = 0.8$, and $r^2 = 0.64$.

*Check.* The residuals are $1 - 1.4$, $3 - 2.2$, $2 - 3$, $5 - 3.8$, $4 - 4.6$, that is, $-0.4, 0.8, -1, 1.2, -0.6$. They sum to 0, as they must, and their squares sum to $0.16 + 0.64 + 1 + 1.44 + 0.36 = 3.6 = S_{yy}(1 - r^2) = 10 \times 0.36$.

**Worked example.** **A line from summary statistics.** In a class, midterm scores have mean 70 and standard deviation 10, final scores have mean 75 and standard deviation 8, and the correlation is 0.6. Predict the final score of a student who got 90 on the midterm.

The student is $(90 - 70)/10 = 2$ standard deviations above the midterm mean. The prediction is $0.6 \times 2 = 1.2$ standard deviations above the final mean: $75 + 1.2 \times 8 = 84.6$. Equivalently, the slope is $b = r s_y/s_x = 0.6 \times 0.8 = 0.48$ and the line is $\hat y = 75 + 0.48(x - 70)$. This student was 2 standard deviations above average and is predicted to be 1.2 above: regression to the mean again.

**Worked example.** **How good is the prediction?** With $r = 0.5$ and a standard deviation of 7 cm for sons' heights, how far off is the regression prediction of a son's height, typically?

The total squared error around the line is $S_{yy}(1 - r^2)$, compared with $S_{yy}$ around the mean. Taking square roots, the typical size of a residual is $s_y\sqrt{1 - r^2} = 7 \times \sqrt{0.75} \approx 6.1$ cm, against 7 cm for a prediction that ignores the father. A correlation of 0.5 shrinks the typical error by only 13%. Even $r = 0.9$ leaves $\sqrt{0.19} \approx 44\%$ of it.

## What $r$ does not see

The correlation coefficient measures how well a *straight line* describes the data, and nothing else. In 1973 the statistician Francis Anscombe published four small data sets to make the point.

[Figure 9, image: Anscombe's four data sets, each with 11 points. All four have the same means, the same least-squares line y = 3 + 0.5x (green) and the same correlation, 0.82. Only the first is the kind of cloud those numbers suggest. The others are a curve, a line with one outlier, and a vertical stack with one far point that creates the whole correlation.]

A strong relationship can also have no correlation at all. For the five points $(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)$, which lie exactly on the curve $y = x^2$, we get $\bar x = 0$ and $S_{xy} = \sum x_i(y_i - \bar y) = -8 - 1 + 0 + 1 + 8 - \bar y \sum x_i = 0$, so $r = 0$. Here $y$ is completely determined by $x$, and $r$ reports nothing, because the relationship is not linear. Always look at the scatter plot before trusting $r$.

**Common mistake.** **Reading $r$ as a slope, or as a percentage.** "$r = 0.5$, so $y$ goes up half a unit per unit of $x$" confuses $r$ with $b = r s_y/s_x$; they agree only when the two standard deviations are equal. And "$r = 0.5$, so $x$ explains 50% of $y$" should be 25%: the fraction of squared variation explained is $r^2$.

**Common mistake.** **Inventing a cause for regression to the mean.** A flight instructor notices that cadets praised after an unusually good landing do worse next time, and cadets scolded after a bad one improve, and concludes that scolding works and praise harms. But two landings by the same cadet are imperfectly correlated, so an extreme one is followed, on average, by a more ordinary one whatever the instructor says.

## Stepping back

The hard step was the first one: deciding what "best line" should mean, and then showing that the choice has a single answer with a formula. Completing the square did that, and the same line of algebra then handed us the bound on $r$ and the meaning of $r^2$ at no extra cost. One identity, $Q = S_{xx}(b - S_{xy}/S_{xx})^2 + nc^2 + S_{yy}(1 - r^2)$, contains the slope, the intercept, the Cauchy-Schwarz inequality and the fraction of variation explained.

The limits matter as much as the formulas. The line describes averages, and individuals scatter around it. The correlation sees only straight-line patterns. And neither says anything about cause until someone runs an experiment.

**Check yourself.** In a large group of adults, height and weight have correlation $r = 0.7$. Which conclusion is justified?
Answer: A person 2 standard deviations above the mean height is predicted to be 1.4 standard deviations above the mean weight. In standard units the regression line is $\hat z_y = r z_x$, so the prediction is $0.7 \times 2 = 1.4$.

**Recap.** - The least-squares line minimizes the sum of squared vertical misses. It has slope $b = S_{xy}/S_{xx}$ and passes through the point of means: $a = \bar y - b\bar x$.
- The proof completes the square: $Q(a, b) = S_{xx}(b - S_{xy}/S_{xx})^2 + nc^2 + S_{yy} - S_{xy}^2/S_{xx}$, with $c = \bar y - a - b\bar x$.
- The correlation is $r = S_{xy}/\sqrt{S_{xx}S_{yy}}$. By the Cauchy-Schwarz inequality $-1 \le r \le 1$, with $\pm 1$ only for points on a line.
- The minimum squared error is $S_{yy}(1 - r^2)$, so $r^2$ is the fraction of the variation in $y$ accounted for by the line.
- In standard units the line is $\hat z_y = r z_x$. Since $|r| < 1$, predictions are closer to the mean than the inputs: regression to the mean, in both directions.
- Correlation can come from a confounder, and $r$ misses curved relationships and is swayed by outliers. Plot the data.

## Problems

The first three are computations. The next four ask for reasons. The last is a challenge.

**Problem 1.** Find the least-squares line, $r$ and $r^2$ for the points $(1, 2), (2, 3), (3, 5), (4, 6)$.

**Solution.** $\bar x = 2.5$ and $\bar y = 4$. Deviations: $u = (-1.5, -0.5, 0.5, 1.5)$, $v = (-2, -1, 1, 2)$. $S_{xx} = 2.25 + 0.25 + 0.25 + 2.25 = 5$, $S_{yy} = 4 + 1 + 1 + 4 = 10$, $S_{xy} = 3 + 0.5 + 0.5 + 3 = 7$. Slope $b = 7/5 = 1.4$, intercept $a = 4 - 1.4 \times 2.5 = 0.5$, so the line is $y = 0.5 + 1.4x$. $r = 7/\sqrt{50} \approx 0.990$ and $r^2 = 49/50 = 0.98$.

**Problem 2.** For a set of data, $\bar x = 50$, $s_x = 10$, $\bar y = 70$, $s_y = 8$ and $r = 0.6$. Find the regression line of $y$ on $x$ and the predicted $y$ at $x = 65$.

**Solution.** $b = r s_y/s_x = 0.6 \times 8/10 = 0.48$, and $a = \bar y - b\bar x = 70 - 24 = 46$. The line is $\hat y = 46 + 0.48x$. At $x = 65$: $\hat y = 46 + 31.2 = 77.2$. Check in standard units: $x$ is 1.5 standard deviations above its mean, so $\hat y$ is $0.9$ above, $70 + 0.9 \times 8 = 77.2$.

**Problem 3.** Two variables have $r = -0.9$. (a) What fraction of the squared variation in $y$ does the regression line account for? (b) If $x$ is 1 standard deviation above its mean, what is the prediction for $y$? (c) Is the association weaker than one with $r = 0.5$?

**Solution.** (a) $r^2 = 0.81$. (b) $-0.9$ standard deviations: below the mean of $y$ by nine tenths of a standard deviation. (c) No, it is much stronger. The sign of $r$ gives the direction of the line and $|r|$ gives the strength; $r = 0.5$ accounts for only 25% of the variation.

**Problem 4.** Show that the residuals of the least-squares line always sum to zero. Is the same true of any line through the point of means?

**Solution.** The residuals are $y_i - a - bx_i$. Their sum is $\sum y_i - na - b\sum x_i = n\bar y - na - bn\bar x = n(\bar y - a - b\bar x)$. For the least-squares line $a = \bar y - b\bar x$, so this is zero. The calculation used only that relation between $a$ and $b$, and not the value of $b$. A line passes through $(\bar x, \bar y)$ exactly when $\bar y = a + b\bar x$, so yes: the residuals sum to zero for every line through the point of means, and for no other line.

**Problem 5.** Heights $x$ are recorded in centimeters and weights $y$ in kilograms, giving slope $b$, intercept $a$ and correlation $r$. The heights are then converted to meters, $x' = x/100$. Find the new slope, intercept and correlation.

**Solution.** The new deviations are $u_i' = u_i/100$, so $S_{x'x'} = S_{xx}/10^4$ and $S_{x'y} = S_{xy}/100$, while $S_{yy}$ is unchanged. The new slope is $\frac{S_{xy}/100}{S_{xx}/10^4} = 100b$ (kilograms per meter is 100 times kilograms per centimeter). The new intercept is $\bar y - 100b \cdot \bar x/100 = a$, unchanged. The new correlation is $\frac{S_{xy}/100}{\sqrt{S_{xx}S_{yy}}/100} = r$, unchanged.

**Problem 6.** Besides the regression line of $y$ on $x$, one can fit the regression line of $x$ on $y$, which predicts $x$ from $y$ and minimizes squared *horizontal* misses; by symmetry its equation is $x - \bar x = b'(y - \bar y)$ with $b' = S_{xy}/S_{yy}$. (a) Show that $bb' = r^2$. (b) Drawn on the same axes, with $x$ horizontal, what are the slopes of the two lines when both variables have the same standard deviation and $r = 0.5$? (c) When do the two lines coincide?

**Solution.** (a) $bb' = \frac{S_{xy}}{S_{xx}} \cdot \frac{S_{xy}}{S_{yy}} = \frac{S_{xy}^2}{S_{xx}S_{yy}} = r^2$. (b) With equal standard deviations, $b = b' = r = 0.5$. The first line has slope 0.5. The second is $x - \bar x = 0.5(y - \bar y)$, which in the usual orientation is $y - \bar y = 2(x - \bar x)$, slope 2. Both pass through the point of means, one flatter than the diagonal and one steeper. This is regression to the mean in both directions. (c) If $r = 0$ the lines are horizontal and vertical. Otherwise the second line has slope $1/b'$ in the usual orientation, so they coincide when $b = 1/b'$, that is, $bb' = r^2 = 1$: only when the points lie exactly on a line.

**Problem 7.** Compute $r$ for the four points $(-1, 1), (0, 0), (1, 1), (2, 4)$ on the curve $y = x^2$, and compare with the lesson's example where $r = 0$. What made the difference?

**Solution.** $\bar x = 0.5$, $\bar y = 1.5$. Deviations: $u = (-1.5, -0.5, 0.5, 1.5)$, $v = (-0.5, -1.5, -0.5, 2.5)$. $S_{xx} = 5$, $S_{yy} = 0.25 + 2.25 + 0.25 + 6.25 = 9$, $S_{xy} = 0.75 + 0.75 - 0.25 + 3.75 = 5$. So $r = 5/\sqrt{45} \approx 0.745$. The curve is the same, but these $x$ values are not symmetric about 0: most of them are on the rising side of the parabola, where a line is a fair description. The value of $r$ depends on which part of a curved relationship was sampled, another reason to look at the plot.

**Problem 8.** (An association that reverses.) Six measurements fall in two groups. Group A: $(1, 3), (2, 2), (3, 1)$. Group B: $(6, 8), (7, 7), (8, 6)$. (a) Find $r$ within each group. (b) Find $r$ for all six points together. (c) Explain how both can be true, and what it means for interpreting a correlation.

**Solution.** (a) In group A the points satisfy $y = 4 - x$ exactly, and in group B they satisfy $y = 14 - x$. Points on a line of negative slope have $r = -1$ in each group.

(b) For all six, $\bar x = 27/6 = 4.5$ and $\bar y = 27/6 = 4.5$. Deviations: $u = (-3.5, -2.5, -1.5, 1.5, 2.5, 3.5)$ and $v = (-1.5, -2.5, -3.5, 3.5, 2.5, 1.5)$. $S_{xx} = 2(12.25 + 6.25 + 2.25) = 41.5$, and $S_{yy} = 41.5$ likewise. $S_{xy} = 5.25 + 6.25 + 5.25 + 5.25 + 6.25 + 5.25 = 33.5$. So $r = 33.5/41.5 \approx 0.81$.

(c) Within each group, larger $x$ goes with smaller $y$. But group B sits higher than group A on both variables, and the difference between the groups dominates the pooled data. The group label is a confounder: it influences both $x$ and $y$. Pooled, the correlation is strongly positive; holding the group fixed, it is perfectly negative. A correlation computed across a mixed population can differ in size, and even in sign, from the relationship inside every subgroup, so a correlation alone cannot tell you what would happen to $y$ if you changed $x$.

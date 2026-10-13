# What "learning" means: fitting a line to data

> A model is a formula with adjustable numbers, a loss scores its misses, and training lowers the loss. All three, worked by hand on four house prices.

Series: Machine Learning (https://www.monocurl.com/monocurl-essays/machine-learning/)
Canonical: https://www.monocurl.com/monocurl-essays/machine-learning/fitting-a-line/
Keywords: what is machine learning, linear regression, mean squared error, loss function, model parameters, loss surface, convex function, training a model

[Figure 1, animation: Four house sales and a line that predicts price from size. Each miss is drawn as a square. As the slope and intercept change, the average area of the squares, which is the mean squared error, falls from 1.25 to its smallest possible value, 0.2.]

A house of 2500 square feet comes up for sale in a neighborhood where four houses have sold recently. What will it sell for?

| House | Size (thousands of sq ft) | Price (hundreds of thousands of \$) |
|---|---|---|
| 1 | 1 | 1.5 |
| 2 | 2 | 3.5 |
| 3 | 3 | 3.5 |
| 4 | 4 | 5.5 |

No house of that size is in the table, so you cannot look the answer up. You would probably reason that bigger houses cost more and that 2500 square feet sits between houses 2 and 3, which both sold for \$350,000, so something near that. That reasoning is a prediction rule, and it stops working once the table has forty houses and no two neighbors agree. Machine learning makes such rules explicit enough that a computer can find a good one. The phrase "learning from data" sounds mysterious, but for this problem every part of it can be written down and checked with a pencil.

## A rule with two dials

The simplest rule that says "bigger costs more" is a straight line. Write $x$ for the size of a house in thousands of square feet and $\hat y$ (read "y hat") for the predicted price in hundreds of thousands of dollars, and let

$$
\hat y = wx + b.
$$

The two numbers $w$ and $b$ are not fixed yet. Think of them as dials. The dial $w$ is the [slope](@algebra/slope-and-lines): how much each extra thousand square feet adds to the price. The dial $b$ is the intercept, a baseline that shifts the whole line up or down. Every setting of the two dials is a different rule.

A common rule of thumb is "a hundred dollars per square foot". A thousand square feet then costs \$100,000, which in our units is $w = 1$ and $b = 0$: the rule $\hat y = x$. It predicts prices of $1, 2, 3, 4$ for the four houses. They actually sold for $1.5, 3.5, 3.5, 5.5$. The rule is too low every time, by $0.5, 1.5, 0.5$ and $1.5$.

Is that good or bad? Compared with what? We cannot improve a rule until we can say, in one number, how wrong it is.

## Scoring the misses

For each house, call the prediction minus the actual price the **error** of the rule on that house:

$$
e_i = \hat y_i - y_i = wx_i + b - y_i.
$$

For the rule of thumb the four errors are $-0.5, -1.5, -0.5, -1.5$. A natural first idea is to add them up, and it fails: a rule that is \$100,000 too high on one house and \$100,000 too low on another would score zero, the same as a rule that is exactly right on both. Misses in opposite directions must not cancel. The repair used throughout statistics, as in [the lesson on the line of best fit](@statistics/correlation-and-regression), is to square each error first. Squares are never negative, so nothing cancels, and a miss twice as large counts four times as much. Then average, so that the score does not grow just because the table got longer.

For the rule of thumb the squared errors are $0.25, 2.25, 0.25, 2.25$, and their average is $5/4 = 1.25$.

[Figure 2, image: The rule of thumb \hat y = x (slope 1, intercept 0) against the four sales. Each error is the vertical gap between a dot and the line, and the square drawn on it has the squared error as its area. The mean of the four squared errors is 1.25.]

**Pause and try.** Since the rule of thumb is too low on every house, raise the whole line by 1: keep $w = 1$ and set $b = 1$. Compute the four errors and the mean of their squares.

**Answer.** The predictions are $2, 3, 4, 5$, and the errors are $2 - 1.5 = 0.5$, $3 - 3.5 = -0.5$, $4 - 3.5 = 0.5$, $5 - 5.5 = -0.5$. Every squared error is $0.25$, so the mean is $0.25$. One turn of one dial cut the score from $1.25$ to a fifth of that.

We now have the three objects that every problem of this kind is made of, and they have standard names.

**Definition.** Let the data be pairs $(x_1, y_1), \dots, (x_n, y_n)$ of real numbers.

A **model** is a function that turns an input $x$ into a prediction $\hat y$ and that depends on some adjustable numbers, its **parameters**. The **linear model** with parameters $w$ and $b$ is $\hat y = wx + b$.

A **loss function** assigns to each setting of the parameters a single number that measures how badly the model's predictions miss the data. The **mean squared error** of the linear model is

$$
L(w, b) = \frac{1}{n}\sum_{i=1}^{n} \bigl(wx_i + b - y_i\bigr)^2.
$$

**Training** the model on the data means searching for parameters that make the loss small.

Read this against what we did. The model is the rule with its dials, and the parameters are the dials. The loss is the score, and note what its inputs are: the data are fixed, so $L$ is a function of $w$ and $b$ alone. We found $L(1, 0) = 1.25$ and $L(1, 1) = 0.25$. Training is the dial-turning, and the definition says nothing yet about how to do it. The word "learning" in machine learning refers to this search.

## Turning one dial

The most cautious way to search is to leave $b = 0$ and turn only the slope. With $b = 0$ the four errors are $w - 1.5$, $2w - 3.5$, $3w - 3.5$ and $4w - 5.5$. Their squares add up to $(1 + 4 + 9 + 16)\,w^2 - (3 + 14 + 21 + 44)\,w + (2.25 + 12.25 + 12.25 + 30.25) = 30w^2 - 82w + 57$, and dividing by 4,

$$
L(w, 0) = 7.5w^2 - 20.5w + 14.25.
$$

This is a quadratic in $w$ with a positive leading coefficient, so its graph is a parabola opening upward, and [completing the square](@algebra/completing-the-square) locates its lowest point: $L(w, 0) = 7.5\,(w - \tfrac{41}{30})^2 + \tfrac{29}{120}$. With the intercept held at zero, the best slope is $41/30 \approx 1.37$, where the loss is $29/120 \approx 0.242$.

**Pause and try.** Two lines now score about the same: $w = 1, b = 1$ scores $0.25$ and $w \approx 1.37, b = 0$ scores $0.242$. Try the line halfway between in both dials, roughly $w = 1.2$, $b = 0.5$. Does it beat both?

**Answer.** Its predictions are $1.7, 2.9, 4.1, 5.3$, with errors $0.2, -0.6, 0.6, -0.2$ and a loss of $(0.04 + 0.36 + 0.36 + 0.04)/4 = 0.2$. It beats both. One line got close by lifting, the other by tilting, and doing some of each is better than either.

That exercise shows what is wrong with turning one dial. Repeat the calculation with the intercept held at $0.5$ instead of $0$ and you get a different parabola, $L(w, 0.5) = 7.5\,(w - 1.2)^2 + 0.2$, whose lowest point is at a different slope.

[Figure 3, image: The loss as a function of the slope alone, for two fixed intercepts. With b = 0 the best slope is about 1.37, and with b = 0.5 it is 1.2. The best setting of one dial depends on where the other is.]

So the loss cannot be understood one dial at a time. It is a function of two variables, and to see it whole we need a picture with both dials in it.

## The loss surface

Expand the mean squared error without fixing either dial. Each squared error $(wx_i + b - y_i)^2$ multiplies out to $x_i^2w^2 + 2x_iwb + b^2 - 2x_iy_iw - 2y_ib + y_i^2$, and averaging over the four houses replaces each coefficient by an average over the data: the mean of $x_i^2$ is $7.5$, of $x_i$ is $2.5$, of $x_iy_i$ is $10.25$, of $y_i$ is $3.5$ and of $y_i^2$ is $14.25$. Therefore

$$
L(w, b) = 7.5w^2 + 5wb + b^2 - 20.5w - 7b + 14.25.
$$

Check it against what we know: $L(1, 0) = 7.5 - 20.5 + 14.25 = 1.25$, and $L(1, 1) = 7.5 + 5 + 1 - 20.5 - 7 + 14.25 = 0.25$.

A [function of two variables](@multivariable-calculus/functions-of-two-variables) can be drawn as a map. Put $w$ on the horizontal axis and $b$ on the vertical one, so that each point of the plane is one setting of the dials, which is to say one line. Shade each point by the loss there, and draw curves through points of equal loss, the way a hiking map draws curves through points of equal height.

[Figure 4, image: The mean squared error of every line at once. Each point of this plane is one line \hat y = wx + b, shaded darker where the loss is larger, with curves of equal loss at 0.5, 1, 2, 4 and 8. The rule of thumb is point A, the raised line is B, and the lowest point is the green dot at (1.2, 0.5). Points C and D are two very different lines that both have loss 1.]

The curves of equal loss are ellipses, one inside the next, all centered on the same point. They are long and thin, and they lie along a diagonal. That shape says something concrete about the data. Moving along the diagonal means raising the slope while lowering the intercept, which pivots the line about the middle of the data and changes its predictions there very little. Moving across the diagonal lifts the whole line off the data. The loss is forgiving in the first direction and strict in the second.

**Pause and try.** The figure claims that points C and D have the same loss. Check it. C is the line $\hat y = 2x - 1.5$ and D is the line $\hat y = 0.4x + 2.5$.

**Answer.** For C the predictions are $0.5, 2.5, 4.5, 6.5$ and the errors are $-1, -1, 1, 1$, so the loss is $1$. For D the predictions are $2.9, 3.3, 3.7, 4.1$ and the errors are $1.4, -0.2, 0.2, -1.4$, so the loss is $(1.96 + 0.04 + 0.04 + 1.96)/4 = 1$. One line is five times as steep as the other, and its intercept compensates.

In the next figure a point wanders over the map on the right while the line it stands for moves on the left.

[Figure 5, animation: Left: the line with its squared errors. Right: the same line as a point on the loss map. Sliding the point along the valley pivots the line and the loss changes slowly; stepping across the valley lifts the line off the data and the loss climbs quickly.]

Take the loss as height. Closed curves nested around a single low point are then the contour lines of a basin. The loss surface of the four houses is a long bowl, and the green dot is its bottom.

Training now has a geometric meaning: find the bottom of the bowl. But a picture is not a proof. Is there always exactly one lowest point, or could some data set produce two pits, or a pit hidden outside the window we plotted? And where is the bottom?

## Why the surface is a bowl

For our four houses, completing the square answers both questions at once. Group the terms of $L$ that contain $b$: $b^2 + 5wb - 7b = b^2 + 2b\,(2.5w - 3.5)$, which is $(b + 2.5w - 3.5)^2$ minus $(2.5w - 3.5)^2$. Subtracting $(2.5w - 3.5)^2 = 6.25w^2 - 17.5w + 12.25$ from the remaining terms $7.5w^2 - 20.5w + 14.25$ leaves $1.25w^2 - 3w + 2 = 1.25\,(w - 1.2)^2 + 0.2$. So

$$
L(w, b) = (b + 2.5w - 3.5)^2 + 1.25\,(w - 1.2)^2 + 0.2.
$$

This is two squares plus a constant, and neither square can be negative, so $L \ge 0.2$ everywhere on the plane, with no window to worry about. Both squares vanish only when $w = 1.2$ and $b = 3.5 - 2.5 \times 1.2 = 0.5$. That is the single lowest point, and no other setting of the dials ties it.

The same computation works for any data. For data $(x_i, y_i)$ write $\bar x$ and $\bar y$ for the means, and

$$
S_{xx} = \sum (x_i - \bar x)^2, \qquad S_{xy} = \sum (x_i - \bar x)(y_i - \bar y), \qquad S_{yy} = \sum (y_i - \bar y)^2.
$$

We also need the precise word for "bowl-shaped".

**Definition.** A function $L$ of two variables is **convex** if, for any two points $p$ and $q$ of the plane and any $s$ with $0 \le s \le 1$,

$$
L\bigl((1 - s)\,p + s\,q\bigr) \le (1 - s)\,L(p) + s\,L(q).
$$

It is **strictly convex** if the inequality is strict whenever $p \ne q$ and $0 < s < 1$.

The point $(1 - s)p + sq$ runs along the segment from $p$ to $q$ as $s$ goes from 0 to 1, and the right side is the height of the straight chord joining the surface above $p$ to the surface above $q$. So convexity says that between any two points the surface sags below the chord. A surface with two pits fails this, because the chord from one pit to the other passes under the ridge between them.

**Theorem.** Let $(x_1, y_1), \dots, (x_n, y_n)$ be data in which the $x_i$ are not all equal, and let $L(w, b) = \frac1n \sum (wx_i + b - y_i)^2$. Then:

- $L(w, b) = (b + w\bar x - \bar y)^2 + \dfrac{S_{xx}}{n}\Bigl(w - \dfrac{S_{xy}}{S_{xx}}\Bigr)^2 + \dfrac{1}{n}\Bigl(S_{yy} - \dfrac{S_{xy}^2}{S_{xx}}\Bigr)$.
- $L$ has exactly one minimum point, at $w^* = S_{xy}/S_{xx}$ and $b^* = \bar y - w^*\bar x$.
- $L$ is strictly convex.

**Proof.** (1) Write $u_i = x_i - \bar x$ and $v_i = y_i - \bar y$, so that $\sum u_i = \sum v_i = 0$. Then

$$
wx_i + b - y_i = (wu_i - v_i) + c, \qquad c = b + w\bar x - \bar y,
$$

and $c$ does not depend on $i$. Squaring and summing gives $\sum (wu_i - v_i)^2 + 2c\sum (wu_i - v_i) + nc^2$. The middle sum is $w\sum u_i - \sum v_i = 0$. The first sum is $S_{xx}w^2 - 2S_{xy}w + S_{yy}$, and since $S_{xx} > 0$ (the $x_i$ are not all equal) we can complete the square: it equals $S_{xx}(w - S_{xy}/S_{xx})^2 + S_{yy} - S_{xy}^2/S_{xx}$. Dividing everything by $n$ gives the formula.

(2) In the formula the last term is a constant, and the first two are squares with positive coefficients $1$ and $S_{xx}/n$. Their sum is at least 0, and equals 0 exactly when $w = S_{xy}/S_{xx}$ and $b + w\bar x - \bar y = 0$.

(3) Take two different points $p$ and $q$ and let $(d_w, d_b) = q - p$, which is not $(0, 0)$. At the point $p + t\,(d_w, d_b)$ of the line through them, the error on house $i$ is $e_i + t\,(d_wx_i + d_b)$, where $e_i$ is the error at $p$. So along the line

$$
\varphi(t) = L\bigl(p + t\,(d_w, d_b)\bigr) = At^2 + Bt + C, \qquad A = \frac1n\sum (d_wx_i + d_b)^2.
$$

$A$ is a mean of squares, so $A \ge 0$, and $A = 0$ would force $d_wx_i + d_b = 0$ for every $i$. Because at least two of the $x_i$ differ, subtracting two of these equations gives $d_w = 0$ and then $d_b = 0$, which we excluded. So $A > 0$. Finally, for any quadratic $\varphi$ and any $0 < s < 1$, direct expansion gives

$$
\varphi(s) - \bigl[(1 - s)\,\varphi(0) + s\,\varphi(1)\bigr] = A\,(s^2 - s) = -A\,s\,(1 - s) < 0,
$$

since the terms in $B$ and $C$ cancel. As $\varphi(0) = L(p)$, $\varphi(1) = L(q)$ and $\varphi(s) = L((1 - s)p + sq)$, this is the strict inequality in the definition.

Part 3 has a visual meaning: cut the bowl along any straight line whatever, and the cross-section is a parabola that opens upward. The number $A$ is how sharply it curves.

[Figure 6, animation: Slicing the loss surface along straight lines through point A. Left: the slicing line on the map. Right: the loss along that line, plotted against the distance t along it. Whatever the direction, the slice is an upward parabola; its curvature A changes with direction but never reaches zero.]

**Key idea.** Training the linear model means minimizing $L(w, b) = \frac1n\sum (wx_i + b - y_i)^2$ over the two parameters. As long as the inputs are not all equal, $L$ is a strictly convex quadratic, so its surface is a bowl with exactly one lowest point, and that point is the best line.

## Where the bottom is

Part 2 of the theorem is a formula for the trained model. For the houses, $\bar x = 2.5$ and $\bar y = 3.5$; the deviations are $u = (-1.5, -0.5, 0.5, 1.5)$ and $v = (-2, 0, 0, 2)$; so $S_{xx} = 5$ and $S_{xy} = 3 + 0 + 0 + 3 = 6$. Hence

$$
w^* = \frac{6}{5} = 1.2, \qquad b^* = 3.5 - 1.2 \times 2.5 = 0.5,
$$

and with $S_{yy} = 8$ the minimum loss is $\frac14(8 - 36/5) = 0.2$, agreeing with the direct calculation. This is the least-squares line of statistics: [the lesson on correlation and regression](@statistics/correlation-and-regression) derives the same slope $S_{xy}/S_{xx}$ and intercept $\bar y - w^*\bar x$ by minimizing the sum of squared errors, which is $n$ times our mean and so has its minimum at the same place.

**Pause and try.** Use the trained model to answer the opening question: what does it predict for the house of 2500 square feet? And what price does it predict for 5000 square feet?

**Answer.** In our units the size is $x = 2.5$, so $\hat y = 1.2 \times 2.5 + 0.5 = 3.5$, or \$350,000. This is the mean price because $2.5$ is the mean size, and the best line always passes through $(\bar x, \bar y)$, since $b^* = \bar y - w^*\bar x$. For $x = 5$ the model says $6.5$, or \$650,000. That prediction is an extrapolation beyond every house in the table, and nothing in the training guarantees that the straight-line pattern continues out there.

You might object that if a formula gives the answer, there is nothing left to train. But the formula belongs to this model and this loss. It exists because $L$ is quadratic in the parameters, and $L$ is quadratic because the model is linear in them and the loss squares the errors. Change either one, as we will when the model must [output a probability](@machine-learning/logistic-regression) or [contains several layers](@machine-learning/neural-networks), and no formula for the bottom is available. The picture survives: there is still a loss surface over the parameters, and training still means going downhill on it. [Gradient descent](@machine-learning/gradient-descent), the subject of the next lesson, finds the bottom using only the local slope, and it will be tested first on this bowl, where we know the right answer.

## Worked examples

**Worked example.** **A loss surface from scratch.** Three points: $(0, 1), (1, 1), (2, 4)$. Find $L(w, b)$, write it as a sum of squares, and find the best line.

The averages we need are: mean of $x^2$, $(0 + 1 + 4)/3 = 5/3$; mean of $x$, $1$; mean of $xy$, $(0 + 1 + 8)/3 = 3$; mean of $y$, $2$; mean of $y^2$, $(1 + 1 + 16)/3 = 6$. So

$$
L(w, b) = \tfrac53w^2 + 2wb + b^2 - 6w - 4b + 6.
$$

For the sum of squares, use the theorem. $\bar x = 1$, $\bar y = 2$, $u = (-1, 0, 1)$, $v = (-1, -1, 2)$, so $S_{xx} = 2$, $S_{xy} = 1 + 0 + 2 = 3$, $S_{yy} = 6$. Then $w^* = 1.5$, $b^* = 2 - 1.5 = 0.5$, and the minimum loss is $\frac13(6 - 9/2) = 0.5$:

$$
L(w, b) = (b + w - 2)^2 + \tfrac23\,(w - 1.5)^2 + 0.5.
$$

*Check.* The line $\hat y = 1.5x + 0.5$ predicts $0.5, 2, 3.5$, with errors $-0.5, 1, -0.5$, whose squares average $(0.25 + 1 + 0.25)/3 = 0.5$.

**Worked example.** **A model with one parameter.** Suppose we insist that a house of size zero costs nothing, and use the model $\hat y = wx$ on the four houses. What is the best $w$, and how much do we lose by giving up the intercept?

This is the slice $b = 0$ of the surface: $L(w) = 7.5w^2 - 20.5w + 14.25$. A quadratic $\alpha w^2 - \beta w + \gamma$ with $\alpha > 0$ is smallest at $w = \beta/(2\alpha)$, here $20.5/15 = 41/30 \approx 1.367$, where its value is $\gamma - \beta^2/(4\alpha) = 14.25 - 420.25/30 \approx 0.242$. The two-parameter model reaches $0.2$. On the data it was fitted to, the smaller model can never do better than the larger, because every line through the origin is also a line; here it does about 20% worse. Whether the larger model also predicts *new* houses better is a separate question, taken up in [the lesson on overfitting](@machine-learning/overfitting).

## When the bowl has no single bottom

The theorem assumed that the inputs are not all equal. Here is what happens without that. Suppose three houses of the same size, 2000 square feet, sold for $3$, $4$ and $5$. Every error is $2w + b - y_i$, which depends on the dials only through the combination $2w + b$, and

$$
L(w, b) = (2w + b - 4)^2 + \tfrac23.
$$

The loss is as small as possible, $2/3$, at every point of the line $2w + b = 4$. The surface is a trough with a flat floor, and infinitely many lines tie for best: every line through the point $(2, 4)$. The data say what a 2000 square foot house costs on average and nothing about how price changes with size. The surface is still convex, but not strictly: along the floor of the trough, the chord lies in the surface.

[Figure 7, image: Three houses of the same size. Left: three different lines through the mean price at that size, all with the same loss, 0.67. Right: the loss map is a trough with straight, parallel level curves at losses 2, 4 and 8, and the whole green line 2w + b = 4 is its floor. The three dots on it are the three lines on the left.]

The long thin valley on the map of the four real houses is a mild form of the same thing. Their sizes, 1 to 4, are all on one side of zero, so raising the intercept and lowering the slope nearly compensate. The valley will matter in the next lesson, because a method that feels its way downhill moves slowly along a nearly flat floor.

**Common mistake.** **Reading the loss as a typical miss.** A mean squared error of $0.2$ does not mean the predictions are off by $0.2$, that is, by \$20,000. The loss is an average of *squared* errors, in squared units. The errors of the best line are $0.2, -0.6, 0.6, -0.2$, and a fair summary of their size is $\sqrt{0.2} \approx 0.45$, about \$45,000.

## Stepping back

The hard step was a change in what we looked at. We started in the data plane, where the houses are points and the model is a line. The work happened in the plane of the parameters, where each *line* is a point and the data have been absorbed into a single function $L$. There, "which line is best?" becomes "where is this surface lowest?", and for the linear model with squared error the surface is a convex bowl whose bottom has a formula.

Later lessons keep that structure and change its parts: a different model, a different loss, more parameters. The surface stops being a bowl and the formula disappears, but model, loss and training keep their meanings.

**Check yourself.** For the four houses, $L(1, 1) = 0.25$ and the minimum of the loss is $L(1.2, 0.5) = 0.2$. Which statement is correct?
Answer: No straight line has loss below 0.2 on these data; a loss of 0 would need all four points on one line. $L$ is 0.2 plus two squares, and the squares are both zero only at $(1.2, 0.5)$.

**Recap.** - A model is a function with adjustable parameters. The linear model is $\hat y = wx + b$, with parameters $w$ (slope) and $b$ (intercept).
- A loss function turns a setting of the parameters into one number. The mean squared error is $L(w, b) = \frac1n\sum (wx_i + b - y_i)^2$.
- Training means searching for parameters with small loss. The search happens in the plane of parameters, where each point is a line and $L$ is a surface.
- If the $x_i$ are not all equal, $L$ equals two squares plus a constant, is strictly convex, and has exactly one minimum: $w^* = S_{xy}/S_{xx}$, $b^* = \bar y - w^*\bar x$.
- For the four houses, $L = (b + 2.5w - 3.5)^2 + 1.25(w - 1.2)^2 + 0.2$, and the best line is $\hat y = 1.2x + 0.5$. If all the $x_i$ were equal, the surface would be a trough and infinitely many lines would tie.

## Problems

The first three repeat the lesson's computations. The next two ask you to explain or combine. The last one extends the lesson.

**Problem 1.** For the four houses, compute the mean squared error of the line $\hat y = 1.5x$ directly from the errors, and then again from the formula $L(w, b) = 7.5w^2 + 5wb + b^2 - 20.5w - 7b + 14.25$.

**Solution.** The predictions are $1.5, 3, 4.5, 6$ and the errors are $0, -0.5, 1, 0.5$. The squares are $0, 0.25, 1, 0.25$ with mean $1.5/4 = 0.375$. From the formula with $w = 1.5$, $b = 0$: $7.5 \times 2.25 - 20.5 \times 1.5 + 14.25 = 16.875 - 30.75 + 14.25 = 0.375$.

**Problem 2.** For the data $(1, 1), (2, 3), (3, 2)$, write $L(w, b)$ in expanded form, find the best line, and find the minimum loss.

**Solution.** The averages are: $x^2$: $14/3$; $x$: $2$; $xy$: $(1 + 6 + 6)/3 = 13/3$; $y$: $2$; $y^2$: $14/3$. So $L = \frac{14}{3}w^2 + 4wb + b^2 - \frac{26}{3}w - 4b + \frac{14}{3}$. For the minimum, $u = (-1, 0, 1)$ and $v = (-1, 1, 0)$, so $S_{xx} = 2$, $S_{xy} = 1$, $S_{yy} = 2$. Then $w^* = 0.5$, $b^* = 2 - 0.5 \times 2 = 1$, and the minimum loss is $\frac13(2 - \frac12) = 0.5$. Check: $\hat y = 0.5x + 1$ predicts $1.5, 2, 2.5$, with errors $0.5, -1, 0.5$ and mean square $(0.25 + 1 + 0.25)/3 = 0.5$.

**Problem 3.** Using $L(w, b) = (b + 2.5w - 3.5)^2 + 1.25(w - 1.2)^2 + 0.2$ for the houses: (a) recompute $L(1, 1)$. (b) Find every point on the valley floor $b = 3.5 - 2.5w$ whose loss is at most $0.25$. (c) What do those lines have in common on the data plot?

**Solution.** (a) $(1 + 2.5 - 3.5)^2 + 1.25 \times 0.04 + 0.2 = 0 + 0.05 + 0.2 = 0.25$. (b) On the valley floor the first square is zero, so the loss is $1.25(w - 1.2)^2 + 0.2 \le 0.25$, which gives $(w - 1.2)^2 \le 0.04$, that is $1 \le w \le 1.4$, with $b = 3.5 - 2.5w$ running from $1$ down to $0$. (c) The condition $b = 3.5 - 2.5w$ says $w \times 2.5 + b = 3.5$: each of these lines passes through the point of means $(2.5, 3.5)$. They are the lines through that point with slopes between 1 and 1.4. Point B of the lesson, $(1, 1)$, is one end of this range.

**Problem 4.** Let $e_i = w^*x_i + b^* - y_i$ be the errors of the best line. Show that $\sum e_i = 0$ and $\sum e_ix_i = 0$ for any data with the $x_i$ not all equal, and verify both for the houses.

**Solution.** In the notation of the proof, $e_i = (w^*u_i - v_i) + c$ with $c = b^* + w^*\bar x - \bar y = 0$. So $\sum e_i = w^*\sum u_i - \sum v_i = 0$. Next, $\sum e_ix_i = \sum e_i(u_i + \bar x) = \sum e_iu_i + \bar x\sum e_i = \sum (w^*u_i - v_i)u_i + 0 = w^*S_{xx} - S_{xy} = 0$, because $w^* = S_{xy}/S_{xx}$. For the houses the errors are $0.2, -0.6, 0.6, -0.2$: their sum is $0$, and $\sum e_ix_i = 0.2 - 1.2 + 1.8 - 0.8 = 0$. (With calculus: these two sums are, up to the factor $2/n$, the [partial derivatives](@multivariable-calculus/partial-derivatives-and-gradient) of $L$ with respect to $b$ and $w$, which vanish at the bottom of the bowl.)

**Problem 5.** A typing error records the price of house 4 as $9.5$ instead of $5.5$. Find the best line for the corrupted data and its prediction for the 2500 square foot house. Why does one bad entry move the line so much?

**Solution.** Now $\bar y = (1.5 + 3.5 + 3.5 + 9.5)/4 = 4.5$ and $v = (-3, -1, -1, 5)$, with $u = (-1.5, -0.5, 0.5, 1.5)$ as before. $S_{xy} = 4.5 + 0.5 - 0.5 + 7.5 = 12$ and $S_{xx} = 5$, so $w^* = 2.4$ and $b^* = 4.5 - 2.4 \times 2.5 = -1.5$. The slope has doubled. The prediction at $x = 2.5$ is $2.4 \times 2.5 - 1.5 = 4.5$, a full \$100,000 above the earlier \$350,000. Two things make the entry so influential. The loss squares errors, so the old line's error of $-4.2$ on the bad point would contribute $17.64$ to the sum, far more than all other errors together, and the minimizer gives up accuracy on three houses to shrink that one term. And house 4 is at the end of the range of sizes, where pulling on the line tilts it most.

**Problem 6.** (Turning one dial at a time.) Start at the rule of thumb $(w, b) = (1, 0)$ and alternate two moves: (i) with $b$ fixed, set $w$ to the value that minimizes $L$; (ii) with $w$ fixed, set $b$ to the value that minimizes $L$. For the houses, find formulas for both moves, carry out two rounds, and prove that the slope converges to $1.2$.

**Solution.** Collect $L$ as a quadratic in $w$: $7.5w^2 + (5b - 20.5)w + \dots$, minimized at $w = (20.5 - 5b)/15$. As a quadratic in $b$: $b^2 + (5w - 7)b + \dots$, minimized at $b = (7 - 5w)/2 = 3.5 - 2.5w$. Round 1: $w = 20.5/15 \approx 1.3667$, then $b = 3.5 - 2.5 \times 1.3667 \approx 0.0833$; the loss is now about $0.2347$. Round 2: $w = (20.5 - 0.4167)/15 \approx 1.3389$, then $b \approx 0.1528$; the loss is about $0.2241$. For the proof, note that after move (ii) the point satisfies $b = 3.5 - 2.5w$. Substituting this into move (i) shows that each later round sends the slope $w$ to

$$
w' = \frac{20.5 - 5\,(3.5 - 2.5w)}{15} = \frac{3 + 12.5w}{15} = 0.2 + \tfrac56w.
$$

So $w' - 1.2 = \frac56(w - 1.2)$: each round after the first multiplies the distance of the slope from $1.2$ by $5/6$. After round 1 that distance is $41/30 - 1.2 = \frac16$, so after $k$ rounds it is $\frac16(5/6)^{k-1}$, which tends to 0, and then $b = 3.5 - 2.5w$ tends to $0.5$. The method works, but slowly: it needs about 13 rounds to cut the distance by a factor of ten, since $(5/6)^{13} \approx 0.093$. Solving exactly for one block of unknowns at a time is also how [k-means](@machine-learning/k-means-clustering) finds clusters.

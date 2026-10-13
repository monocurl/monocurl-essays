# What a neural network computes

> A neuron is a linear score followed by a bend. Sums of bends build bumps, bumps build any curve, and two neurons solve XOR. All with explicit weights.

Series: Machine Learning (https://www.monocurl.com/monocurl-essays/machine-learning/)
Canonical: https://www.monocurl.com/monocurl-essays/machine-learning/neural-networks/
Keywords: what is a neural network, ReLU, hidden layer, universal approximation theorem, XOR neural network, activation function, piecewise linear function, neuron

[Figure 1, animation: A network of ReLU neurons approximating \sin x on [0, 2\pi], with weights given by an explicit formula. Each neuron contributes one bend, at a dot. With 4, 8, 16 and 32 neurons the largest error falls from 0.21 to 0.005.]

[The last lesson](@machine-learning/logistic-regression) ended with a defeat. A classifier that computes one linear score, $z = w_1x_1 + w_2x_2 + b$, and says "yes" when $z > 0$ has a straight decision boundary, and no straight boundary separates the four XOR points, where the answer is yes exactly when one of the two inputs is 1 and the other is 0.

One linear score is not enough, so use several: compute a few scores from the inputs, then compute a final score from *those*. Try it with one input. Let the first score be $z = 2x + 1$ and feed it into a second, $u = 3z - 4$. Then $u = 3(2x + 1) - 4 = 6x - 1$. Two layers of arithmetic have produced one linear function of $x$, and this always happens: a linear function of linear functions is linear, so a stack of linear scores, however tall, has exactly the power of one.

Something has to break the linearity between the layers, and it takes very little: one bend.

## A neuron is a score followed by a bend

The simplest function with a bend in it is the **rectified linear unit**, written $\operatorname{ReLU}$:

$$
\operatorname{ReLU}(z) = \max(0, z).
$$

It passes positive numbers through unchanged and replaces negative numbers by 0. Apply it to a linear score and you have the basic unit of a neural network.

**Definition.** A **neuron** with weights $w_1, \dots, w_d$, bias $b$ and **activation function** $\varphi$ is the function that sends an input $x = (x_1, \dots, x_d)$ to

$$
h = \varphi(w_1x_1 + \dots + w_dx_d + b).
$$

We take $\varphi = \operatorname{ReLU}$ unless stated otherwise.

The part inside the parentheses is the linear score of the earlier lessons; mathematicians call a linear function plus a constant an **affine** map. The activation is the only new ingredient. Logistic regression is itself a single neuron, with the sigmoid as its activation.

With one input, a ReLU neuron is $h(x) = \operatorname{ReLU}(wx + b)$. Take $w = 2$ and $b = -2$. At $x = 0, 1, 2, 3$ the score $2x - 2$ is $-2, 0, 2, 4$, so the neuron outputs $0, 0, 2, 4$. Its graph is flat at 0 until the score turns positive, at $x = 1$, and from there it is a ramp of slope 2.

[Figure 2, image: Three ReLU neurons with one input. Each graph is flat on one side of a kink and a straight ramp on the other. The kink is where the score wx + b is zero, at x = -b/w, and the ramp has slope w. A negative weight makes the ramp face left.]

One neuron cannot do much: its graph has a single kink. The interest is in what sums of them can do.

## From ramps to a bump

Add the outputs of several neurons, each multiplied by a number of our choosing. Start with two, and subtract a ramp that starts at $x = 1$ from a ramp that starts at $x = 0$:

$$
s(x) = \operatorname{ReLU}(x) - \operatorname{ReLU}(x - 1).
$$

**Pause and try.** Compute $s(x)$ at $x = -1,\ 0.5,\ 1,\ 3$ and describe its graph.

**Answer.** $s(-1) = 0 - 0 = 0$. $s(0.5) = 0.5 - 0 = 0.5$. $s(1) = 1 - 0 = 1$. $s(3) = 3 - 2 = 1$. The graph is 0 up to $x = 0$, climbs with slope 1 until $x = 1$, and is flat at 1 from then on: once both neurons are active, their slopes $1$ and $-1$ cancel. It is a step with a sloped riser.

Two neurons raise the output and hold it. To make a **bump**, a function that is zero far to the left, rises, and returns to zero for good, the output has to be brought down again, which takes more downward slope. Subtract the second ramp twice, so that the total slope after $x = 1$ is $1 - 2 = -1$, and then add a third ramp at $x = 2$ to cancel the fall once it reaches zero:

$$
T(x) = \operatorname{ReLU}(x) - 2\operatorname{ReLU}(x - 1) + \operatorname{ReLU}(x - 2).
$$

Check it: $T(0) = 0$, $T(1) = 1$, $T(1.5) = 1.5 - 1 = 0.5$, $T(2) = 2 - 2 = 0$, and $T(3) = 3 - 4 + 1 = 0$. It is a tent of height 1 standing on the interval $[0, 2]$, and zero everywhere else.

[Figure 3, steps: Building a bump from ReLU neurons. The thin lines are the weighted outputs of the individual neurons and the thick green line is their sum. Each new neuron changes the slope of the sum from its kink onward and leaves everything to the left of the kink alone.]

  - step: One neuron: zero up to its kink at x = 0, then a ramp of slope 1.
  - step: Subtract a neuron with its kink at x = 1. From there on the two slopes cancel, and the sum stays at 1.
  - step: Give that neuron the weight -2 instead. After x = 1 the sum now falls with slope -1 and keeps falling.
  - step: A third neuron with its kink at x = 2 cancels the fall. The sum is a bump: a tent of height 1 on the interval from 0 to 2.
Two neurons could not have made a bump, and the proof uses the rule that the figure illustrates. A weighted sum of ReLU neurons is continuous and made of straight pieces, and its slope can change only at a neuron's kink. With two neurons there are at most two kinks, so at most three pieces. For a bump, the first and last pieces are the zero function, so the function is 0 at both kinks, and the middle piece is a straight line through two zeros, which is zero too. A bump needs three kinks: up, over the top, and back to flat.

## Any curve from bumps, and the weights to do it

A tent can be moved, by shifting the kinks, widened, by spreading them, and scaled, by multiplying the three output weights. So we can plant a tent of any height at any place. That is enough to build a function through any list of points. Suppose we want a curve through

$$
(0, 0), \quad (1, 2), \quad (2, 1), \quad (3, 3).
$$

Plant a tent of height 2 centered at $x = 1$, one of height 1 centered at $x = 2$, and half a tent of height 3 rising toward $x = 3$. At $x = 1$ only the first tent is nonzero, so the sum is 2; at $x = 2$ only the second, so the sum is 1; and in between the sum of two straight pieces is straight. The sum joins the dots with straight segments.

Counting neurons, we can be more economical. Each tent uses three neurons, but neighboring tents have kinks at the same places, and two neurons with the same kink can be merged into one by adding their output weights. That leaves one neuron per kink, and the weight of each is determined by a simple rule: *a neuron's output weight is the change of slope at its kink.* The segments above have slopes $2, -1, 2$. So the slope must change by $+2$ at $x = 0$ (from flat), by $-3$ at $x = 1$ and by $+3$ at $x = 2$:

$$
g(x) = 2\operatorname{ReLU}(x) - 3\operatorname{ReLU}(x - 1) + 3\operatorname{ReLU}(x - 2).
$$

**Pause and try.** Check that $g$ passes through all four points.

**Answer.** $g(0) = 0$. $g(1) = 2 - 0 + 0 = 2$. $g(2) = 4 - 3 + 0 = 1$. $g(3) = 6 - 6 + 3 = 3$.

[Figure 4, steps: A network of three ReLU neurons through four given points. Each neuron's kink is at a data point and its output weight is the change of slope needed there: +2, -3, +3.]

  - step: The first neuron has its kink at x = 0 and weight 2, the slope needed to reach the second point.
  - step: At x = 1 the slope must change from 2 to -1, so the second neuron has weight -3.
  - step: At x = 2 the slope must change from -1 to 2, so the third neuron has weight 3. The sum passes through all four points.
The arrangement we have been using has a name and a standard picture. The inputs feed a row of neurons, called a **hidden layer** because its outputs are neither inputs nor the final answer, and the output is a weighted sum of the hidden neurons plus a bias.

**Definition.** A **neural network with one hidden layer** of $N$ neurons and activation $\varphi$ is a function of the form

$$
f(x) = c_0 + \sum_{k=1}^{N} c_k\,\varphi(w_k \cdot x + b_k),
$$

where $x$ is the input, each hidden neuron $k$ has a weight vector $w_k$ and a bias $b_k$, and $c_0, c_1, \dots, c_N$ are the output bias and output weights. Its **parameters** are all the $w_k$, $b_k$ and $c_k$.

The rule for the weights is a theorem, and it holds for any list of points.

**Theorem.** Let $t_0 < t_1 < \dots < t_n$, and let $g$ be a continuous function on $[t_0, t_n]$ that is linear on each interval $[t_{j-1}, t_j]$, with slope $m_j$ there. Put $m_0 = 0$. Then for every $x$ in $[t_0, t_n]$,

$$
g(x) = g(t_0) + \sum_{k=0}^{n-1} (m_{k+1} - m_k)\,\operatorname{ReLU}(x - t_k).
$$

**Proof.** Call the right side $F(x)$. First, $F(t_0) = g(t_0)$, because at $x = t_0$ every $\operatorname{ReLU}(t_0 - t_k)$ with $k \ge 0$ is 0. Next, fix $j$ between 1 and $n$ and take $x$ in $[t_{j-1}, t_j]$. For $k \le j - 1$ we have $x \ge t_k$, so $\operatorname{ReLU}(x - t_k) = x - t_k$, which has slope 1. For $k \ge j$ we have $x \le t_k$, so that term is 0. Hence on this interval $F$ is linear with slope

$$
\sum_{k=0}^{j-1}(m_{k+1} - m_k) = m_j - m_0 = m_j,
$$

since the sum telescopes. So $F$ and $g$ start at the same value at $t_0$ and have the same slope on $[t_0, t_1]$, which makes them equal there, in particular at $t_1$. They then have the same slope on $[t_1, t_2]$, so they are equal there too, and so on through $[t_{n-1}, t_n]$.

This is a network with one hidden layer of $n$ ReLU neurons, with $w_k = 1$, $b_k = -t_k$, $c_k = m_{k+1} - m_k$ and $c_0 = g(t_0)$. The figure at the top of the page applies the theorem to the broken line through points on the sine curve at $n$ equally spaced inputs. With 4 neurons the largest gap between the network and $\sin x$ is $0.21$; with 8 it is $0.070$; with 16, $0.019$; with 32, $0.0048$. Each doubling divides the error by between three and four, and the ratio approaches four.

**Key idea.** A ReLU neuron contributes one kink. A weighted sum of $n$ of them is a broken line with up to $n$ kinks, and by choosing each output weight to be the change of slope at its kink we can make the network equal to any continuous broken line we like, and so approximate any continuous curve.

## The universal approximation theorem, and its fine print

How good the approximation gets depends on how smooth the target is. For a twice-differentiable function $f$ whose second derivative is at most $M$ in size, the broken line through points spaced $h$ apart is never farther than $Mh^2/8$ from $f$. This is the classical error bound for linear interpolation, proved in numerical analysis from Rolle's theorem; for $\sin x$, $M = 1$, and with 32 pieces it gives $0.0048$. For an arbitrary continuous $f$ on a closed bounded interval there is no such formula, but the error still tends to 0 as the spacing shrinks, because a continuous function on a closed bounded interval is uniformly continuous (the Heine–Cantor theorem). Together with our theorem, that proves that one hidden layer of ReLU neurons can approximate any continuous function of one variable on a closed bounded interval, as closely as desired.

The same is true with any number of inputs and almost any activation. We state this without proof.

**Theorem.** (Universal approximation, in the form proved by Leshno, Lin, Pinkus and Schocken in 1993; Cybenko in 1989 and Hornik in 1991 proved it for narrower classes of activation.) Let $\varphi$ be a continuous function of one real variable that is not a polynomial. Let $K$ be a closed and bounded subset of $\mathbb{R}^d$, let $f$ be a continuous real-valued function on $K$, and let $\varepsilon > 0$. Then there are a number $N$ and parameters $w_k, b_k, c_k$ such that

$$
\Bigl|\,f(x) - \sum_{k=1}^{N} c_k\,\varphi(w_k \cdot x + b_k)\Bigr| < \varepsilon \qquad \text{for every } x \text{ in } K.
$$

ReLU and the sigmoid are continuous and are not polynomials, so both qualify. The statement is often summarized as "a neural network can learn anything", which claims far more than the theorem does. Read what it says.

It says suitable parameters *exist*. It does not say how many neurons are needed, and for functions of many variables $N$ can be astronomically large. It does not say that gradient descent will find those parameters: the loss surface of a network is not a bowl, and the guarantees of [the lesson on gradient descent](@machine-learning/gradient-descent) for non-convex losses are weak. It concerns a function $f$ that is known everywhere on $K$, whereas training has only finitely many examples, so it is silent on how a network behaves between them, which is the subject of [the lesson on overfitting](@machine-learning/overfitting). And it promises nothing outside $K$.

[Figure 5, image: The 8-neuron approximation to \sin x, drawn beyond the interval [0, 2\pi] on which it was built (shaded). Inside, it follows the sine curve. To the left every neuron is off and the output is stuck at 0; to the right every neuron is on and the output is a straight line that climbs forever.]

## Two inputs: solving XOR

Now back to the problem that started this. With two inputs, a neuron $\operatorname{ReLU}(w_1x_1 + w_2x_2 + b)$ is zero on one side of the line $w_1x_1 + w_2x_2 + b = 0$ and rises like a tilted plane on the other. Its kink is a crease along that line.

The XOR points are $(0,0)$ and $(1,1)$, labeled 0, and $(1,0)$ and $(0,1)$, labeled 1. Look at the sum $s = x_1 + x_2$ at each: it is $0$ for the first point, $2$ for the second, and $1$ for both points labeled 1. So in terms of $s$ we need an output that is low at $s = 0$, high at $s = 1$ and low again at $s = 2$. That is the tent $T$ we already built, minus one neuron we do not need:

$$
h_1 = \operatorname{ReLU}(x_1 + x_2), \qquad h_2 = \operatorname{ReLU}(x_1 + x_2 - 1), \qquad \text{output} = h_1 - 2h_2.
$$

**Pause and try.** Compute $h_1$, $h_2$ and the output at each of the four XOR points.

**Answer.** At $(0, 0)$: $h_1 = 0$, $h_2 = \operatorname{ReLU}(-1) = 0$, output 0. At $(1, 0)$ and at $(0, 1)$: $h_1 = 1$, $h_2 = \operatorname{ReLU}(0) = 0$, output 1. At $(1, 1)$: $h_1 = 2$, $h_2 = 1$, output $2 - 2 = 0$. The output equals the XOR label at every point.

[Figure 6, image: The network that computes XOR. Each hidden neuron adds the two inputs, with weights 1, adds its bias, and applies ReLU. The output is h_1 - 2h_2. The table lists what flows through the network for each of the four inputs.]

To turn the output into a yes or no, say yes when it exceeds $\frac12$. The output equals $T(x_1 + x_2)$ wherever $x_1 + x_2 \le 2$ and is negative beyond that, where the tent's third neuron is missing, so that happens when $\frac12 < x_1 + x_2 < \frac32$: in a diagonal band, bounded by two parallel lines. No single line could produce this region. Two creases can.

[Figure 7, image: The output of the XOR network over the plane of inputs, orange where it exceeds \frac12 and blue where it does not. The output is a ridge of height 1 along the dashed line x_1 + x_2 = 1. The "yes" region is the band between the two solid lines, which contains both points labeled 1 and neither point labeled 0.]

There is a second way to see why this works, and it is the one that generalizes. The output neuron is a linear function of $h_1$ and $h_2$, so in the plane of $(h_1, h_2)$ its decision boundary $h_1 - 2h_2 = \frac12$ is a straight line. The last layer is still a linear classifier. What has changed is where the points are. The hidden layer sends each input $(x_1, x_2)$ to the point $(h_1, h_2)$:

$$
(0, 0) \mapsto (0, 0), \qquad (1, 0) \mapsto (1, 0), \qquad (0, 1) \mapsto (1, 0), \qquad (1, 1) \mapsto (2, 1).
$$

The two points labeled 1 land on the same spot, and the two labeled 0 land on either side of it, no longer in each other's way.

[Figure 8, animation: What the hidden layer does to the plane. Every input (x_1, x_2) slides to its hidden values (h_1, h_2), listed on the right for the four XOR points. The plane is flattened onto a single path and that path is creased at the image of the line x_1 + x_2 = 1. After the move, the green line h_1 - 2h_2 = \frac12 separates the points labeled 1 from the points labeled 0.]

This is the working picture of a neural network. The hidden layer re-draws the input space, folding it along the creases of its neurons, and the final layer draws one straight line through the result. In the previous lesson we rescued XOR by inventing a feature by hand; here the features $h_1$ and $h_2$ are computed by neurons, and their weights are parameters like any others. Training a network means choosing the fold and the line together.

## Worked examples

**Worked example.** **A forward pass by hand.** A network has two hidden ReLU neurons, $h_1 = \operatorname{ReLU}(2x_1 - x_2)$ and $h_2 = \operatorname{ReLU}(x_1 + x_2 - 3)$, and output $y = 1 + h_1 - 4h_2$. Evaluate it at $(1, 3)$, $(2, 1)$ and $(3, 2)$.

At $(1, 3)$: the scores are $2 - 3 = -1$ and $1 + 3 - 3 = 1$, so $h_1 = 0$, $h_2 = 1$, and $y = 1 + 0 - 4 = -3$. At $(2, 1)$: scores $3$ and $0$, so $h_1 = 3$, $h_2 = 0$, $y = 4$. At $(3, 2)$: scores $4$ and $2$, so $y = 1 + 4 - 8 = -3$. Each evaluation is the same three moves: score, bend, weighted sum. Which neurons are "on" changes from point to point, and that is all that makes the function nonlinear.

**Worked example.** **Weights from points.** Find a one-hidden-layer ReLU network equal to the broken line through $(0, 1), (1, 3), (3, 3), (4, 0)$ on $[0, 4]$.

The slopes of the three segments are $\frac{3 - 1}{1} = 2$, $\frac{3 - 3}{2} = 0$ and $\frac{0 - 3}{1} = -3$. By the theorem, the output bias is $g(0) = 1$ and the weights are the slope changes: $2 - 0 = 2$ at $x = 0$, $0 - 2 = -2$ at $x = 1$, and $-3 - 0 = -3$ at $x = 3$. So

$$
g(x) = 1 + 2\operatorname{ReLU}(x) - 2\operatorname{ReLU}(x - 1) - 3\operatorname{ReLU}(x - 3).
$$

*Check.* $g(1) = 1 + 2 = 3$. $g(3) = 1 + 6 - 4 = 3$. $g(4) = 1 + 8 - 6 - 3 = 0$.

**Worked example.** **How many neurons for a given accuracy?** How many equal pieces are needed to approximate $\sin x$ on $[0, 2\pi]$ within $0.01$, according to the bound $Mh^2/8$?

With $M = 1$ we need $h^2/8 \le 0.01$, so $h \le \sqrt{0.08} \approx 0.2828$. The number of pieces is $2\pi/h \ge 6.2832/0.2828 \approx 22.2$, so 23 pieces, which by the theorem is 23 neurons. Halving the tolerance to $0.005$ multiplies the count by $\sqrt2$, not by 2, because the error falls like $h^2$.

**Common mistake.** **Leaving out the activation.** A network whose hidden neurons have no bend, $h_k = w_k \cdot x + b_k$, computes $c_0 + \sum c_k(w_k \cdot x + b_k) = \bigl(\sum c_kw_k\bigr) \cdot x + \bigl(c_0 + \sum c_kb_k\bigr)$, one linear score, however many neurons and layers it has. It cannot solve XOR. The activation is what the network's extra power consists of.

**Common mistake.** **"Universal approximation means networks can learn anything."** The theorem is about what a network of unlimited size can *represent* on a bounded set. It does not bound the size, does not say that training finds the weights, and does not cover inputs outside the set, as the runaway line in the figure showed.

## Stepping back

The difficulty at the start was that combining linear functions produces nothing new. The whole subject turns on the smallest possible departure from linearity, a function that is linear on each side of one point. A neuron then contributes a kink, a sum of neurons contributes a broken line with weights that can be written down, and broken lines can be made to follow any continuous curve. In two dimensions the kinks become creases, and a layer of creases can rearrange points so that a line separates what no line could separate before.

We chose every weight here by hand, which was possible because the examples were tiny. A network with thousands of weights has to find them by gradient descent, and for that it needs the derivative of the loss with respect to each one. [The next lesson](@machine-learning/backpropagation), on backpropagation, shows how to get all of them at once.

**Check yourself.** The function $f(x) = \operatorname{ReLU}(x - 1) - \operatorname{ReLU}(x - 3)$ is a network with two hidden neurons. What is $f(5)$, and what does the graph look like?
Answer: $f(5) = 2$; the graph is 0 up to $x = 1$, rises with slope 1 until $x = 3$, and is flat at 2 afterwards. Past $x = 3$ both neurons are on and their slopes $1$ and $-1$ cancel, so the output stays at its value $f(3) = 2$.

**Recap.** - Stacking linear scores gives a linear score. A nonlinear activation between layers is what makes a network more than one line.
- A neuron computes $\varphi(w \cdot x + b)$. With $\varphi = \operatorname{ReLU}$ its graph has one kink, where $w \cdot x + b = 0$.
- Two ReLU neurons make a ramp between two levels; three make a bump, $\operatorname{ReLU}(x) - 2\operatorname{ReLU}(x - 1) + \operatorname{ReLU}(x - 2)$.
- Any continuous broken line equals $g(t_0) + \sum (m_{k+1} - m_k)\operatorname{ReLU}(x - t_k)$: one neuron per kink, weighted by the change of slope.
- Universal approximation: on a closed bounded set, a one-hidden-layer network with a continuous non-polynomial activation can approximate any continuous function to any accuracy. The theorem gives no size, no training method and no promise outside the set.
- XOR is computed by $h_1 = \operatorname{ReLU}(x_1 + x_2)$, $h_2 = \operatorname{ReLU}(x_1 + x_2 - 1)$, output $h_1 - 2h_2$. The hidden layer moves the points so that one line separates them.

## Problems

The first three repeat the lesson's computations, the next two combine them, and the last two extend them.

**Problem 1.** For the neuron $h(x) = \operatorname{ReLU}(2x - 3)$, find $h(0)$, $h(1)$, $h(2)$, $h(3)$, the location of the kink, and the slope of the ramp.

**Solution.** The scores are $-3, -1, 1, 3$, so the outputs are $0, 0, 1, 3$. The kink is where $2x - 3 = 0$, at $x = 1.5$, and the ramp has slope 2, the weight.

**Problem 2.** Evaluate the XOR network of the lesson at $(0.5, 0.5)$, $(0.25, 0.25)$ and $(2, 2)$. Which of these would it label "yes" with the threshold $\frac12$?

**Solution.** At $(0.5, 0.5)$: $s = 1$, $h_1 = 1$, $h_2 = 0$, output 1: yes. At $(0.25, 0.25)$: $s = 0.5$, $h_1 = 0.5$, $h_2 = 0$, output $0.5$, which does not exceed $\frac12$: no (it is exactly on the boundary). At $(2, 2)$: $s = 4$, $h_1 = 4$, $h_2 = 3$, output $4 - 6 = -2$: no. Beyond $s = 2$ the output keeps falling, because the third neuron of the tent was left out.

**Problem 3.** Find a ReLU network equal to the broken line through $(0, 2), (2, 0), (3, 0), (5, 4)$ on $[0, 5]$, and check it at $x = 5$.

**Solution.** The slopes are $-1$, $0$ and $2$. The output bias is $g(0) = 2$. The slope changes are $-1$ at $x = 0$, $+1$ at $x = 2$ and $+2$ at $x = 3$. So $g(x) = 2 - \operatorname{ReLU}(x) + \operatorname{ReLU}(x - 2) + 2\operatorname{ReLU}(x - 3)$. Check: $g(5) = 2 - 5 + 3 + 4 = 4$. Also $g(2) = 2 - 2 = 0$ and $g(3) = 2 - 3 + 1 = 0$.

**Problem 4.** Show that (a) $x = \operatorname{ReLU}(x) - \operatorname{ReLU}(-x)$, (b) $|x| = \operatorname{ReLU}(x) + \operatorname{ReLU}(-x)$, and (c) $\max(a, b) = a + \operatorname{ReLU}(b - a)$, for all real numbers. What does (a) say about what a ReLU layer can pass along?

**Solution.** If $x \ge 0$ then $\operatorname{ReLU}(x) = x$ and $\operatorname{ReLU}(-x) = 0$; if $x < 0$ then $\operatorname{ReLU}(x) = 0$ and $\operatorname{ReLU}(-x) = -x$. (a) The difference is $x - 0 = x$ in the first case and $0 - (-x) = x$ in the second. (b) The sum is $x$ in the first case and $-x$ in the second, which is $|x|$ in both. (c) If $b \ge a$ then $a + (b - a) = b = \max(a, b)$; if $b < a$ then $a + 0 = a = \max(a, b)$. Part (a) says that two ReLU neurons can carry a number through a layer unchanged, so a layer loses no information unless its weights are chosen to discard it.

**Problem 5.** A one-hidden-layer network with $N$ ReLU neurons and one input is used on the whole real line. (a) Explain why its graph has at most $N$ kinks. (b) What does the graph look like far to the left and far to the right? (c) Deduce that no such network equals $\sin x$ on the whole line, and say why this does not contradict the universal approximation theorem.

**Solution.** (a) Each neuron $c_k\operatorname{ReLU}(w_kx + b_k)$ is linear on each side of its kink at $x = -b_k/w_k$ (and is constant if $w_k = 0$). A sum of such functions is linear on any interval containing no kink, so its slope can change only at the at most $N$ kinks. (b) To the left of the leftmost kink and to the right of the rightmost one, the network is a single linear function: a straight ray on each side. (c) $\sin x$ oscillates forever, and a straight ray does not: a ray is either constant or unbounded, while $\sin x$ is bounded and not constant on any ray. So the two functions differ somewhere, for any $N$. The theorem concerns approximation on a closed *bounded* set $K$, with $N$ allowed to depend on $K$ and on the accuracy. It makes no claim about the whole line.

**Problem 6.** (A different solution to XOR.) Let $h_1 = \operatorname{ReLU}(x_1 - x_2)$, $h_2 = \operatorname{ReLU}(x_2 - x_1)$ and $\text{output} = h_1 + h_2$. (a) Show that this network also computes XOR on the four points. (b) Describe its "yes" region for the threshold $\frac12$. (c) The two networks agree on all four training points. Do they agree at $(0.5, 0.5)$? What does that say about what the data determine?

**Solution.** (a) By part (b) of problem 4, $h_1 + h_2 = |x_1 - x_2|$. At $(0, 0)$ and $(1, 1)$ this is 0; at $(1, 0)$ and $(0, 1)$ it is 1. (b) The output exceeds $\frac12$ when $|x_1 - x_2| > \frac12$: the two regions on either side of the band around the diagonal $x_1 = x_2$, that is, $x_2 < x_1 - \frac12$ or $x_2 > x_1 + \frac12$. (c) At $(0.5, 0.5)$ this network outputs $0$ (no), while the lesson's network outputs $1$ (yes). Both fit the four data points perfectly and they disagree in between. The data fix the function only at the data; what a network does elsewhere depends on which of the many fitting networks training happens to find. This is the question of generalization, which the universal approximation theorem does not address and [the lesson on overfitting](@machine-learning/overfitting) takes up.

**Problem 7.** (Kinks and creases.) (a) Using the kink-counting argument of the lesson, show that the tent $T$ cannot be written with fewer than three ReLU neurons, even if an output bias is allowed. (b) In the XOR network both hidden neurons use the same weights $(1, 1)$, so their creases are parallel. Give the equations of the two creases and say which of the four XOR points lie on a crease.

**Solution.** (a) $T$ has slope $0$ for $x < 0$, $1$ on $(0, 1)$, $-1$ on $(1, 2)$ and $0$ for $x > 2$, so its slope changes at three places: $0$, $1$ and $2$. A network $c_0 + \sum c_k\operatorname{ReLU}(w_kx + b_k)$ can change slope only at the kinks of its neurons, and each neuron has at most one kink. The bias $c_0$ shifts the graph up or down and creates no kink. So at least three neurons are needed. (b) The crease of $h_1$ is where its score is zero: $x_1 + x_2 = 0$, which passes through $(0, 0)$. The crease of $h_2$ is $x_1 + x_2 = 1$, which passes through $(1, 0)$ and $(0, 1)$. The point $(1, 1)$ lies beyond both creases, where both neurons are on.

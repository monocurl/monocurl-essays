# Binomial distribution: Pascal's triangle and a Galton board

> Balls bouncing through rows of pegs pile up in the middle. Counting their paths gives Pascal's triangle and the binomial formula, with its mean and variance.

Series: Probability (https://www.monocurl.com/monocurl-essays/probability/)
Canonical: https://www.monocurl.com/monocurl-essays/probability/binomial-distribution/
Keywords: binomial distribution, binomial coefficient, Pascal's triangle, Galton board, n choose k, variance of a binomial, mean of a binomial, Bernoulli trials

[Figure 1, animation: A simulation of 256 balls dropped one after another through eight rows of pegs. At every peg a ball bounces left or right with equal chance. The balls collect in nine bins, and the count in each bin is shown at the end.]

Drop a ball into the top of the board above. At each peg it bounces left or right with equal chance, eight times, and lands in one of nine bins. No peg prefers a direction and no route down the board is more likely than any other. Yet the balls do not spread evenly: the middle bin collects dozens of them, and the two outer bins are lucky to get one.

The device is called a Galton board, after Francis Galton, who built one in the 1870s. The puzzle it poses is where the preference for the middle comes from when every single bounce is perfectly even. The resolution is a matter of counting, and the counting leads to one of the most used formulas in probability.

## Every path is equally likely, but the bins are not

Start with a board small enough to list everything. With two rows of pegs a ball bounces twice, and its route is one of LL, LR, RL, RR, where L and R record a bounce to the left or right. Each bounce is a fair coin flip that does not depend on the one before, so the four routes are equally likely, with probability $\frac12 \cdot \frac12 = \frac14$ each.

Where the ball lands depends only on how many of its bounces went right. Zero rights puts it in the left bin, two rights in the right bin, and one right in the middle bin whichever order the bounces came in. So the three bins receive 1, 2 and 1 of the four routes, and their probabilities are $\frac14$, $\frac24$, $\frac14$. The middle bin is favored because two different routes end there.

**Pause and try.** A board has three rows of pegs, so a ball bounces three times and there are four bins. List all the routes, and find the probability of each bin.

**Answer.** There are $2^3 = 8$ routes: LLL; LLR, LRL, RLL; LRR, RLR, RRL; RRR, grouped here by the number of rights. The bins receive 1, 3, 3, 1 routes, so their probabilities are $\frac18, \frac38, \frac38, \frac18$.

This is the whole explanation, and it scales. With $n$ rows there are $2^n$ equally likely routes, each with probability $(\frac12)^n$, and by the counting rule for equally likely outcomes from [the lesson on sample spaces](@probability/sample-spaces),

$$
P(\text{bin } k) = \frac{\text{number of routes with exactly } k \text{ rights}}{2^n}.
$$

The eight-row board has $2^8 = 256$ routes, which is too many to list comfortably. We need a way to count routes without writing them out.

## Counting routes peg by peg

Instead of following whole routes, ask a local question at each peg: in how many ways can a ball get here?

[Figure 2, steps: Counting the routes to each peg of a four-row board. A ball can only arrive at a peg from one of the two pegs above it, so each count is the sum of the two counts above. The bottom row gives the number of routes into each of the five bins.]

  - step: A ball starts at the top peg. One route leads to each peg of the next row: a bounce left, or a bounce right.
  - step: Two routes reach the middle peg of the row below: left then right, or right then left. One route reaches each end.
  - step: A ball arrives at a peg from the peg above-left or the peg above-right, so its count is the sum of those two: 3 = 1 + 2.
  - step: The same rule fills the last row. The five bins receive 1, 4, 6, 4 and 1 of the 16 routes.
The rule in the third step is the engine. A ball reaches a given peg either from the peg above and to its left or from the peg above and to its right, and never from both, so the routes to it are the routes to the first plus the routes to the second. Each number in the triangle is the sum of the two above it, with 1s down the edges, where only one parent exists. This array is known as **[Pascal's triangle](@discrete-math/pascals-triangle)**, after Blaise Pascal, who wrote a treatise on it in the 1650s, although it appears centuries earlier in Persian, Indian and Chinese texts.

Continuing the rule for four more rows gives

$$
1 \quad 8 \quad 28 \quad 56 \quad 70 \quad 56 \quad 28 \quad 8 \quad 1,
$$

which sums to 256 as it should. So on the eight-row board the middle bin has probability $\frac{70}{256} \approx 0.273$ and each end bin $\frac{1}{256} \approx 0.004$. A ball is 70 times as likely to finish in the middle as at a given end. Out of 256 balls we expect about 1, 8, 28, 56, 70, 56, 28, 8, 1. The simulation at the top produced 1, 8, 22, 55, 75, 51, 29, 13, 2, which has the same shape and the amount of scatter that 256 random balls should show.

## A formula for the entries

The triangle has a drawback: to get one entry of row 8 we computed all of rows 1 to 7. There is a direct formula, and it comes from describing a route differently. A route with $k$ rights among $n$ bounces is determined by saying which $k$ of the $n$ bounces are the rights. So the entry we want is the number of ways to choose $k$ positions out of $n$.

[Figure 3, image: The six routes through a four-row board that have exactly two bounces to the right. Each is a choice of which two of the four bounces are the rights, so their number is the number of ways to choose 2 things from 4.]

To count such choices, pick the positions one at a time. For two rights among four bounces there are 4 options for the first pick and 3 for the second, which is $4 \cdot 3 = 12$ ordered picks. But picking bounce 1 and then bounce 3 gives the same route as picking 3 and then 1, so every route has been counted $2 \cdot 1 = 2$ times, and the number of routes is $12 / 2 = 6$. The same argument works in general. There are $n(n-1)\cdots(n-k+1)$ ordered ways to pick $k$ different positions, and each set of $k$ positions arises from $k!$ of them, one for each order in which it could have been picked. Here $k! = k(k-1)\cdots 2 \cdot 1$ is read "$k$ factorial", and $0!$ is defined to be 1.

**Definition.** For integers $0 \le k \le n$, the **binomial coefficient** $\binom{n}{k}$, read "$n$ choose $k$", is the number of ways to choose $k$ objects from $n$ distinct objects when the order of choosing does not matter. It is given by

$$
\binom{n}{k} = \frac{n(n-1)\cdots(n-k+1)}{k!} = \frac{n!}{k!\,(n-k)!}.
$$

The second form comes from multiplying the top and bottom of the first by $(n-k)!$. With $k = 0$ the formula gives 1: there is one way to choose nothing.

We now have two descriptions of the same numbers, the triangle built by adding and the formula built by choosing, and we should check that they agree.

**Theorem.** (Pascal's rule.) For integers $1 \le k \le n - 1$,

$$
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}.
$$

**Proof.** Count the routes of $n$ bounces with exactly $k$ rights by looking at the last bounce. If the last bounce is a right, the first $n - 1$ bounces contain exactly $k - 1$ rights, and there are $\binom{n-1}{k-1}$ ways for that to happen. If the last bounce is a left, the first $n - 1$ bounces contain all $k$ rights, which can happen in $\binom{n-1}{k}$ ways. Every route falls in exactly one of the two cases, so the total $\binom{n}{k}$ is the sum.

So the numbers $\binom{n}{k}$ obey the same addition rule as the triangle and have the same 1s on the edges, since $\binom{n}{0} = \binom{n}{n} = 1$. Row by row, they must be the same numbers.

**Pause and try.** Use the formula to compute $\binom{8}{3}$ and $\binom{8}{4}$, and check them against row 8 of the triangle.

**Answer.** $\binom{8}{3} = \frac{8 \cdot 7 \cdot 6}{3 \cdot 2 \cdot 1} = \frac{336}{6} = 56$ and $\binom{8}{4} = \frac{8 \cdot 7 \cdot 6 \cdot 5}{4 \cdot 3 \cdot 2 \cdot 1} = \frac{1680}{24} = 70$. Both match.

## A tilted board

So far left and right were equally likely, which made all routes equally likely and reduced everything to counting. Most real questions of this type are lopsided: a basketball player makes 70% of her free throws, a factory's parts are defective 5% of the time. Tilt the board so that each bounce goes right with probability 0.7 and left with probability 0.3, still independently of the other bounces. Counting routes is no longer enough, because the route RRR is now far more likely than LLL.

**Pause and try.** On the tilted board with three rows, what is the probability that exactly two of the three bounces go right? Find the probability of one such route first.

**Answer.** The route RRL has probability $0.7 \times 0.7 \times 0.3 = 0.147$. The routes RLR and LRR multiply the same three numbers in a different order, so each is also $0.147$. The three routes are different outcomes, so their probabilities add: $3 \times 0.147 = 0.441$.

[Figure 4, steps: Three bounces on a board tilted so that each bounce goes right with probability 0.7. The eight routes are grouped by their number of rights. Routes in the same group have the same probability, so each group's probability is the number of routes in it times the probability of one of them.]

  - step: The eight routes of three bounces, grouped by how many bounces go right: none, one, two or three.
  - step: The bounces are independent, so a route's probability is the product of its three steps: 0.7 for each right, 0.3 for each left.
  - step: Add within each group. The four totals are the chances of 0, 1, 2 and 3 rights, and they sum to 1.
The figure shows the two ingredients separately. The probability of one route depends only on how many rights and lefts it contains: with $k$ rights and $3 - k$ lefts it is $0.7^k \times 0.3^{3-k}$. The number of routes with $k$ rights is $\binom{3}{k}$, the same count as on the fair board, because tilting changes the odds and leaves the list of routes alone. Multiplying the two gives the chance of $k$ rights.

To state the general result we need to say exactly what experiment it describes. Call one bounce a *trial*, and call a right a *success* and a left a *failure*; the names are conventional and carry no judgment.

**Definition.** A sequence of **$n$ independent trials with success probability $p$**, where $0 \le p \le 1$, is the experiment whose outcomes are the $2^n$ sequences of length $n$ made of the letters S (success) and F (failure), in which a sequence containing $k$ S's and $n - k$ F's has probability $p^k (1-p)^{n-k}$.

This is the multiplication rule for independent events built into a definition: the chance of a particular run of results is the product of the chances of each result.

**Theorem.** (Binomial distribution.) Let $X$ be the number of successes in $n$ independent trials with success probability $p$. Then for each integer $k$ with $0 \le k \le n$,

$$
P(X = k) = \binom{n}{k}\, p^k\, (1-p)^{n-k}.
$$

**Proof.** The event $\{X = k\}$ consists of the sequences with exactly $k$ S's. Such a sequence is determined by which $k$ of the $n$ positions hold the S's, so there are $\binom{n}{k}$ of them. By the definition of the experiment each has probability $p^k(1-p)^{n-k}$. The probability of an event is the sum of the probabilities of its outcomes, which here is $\binom{n}{k}$ equal terms.

A random variable with these probabilities is said to have the **binomial distribution** with parameters $n$ and $p$. With $p = \frac12$ the formula reduces to $\binom{n}{k}/2^n$, the fair board.

One loose end: the probabilities in the definition should add to 1 over all $2^n$ sequences. Grouping the sequences by their number of S's, the total is $\sum_{k=0}^{n} \binom{n}{k} p^k (1-p)^{n-k}$. This equals $(p + (1-p))^n = 1$ by the **binomial theorem**, which says $(x + y)^n = \sum_k \binom{n}{k} x^k y^{n-k}$. That theorem is the same count again. Multiplying out $n$ copies of $(x + y)$ means choosing $x$ or $y$ from each factor, and the term $x^k y^{n-k}$ arises once for every choice of which $k$ factors supply the $x$. It is also where the word "binomial" comes from.

**Key idea.** In $n$ independent trials, each succeeding with probability $p$, the chance of exactly $k$ successes is (the number of orders in which $k$ successes can occur) times (the probability of any one such order): $\binom{n}{k} \cdot p^k(1-p)^{n-k}$.

[Figure 5, image: The binomial distribution for eight trials, with success probability 0.5 (blue) and 0.7 (orange). The fair case is symmetric about 4. Raising the success probability to 0.7 shifts the bars to the right and makes them lopsided. The arrows mark the means, 4 and 5.6.]

## The mean

On the fair eight-row board the bins are symmetric about bin 4, so the average number of rights is 4. On the tilted board the figure marks the mean at 5.6, which is $8 \times 0.7$. That pattern holds in general and takes one line to prove, using the main result of [the lesson on expected value](@probability/expected-value). To restate what we need: the **expected value** $E[X]$ of a random variable $X$ on a finite sample space is the sum of its values weighted by their probabilities; expected values add, $E[X + Y] = E[X] + E[Y]$, whether or not $X$ and $Y$ are independent; and the **indicator** of an event, which is 1 when the event occurs and 0 otherwise, has expected value equal to the event's probability.

For $i = 1, \dots, n$ let $X_i$ be the indicator that trial $i$ is a success. Then $X = X_1 + \dots + X_n$, because the sum adds 1 for each success. Each $X_i$ has expected value $p$, the probability that trial $i$ succeeds. (In the definition, the sequences with an S in position $i$ have total probability $p$ times the total over everything that can happen in the other $n - 1$ positions, and that total is 1.) So

$$
E[X] = E[X_1] + \dots + E[X_n] = np.
$$

A player who makes 70% of her free throws makes 7 of 10 on average, which nobody doubted. The indicators earn their keep in the next computation.

## Variance: how far from the mean

The mean says where the distribution is centered. It does not say how tightly. A fair board with 8 rows has mean 4, and one with 64 rows has mean 32, but how far from 32 should we expect a ball to land: within 2 bins, or 10, or 30? We need a number that measures spread.

The natural candidate is the average distance from the mean. Write $\mu = E[X]$. The average of the signed deviation $X - \mu$ is useless, since $E[X - \mu] = E[X] - \mu = 0$: deviations to the left and right cancel. To stop the cancellation we square the deviation before averaging.

**Definition.** Let $X$ be a random variable on a finite sample space, with mean $\mu = E[X]$. The **variance** of $X$ is

$$
\operatorname{Var}(X) = E\bigl[(X - \mu)^2\bigr],
$$

and the **standard deviation** of $X$ is $\sigma = \sqrt{\operatorname{Var}(X)}$.

The square root is there to repair the units: if $X$ counts balls, the variance is in "balls squared" and the standard deviation is in balls again, so it can be compared with $X$ directly. (Averaging $|X - \mu|$ would also prevent cancellation. The square is preferred because it leads to simple algebra, as we are about to see.)

[Figure 6, image: Variance on the fair eight-row board. Above each bin is its number of routes out of 256, and below it the squared distance of that bin from the mean, 4. Averaging the squared distances with the route counts as weights gives the variance, 2. The green bar reaches one standard deviation, about 1.41, on each side of the mean.]

For the fair eight-row board the definition gives variance 2 and standard deviation $\sqrt2 \approx 1.41$. Bins 3, 4 and 5, the ones within about one standard deviation of the mean, hold $\frac{56 + 70 + 56}{256} \approx 71\%$ of the balls.

Computing a variance bin by bin is laborious. For the binomial distribution there is a closed form, and the proof reuses the indicators.

**Theorem.** Let $X$ be the number of successes in $n$ independent trials with success probability $p$. Then

$$
E[X] = np \qquad \text{and} \qquad \operatorname{Var}(X) = np(1-p).
$$

**Proof.** The mean was computed above. For the variance, first note a general identity. Expanding the square and using linearity, with $\mu$ a constant,

$$
E[(X - \mu)^2] = E[X^2] - 2\mu\,E[X] + \mu^2 = E[X^2] - \mu^2.
$$

So it is enough to find $E[X^2]$. Write $X = X_1 + \dots + X_n$ with $X_i$ the indicator that trial $i$ succeeds, and expand:

$$
X^2 = \sum_{i} X_i^2 + \sum_{i \ne j} X_i X_j,
$$

where the second sum runs over the $n(n-1)$ ordered pairs of different trials.

Since $X_i$ is 0 or 1, $X_i^2 = X_i$, and $E[X_i] = p$. For $i \ne j$ the product $X_i X_j$ is the indicator that trials $i$ and $j$ both succeed. The sequences in which they do have probability $p \cdot p$ times the probability of whatever happens in the other $n - 2$ positions, and summing over everything that can happen there gives a factor of 1. So $E[X_i X_j] = p^2$. This is the step that uses independence.

By linearity, $E[X^2] = np + n(n-1)p^2$. Therefore

$$
\operatorname{Var}(X) = np + n(n-1)p^2 - (np)^2 = np - np^2 = np(1-p).
$$

Check it against the figure: $n = 8$ and $p = \frac12$ give $8 \cdot \frac12 \cdot \frac12 = 2$. For one trial the variance is $p(1-p)$, which is largest at $p = \frac12$ and zero at $p = 0$ or $1$, where the result is certain and there is no spread at all. The theorem says that $n$ independent trials have $n$ times the variance of one.

## The bell shape

The standard deviation $\sqrt{np(1-p)}$ grows like $\sqrt{n}$, and this has a visible consequence. A fair board with 4, 16 or 64 rows has standard deviation 1, 2 or 4 bins. Each time the board gets four times as deep, the pile gets only twice as wide. Measured against the full width of the board, which is $n$ bins, the pile is getting narrower.

[Figure 7, animation: The fair binomial distribution for 4, 8, 16, 32 and 64 trials, drawn against the share of trials that succeed, so that every board has the same width. Bar heights are scaled so the tallest bar is the same each time. The pile narrows toward one half and takes on a bell shape. The green bar is one standard deviation each side of the mean.]

The smooth bell that the bars approach is the [normal curve](@statistics/normal-distribution), and the precise statement is the de Moivre–Laplace theorem: for large $n$, the binomial probabilities are closely approximated by a normal curve with the same mean $np$ and standard deviation $\sqrt{np(1-p)}$. We have not proved that here; it needs calculus. What we have proved is the part about the width, and [the next lesson](@probability/law-of-large-numbers) turns it into a theorem about averages.

## Worked examples

**Worked example.** **Three heads in five flips.** A fair coin is flipped five times. What is the probability of exactly three heads?

The flips are $n = 5$ independent trials with $p = \frac12$, and we want $k = 3$. There are $\binom{5}{3} = \frac{5 \cdot 4 \cdot 3}{3 \cdot 2 \cdot 1} = 10$ orders in which three heads can occur, and each sequence of five flips has probability $\frac{1}{32}$, so the answer is $\frac{10}{32} = 0.3125$. *Check:* row 5 of the triangle is $1, 5, 10, 10, 5, 1$, which sums to 32.

**Worked example.** **Free throws.** A player makes each free throw with probability 0.7, independently. She takes 10. Find the probability that she makes exactly 7, and the mean and standard deviation of the number she makes.

Here $n = 10$, $p = 0.7$, $k = 7$. The coefficient is $\binom{10}{7} = \binom{10}{3} = \frac{10 \cdot 9 \cdot 8}{6} = 120$, where I used the fact that choosing the 7 makes is the same as choosing the 3 misses. Then

$$
P(X = 7) = 120 \times 0.7^7 \times 0.3^3 = 120 \times 0.0823543 \times 0.027 \approx 0.267.
$$

The mean is $np = 7$ and the standard deviation is $\sqrt{10 \times 0.7 \times 0.3} = \sqrt{2.1} \approx 1.45$. Notice that the single most likely result, the one equal to the mean, happens only about 27% of the time.

**Worked example.** **At least two defective.** A machine produces parts that are defective with probability 0.05, independently. In a batch of 20, what is the probability that at least two are defective?

"At least two" covers the 19 values $k = 2, \dots, 20$, so it is easier to compute the complement, "none or one", and subtract from 1.

$$
P(X = 0) = 0.95^{20} \approx 0.3585, \qquad P(X = 1) = 20 \times 0.05 \times 0.95^{19} \approx 0.3774.
$$

So $P(X \ge 2) \approx 1 - 0.3585 - 0.3774 = 0.2642$. About a quarter of the batches contain two or more defective parts, even though the expected number per batch is only $np = 1$.

## When the formula does not apply

The theorem has two hypotheses hidden in the phrase "independent trials with success probability $p$": the trials do not influence each other, and every trial has the same chance of success. Drawing cards without replacement keeps the second and breaks the first. Deal 5 cards from a 52-card deck and count the aces. Each card dealt is an ace with probability $\frac{4}{52} = \frac{1}{13}$, but the draws are dependent, since an ace on the first card leaves fewer aces for the second. The exact chance of no aces is

$$
\frac{48}{52} \cdot \frac{47}{51} \cdot \frac{46}{50} \cdot \frac{45}{49} \cdot \frac{44}{48} \approx 0.6588,
$$

while the binomial formula with $n = 5$, $p = \frac{1}{13}$ would give $\left(\frac{12}{13}\right)^5 \approx 0.6702$. The mean, on the other hand, is still $np = \frac{5}{13}$, because linearity of expectation does not need independence. The variance formula does need it, and fails here.

**Common mistake.** **Leaving out the coefficient.** "The probability of exactly 2 heads in 4 flips is $\left(\frac12\right)^2\left(\frac12\right)^2 = \frac{1}{16}$." That is the probability of one particular sequence, such as HHTT. There are $\binom{4}{2} = 6$ sequences with two heads, so the answer is $\frac{6}{16}$. The factor $p^k(1-p)^{n-k}$ is the chance of one order; the coefficient counts the orders.

**Common mistake.** **Expecting the expected value.** "In 100 flips of a fair coin I should get 50 heads." Fifty is the mean and the most likely single count, and it is still unlikely: $P(X = 50) = \binom{100}{50}/2^{100} \approx 0.080$. As $n$ grows, the pile spreads over more bins and every individual bin, including the middle one, gets a smaller share.

[Figure 8, image: The probability of getting exactly half heads in n flips of a fair coin, for even n up to 100. It is 0.5 for two flips, about 0.25 for ten, and about 0.08 for one hundred. The most likely count becomes steadily less likely.]

## Stepping back

The Galton board's preference for the middle is a fact about counting. Each route is as likely as any other, and the middle bins are where most routes end. Making that precise took two separate ideas, which the formula keeps visibly apart: the binomial coefficient counts the orders in which $k$ successes can occur, and the powers of $p$ and $1 - p$ give the probability of any one order.

The mean $np$ and the variance $np(1-p)$ both came from writing the count as a sum of indicators, and neither required the formula for $P(X = k)$ at all. The variance carries the more useful message. Spread grows like $\sqrt n$ while the range of possible counts grows like $n$, so the fraction of successes in a long run of trials is squeezed toward $p$. The next lesson makes that statement exact: it is [the law of large numbers](@probability/law-of-large-numbers).

**Check yourself.** A fair coin is flipped 4 times. What is the probability of exactly 2 heads?
Answer: $\frac{6}{16}$ There are $\binom{4}{2} = 6$ sequences with two heads, each with probability $\frac{1}{16}$.

**Recap.** - $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ counts the ways to choose $k$ of $n$ objects, and equally the sequences of $n$ trials with exactly $k$ successes.
- Pascal's rule $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ builds the triangle row by row.
- In $n$ independent trials with success probability $p$, the number of successes $X$ has $P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$.
- $E[X] = np$, by linearity applied to indicators.
- $\operatorname{Var}(X) = E[(X - \mu)^2] = np(1-p)$, and the standard deviation is $\sqrt{np(1-p)}$. The variance formula needs independence.
- The spread grows like $\sqrt{n}$, so as a share of $n$ it shrinks.

## Problems

The first three are direct uses of the formula. The next three ask for an explanation or a short derivation. The last two extend the lesson.

**Problem 1.** Write out row 6 of Pascal's triangle. Use it to find the probability of exactly 3 heads in 6 flips of a fair coin.

**Solution.** Row 5 is $1, 5, 10, 10, 5, 1$. Adding neighbors gives row 6: $1, 6, 15, 20, 15, 6, 1$, which sums to $64 = 2^6$. So $P(\text{3 heads}) = \frac{20}{64} = 0.3125$. By the formula, $\binom{6}{3} = \frac{6 \cdot 5 \cdot 4}{6} = 20$.

**Problem 2.** A fair die is rolled 5 times. Find the probability of exactly two sixes, and the mean and variance of the number of sixes.

**Solution.** The rolls are $n = 5$ independent trials with success ("a six") probability $p = \frac16$. Then

$$
P(X = 2) = \binom{5}{2}\left(\frac16\right)^2\left(\frac56\right)^3 = 10 \cdot \frac{125}{7776} = \frac{1250}{7776} \approx 0.161.
$$

The mean is $np = \frac56$ and the variance is $np(1-p) = 5 \cdot \frac16 \cdot \frac56 = \frac{25}{36}$.

**Problem 3.** A multiple-choice test has 10 questions with 4 choices each. A student guesses every answer at random. What is the probability of at least 3 correct answers?

**Solution.** Each guess is right with probability $p = 0.25$, independently, so the number correct is binomial with $n = 10$. Use the complement:

$$
P(X = 0) = 0.75^{10} \approx 0.0563, \quad P(X = 1) = 10(0.25)(0.75)^9 \approx 0.1877, \quad P(X = 2) = 45(0.25)^2(0.75)^8 \approx 0.2816.
$$

So $P(X \ge 3) \approx 1 - 0.0563 - 0.1877 - 0.2816 = 0.4744$. The expected score is $np = 2.5$, so three or more correct is close to an even bet.

**Problem 4.** Explain in two ways why $\binom{n}{k} = \binom{n}{n-k}$: once using the Galton board, and once using the formula.

**Solution.** *Board.* Reflect the board left to right. Every route with $k$ rights becomes a route with $k$ lefts, that is, with $n - k$ rights, and different routes have different reflections. So the routes into bin $k$ are matched one to one with the routes into bin $n - k$. Equivalently, choosing which $k$ bounces go right is the same as choosing which $n - k$ go left. *Formula.* $\binom{n}{n-k} = \frac{n!}{(n-k)!\,(n-(n-k))!} = \frac{n!}{(n-k)!\,k!} = \binom{n}{k}$.

**Problem 5.** For the binomial distribution with parameters $n$ and $p$, where $0 < p < 1$, show that

$$
\frac{P(X = k+1)}{P(X = k)} = \frac{n - k}{k + 1} \cdot \frac{p}{1-p}.
$$

Use this to find the most likely number of made free throws for the player in the lesson ($n = 10$, $p = 0.7$).

**Solution.** From the formula, $\frac{\binom{n}{k+1}}{\binom{n}{k}} = \frac{k!\,(n-k)!}{(k+1)!\,(n-k-1)!} = \frac{n-k}{k+1}$, and the powers contribute one extra $p$ and one fewer $(1-p)$, a factor of $\frac{p}{1-p}$. The probabilities increase from $k$ to $k+1$ exactly when this ratio exceeds 1, that is, when $(n-k)p > (k+1)(1-p)$, which simplifies to $k + 1 < (n+1)p$. For $n = 10$, $p = 0.7$ this reads $k + 1 < 7.7$, so the probabilities rise for $k = 0, \dots, 6$ (up to $P(X = 7)$) and fall afterwards. The most likely value is 7, with probability about 0.267.

**Problem 6.** Prove that the entries of row $n$ of Pascal's triangle add up to $2^n$, and that for $n \ge 1$ the entries with alternating signs add up to 0: $\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \dots = 0$.

**Solution.** *Sum.* $\binom{n}{k}$ counts the sequences of $n$ bounces with exactly $k$ rights. Every one of the $2^n$ sequences has some number of rights between 0 and $n$, so adding over $k$ counts each sequence once: $\sum_k \binom{n}{k} = 2^n$. (Or put $x = y = 1$ in the binomial theorem.) *Alternating sum.* Put $x = -1$ and $y = 1$ in the binomial theorem: $\sum_k \binom{n}{k}(-1)^k = (-1 + 1)^n = 0$ for $n \ge 1$. In words, exactly half of the sequences have an even number of rights. This can also be seen directly: flipping the last bounce pairs each sequence with an even number of rights to one with an odd number.

**Problem 7.** A student argues: "The chance of a six on one roll is $\frac16$, so the chance of at least one six in four rolls is $4 \times \frac16 = \frac23$." Find the correct probability, and explain what the number $\frac23$ actually is.

**Solution.** The complement of "at least one six" is "no six in four rolls", with probability $\left(\frac56\right)^4 = \frac{625}{1296}$. So the correct answer is $1 - \frac{625}{1296} = \frac{671}{1296} \approx 0.518$. The student's $\frac23$ is $np$, the expected number of sixes in four rolls. It exceeds the probability of at least one six because the expected value counts a roll with two sixes twice and one with three sixes three times. Adding the four probabilities of $\frac16$ would give the probability of at least one six only if the four events were disjoint, and they are not, since several rolls can show a six together. (The argument cannot be right in general: with seven rolls it would give a probability of $\frac76$.)

**Problem 8.** Two cards are dealt from a well-shuffled 52-card deck, without replacement, and $X$ is the number of aces among them. Using indicators $X_1$ and $X_2$ for "the first card is an ace" and "the second card is an ace", find $E[X]$ and $\operatorname{Var}(X)$. Compare the variance with that of a binomial distribution with $n = 2$ and $p = \frac{1}{13}$, and explain the direction of the difference.

**Solution.** Each card is equally likely to be any of the 52, so $E[X_1] = E[X_2] = \frac{4}{52} = \frac{1}{13}$ and $E[X] = \frac{2}{13}$. For the variance, $X^2 = X_1^2 + X_2^2 + 2X_1X_2 = X_1 + X_2 + 2X_1X_2$. The product $X_1X_2$ is the indicator that both cards are aces, with probability $\frac{4}{52} \cdot \frac{3}{51} = \frac{1}{221}$. So

$$
E[X^2] = \frac{2}{13} + \frac{2}{221} = \frac{34 + 2}{221} = \frac{36}{221}, \qquad \operatorname{Var}(X) = \frac{36}{221} - \left(\frac{2}{13}\right)^2 = \frac{400}{2873} \approx 0.1392.
$$

The binomial variance would be $2 \cdot \frac{1}{13} \cdot \frac{12}{13} = \frac{24}{169} \approx 0.1420$. Dealing without replacement gives a slightly smaller variance. The reason is in the cross term: once one ace is gone, a second is less likely ($\frac{3}{51} < \frac{4}{52}$), so $E[X_1X_2]$ is below $p^2$. The deck pushes the count back toward its mean, which reduces the spread.

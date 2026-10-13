# The prisoner's dilemma and Nash equilibrium

> How to read a payoff table, find best responses and Nash equilibria, mix strategies when no cell is stable, and see why repeated play can sustain cooperation.

Series: Economics (https://www.monocurl.com/monocurl-essays/economics/)
Canonical: https://www.monocurl.com/monocurl-essays/economics/game-theory/
Keywords: prisoner's dilemma, Nash equilibrium, game theory, dominant strategy, best response, mixed strategy, matching pennies, repeated game grim trigger

[Figure 1, animation: Two gas stations, Ava's and Raj's, each choose a High or a Low price. In each cell the blue number is Ava's daily profit and the orange number is Raj's, in hundreds of dollars. Each arrow is a switch that pays the player making it, and every arrow leads to the cell where both price Low.]

Ava and Raj own the only two gas stations in a small town. Each morning, before seeing the other's sign, each posts a High price or a Low price. If both post High, each makes \$300 that day. If both post Low, each makes \$100. If one posts Low while the other posts High, the cheap station takes nearly all the customers and makes \$500, and the other makes nothing.

This is not the market of [supply and demand](@economics/supply-and-demand), where each seller is too small to move the price. Here each owner's profit depends on what the one rival does. Both owners can see that \$300 each is better than \$100 each, and both want only to make money. Yet I claim that each of them, reasoning correctly, will post Low, and both will end with a third of what was available. We will see exactly why, and then what can get the two owners out of it.

## A game is a table

Start by writing the situation down completely. There are two decision makers. Each has a list of options. For every combination of options, each ends up with some result that they care about, which we record as a number.

**Definition.** A **game in normal form** (for two players) consists of: two **players**; for each player a set of **strategies**; and for each pair of strategies, one chosen by each player, a **payoff** to each player, a number of which that player wants as much as possible. The players choose at the same time, each without knowing the other's choice, and both know the whole table.

For the stations, the strategies are High and Low, and the payoffs are profits in hundreds of dollars. The table at the top of the page lists them: rows are Ava's choice, columns are Raj's, and each cell holds Ava's payoff (blue) and Raj's (orange).

The definition hides two assumptions. A payoff is supposed to measure everything the player cares about. If Ava would feel guilty undercutting Raj, the number 5 overstates what Low is worth to her, and we are analyzing the wrong table. And the game is played once. We will lift that second assumption later, and it will matter a great deal.

## Best responses

Ava does not know what Raj will post. So she can ask a conditional question: *if* Raj posts High, what is best for me? And if he posts Low?

[Figure 2, steps: Finding best responses in the gas station game. For each choice by the other player, circle the payoff of the best reply. Ava's circles are both in the Low row and Raj's are both in the Low column, so the only cell with two circles is Low, Low.]

  - step: Suppose Raj posts High: the left column. Ava compares her two payoffs there, 3 from High and 5 from Low. Low is better, so circle the 5.
  - step: Suppose Raj posts Low: the right column. Ava compares 0 with 1. Low is better again.
  - step: Now Raj, row by row. If Ava posts High he compares 3 with 5. If she posts Low he compares 0 with 1. He circles Low both times.
  - step: One cell has both payoffs circled: Low, Low. There each is doing as well as possible given what the other is doing.
**Definition.** Write $u_1(s_1, s_2)$ and $u_2(s_1, s_2)$ for the payoffs to players 1 and 2 when they choose strategies $s_1$ and $s_2$. A strategy $s_1$ is a **best response** to $s_2$ if $u_1(s_1, s_2) \ge u_1(s_1', s_2)$ for every strategy $s_1'$ of player 1. A strategy is **strictly dominant** if it gives a strictly higher payoff than each of the player's other strategies against *every* strategy of the opponent. (Best responses and dominance for player 2 are defined the same way.)

For Ava, Low is the best response to High (5 beats 3) and to Low (1 beats 0), so Low is strictly dominant. She does not need to guess what Raj will do, because Low is better either way. The table is symmetric, so the same holds for Raj. Both post Low and each earns 1.

Here is the uncomfortable part. Each owner's reasoning was airtight, yet the result, 1 each, is worse for both than the 3 each they would get from High. You might object that they should just see this and both choose High. But look at what that proposal asks of Ava: to post High when, whatever Raj does, Low would pay her more. If she expects Raj to post High, that is a reason to post Low and collect 5.

## Nash equilibrium

Dominant strategies are rare, and we need a notion of a "solved" game that does not depend on them. The last step of the figure suggests one: a cell where both payoffs are circled.

**Definition.** A pair of strategies $(s_1^*, s_2^*)$ is a **Nash equilibrium** if $s_1^*$ is a best response to $s_2^*$ and $s_2^*$ is a best response to $s_1^*$. Equivalently, neither player can get a strictly higher payoff by changing their own strategy while the other's stays fixed.

An equilibrium is a cell that nobody wants to leave alone. It is a statement about stability and says nothing about whether the cell is good.

**Theorem.** If each player has a strictly dominant strategy, then the pair of dominant strategies is a Nash equilibrium, and it is the only one.

**Proof.** Let $s_1^*$ and $s_2^*$ be the dominant strategies. A strictly dominant strategy is a best response to every strategy of the opponent, in particular to the opponent's dominant strategy, so $(s_1^*, s_2^*)$ is a Nash equilibrium. Now let $(s_1, s_2)$ be any Nash equilibrium. If $s_1 \ne s_1^*$, dominance gives $u_1(s_1^*, s_2) > u_1(s_1, s_2)$, so $s_1$ is not a best response to $s_2$, a contradiction. Hence $s_1 = s_1^*$, and in the same way $s_2 = s_2^*$.

So (Low, Low) is the unique Nash equilibrium of the station game. Games with its shape have a name. Call the two strategies Cooperate and Defect, and let $R$ be the reward when both cooperate, $P$ the payoff when both defect, $T$ the temptation payoff to a lone defector and $S$ the payoff to a lone cooperator. A **prisoner's dilemma** is a symmetric game with $T > R > P > S$. Since $T > R$ and $P > S$, Defect is strictly dominant, and since $R > P$, the equilibrium is worse for both than mutual cooperation. The stations have $T = 5$, $R = 3$, $P = 1$, $S = 0$. The name is usually credited to Albert Tucker, who in 1950 told the game as a story of two suspects questioned separately, each offered a lighter sentence for testifying against the other.

The same table describes an arms race: each of two rival countries is safer armed whatever the other does, and both would be better off with neither arming. Whether a real situation satisfies $T > R > P > S$ is an empirical question about the real payoffs. When people play one-shot prisoner's dilemmas for money in laboratories, a sizable fraction cooperate. The theorem is untouched by this, because for those people money is not the whole payoff, and so the game they are playing is not the one in the table.

**Pause and try.** Change one number: suppose a station that posts Low against High earns 2 instead of 5 (the price cut wins customers but the margin is thin). Redo the circles. Is Low still dominant? What are the Nash equilibria?

**Answer.** Now if Raj posts High, Ava compares 3 (High) with 2 (Low) and prefers High. If Raj posts Low she compares 0 with 1 and prefers Low. Neither strategy is dominant: her best response is to match Raj. By symmetry the same holds for Raj. Both payoffs are circled in (High, High) and in (Low, Low), so two cells are Nash equilibria.

## Two equilibria: a coordination game

That exercise produced a new kind of game. Here is its cleanest form. Two phone makers must each pick a charging plug, X or Y. If they pick the same plug, customers can share chargers and both sell more; plug X is a little better, so matching on X pays 2 each and matching on Y pays 1 each. If they differ, each gets 0.

[Figure 3, image: A coordination game with best responses circled. Each firm's best reply is to match the other, so both payoffs are circled in two cells. Both cells are Nash equilibria, including the one where the firms are stuck on the worse plug.]

Nobody has a dominant strategy, and two cells are Nash equilibria. (Y, Y) is worse for both than (X, X), and it is still an equilibrium: if the other firm is using Y, switching alone to X drops you from 1 to 0. Nash equilibrium tells us which outcomes are stable. When there are several it does not tell us which will happen. History, convention or a public announcement has to do that.

## No stable cell: matching pennies

Can a game have no Nash equilibrium at all? Try this one. Two players each put a penny on the table, Heads or Tails up, hidden under a hand. If the pennies match, the Matcher wins a dollar from the Mismatcher. If they differ, the Mismatcher wins a dollar from the Matcher.

**Pause and try.** Write the four cells of the table, with the Matcher's payoff first. Circle best responses. Which cells are Nash equilibria?

**Answer.** (Heads, Heads): $1, -1$. (Heads, Tails): $-1, 1$. (Tails, Heads): $-1, 1$. (Tails, Tails): $1, -1$. The Matcher's best response is always to copy, and the Mismatcher's is always to differ. In every cell one player has payoff $-1$ and would get $+1$ by switching. No cell has two circles, so no pair of strategies is a Nash equilibrium.

[Figure 4, animation: Matching pennies. Starting from any cell, the player who is losing switches, which makes the other player the loser, who switches in turn. The switches chase each other around the table and never stop: no cell is stable.]

The definition is reporting something true about the game. Anyone who has played knows that the one thing you must not be is predictable. If the Matcher could count on Heads from you, you would lose every time. So let the players do what real players do, and randomize.

**Definition.** A **mixed strategy** assigns a probability to each of a player's strategies, and the player lets chance choose according to those probabilities. (The original strategies are called **pure**.) A player's payoff from mixed strategies is the expected value of the payoff, and best responses and Nash equilibrium are defined as before, with expected payoffs.

Recall that the [expected value](@probability/expected-value) of a random payoff is the sum of each possible payoff times its probability. Suppose the Matcher shows Heads with probability $p$. If the Mismatcher shows Heads, she loses a dollar when the Matcher also shows Heads (probability $p$) and wins one otherwise:

$$
\text{Heads: } (-1)p + (1)(1 - p) = 1 - 2p, \qquad \text{Tails: } (1)p + (-1)(1 - p) = 2p - 1.
$$

If $p > \frac12$, Tails pays more, so her best response is always Tails. If $p < \frac12$, always Heads. Only at $p = \frac12$ are the two equal, both zero, and then every mix is a best response for her. The same computation for the Matcher, with $q$ the probability that the Mismatcher shows Heads, gives $2q - 1$ for Heads and $1 - 2q$ for Tails.

[Figure 5, steps: Best responses in matching pennies, plotted in the square of mixed strategies: p is the probability that the Matcher shows Heads and q the probability that the Mismatcher does. The two best-response curves cross at exactly one point, p = q = \frac12.]

  - step: The Mismatcher's best reply to each p. If the Matcher favors Tails (p below 0.5) she shows Heads for sure, if he favors Heads she shows Tails for sure, and at exactly 0.5 any q is as good as any other.
  - step: The Matcher's best reply to each q. If the Mismatcher favors Heads (q above 0.5) he shows Heads for sure, and if she favors Tails he shows Tails.
  - step: A Nash equilibrium is a point on both curves. There is exactly one: both players mix half and half.
**Theorem.** Matching pennies has exactly one Nash equilibrium in mixed strategies: each player shows Heads with probability $\frac12$. Each player's expected payoff is 0.

**Proof.** Let $(p, q)$ be a Nash equilibrium. If $p > \frac12$, the Mismatcher's only best response is Tails, so $q = 0$. Against $q = 0$ the Matcher gets $2q - 1 = -1$ from Heads and $+1$ from Tails, so his only best response is $p = 0$, contradicting $p > \frac12$. If $p < \frac12$, her only best response is $q = 1$, against which his only best response is $p = 1$, again a contradiction. So $p = \frac12$, and the same argument with the roles exchanged gives $q = \frac12$. Conversely, at $q = \frac12$ the Matcher gets $0$ from Heads and from Tails, so every $p$, including $\frac12$, is a best response; likewise for the Mismatcher at $p = \frac12$. So $(\frac12, \frac12)$ is a Nash equilibrium, with expected payoff 0 to each.

Notice what fixes each player's probabilities. The Matcher mixes half and half to leave the Mismatcher with nothing to exploit, and the mix that does this is the one that makes *her* indifferent. His own payoff is the same whatever he does. This is typical of mixed equilibria.

The square in the figure also makes the general fact plausible. One curve runs from the left edge to the right, the other from bottom to top, and they have to cross.

**Theorem.** **(Nash, 1950; cited without proof.)** Every game with finitely many players, each having finitely many pure strategies, has at least one Nash equilibrium in mixed strategies.

The proof needs a fixed-point theorem from topology and is beyond our tools. What it tells us is that the hunt for an equilibrium never fails for a table of finite size, as long as mixing is allowed.

**Key idea.** A Nash equilibrium is a choice of strategy for each player from which nobody gains by changing alone. To find one, mark best responses. A game may have one equilibrium that is bad for everyone, several, or none until the players randomize, and then it always has one.

## Playing again and again

Back to Ava and Raj. Their real situation differs from the table in one respect: they post prices every morning, with no end in sight. That changes the game, because today's choice can now depend on what the other did yesterday, and a price cut can be answered.

Payoffs now arrive at different dates, so we need to compare them. Suppose each owner values a dollar received one day later at $\delta$ dollars today, with $0 < \delta < 1$. This is the **discount factor** from the lesson on [present value](@economics/compound-interest-present-value), where it was $\frac{1}{1+r}$ for an interest rate $r$ per period; it can also absorb the chance that the game ends. A stream of payoffs $a_0, a_1, a_2, \ldots$ is worth $a_0 + a_1\delta + a_2\delta^2 + \cdots$, and for a constant stream the [geometric series](@precalculus/geometric-series) gives

$$
a + a\delta + a\delta^2 + \cdots = \frac{a}{1 - \delta}.
$$

Consider this plan, called the **grim trigger**: post High as long as nobody has ever posted Low, and after anyone posts Low, post Low forever. Suppose Raj follows it. Is it a best response for Ava to follow it too?

**Pause and try.** Take $\delta = 0.8$. If Ava follows the plan she gets 3 every day. If she posts Low today she gets 5 today and, since Raj then posts Low forever, at most 1 every day after. Find the discounted total of each stream. Which is larger?

**Answer.** Following: $\frac{3}{1 - 0.8} = 15$. Cutting: $5 + (0.8 + 0.8^2 + \cdots) = 5 + \frac{0.8}{0.2} = 9$. Following the plan is worth much more. The cut gains 2 today and loses 2 on every later day.

[Figure 6, animation: Running discounted totals for Ava when Raj plays the grim trigger and \delta = 0.8, in hundreds of dollars. If she keeps posting High the total climbs toward 15. If she cuts her price on day 1 she is ahead for two days and then falls behind for good, with a total that approaches 9.]

How patient must the owners be for this to work? Do the same computation with letters.

**Theorem.** **(Grim trigger.)** Consider a prisoner's dilemma with payoffs $T > R > P > S$, repeated forever, with discount factor $0 < \delta < 1$. Both players following the grim trigger is a Nash equilibrium of the repeated game if and only if

$$
\delta \ge \frac{T - R}{T - P}.
$$

**Proof.** Suppose player 2 follows the grim trigger. If player 1 does too, both cooperate forever and player 1's total is $R + R\delta + R\delta^2 + \cdots = \frac{R}{1 - \delta}$. Now suppose player 1 uses some other plan that leads her to defect at some point, and let day 0 be the first day she does (if that day comes later, both streams below are the same up to then, and the comparison is multiplied by a power of $\delta$). On day 0 she gets $T$. From day 1 on, player 2 defects forever, so on each later day she gets $P$ or $S$, at most $P$. Her total is at most $T + P\delta + P\delta^2 + \cdots = T + \frac{\delta P}{1 - \delta}$, and she gets exactly this by defecting forever. So no deviation is profitable if and only if

$$
\frac{R}{1 - \delta} \ge T + \frac{\delta P}{1 - \delta}.
$$

Multiply by $1 - \delta > 0$: $R \ge T(1 - \delta) + \delta P$, that is $\delta(T - P) \ge T - R$. Since $T > P$ we may divide, which gives the condition. The same holds for player 2.

For the stations, $\frac{T - R}{T - P} = \frac{5 - 3}{5 - 1} = \frac12$. Cooperation survives if each owner values tomorrow's dollar at 50 cents or more today.

[Figure 7, image: The two totals from the proof, each multiplied by 1 - \delta so that they fit on one scale: always High is worth 3 per day, and cutting once is worth 5(1-\delta) + \delta = 5 - 4\delta. The lines cross at \delta = \frac12. To the right of the crossing, in the shaded region, cutting does not pay.]

The threshold has a reading. $T - R$ is what a defector gains today, and $T - P$ is the whole distance between the best and the punished payoff. A larger temptation raises the threshold, and a harsher punishment lowers it. The table has not changed, and High is still not a best response in the one-day game. What changed is that the future became a hostage.

The theorem proves a Nash equilibrium of the repeated game, which tests each plan only against the other's whole plan. A stricter test, **subgame perfection**, asks that the plans also be mutual best responses after every possible history, so that no threat is one a player would decline to carry out. The grim trigger passes it under the same condition: once anyone has posted Low, both plans say Low forever, and Low is a best response to Low every day.

Three limits on this result. First, it shows that cooperation *can* be an equilibrium, not that it must be: both owners posting Low every day, whatever has happened, is also a Nash equilibrium of the repeated game. Second, it needs an open-ended future. If both know the game ends on day 100, then on day 100 nothing can be punished, so both post Low; knowing that, day 99 cannot be rewarded or punished either, and the argument runs all the way back to day 1. Third, each must be able to see what the other did.

## Worked examples

**Worked example.** **Find all pure Nash equilibria. Player 1 chooses Up or Down, player 2 chooses Left or Right, and the payoffs (player 1 first) are: (Up, Left) $2, 3$; (Up, Right) $1, 1$; (Down, Left) $4, 0$; (Down, Right) $2, 2$.**

Player 1 compares within each column. Against Left: 2 from Up, 4 from Down, so Down. Against Right: 1 from Up, 2 from Down, so Down. Down is strictly dominant for player 1. Player 2 compares within each row. Against Up: 3 from Left, 1 from Right, so Left. Against Down: 0 from Left, 2 from Right, so Right. Player 2 has no dominant strategy.

The only cell where both are best responses is (Down, Right), with payoffs $2, 2$. *Check:* from there, player 1 switching to Up gets 1, and player 2 switching to Left gets 0. Neither gains.

**Worked example.** **A penalty kick. The kicker aims Left or Right and the goalkeeper dives Left or Right at the same instant. The probability of a goal is 0.5 if both go Left, 0.9 if the kick goes Left and the dive Right, 0.8 if the kick goes Right and the dive Left, and 0.2 if both go Right. The kicker wants that probability high and the keeper wants it low. Find the mixed equilibrium.**

There is no pure equilibrium, since the keeper wants to match and the kicker does not. Let the keeper dive Left with probability $q$. The kicker's chance of scoring is $0.5q + 0.9(1 - q) = 0.9 - 0.4q$ from Left and $0.8q + 0.2(1 - q) = 0.2 + 0.6q$ from Right. The keeper must leave him indifferent, or he would always pick the better side: $0.9 - 0.4q = 0.2 + 0.6q$ gives $q = 0.7$.

Let the kicker aim Left with probability $p$. The scoring chance is $0.5p + 0.8(1 - p) = 0.8 - 0.3p$ if the keeper dives Left and $0.9p + 0.2(1 - p) = 0.2 + 0.7p$ if Right. Indifference for the keeper: $0.8 - 0.3p = 0.2 + 0.7p$, so $p = 0.6$.

*Check.* At $q = 0.7$ both of the kicker's options score with probability $0.9 - 0.28 = 0.62$, and at $p = 0.6$ both of the keeper's options concede with probability $0.8 - 0.18 = 0.62$. Studies of professional penalty kicks have found that players' actual frequencies are close to what such calculations predict.

**Common mistake.** **"The Nash equilibrium is the outcome that is best for the players."** Equilibrium means that no *single* player gains by changing alone. It makes no comparison between cells for the group. In the prisoner's dilemma the equilibrium is the one cell that both players rank below another, and in the plug game (Y, Y) is an equilibrium although (X, X) is better for both.

**Common mistake.** **Choosing your mix to make yourself indifferent.** In the penalty example, students often set the kicker's two payoffs equal and solve for the kicker's own $p$. But the kicker's payoffs depend on the keeper's $q$, and that equation determines $q$. In a mixed equilibrium each player's probabilities are pinned down by the *other* player's indifference.

Stepping back: the hard step was to give up asking what is best and ask instead what is stable, cell by cell, one player at a time. The reusable tool is the best-response check, which works on any table: fix what the others do, and see whether anyone wants to move. The prisoner's dilemma shows that stable and good can come apart, and the repeated game shows one way to bring them back together.

**Check yourself.** In a game with payoffs (player 1 first) (A, A) $4, 4$; (A, B) $0, 5$; (B, A) $5, 0$; (B, B) $2, 2$, what are the pure Nash equilibria?
Answer: (B, B) only B is strictly dominant for each player (5 beats 4, and 2 beats 0), so (B, B) is the unique equilibrium. This is a prisoner's dilemma with $T = 5$, $R = 4$, $P = 2$, $S = 0$.

**Recap.** - A normal-form game lists players, strategies and a payoff to each player for every combination of strategies.
- A best response is a strategy that does as well as possible against a given strategy of the opponent. A strictly dominant strategy is the best response to everything.
- A Nash equilibrium is a pair of mutual best responses. If both players have strictly dominant strategies, it is unique.
- Prisoner's dilemma: $T > R > P > S$. Defect is dominant and the equilibrium is worse for both than cooperation.
- Some games have several equilibria (coordination) and some have none in pure strategies (matching pennies). With mixed strategies an equilibrium always exists (Nash), and each player's mix makes the other indifferent.
- Repeated forever with discount factor $\delta$, the grim trigger sustains cooperation exactly when $\delta \ge \frac{T - R}{T - P}$.

## Problems

Work these on paper before opening the solutions. The first two repeat the lesson's moves, the next four combine them, and the last goes further.

**Problem 1.** Two countries each choose to Arm or Disarm. If both disarm each gets 4. If both arm each gets 2. If one arms and the other disarms, the armed one gets 5 and the other gets 1. Is this a prisoner's dilemma? Find the Nash equilibrium.

**Solution.** With Disarm as "cooperate": $R = 4$, $P = 2$, $T = 5$, $S = 1$, and $5 > 4 > 2 > 1$, so it is a prisoner's dilemma. Arm is strictly dominant: against Disarm it gives 5 instead of 4, and against Arm it gives 2 instead of 1. The unique Nash equilibrium is (Arm, Arm) with payoffs 2 each, worse for both than the 4 each from mutual disarmament.

**Problem 2.** Two hunters each choose Stag or Hare. A stag needs both hunters and is worth 4 to each. A hare can be caught alone and is worth 3. A hunter who goes for the stag alone gets 0. (a) Find the pure Nash equilibria. (b) How sure must a hunter be that the other will choose Stag before Stag is his best response?

**Solution.** (a) Payoffs: (Stag, Stag) $4, 4$; (Stag, Hare) $0, 3$; (Hare, Stag) $3, 0$; (Hare, Hare) $3, 3$. Against Stag the best response is Stag ($4 > 3$). Against Hare it is Hare ($3 > 0$). So (Stag, Stag) and (Hare, Hare) are both Nash equilibria, and there is no dominant strategy. (b) If the other hunts Stag with probability $q$, Stag has expected payoff $4q$ and Hare has $3$. Stag is a best response when $4q \ge 3$, that is $q \ge \frac34$. The better equilibrium is the riskier one, since it takes 75% confidence in the partner.

**Problem 3.** The plug game has a third Nash equilibrium, in mixed strategies. Find it, and each firm's expected payoff there.

**Solution.** Let firm 2 choose X with probability $q$. Firm 1 expects $2q$ from X and $1 \cdot (1 - q)$ from Y. Firm 1 is willing to mix only if these are equal, so $2q = 1 - q$ and $q = \frac13$. The game is symmetric, so firm 1 also chooses X with probability $\frac13$. Each is then indifferent, so each mix is a best response to the other. The expected payoff is $2q = \frac23$ for each firm, lower than in either pure equilibrium, because the firms mismatch with probability $\frac13 \cdot \frac23 + \frac23 \cdot \frac13 = \frac49$.

**Problem 4.** Ann hides a coin in one hand: a \$1 coin if she uses her left, a \$2 coin if she uses her right. Bob guesses a hand. If he is right he keeps the coin, and Ann loses it; if he is wrong nothing changes hands. Find the mixed Nash equilibrium and Bob's expected winnings.

**Solution.** Let Ann hide in the left hand with probability $p$. Bob's expected winnings are $1 \cdot p$ from guessing left and $2(1 - p)$ from guessing right. Ann must make these equal, or Bob would always pick the better guess: $p = 2 - 2p$ gives $p = \frac23$. Let Bob guess left with probability $q$. Ann's expected loss is $1 \cdot q$ if she hides left and $2(1 - q)$ if she hides right; equal when $q = \frac23$. In equilibrium Ann hides the cheaper coin two thirds of the time, and Bob guesses the cheaper hand two thirds of the time. Bob's expected winnings are $p = \frac23$ of a dollar per play. There is no pure equilibrium: if Ann's hand were predictable Bob would guess it, and then she would switch.

**Problem 5.** A repeated prisoner's dilemma has $T = 7$, $R = 4$, $P = 2$, $S = 0$. (a) For which discount factors does the grim trigger sustain cooperation? (b) Does it work if the interest rate is 50% per period? 100%? (c) Verify (b) by computing both totals at 100%.

**Solution.** (a) $\delta \ge \frac{7 - 4}{7 - 2} = 0.6$. (b) At $r = 50\%$, $\delta = \frac{1}{1.5} = 0.667 \ge 0.6$: yes. At $r = 100\%$, $\delta = 0.5 < 0.6$: no. (c) At $\delta = 0.5$, cooperating forever is worth $\frac{4}{0.5} = 8$, and defecting is worth $7 + \frac{0.5 \times 2}{0.5} = 9$. Defecting pays more, so the grim trigger is not an equilibrium.

**Problem 6.** Ava and Raj will post prices on exactly two mornings, and both know it. Payoffs are those of the station game, added over the two days without discounting. Show that in a Nash equilibrium in which each owner's day-2 choice is a best response whatever happened on day 1, both post Low on both days.

**Solution.** Work from the end. On day 2 nothing follows, so each owner's day-2 payoff is just the one-day table, in which Low is strictly dominant. So both post Low on day 2 whatever happened on day 1, and each gets 1 on day 2 regardless. On day 1, then, an owner's total is her day-1 payoff plus 1, and her day-1 choice cannot change the second part. So day 1 is again the one-day game with 1 added to every payoff, which does not change any comparison: Low is strictly dominant. Both post Low on both days. A promise to post High on day 2 as a reward for High on day 1 would not be kept, so it cannot support High on day 1.

**Problem 7.** **(A forgiving punishment.)** In the repeated station game, replace the grim trigger by this plan: post High; if anyone posts Low, both post Low for the next $k$ days and then return to High. Compare following the plan with cutting once and then following it. Show that the cut is unprofitable exactly when $\delta + \delta^2 + \cdots + \delta^k \ge 1$. What does this say for $k = 1$, for $k = 2$, and as $k \to \infty$?

**Solution.** Following gives 3 every day. Cutting on day 0 gives 5 on day 0, then 1 on each of days 1 to $k$, then 3 again. The two streams differ only on days 0 to $k$: the cut gains $5 - 3 = 2$ on day 0 and loses $3 - 1 = 2$ on each of days 1 to $k$. In discounted terms the cut is unprofitable when $2(\delta + \delta^2 + \cdots + \delta^k) \ge 2$, which is the stated condition. For $k = 1$ it reads $\delta \ge 1$, impossible for $\delta < 1$: one day of punishment never deters. For $k = 2$ it reads $\delta^2 + \delta - 1 \ge 0$, that is $\delta \ge \frac{\sqrt5 - 1}{2} \approx 0.618$. As $k \to \infty$ the sum approaches $\frac{\delta}{1 - \delta}$, and $\frac{\delta}{1 - \delta} \ge 1$ means $\delta \ge \frac12$, the grim trigger threshold. Shorter punishments are more forgiving of mistakes and demand more patience. (A full check would also confirm that each owner is willing to carry out the punishment; she is, since during those $k$ days the other posts Low and Low is her best response to that on each day.)

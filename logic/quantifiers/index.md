# Quantifiers: for all, there exists, and negation

> Everyone loves someone" has two meanings. Quantifiers separate them, show how to negate each, and turn the epsilon-delta definition of a limit into a game.

Series: Logic and Proof (https://www.monocurl.com/monocurl-essays/logic/)
Canonical: https://www.monocurl.com/monocurl-essays/logic/quantifiers/
Keywords: quantifiers, for all, there exists, universal quantifier, existential quantifier, negating quantifiers, order of quantifiers, epsilon delta definition

[Figure 1, animation: Two readings of "everyone loves someone" among four people. On the left each person loves somebody, a different somebody for different people. On the right there is one person whom all four love.]

"Everyone loves someone." Does that say each person has somebody they love, possibly a different somebody for each? Or does it say there is one particular person who is loved by all? English allows both, and the two claims are far apart: the first is true in most families, and the second is true of almost no group of people.

In conversation the ambiguity is harmless. In mathematics the same pair of readings sits inside the definition of a limit, and choosing the wrong one produces a definition that almost no function satisfies. So we need a notation that forces a choice, and rules for working with it.

This lesson leans on two earlier ones. From [truth tables](@logic/truth-tables): a statement is a sentence that is true or false; $\land$, $\lor$, $\lnot$ mean "and", "or", "not"; and De Morgan's laws say $\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$ and $\lnot(P \lor Q) \equiv \lnot P \land \lnot Q$. From [implication](@logic/implication): $P \to Q$ is false only when $P$ is true and $Q$ is false, so it is true whenever $P$ is false, and its negation is $P \land \lnot Q$.

## Predicates and the two quantifiers

The sentence "$x^2 < 30$" is not a statement, because it is neither true nor false until we know $x$. It becomes a statement when a value is put in: "$3^2 < 30$" is true and "$6^2 < 30$" is false. Such a sentence is called a predicate, and the values allowed for $x$ form its domain.

There is a second way to turn a predicate into a statement, which is to say *how many* values of the domain satisfy it. Take the domain $\{1, 2, 3, 4, 5, 6\}$ and check them one at a time.

[Figure 2, animation: The predicate x^2 < 30 tested on each element of the domain 1 to 6. It is true for five of them and false for 6. So "for all x" is false, with 6 as a counterexample, and "there exists x" is true, with 1 as a witness.]

**Definition.** A **predicate** $P(x)$ with **domain** $D$ is a sentence containing a variable $x$ that becomes a statement whenever $x$ is replaced by an element of $D$.

- The **universal** statement $\forall x \in D\; P(x)$, read "for all $x$ in $D$, $P(x)$", is true when $P(x)$ is true for every element $x$ of $D$. An element for which $P(x)$ is false is a **counterexample**.
- The **existential** statement $\exists x \in D\; P(x)$, read "there exists $x$ in $D$ such that $P(x)$", is true when $P(x)$ is true for at least one element $x$ of $D$. Such an element is a **witness**.

The symbols $\forall$ and $\exists$ are **quantifiers**.

Each clause matches the scan. One counterexample, $x = 6$, was enough to make the universal statement false, and five agreeing values could not save it. One witness was enough to make the existential statement true. On a finite domain a quantifier is a long connective: $\forall x\, P(x)$ is $P(1) \land P(2) \land \dots \land P(6)$, and $\exists x\, P(x)$ is $P(1) \lor P(2) \lor \dots \lor P(6)$.

The domain is part of the statement. "$\exists x\; (x^2 = 2)$" is false if $x$ ranges over the integers and true if it ranges over the real numbers. "$\forall x\; (x^2 \ge x)$" is true over the integers and false over the reals, where $x = \frac12$ is a counterexample. When the domain is not written, it must be clear from context.

Often we quantify over part of a domain, as in "every $x > 0$". This is shorthand with a fixed meaning, and the two quantifiers unpack differently:

$$
\forall x > 0\; Q(x) \text{ means } \forall x\,(x > 0 \to Q(x)), \qquad \exists x > 0\; Q(x) \text{ means } \exists x\,(x > 0 \land Q(x)).
$$

**Pause and try.** True or false? (a) $\forall x \in \mathbb{R}\; (x^2 > 0)$. (b) $\exists n \in \mathbb{Z}\; (n^2 = n)$. (c) "Every unicorn in this room is purple", that is, $\forall x \in U\; \text{Purple}(x)$ where $U$ is the set of unicorns in the room, which is empty.

**Answer.** (a) False: $x = 0$ is a counterexample. (b) True: $n = 1$ is a witness, and so is $n = 0$. (c) True. A universal statement is false only if there is a counterexample, and an empty domain contains none. This is the vacuous truth of the conditional again, since the claim is "for every $x$, if $x$ is a unicorn in this room then $x$ is purple" and the hypothesis is always false. Over an empty domain every $\forall$ statement is true and every $\exists$ statement is false.

## How to say "no"

Someone claims that all swans are white. What must be the case for the claim to be false? A common first answer is "no swans are white", and it overshoots badly. The claim is refuted by one black swan in a lake of white ones.

On the finite example this is De Morgan's law at work on a long conjunction.

[Figure 3, steps: Negating "for all x, P(x)" on the domain 1 to 6. The universal statement is six statements joined by "and". Negating it turns every "and" into "or" and negates each piece, which is the statement "there exists x such that not P(x)".]

  - step: For all x, P(x) is six statements joined by AND. One false piece makes the whole thing false.
  - step: Negate it. By De Morgan's law the NOT lands on every piece, flipping each value, and each AND becomes OR.
  - step: The counterexample that made the universal statement false, x = 6, is the witness that makes the new statement true.
**Theorem.** (Negation of quantifiers.) For every predicate $P(x)$ with domain $D$:

$$
\lnot\,\forall x \in D\; P(x) \;\equiv\; \exists x \in D\; \lnot P(x), \qquad \lnot\,\exists x \in D\; P(x) \;\equiv\; \forall x \in D\; \lnot P(x).
$$

**Proof.** *First rule.* $\lnot \forall x\, P(x)$ is true exactly when $\forall x\, P(x)$ is false. By the definition of $\forall$ that happens exactly when $P(x)$ fails to be true for some element $x$ of $D$, that is, when $\lnot P(x)$ is true for at least one $x$. By the definition of $\exists$ this is exactly when $\exists x\, \lnot P(x)$ is true. The two sides are true in the same circumstances.

*Second rule.* Apply the first rule to the predicate $\lnot P(x)$: $\lnot \forall x\, \lnot P(x) \equiv \exists x\, \lnot\lnot P(x) \equiv \exists x\, P(x)$. Negating both sides gives $\forall x\, \lnot P(x) \equiv \lnot \exists x\, P(x)$.

When $D$ is finite, with $n$ elements, these rules are De Morgan's laws for $n$ statements, which follow from the two-statement laws by [induction](@discrete-math/induction) on $n$: peel off the last piece, apply the two-statement law, and use the case of $n - 1$ on the rest. When $D$ is infinite there is no table to check, and the argument from the definitions above is the whole proof. The rules are sometimes called the generalized De Morgan laws.

A restricted domain stays as it is under negation. For example $\lnot\,\forall x > 0\; Q(x)$ unpacks to $\lnot \forall x\,(x > 0 \to Q(x))$, which is $\exists x\, \lnot(x > 0 \to Q(x))$, which is $\exists x\,(x > 0 \land \lnot Q(x))$: there is a positive $x$ for which $Q$ fails. Only the quantifier and the predicate changed.

**Pause and try.** Negate each statement, and say which of the pair is true. (a) "Some prime number is even." (b) $\forall x \in \mathbb{R}\; (x > 0 \to x^2 > x)$.

**Answer.** (a) "Every prime number is odd." The original is true, with witness 2, so the negation is false. (b) $\exists x \in \mathbb{R}\; (x > 0 \land x^2 \le x)$. Here the negation is true, with witness $x = \frac12$, since $\frac14 \le \frac12$. So the original is false.

## Two quantifiers: the order matters

Now we can separate the two readings of the opening sentence. Let the domain be four people, A, B, C and D, and let $L(x, y)$ mean "$x$ loves $y$". This predicate has two variables, and each needs a quantifier:

- $\forall x\, \exists y\; L(x, y)$: for every person $x$ there is a person $y$ whom $x$ loves.
- $\exists y\, \forall x\; L(x, y)$: there is a person $y$ whom every person $x$ loves.

To test them we need to know who loves whom. Here is one possibility.

[Figure 4, steps: A relation among four people, drawn as arrows from each person (left) to the people they love (right). Every person has an outgoing arrow, so the first statement is true. No person on the right receives arrows from all four, so the second is false, until one more arrow is added.]

  - step: Who loves whom: an arrow from x on the left to y on the right means x loves y. There are six arrows.
  - step: For all x there exists y: check that each person on the left has at least one arrow going out. All four do.
  - step: There exists y for all x: look for one person on the right who receives an arrow from all four. D comes closest, with three, but D does not love D.
  - step: Add one arrow, from D to D. Now D is loved by all four and the second statement is true as well.
With the six arrows of the first slide, $\forall x\, \exists y\; L(x, y)$ is true and $\exists y\, \forall x\; L(x, y)$ is false. The same relation, the same two quantifiers, and opposite truth values. So the order in which quantifiers are written is part of the meaning.

A grid makes the difference easy to see. Put $x$ down the side and $y$ across the top, and mark the cell $(x, y)$ when $L(x, y)$ is true.

[Figure 5, image: The same relation as a grid, before and after the arrow from D to D is added. "For all x there exists y" asks for a mark in every row. "There exists y for all x" asks for a column that is completely marked, which is a stronger demand.]

A full column puts a mark in every row, but marks in every row need not line up in one column. That is the content of the next theorem.

**Theorem.** Let $P(x, y)$ be a predicate with $x$ in a domain $D$ and $y$ in a domain $E$. If $\exists y\, \forall x\; P(x, y)$ is true, then $\forall x\, \exists y\; P(x, y)$ is true. The converse can fail.

**Proof.** Suppose $\exists y\, \forall x\; P(x, y)$. Take a witness $y_0$ in $E$, so that $P(x, y_0)$ is true for every $x$ in $D$. To prove $\forall x\, \exists y\; P(x, y)$, let $x$ be any element of $D$. Then $P(x, y_0)$ is true, so $y_0$ is a witness for $\exists y\; P(x, y)$. Since $x$ was arbitrary, the universal statement holds. For the failure of the converse, the six-arrow relation above is an example: there $\forall x\, \exists y\; L(x, y)$ is true and $\exists y\, \forall x\; L(x, y)$ is false.

### The same thing with real numbers

Over the real numbers, compare $\forall x\, \exists y\; (y > x)$ with $\exists y\, \forall x\; (y > x)$. It helps to read them as a game between you and me, with the moves made in the order the quantifiers are written. A $\forall$ is your move: you pick the value, trying to make me fail. An $\exists$ is my move. Whoever moves later can see the earlier moves.

[Figure 6, animation: Two games on the number line. Top: you pick x, then I pick y = x + 1, which is always larger, so "for all x there exists y > x" is true. Bottom: I must fix y first, and then you move x past it, so "there exists y larger than all x" is false.]

In the first game I move second and answer your $x$ with $y = x + 1$. That is a winning strategy, so $\forall x\, \exists y\; (y > x)$ is true. In the second I must name one $y$ before you move, and you reply with $x = y$. To prove it false properly, negate it with the theorem, one quantifier at a time:

$$
\lnot\, \exists y\, \forall x\; (y > x) \;\equiv\; \forall y\, \lnot \forall x\; (y > x) \;\equiv\; \forall y\, \exists x\; (y \le x),
$$

and this is true, with $x = y$ as the witness for each $y$.

**Key idea.** Read a string of quantifiers from left to right as moves in a game between a defender, who wants the statement to come out true, and an opponent: each $\forall$ is the opponent's choice, each $\exists$ is the defender's, and later choices may depend on earlier ones. The statement is true exactly when the defender has a winning strategy. To negate the statement, change every $\forall$ to $\exists$, every $\exists$ to $\forall$, and negate the predicate at the end.

The game is a way of reading the definitions and adds nothing to them: "for every $x$ there is a $y$" says exactly that whatever $x$ is chosen, a suitable $y$ can be found afterwards. One caution. Two quantifiers of the *same* kind may be swapped freely, since $\forall x\, \forall y$ and $\forall y\, \forall x$ both say "for all pairs", and likewise for $\exists$. Only a $\forall$ next to an $\exists$ is sensitive to order.

## The limit definition as a game

The best known sentence with three alternating quantifiers is the definition of a [limit](@calculus/limits). Let $a$ be a real number and let $f$ be a function defined at every point of some open interval containing $a$, except possibly at $a$ itself. Then $\lim_{x \to a} f(x) = L$ means

$$
\forall \varepsilon > 0\;\; \exists \delta > 0\;\; \forall x\;\; \bigl(0 < |x - a| < \delta \;\to\; |f(x) - L| < \varepsilon\bigr).
$$

The calculus lesson writes the last part as "$0 < |x - a| < \delta$ implies $|f(x) - L| < \varepsilon$". The word "implies" there carries a silent "for every $x$", which is the third quantifier, and $x$ ranges over the points where $f$ is defined.

As a game: you choose a tolerance $\varepsilon$. I answer with a distance $\delta$, which may depend on your $\varepsilon$. You then choose any $x$. I win if the conditional holds, which means that either your $x$ is not within $\delta$ of $a$ (or equals $a$), and the conditional is vacuously true, or else $f(x)$ is within $\varepsilon$ of $L$. The limit is $L$ exactly when I have a strategy that wins against every $\varepsilon$.

Take $f(x) = 2x + 1$, $a = 1$ and $L = 3$. Then $|f(x) - 3| = |2x - 2| = 2|x - 1|$, so my strategy is $\delta = \varepsilon / 2$: if $|x - 1| < \delta$ then $|f(x) - 3| < 2\delta = \varepsilon$.

[Figure 7, animation: The limit game for f(x) = 2x + 1 at a = 1 with L = 3. You shrink the horizontal band of half-height \varepsilon around 3. The piece of the graph over my window sticks out of the band until I answer by shrinking the window to half-width \delta = \varepsilon / 2.]

The order $\forall \varepsilon\, \exists \delta$ is the first reading of "everyone loves someone": each $\varepsilon$ gets its own $\delta$. Swap the two and you get $\exists \delta > 0\; \forall \varepsilon > 0\; \forall x\,(\dots)$, which demands one window that works for every tolerance at once. That forces $|f(x) - L|$ to be smaller than every positive number, so $f(x) = L$ exactly throughout the window. Even $2x + 1$ fails this. The definition of a limit depends on the order of its quantifiers.

**Pause and try.** Write out the negation of the limit definition: what does it mean that $L$ is *not* the limit of $f(x)$ as $x \to a$? Remember that $\forall \varepsilon > 0$ and $\exists \delta > 0$ keep their restrictions, and that the negation of $A \to B$ is $A \land \lnot B$.

**Answer.** $$
\exists \varepsilon > 0\;\; \forall \delta > 0\;\; \exists x\;\; \bigl(0 < |x - a| < \delta \;\land\; |f(x) - L| \ge \varepsilon\bigr).$$ There is a tolerance that cannot be met: however small a window is proposed, it contains a point $x \ne a$ at which $f(x)$ is at least $\varepsilon$ away from $L$.
$$

In the negated game the roles are exchanged. Now I move first, with a single $\varepsilon$, and I must beat every $\delta$ you offer. Let $f(x) = 1$ for $x > 0$ and $f(x) = -1$ for $x < 0$, and suppose you claim that $\lim_{x \to 0} f(x) = 1$.

[Figure 8, steps: Refuting the claim that a step function has limit 1 at 0. I choose the tolerance 1. Whatever window you offer, I pick the point halfway to its left edge, where the function is -1, which is a distance 2 from the claimed limit.]

  - step: The function is -1 to the left of 0 and 1 to the right. The claim is that its limit at 0 is 1.
  - step: To refute the claim I move first, with tolerance 1. The band runs from 0 to 2, and the left half of the graph is outside it.
  - step: You offer the window of half-width 1. I pick x = -0.5, inside the window, where the function is -1.
  - step: You try a narrower window, 0.4. I pick x = -0.2. No window can work, because every window reaches a little to the left of 0.
Written as a proof: take $\varepsilon = 1$. Let $\delta > 0$ be arbitrary and put $x = -\delta/2$. Then $0 < |x - 0| = \delta/2 < \delta$, and $|f(x) - 1| = |-1 - 1| = 2 \ge 1$. This establishes $\exists \varepsilon\, \forall \delta\, \exists x\,(\dots)$, the negation of the claim. Notice the shape of the proof: one $\varepsilon$ exhibited, an arbitrary $\delta$ handled, and an $x$ produced that depends on $\delta$.

## Worked examples

**Worked example.** **Translate, then negate.** "Every real number has a real cube root."

The sentence speaks of every number $x$ and promises a root $y$ for it: $\forall x \in \mathbb{R}\; \exists y \in \mathbb{R}\; (y^3 = x)$. The root depends on the number, so $\exists y$ comes second. The negation flips both quantifiers and negates the equation: $\exists x \in \mathbb{R}\; \forall y \in \mathbb{R}\; (y^3 \ne x)$, "some real number is the cube of nothing". The original is true (the witness for $x = 8$ is $y = 2$, for $x = -1$ it is $y = -1$, and in general $y = \sqrt[3]{x}$), so the negation is false. With the order swapped, $\exists y\, \forall x\; (y^3 = x)$ would say that one number is the cube root of everything, which is false.

**Worked example.** **All four combinations on a small domain.** Let $x$ and $y$ range over $\{1, 2, 3\}$ and let $P(x, y)$ be "$x + y = 4$". Decide $\forall x\, \exists y$, $\exists y\, \forall x$, $\exists x\, \exists y$ and $\forall x\, \forall y$.

The true pairs are $(1, 3)$, $(2, 2)$ and $(3, 1)$. In a grid they form a diagonal: one mark in each row, one in each column.

- $\forall x\, \exists y\; P$: every row has a mark, namely $y = 4 - x$. True.
- $\exists y\, \forall x\; P$: needs a full column. Each column has one mark out of three. False.
- $\exists x\, \exists y\; P$: needs one mark anywhere. True, for instance $(2, 2)$.
- $\forall x\, \forall y\; P$: needs every cell marked. False, for instance $1 + 1 \ne 4$.

**Worked example.** **Negating to prove something.** A function $f$ on $\mathbb{R}$ is *bounded* if $\exists M \in \mathbb{R}\; \forall x \in \mathbb{R}\; (|f(x)| \le M)$. Show that $f(x) = x^2$ is not bounded.

We must prove the negation, $\forall M\, \exists x\; (|f(x)| > M)$. In game terms the opponent now picks $M$ and we answer with $x$, so our $x$ may depend on $M$. Let $M$ be any real number and take $x = |M| + 1$. Then $x \ge 1$, so $x^2 \ge x = |M| + 1 > |M| \ge M$. Hence $|f(x)| = x^2 > M$.

*Check:* for $M = 100$ this gives $x = 101$ and $x^2 = 10201 > 100$; for $M = -5$ it gives $x = 6$ and $36 > -5$.

## Common mistakes and edge cases

**Common mistake.** **Negating "all" as "none".** The negation of "all the lights are on" is "at least one light is off", not "all the lights are off". With three lights on and one off, both "all on" and "all off" are false, and a statement and its negation can never be false together.

**Common mistake.** **Letting $\delta$ depend on $x$.** In a limit proof the quantifiers come in the order $\varepsilon$, $\delta$, $x$. The $\delta$ is chosen before $x$ is known, so it may be built from $\varepsilon$ and $a$ but never from $x$. A "proof" that says "take $\delta = |x - a| + 1$" has quietly changed the statement to $\forall \varepsilon\, \forall x\, \exists \delta$, which is true of every function and says nothing.

Two edge cases. Over an empty domain $\forall x\, P(x)$ is true and $\exists x\, P(x)$ is false, so "for all" does not imply "there exists" unless the domain has at least one element. And "there exists" means *at least one*: if you want exactly one, say "there exists a unique $x$", which is the conjunction of $\exists x\, P(x)$ with $\forall x\, \forall y\,\bigl((P(x) \land P(y)) \to x = y\bigr)$.

## Stepping back

The hard part was noticing that English hides two things a mathematical sentence must show: which variables are "all" and which are "some", and in what order they are chosen. Once those are written down, truth is a matter of who can win a game, and negation is a mechanical exchange of the two players. Nearly every definition in analysis, including continuity, convergence and boundedness, is a short string of quantifiers, and reading one comes down to asking who moves when.

**Check yourself.** What is the negation of "every student has read some book on the list"?
Answer: Some student has read no book on the list. $\lnot\,\forall s\, \exists b\; R(s, b) \equiv \exists s\, \forall b\; \lnot R(s, b)$: both quantifiers flip and the predicate is negated.

**Recap.** - A predicate $P(x)$ becomes a statement when $x$ is given a value from the domain, or when it is quantified: $\forall x\, P(x)$ (true for every $x$) or $\exists x\, P(x)$ (true for at least one).
- One counterexample refutes a $\forall$. One witness proves an $\exists$. The domain is part of the statement.
- Negation: $\lnot \forall x\, P(x) \equiv \exists x\, \lnot P(x)$ and $\lnot \exists x\, P(x) \equiv \forall x\, \lnot P(x)$. With several quantifiers, flip each one and negate the predicate.
- Order matters between $\forall$ and $\exists$. $\exists y\, \forall x\, P$ implies $\forall x\, \exists y\, P$, and not conversely.
- Game reading: $\forall$ is the opponent's move and $\exists$ is the defender's, in the order written.
- $\lim_{x \to a} f(x) = L$ is $\forall \varepsilon > 0\, \exists \delta > 0\, \forall x\,(0 < |x - a| < \delta \to |f(x) - L| < \varepsilon)$. Its negation is $\exists \varepsilon > 0\, \forall \delta > 0\, \exists x\,(0 < |x - a| < \delta \land |f(x) - L| \ge \varepsilon)$.

## Problems

Problems 1 to 3 repeat the moves of the lesson, 4 to 6 combine them, and 7 and 8 go further.

**Problem 1.** Decide whether each statement is true, giving a witness, a counterexample or a short reason. (a) $\forall n \in \mathbb{Z}\; (n^2 \ge n)$. (b) $\exists x \in \mathbb{R}\; (x^2 < x)$. (c) $\forall x \in \mathbb{R}\; \exists y \in \mathbb{R}\; (xy = 1)$. (d) $\exists y \in \mathbb{R}\; \forall x \in \mathbb{R}\; (xy = 0)$.

**Solution.** (a) True. If $n \le 0$ then $n^2 \ge 0 \ge n$. If $n \ge 1$ then $n^2 = n \cdot n \ge n \cdot 1 = n$. Every integer is in one of the two cases. (b) True, with witness $x = \frac12$: $\frac14 < \frac12$. (c) False: $x = 0$ is a counterexample, since $0 \cdot y = 0 \ne 1$ for every $y$. (d) True, with witness $y = 0$: $x \cdot 0 = 0$ for every $x$.

**Problem 2.** Negate each statement, moving the negation all the way in. (a) $\forall x \in \mathbb{R}\; (x^2 \ne 2)$. (b) $\exists n \in \mathbb{N}\; \forall m \in \mathbb{N}\; (m \le n)$. (c) $\forall x \in \mathbb{R}\; (x > 2 \to x^2 > 4)$. For (b), say which of the statement and its negation is true.

**Solution.** (a) $\exists x \in \mathbb{R}\; (x^2 = 2)$. (b) $\forall n \in \mathbb{N}\; \exists m \in \mathbb{N}\; (m > n)$. The original says there is a largest natural number. The negation is true, with witness $m = n + 1$ for each $n$, so the original is false. (c) $\exists x \in \mathbb{R}\; (x > 2 \land x^2 \le 4)$, using the fact that the negation of $A \to B$ is $A \land \lnot B$.

**Problem 3.** On the domain $\{A, B, C\}$ the relation $L$ consists of exactly the pairs $(A, B)$, $(B, B)$ and $(C, A)$. Decide the truth of $\forall x\, \exists y\; L(x, y)$, $\exists y\, \forall x\; L(x, y)$, $\exists x\, \forall y\; L(x, y)$ and $\forall y\, \exists x\; L(x, y)$.

**Solution.** Draw the grid with rows $x$ and columns $y$: row A has a mark in column B, row B in column B, row C in column A. (1) Every row has a mark, so $\forall x\, \exists y\; L$ is true. (2) A full column is needed: column B has marks from A and B but not C, and columns A and C have fewer. False. (3) A full row is needed, and every row has only one mark. False. (4) Every column needs a mark, and column C has none. False.

**Problem 4.** Consider "for every positive real number there is a smaller positive real number". Write it with quantifiers and decide whether it is true. Then swap the two quantifiers, say in words what the new statement claims, and decide whether it is true.

**Solution.** $\forall x > 0\; \exists y > 0\; (y < x)$. True: given $x$, take $y = x/2$, which is positive and less than $x$. Swapped: $\exists y > 0\; \forall x > 0\; (y < x)$, "there is a positive real number smaller than every positive real number". This is false. Its negation is $\forall y > 0\; \exists x > 0\; (y \ge x)$, which is true with $x = y$.

**Problem 5.** Play the limit game for $f(x) = 3x - 1$ at $a = 2$ with $L = 5$: give a strategy for choosing $\delta$ from $\varepsilon$ and prove that it wins.

**Solution.** We have $|f(x) - 5| = |3x - 6| = 3|x - 2|$. Strategy: given $\varepsilon > 0$, choose $\delta = \varepsilon / 3$. Now let $x$ be any number with $0 < |x - 2| < \delta$. Then $|f(x) - 5| = 3|x - 2| < 3\delta = \varepsilon$. The conditional holds for every $x$, so $\forall \varepsilon > 0\, \exists \delta > 0\, \forall x\,(\dots)$ is true and $\lim_{x \to 2}(3x - 1) = 5$. For instance, against $\varepsilon = 0.03$ the reply is $\delta = 0.01$.

**Problem 6.** "There are infinitely many primes" can be written $\forall n \in \mathbb{N}\; \exists p \in \mathbb{N}\; (p > n \land p \text{ is prime})$. Write its negation with the negation moved all the way in, and say in words what the negation claims.

**Solution.** Flip both quantifiers and negate the predicate with De Morgan's law: $\exists n \in \mathbb{N}\; \forall p \in \mathbb{N}\; (p \le n \lor p \text{ is not prime})$. By the equivalence $\lnot A \lor B \equiv A \to B$, the bracket can also be written "$p$ is prime $\to p \le n$". In words: there is a number $n$ such that every prime is at most $n$, that is, the primes are bounded above. (Euclid proved that this negation is false.)

**Problem 7.** Use the negated definition to prove that $\lim_{x \to 1} (2x + 1)$ is not $3.5$.

**Solution.** We need $\exists \varepsilon > 0\; \forall \delta > 0\; \exists x\; (0 < |x - 1| < \delta \land |2x + 1 - 3.5| \ge \varepsilon)$. Choose $\varepsilon = 0.25$. Let $\delta > 0$ be arbitrary, and pick any $x$ with $0 < |x - 1| < \delta$ and also $|x - 1| < 0.1$ (for instance $x = 1 + \min(\delta, 0.1)/2$). Then $|(2x + 1) - 3| = 2|x - 1| < 0.2$, so $2x + 1$ lies between $2.8$ and $3.2$, and its distance from $3.5$ is more than $0.3$, which is at least $0.25$. Both parts of the conjunction hold.

**Problem 8.** Let $f(x) = 1$ for $x > 0$ and $f(x) = -1$ for $x < 0$. The lesson showed that 1 is not the limit of $f$ at 0. Prove that *no* real number $L$ is: write the statement "$f$ has no limit at 0" with quantifiers, and prove it.

**Solution.** "$f$ has a limit at 0" is $\exists L\, \forall \varepsilon > 0\, \exists \delta > 0\, \forall x\,(0 < |x| < \delta \to |f(x) - L| < \varepsilon)$. Its negation is

$$
\forall L\;\; \exists \varepsilon > 0\;\; \forall \delta > 0\;\; \exists x\;\; \bigl(0 < |x| < \delta \land |f(x) - L| \ge \varepsilon\bigr).
$$

Let $L$ be any real number and choose $\varepsilon = 1$. Let $\delta > 0$ be arbitrary. Consider the two points $x_1 = \delta/2$ and $x_2 = -\delta/2$; both satisfy $0 < |x| < \delta$, and $f(x_1) = 1$, $f(x_2) = -1$. If both $|1 - L| < 1$ and $|-1 - L| < 1$ held, the triangle inequality would give $2 = |1 - (-1)| \le |1 - L| + |L - (-1)| < 2$, which is impossible. So at least one of $|f(x_1) - L| \ge 1$, $|f(x_2) - L| \ge 1$ holds, and we choose $x$ to be that point. Notice the order of dependence: $\varepsilon$ did not depend on $L$ here, but $x$ depended on both $\delta$ and $L$, as the quantifiers allow.

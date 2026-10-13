# Proof of the cycle double cover conjecture

> The step that was missing for fifty years. Why the paints chosen at each node can always be made to agree, by counting the two ends of every edge.

Series: AI Proofs (https://www.monocurl.com/monocurl-essays/ai-proofs/)
Canonical: https://www.monocurl.com/monocurl-essays/ai-proofs/cycle-double-cover-proof/
Keywords: cycle double cover conjecture proof, cycle double cover theorem, linear equations mod 2, handshake lemma, nowhere-zero flow, OpenAI proof, five cycle double cover conjecture

[Figure 1, animation: The Petersen graph, with every node painting its half of each of its edges. A red ring marks an edge whose two halves disagree. One node at a time slides its three paints to the position the equations dictate, and at the end no edge is broken.]

Ten nodes each hold a dial with eight positions. Fifteen edges each make a demand on the two dials at their ends. There are $8^{10}$ ways to set the dials, more than a billion, and trying to satisfy the edges one at a time only moves the trouble around. Is there a setting that satisfies all fifteen at once?

For the Petersen graph a computer can find one, as in the figure. The cycle double cover conjecture comes down to showing that the same thing can be done for every graph, and the reason is a count: every edge has two ends.

## What the first two lessons established

The [first lesson](@ai-proofs/cycle-double-cover-conjecture) reduced the conjecture to this: every bridgeless **cubic** graph (three edges at every node) has a **painting**, which gives each edge two coats in different paints so that at every node each paint is on two edges or on none. A painting is the same thing as a cycle double cover.

The [second lesson](@ai-proofs/nowhere-zero-flows) made the paints **codes** of three bits, added column by column with $1 + 1 = 0$, so that $x + x = 0$ for every code. It cited the theorem of Jaeger and Kilpatrick: every bridgeless graph has a **nowhere-zero three-bit flow**, a label $f(e) \neq 000$ on every edge $e$ such that the three labels at each node add up to 000. And it found every way to paint around one node so that the two coats of each edge differ by its label. If the labels at a node are $x, y, z$, the node picks a code $s$, its **slide**, and gives the edge labeled $x$ the coats $s + y$ and $s + z$, and likewise for the other two edges. Each edge is painted with the slide plus the labels of the other two edges.

So every node paints its half of each of its three edges, and each edge is painted from both ends. We have a painting exactly when the two halves of every edge carry the same two paints. With all slides 000, twelve of the Petersen graph's fifteen edges fail. What has to be proved is that suitable slides always exist.

## A toy problem: a ring that must alternate

Before the real problem, here is one where the answer is visible at a glance, so that we can watch a method work. Color the edges of a ring of six nodes orange and blue so that the colors alternate. Let every node solve its own small problem: it colors the half-edge on one side orange and the half on the other side blue. Its only choice is which way round.

[Figure 2, steps: A ring of six nodes. Each node colors one of its two half-edges orange and the other blue. Flipping two nodes makes the two halves of every edge agree, and the ring alternates.]

  - step: Every node has colored its two half-edges. A red ring marks an edge whose halves have different colors.
  - step: Flip the circled node, so that its orange and blue change places. One edge is mended and its neighbor breaks.
  - step: Flip the next node as well. Every edge agrees, and the colors alternate around the ring.
Now try the same with five nodes.

[Figure 3, steps: A ring of five nodes. Flipping a node moves the broken edge but never removes it. Each node colors exactly one half-edge orange, so there are five orange halves, and an odd number of them cannot be paired up along edges.]

  - step: With five nodes, one edge is broken.
  - step: Flip a node at one end of it. The broken edge moves along.
  - step: Flip the next node. It moves again, and it never goes away.
  - step: Count the orange halves. Every node colors exactly one, whichever way round it is, so there are five.
**Pause and try.** Before reading on: an edge whose halves agree has how many orange halves? What does that say about the total number of orange halves if every edge agrees? Compare with what the nodes supply.

**Answer.** An edge that agrees is orange on both halves or blue on both, so it has two orange halves or none. If every edge agreed, the orange halves would come in twos and their total would be even. But each node colors exactly one half orange, whatever its choice, so a ring of $n$ nodes has exactly $n$ orange halves. With $n = 5$ that is odd, so not every edge can agree. With $n = 6$ the count is even and nothing stands in the way.

The same argument can be written with equations, which is the form we will need. Record each node's choice as a bit, saying on which side its orange half lies. Call the bits $a, b, c, d, e$ around the ring of five. An edge agrees when the choices at its two ends are different, which for bits means that they add up to 1.

[Figure 4, image: The ring of five as five equations between bits, one for each edge. In the sum of all five every unknown appears twice and cancels, while the right-hand sides add up to 1.]

Add the five equations. On the left every unknown appears twice, and anything added twice is 0. On the right there are five 1s, which add up to 1. The sum reads $0 = 1$. The choices have dropped out, and what remains is the odd number five. No choice of bits can satisfy all five equations, since it would satisfy their sum.

Look at how the method went. Each node solved its own problem, with one free choice. The constraints were between neighbors only. Whether a solution for the whole ring exists came down to whether those constraints are compatible, and incompatibility showed up as a sum of equations reading $0 = 1$.

## Equations between bits fail only by adding up to 0 = 1

An equation between bits is *linear* if it says that the sum of some of the unknowns equals 0 or equals 1. For systems of such equations, the ring of five shows the only thing that can go wrong.

**Theorem.** (The only obstacle.) A finite system of linear equations between bits has no solution if and only if some of its equations add up to $0 = 1$: a sum in which every unknown cancels and the right-hand sides add up to 1.

**Proof.** If some equations add up to $0 = 1$, a solution of the system would satisfy their sum, which is impossible.

For the converse we show, by induction on the number of unknowns, that a system in which no selection of equations adds up to $0 = 1$ has a solution. With no unknowns, every equation reads $0 = 0$ or $0 = 1$, and by assumption none reads $0 = 1$, so there is nothing to solve. Otherwise pick an unknown $t$. If no equation contains it, drop it and use induction. If some equation $Q$ contains it, add $Q$ to every other equation that contains $t$, and set $Q$ aside. The new system has fewer unknowns. Any sum of its equations is also a sum of equations of the old system, with $Q$ added in some number of times, and two copies of $Q$ cancel. So no selection of the new equations adds up to $0 = 1$, and by induction the new system has a solution. Then $Q$ tells us the value of $t$, and the old equations hold, since each is a new equation, possibly with $Q$ added back.

This is elimination, as taught for [ordinary systems of equations](@algebra/systems-of-equations), carried out with bits. It turns the question "is there a solution?" into the question "can the equations be added up to $0 = 1$?", and the second question can be attacked by counting.

## Agreement written as equations

Back to the graph. Fix a cubic graph and a nowhere-zero three-bit flow $f$. For a node $v$ and an edge $e$ at $v$, let $c(v, e)$ be the label of one of the other two edges at $v$; pick either, once and for all. The other one is then $c(v, e) + f(e)$, because the three labels at $v$ add up to 000. So if $v$ has slide $s_v$, its half of $e$ carries the two paints

$$
s_v + c(v, e) \qquad \text{and} \qquad s_v + c(v, e) + f(e).
$$

**Pause and try.** Let $p \neq 000$. Two pairs $\{A, A + p\}$ and $\{B, B + p\}$ are the same pair exactly when $A + B$ takes one of two values. Which two?

**Answer.** The pairs are equal exactly when $A$ is one of $B$ and $B + p$ (the other member, $A + p$, is then the other one). That means $A + B = 000$ or $A + B = p$.

Apply this to an edge $e$ joining $u$ and $v$, with $A = s_u + c(u, e)$ and $B = s_v + c(v, e)$ and $p = f(e)$. Writing $d_e = c(u, e) + c(v, e)$, which is a known code, the two halves of $e$ agree exactly when $s_u + s_v + d_e$ is $000$ or $f(e)$. Introduce one more unknown bit $\varepsilon_e$ to say which.

**Theorem.** (Agreement.) Slides $s_v$ make the two halves of every edge agree if and only if there are bits $\varepsilon_e$, one for each edge, such that for every edge $e$ joining nodes $u$ and $v$

$$
s_u + s_v + \varepsilon_e f(e) = d_e,
$$

where $\varepsilon_e f(e)$ means $f(e)$ if $\varepsilon_e = 1$ and $000$ if $\varepsilon_e = 0$.

Each of these is an equation between codes, so it is three equations between bits, one for each column. The unknowns are the three bits of each slide and the bit $\varepsilon_e$ of each edge, and every equation is linear. For the Petersen graph that makes 45 equations in 45 unknowns. By the theorem on the only obstacle, a solution exists unless some of these equations add up to $0 = 1$.

## Adding up some of the equations

To describe a selection of equations we say, for each edge, which of its three columns are taken. Record that as a code $r_e$ with a 1 in each chosen column, and $000$ if none of that edge's equations are taken.

**Definition.** For two three-bit codes $r$ and $w$, the **dot product** $r \cdot w$ is the bit obtained by adding up the digits of $w$ in the columns where $r$ has a 1. For example $101 \cdot 110 = 1 + 0 = 1$ and $011 \cdot 110 = 1 + 0 = 1$ and $011 \cdot 111 = 1 + 1 = 0$.

Two rules follow column by column: $r \cdot (w + w') = r \cdot w + r \cdot w'$ and $(r + r') \cdot w = r \cdot w + r' \cdot w$. Also, $r \cdot w = 1$ for some $w$ forces $r \neq 000$.

Adding up the chosen columns of the equation of $e$ gives $r_e \cdot s_u + r_e \cdot s_v + \varepsilon_e \,(r_e \cdot f(e)) = r_e \cdot d_e$. Now add over all edges and ask when every unknown cancels. The unknown $\varepsilon_e$ occurs only in the equation of $e$, multiplied by $r_e \cdot f(e)$. A bit of the slide $s_v$ occurs in the equations of the three edges at $v$, and it cancels when the codes $r_e$ of those three edges have an even number of 1s in its column.

**Definition.** A **selection** is a choice of a code $r_e$ for every edge such that

- $r_e \cdot f(e) = 0$ for every edge $e$, and
- at every node, the codes $r_e$ of its three edges add up to 000.

An edge with $r_e \neq 000$ is called **selected**.

These are exactly the ways of adding up equations so that all unknowns cancel. What is left is $0 = \sum_e r_e \cdot d_e$, the sum over all edges. So the whole problem is now this: show that for every selection, the bits $r_e \cdot d_e$ add up to 0 and never to 1.

Since $d_e = c(u, e) + c(v, e)$, each edge contributes two bits, one for each of its halves. Call $r_e \cdot c(v, e)$ the **bit of the half-edge** of $e$ at $v$. (It does not depend on which of the two other labels was picked as $c(v, e)$, because they differ by $f(e)$ and $r_e \cdot f(e) = 0$.) Then

$$
\sum_{e} r_e \cdot d_e \;=\; \text{the sum of the bits of all half-edges},
$$

and we can add those up one node at a time, as we counted orange halves on the ring.

## What the bit of a half-edge measures

It helps to see these bits before computing with them. Take a label $p$ and a code $r \neq 000$ with $r \cdot p = 0$. The eight paints fall into four pairs that differ by $p$, and the two paints of a pair have the same dot product with $r$. So $r$ splits the eight paints into two groups of four without splitting any pair, and the bit of a half-edge says in which group its pair of paints lies. The edge's equation, tested with $r$, says that both halves lie in the same group.

[Figure 5, steps: The eight three-bit paints at the corners of a cube, joined in the four pairs that differ by 011. Each code r with r · 011 = 0 separates the paints into two groups of four, filled and hollow, without separating any pair.]

  - step: An edge labeled 011 can carry one of four pairs of paints, shown joined by gray lines.
  - step: The code r = 100 looks only at the first column. It puts two whole pairs in each group.
  - step: So does r = 011, which adds the last two columns.
  - step: And so does r = 111. These three are the only codes other than 000 with r · 011 = 0.
With two-bit labels the picture is smaller and can be drawn on the graph. There are four paints, an edge labeled $p$ can carry one of two pairs, and exactly one of those pairs contains the paint 00. So for the one nonzero $r$ with $r \cdot p = 0$, the bit of a half-edge says whether its pair is the one *without* 00. Mark those halves with a tick across the edge.

[Figure 6, steps: K_4 with two-bit labels. Every node paints its half of each edge, and a tick marks a half-edge whose two paints do not include the purple paint 00. Each node has one tick or three, whatever its slide, so the total is always even.]

  - step: All slides are 00. Each node's paints are 01, 10 and 11, so none of its halves has the purple paint 00: three ticks at every node. Every edge agrees.
  - step: Slide the top left node by 01. Now it uses 00, on two of its edges, and only its third half has a tick. Two edges break, each with a tick on one half only.
  - step: Slide the bottom right node by 11. It has one tick too. A node has one tick or three, so four nodes always have an even number in all.
This is the ring again, with one difference. On an edge that agrees, the ticks come in twos, so a solution needs an even number of ticks. The nodes supply an odd number each, as the nodes of the ring supplied one orange half each. But a cubic graph always has an even number of nodes, so here the supply is even and nothing stands in the way. With three bits there are more selections than this one, and we need to know what a node supplies in each.

## What one node supplies

**Theorem.** (The count at a node.) In any selection, at every node, the bits of the three half-edges at the node add up to the number of selected edges at the node, counted as odd or even.

The proof needs one fact about codes.

**Theorem.** (Blind codes.) Let $x$ and $y$ be different three-bit codes, neither 000. Then some code $u$ has $u \cdot x = 1$ and $u \cdot y = 0$. And exactly two codes $r$ have $r \cdot x = 0$ and $r \cdot y = 0$: the code 000 and one other.

**Proof.** For the first claim: if some column has a 1 in $x$ and a 0 in $y$, let $u$ have its only 1 there. Otherwise $y$ has a 1 wherever $x$ does, and since $y \neq x$, it also has a 1 in a column where $x$ has a 0. Let $u$ have 1s in that column and in one column where $x$ has a 1. Then $u \cdot x = 1$ and $u \cdot y = 1 + 1 = 0$.

For the second, sort the eight codes $r$ into four classes by the two bits $r \cdot x$ and $r \cdot y$. Take $u$ as above, and $u'$ with $u' \cdot y = 1$ and $u' \cdot x = 0$, which exists by the first claim with the roles exchanged. Adding $u$ to $r$ changes $r \cdot x$ and not $r \cdot y$; adding $u'$ changes only $r \cdot y$. So adding $u$, $u'$ or $u + u'$ matches the codes of the class with both bits 0 one for one with the codes of each other class. The four classes have equal size, $8 / 4 = 2$, and 000 is in the class with both bits 0.

**Proof.** (The count at a node.) Let the edges at the node be $a, b, c$ with labels $x, y, z$, and write $r_a, r_b, r_c$ for their codes. We know $x + y + z = 000$, the first rule of a selection gives $r_a \cdot x = r_b \cdot y = r_c \cdot z = 0$, and the second gives $r_a + r_b + r_c = 000$.

*All six cross products are equal.* Since $z = x + y$, we get $r_a \cdot z = r_a \cdot x + r_a \cdot y = r_a \cdot y$. In the same way $r_b \cdot x = r_b \cdot z$ and $r_c \cdot x = r_c \cdot y$. Taking the dot product of $r_a + r_b + r_c = 000$ with $x$ gives $r_b \cdot x + r_c \cdot x = 0$, so $r_b \cdot x = r_c \cdot x$; taking it with $y$ gives $r_a \cdot y = r_c \cdot y$. Chaining these, the six bits $r_a \cdot y$, $r_a \cdot z$, $r_b \cdot x$, $r_b \cdot z$, $r_c \cdot x$, $r_c \cdot y$ are all equal. Call their common value $\lambda$.

*The bits of the half-edges.* The bit of the half of $a$ is $r_a$ times the label of another edge at the node, which is $\lambda$, and the same holds for $b$ and $c$. So the three bits add up to $\lambda + \lambda + \lambda = \lambda$.

*The selected edges.* If $\lambda = 1$, each of $r_a, r_b, r_c$ has dot product 1 with some code, so none is 000: three edges are selected, an odd number. If $\lambda = 0$, each of them has dot product 0 with both $x$ and $y$. These are different codes, neither 000, because $x + y = z \neq 000$. So by the theorem on blind codes each of $r_a, r_b, r_c$ is 000 or the one other code $m$ with that property. They add up to 000, so $m$ occurs an even number of times: no edge or two edges are selected. In both cases the number of selected edges is odd exactly when $\lambda = 1$.

Notice what happened to the slides. A node may slide its paints in eight ways, and the bit of each half-edge is computed without them: they cancelled when we added up the equations. On the ring every node supplied one orange half however it was flipped. Here a node supplies, as odd or even, as many as it has selected edges.

## Every edge has two ends

**Theorem.** (Handshake lemma.) In any graph, pick any set of edges, and at each node count the edges of the set that end there. These counts add up to twice the number of edges in the set.

**Proof.** Each edge of the set has two ends, at two different nodes, and is counted once at each.

The [lesson on Euler paths](@discrete-math/graphs-euler-paths) uses the same count for all the edges of a graph.

**Pause and try.** A selection has ten selected edges. Knowing nothing else about it, what do the numbers of selected edges at the ten nodes add up to?

**Answer.** Twenty. Each selected edge ends at two nodes and is counted once at each.

[Figure 7, steps: A selection on the Petersen graph. Ten edges are selected, and the number of selected edges ending at each node is written beside it. The ten numbers add up to twenty, because each selected edge is counted at both of its ends.]

  - step: A selection. The orange edges are the selected ones, each with its code. The scene has checked both rules against the labels of the flow.
  - step: Beside each node, write the number of selected edges that end there.
  - step: The ten numbers add up to twenty, twice the number of selected edges.
  - step: At every node the bits of its three half-edges add up to an odd number exactly when the number beside it is odd. So the bits of all the half-edges add up to an even number.
Everything is now in place.

**Theorem.** (From a flow to a painting. OpenAI, 2026.) Let $G$ be a cubic graph with a nowhere-zero three-bit flow. Then every node can be given a slide so that the two halves of every edge agree. Hence $G$ has a painting, with at most eight paints.

**Proof.** By the theorem on agreement we must solve a system of linear equations between bits, and by the theorem on the only obstacle it has a solution unless some of the equations add up to $0 = 1$. The ways of adding up equations so that every unknown cancels are the selections, and for a selection the sum reads $0 = \sum_e r_e \cdot d_e$, which is the sum of the bits of all half-edges. Add those up node by node. By the count at a node, the node $v$ contributes the number of selected edges at $v$, as odd or even. By the handshake lemma those numbers add up to twice the number of selected edges, which is even. So the sum is 0, for every selection, and no sum of equations reads $0 = 1$. The system has a solution. The slides it gives make every edge agree, each edge then has two coats that differ by its nonzero label, and at each node every paint is on two edges or none. That is a painting, and its paints are three-bit codes, of which there are eight.

**Key idea.** An edge's two halves agree when a linear equation between bits holds. Equations between bits can only fail by adding up to $0 = 1$. Here what they add up to is a count of the ends of some edges, and every edge has two ends.

**Common mistake.** **Thinking the count works because the number of nodes is even.** That was enough on $K_4$ with two bits, where every node supplied an odd number. In general a node supplies as many as it has selected edges, which may be none, two or three, and different nodes differ. The total is even because it counts edge ends, and the number of nodes plays no part.

**Common mistake.** **Forgetting that an equation must be tested in every combination.** It is not enough that the 45 equations, added all together, give $0 = 0$. A system fails if *any* selection gives $0 = 1$, which is why the count at a node had to be proved for every selection and not for one.

## The Petersen graph, solved

Solving the 45 equations for the Petersen graph, by elimination, tells each node how far to slide. One solution is the one the opening figure moves to.

[Figure 8, steps: The Petersen graph with slides that solve the equations. The two halves of every edge agree, and following any one paint gives a cycle of five edges. Six paints are used.]

  - step: With these slides, the two halves of every edge carry the same two paints.
  - step: Follow one paint. It runs along five edges and closes into a cycle.
  - step: So does the next.
  - step: Six paints are in use, each a single cycle of five edges, and every edge has two of them: 6 times 5 is 30, twice 15.
A computer search over all slides finds 16 solutions for this labeling. Adding the same code to every slide turns a solution into another, which accounts for a factor of 8, so there are two kinds. One is shown. The other uses only five paints, whose cycles have 5, 5, 5, 6 and 9 edges.

## The whole proof

**Theorem.** (Cycle double cover theorem.) Every bridgeless graph has a cycle double cover.

**Proof.** By the reduction in the first lesson, it is enough to treat a bridgeless cubic graph $G$. By the theorem of Jaeger and Kilpatrick, which we cite, $G$ has a nowhere-zero three-bit flow. By the theorem above, $G$ then has a painting. By the theorem on paint and cycles from the first lesson, walking along each paint turns the painting into a cycle double cover.

**Worked example.** **Running the proof on $K_4$ with three-bit labels.** $K_4$ has nodes $1, 2, 3, 4$. Label the edges $12$ and $34$ with 011, the edges $13$ and $24$ with 101, and $14$ and $23$ with 110. Every node sees 011, 101 and 110, which add up to 000, so this is a nowhere-zero three-bit flow.

Give every node the slide 000. Then each half of an edge labeled 011 carries the other two labels at its node, 101 and 110, at both ends. The same holds for the other labels, so every edge agrees and no equation needs solving. The painting uses three paints: 011 on the four edges labeled 101 or 110, and so on.

*Check.* Paint 011 is on the edges $13, 24, 14, 23$, which form the cycle $1, 3, 2, 4$. The other two paints give the cycles $1, 2, 4, 3$ and $1, 2, 3, 4$. Each edge is on two of the three.

## Who proved what, and what is open

George Szekeres (1973) and Paul Seymour (1979) stated the conjecture; Alon Itai and Michael Rodeh gave an equivalent form in 1978, and OpenAI's note also credits W. T. Tutte. The reduction to cubic graphs and the painting from a 3-edge-coloring are classical. The flow theorem is due to P. A. Kilpatrick (1975) and François Jaeger (1976, 1979). In 1983 Bermond, Jackson and Jaeger built from the flow seven sets of cycles covering every edge four times.

The new step is the theorem from a flow to a painting: read each label as the difference between two paints, let every node slide its triangle of paints, and notice that agreement between neighbors is a matter of adding bits. OpenAI published it in July 2026 in a note of under three pages, which states that the proof is entirely due to its model GPT 5.6 Sol Ultra. The prompt, also published, told the model to assume that a complete proof exists and to keep working for at least eight hours. OpenAI has also released a formalization of the theorem, for graphs as defined in the first lesson, that the Lean proof assistant checks. Jim Geelen and Sang-il Oum each wrote the argument out in their own way within weeks; the symmetric choice of paints at a node and the form of the count at a node used here follow Oum's exposition. A paper by Shiva Kintali, posted the same week as OpenAI's note and written with OpenAI's Codex, gives a proof along the same lines starting from Seymour's 6-flow theorem.

The subject is not finished. This construction can use up to eight paints. Uldis Celmins and Myriam Preissmann conjectured in the 1980s that five are always enough, and that five cycle double cover conjecture is still open.

The idea worth keeping is the one the ring showed. Solve the problem at every node separately. Write what neighbors must agree on as differences. Differences add up, and what adds up can be counted.

**Check yourself.** In a selection, how many of the three edges at a node can be selected?
Answer: 0, 2 or 3 If one edge has a nonzero code, the other two codes add up to it, so they are not both 000. All of 0, 2 and 3 occur in the selection shown on the Petersen graph.

**Recap.** - Every node paints its half of each edge with its slide plus the labels of the other two edges. The two halves of an edge $e$ from $u$ to $v$ agree exactly when $s_u + s_v + \varepsilon_e f(e) = d_e$ for a bit $\varepsilon_e$. These are linear equations between bits.
- A system of linear equations between bits has a solution unless some of its equations add up to $0 = 1$.
- The ways to add up the agreement equations so that the unknowns cancel are the selections: codes $r_e$ with $r_e \cdot f(e) = 0$ on every edge and adding up to 000 at every node.
- For a selection, what a node contributes to the right-hand side is odd or even according to the number of selected edges at the node. Added over all nodes this counts every selected edge twice, so the total is even and $0 = 1$ never appears.
- Hence every cubic graph with a nowhere-zero three-bit flow has a painting, and every bridgeless graph has a cycle double cover. The flow theorem of Jaeger and Kilpatrick is cited; everything else was proved. Whether five paints always suffice is open.

## Problems

The first three practice the tools, the next three look at the proof, and the last asks where three bits were used.

**Problem 1.** Three unknown bits satisfy $a + b = 1$, $b + c = 1$ and $c + a = 0$. Which selections of these equations make all the unknowns cancel? Does the system have a solution? What changes if the third equation is $c + a = 1$?

**Solution.** Each unknown is in exactly two equations, so it cancels only if both or neither of those are taken; that forces all three equations or none. The sum of all three is $0 = 1 + 1 + 0 = 0$, so by the theorem on the only obstacle there is a solution, for instance $a = 0$, $b = 1$, $c = 0$. With $c + a = 1$ the sum is $0 = 1$ and there is none: this is a ring of three.

**Problem 2.** Compute $101 \cdot 110$ and $111 \cdot 011$. List every code $r$ with $r \cdot 011 = 0$.

**Solution.** $101 \cdot 110$ adds the first and third digits of 110: $1 + 0 = 1$. $111 \cdot 011$ adds all the digits of 011: $0 + 1 + 1 = 0$. For $r \cdot 011 = 0$, the last two digits of $r$ must be equal, and the first is free: 000, 100, 011, 111.

**Problem 3.** An edge $e$ from $u$ to $v$ has label 011. The other two labels at $u$ are 110 and 101, and the other two at $v$ are 001 and 010. If $s_u = 000$, which slides $s_v$ make the two halves of $e$ agree?

**Solution.** Take $c(u, e) = 110$ and $c(v, e) = 001$, so $d_e = 110 + 001 = 111$. The equation $s_u + s_v + \varepsilon_e f(e) = d_e$ with $s_u = 000$ gives $s_v = 111$ when $\varepsilon_e = 0$ and $s_v = 111 + 011 = 100$ when $\varepsilon_e = 1$. Check: the half at $u$ carries $\{110, 101\}$. With $s_v = 111$ the half at $v$ carries $\{111 + 001, 111 + 010\} = \{110, 101\}$, and with $s_v = 100$ it carries $\{101, 110\}$. The other six slides fail.

**Problem 4.** In a selection, show that no node has exactly one selected edge. Deduce that the selected edges form a graph in which every node has degree 0, 2 or 3, and that the number of nodes of degree 3 is even.

**Solution.** If exactly one of the three codes at a node were different from 000, the three would add up to that code and not to 000, against the second rule. So the number of selected edges at a node is 0, 2 or 3. By the handshake lemma these numbers add up to an even number. The nodes with 0 or 2 contribute an even amount, so the nodes with 3 contribute an even amount as well, which requires an even number of them.

**Problem 5.** At a node with labels $x = 110$, $y = 011$, $z = 101$, find the code $m \neq 000$ with $m \cdot x = m \cdot y = 0$. Then list all triples $r_a, r_b, r_c$ that obey the two rules of a selection at this node and have $\lambda = 0$.

**Solution.** $m \cdot 110 = 0$ says the first two digits of $m$ are equal, and $m \cdot 011 = 0$ says the last two are equal, so $m = 111$. (Then $m \cdot z = 1 + 1 = 0$ too.) With $\lambda = 0$ each code is 000 or 111 and the three add up to 000, so the triples are $(000, 000, 000)$, $(111, 111, 000)$, $(111, 000, 111)$ and $(000, 111, 111)$. They have 0 or 2 nonzero members, as the count at a node says.

**Problem 6.** On the ring of five, each node supplied one orange half and the argument ended in $0 = 1$. In the theorem from a flow to a painting, each node supplies an odd or even number as well, and the argument ends in $0 = 0$. State precisely what is counted in each case and why one count can be odd and the other cannot.

**Solution.** On the ring, the total is the number of orange half-edges. Each node colors exactly one half orange, so the total is the number of nodes, which may be odd. In the theorem, the total is the sum of the bits of all half-edges for a given selection. By the count at a node, each node contributes the number of selected edges ending at it, as odd or even, so the total has the parity of the number of ends of selected edges. Each selected edge has two ends, so that number is twice the number of selected edges and is always even. One total counts nodes and the other counts ends of edges.

**Problem 7.** Where did the proof use that the labels have three bits? Examine the theorem on blind codes for four-bit codes $x \neq y$, and show by an example that the last step of the count at a node fails as written.

**Solution.** The count at a node used that only 000 and one other code $m$ have dot product 0 with both $x$ and $y$. With four bits, the same class-matching argument gives four classes of size $16 / 4 = 4$, so four codes are blind to $x$ and $y$: 0000, $m_1$, $m_2$ and $m_1 + m_2$. For example with $x = 1000$, $y = 0100$ and $z = 1100$, the blind codes are 0000, 0010, 0001, 0011. Take $r_a = 0010$, $r_b = 0001$, $r_c = 0011$. They add up to 0000 and each has dot product 0 with all of $x, y, z$, so both rules hold and $\lambda = 0$. But all three are nonzero, an odd number, while the half-edge bits add up to $\lambda = 0$. So the argument as given does not go through for four-bit labels, and three bits are what Jaeger's theorem provides.

# Nowhere-zero flows and the cycle double cover conjecture

> Give every paint a code of bits and label each edge with the difference of its two coats. Why such labels always exist, and why they are only half a proof.

Series: AI Proofs (https://www.monocurl.com/monocurl-essays/ai-proofs/)
Canonical: https://www.monocurl.com/monocurl-essays/ai-proofs/nowhere-zero-flows/
Keywords: nowhere-zero flow, 8-flow theorem, Jaeger's theorem, cycle double cover conjecture, arithmetic mod 2, Petersen graph, 3-edge-coloring, spanning tree

[Figure 1, animation: A three-bit code on every edge of the Petersen graph. No code is 000, and at every node the three codes add up to 000. Each column of the codes, taken alone, marks out a closed route: blue for the first column, orange for the second, green for the third.]

Here is a puzzle that seems to have nothing to do with cycles. Write a code of three bits on every edge of the Petersen graph, never 000, so that at every node the three codes add up to 000, where the columns are added separately and $1 + 1$ counts as $0$. The figure shows a solution. At the top node the codes are 111, 011 and 100: the first column holds $1, 0, 1$, the second $1, 1, 0$ and the third $1, 1, 0$, and each of those adds up to an even number.

Labelings like this are half of the proof of the cycle double cover conjecture. They have been known to exist on every bridgeless graph since the 1970s. The other half, turning the labels into cycles, was missing for fifty years, and seeing why the labels are the right thing to look for makes the gap easy to state.

## What the first lesson established

The [first lesson](@ai-proofs/cycle-double-cover-conjecture) set the target: every bridgeless graph has a **cycle double cover**, a list of cycles with every edge on exactly two of them. It made two simplifications. It is enough to treat **cubic** graphs, those with three edges at every node. And a cycle double cover is the same thing as a **painting**: every edge gets two coats in two different paints, and at every node each paint is on two of the edges or on none. In a cubic graph that forces exactly three paints at each node, one shared by each pair of edges.

A 3-edge-coloring gives a painting with three paints, but the Petersen graph has no 3-edge-coloring. So some graphs need more paints, and then there is no coloring to start from.

## A plan in two steps

Searching for a whole painting at once is hopeless, so here is a plan that splits the job.

- For every edge, forget which two paints it has and record only how the two differ.
- Rebuild the paints from the differences.

That only makes sense if paints are things that can be subtracted, so the first task is to choose the right kind of number.

## Arithmetic that only remembers odd and even

Look again at the rule for a painting: at a node, a paint is on two edges or none, never on one or three. The rule only cares whether a count is odd or even. So we use the arithmetic that remembers nothing else. It has two numbers, 0 for even and 1 for odd, and its addition table says that even plus odd is odd and odd plus odd is even:

$$
0 + 0 = 0, \qquad 0 + 1 = 1 + 0 = 1, \qquad 1 + 1 = 0.
$$

This is [arithmetic modulo 2](@discrete-math/modular-arithmetic). One bit can tell only two paints apart, so we use several bits side by side.

**Definition.** A **code** of $k$ bits is a row of $k$ digits, each 0 or 1. Two codes of the same length are added one column at a time by the table above, and nothing is carried from one column to the next. The code made of zeros is written $0$.

[Figure 2, steps: Adding the codes 101 and 011 one column at a time, and then adding 011 to the result a second time. The second addition undoes the first.]

  - step: First column: 1 + 0 = 1.
  - step: Second column: 0 + 1 = 1.
  - step: Third column: 1 + 1 = 0. Nothing is carried, so the sum is 110.
  - step: Now add 011 to the answer, a second time.
  - step: The result is 101, the code we started with. Adding a code twice does nothing.
Three facts about this addition carry the whole lesson, and each can be read off one column at a time.

- **A code added to itself gives zero**: $x + x = 0$, because $0 + 0 = 0$ and $1 + 1 = 0$. So adding $x$ twice does nothing, and subtracting $x$ is the same as adding it.
- **The sum of two codes shows where they disagree**: a column of $x + y$ is 1 exactly when $x$ and $y$ differ there. So $x + y$ is also the difference between $x$ and $y$, and $x + y = 0$ exactly when $x = y$.
- **Order and grouping do not matter**, since that is true of addition in each column.

**Pause and try.** Compute $110 + 011$. Then find the code $c$ with $101 + c = 011$, without trial and error.

**Answer.** Column by column, $110 + 011 = 101$. For the second, add $101$ to both sides: the left side becomes $101 + 101 + c = c$, so $c = 101 + 011 = 110$. The code that turns one code into another is their sum.

**Common mistake.** **Carrying.** A code is not a number written in binary. As binary numbers, $101 + 011$ is $5 + 3 = 8$, written $1000$. As codes the sum is $110$, three digits long like every sum of three-bit codes. If a carry appears, the rule $x + x = 0$ fails and everything below fails with it.

## Difference labels

Now let the paints be codes, and carry out step 1 of the plan on a painting we already have. In the first lesson the 3-edge-coloring of $K_4$ gave three paints. Name them 00, 01 and 10.

**Definition.** In a painting whose paints are codes, the **difference label** of an edge, or just its **label**, is the sum of its two coats.

[Figure 3, steps: The three paints of K_4 named by two-bit codes. The label of each edge is the sum of its two coats, and edges of the same color in the original 3-edge-coloring get the same label.]

  - step: Name the three paints 00, 01 and 10.
  - step: The left side has coats 00 and 01. They differ in the second column only, so its label is 01.
  - step: The bottom side has 00 and 10, and its label is 10.
  - step: A diagonal has 01 and 10, which disagree in both columns. Its label is 11.
  - step: The other three edges go the same way. The label 01 is on the edges that were orange, 10 on the blue ones and 11 on the green ones.
So on $K_4$ the color of an edge was a record of how its two paints differ. Now look at what the labels do at a node.

**Pause and try.** At the top left corner of the square the three labels are 01, 11 and 10. Add them. Do the same at another corner. Then explain the result, using the fact that the three edges at a node carry three paints $a, b, c$, one shared by each pair of edges.

**Answer.** $01 + 11 + 10 = 00$, and every other corner has the same three labels. The reason: the three edges have coats $\{a, b\}$, $\{b, c\}$ and $\{c, a\}$, so their labels are $a + b$, $b + c$ and $c + a$. In the sum of the three, each paint appears twice, and a code added twice is zero.

[Figure 4, steps: The labels at two corners of K_4, added column by column. Each column contains two 1s, so the sum is 00.]

  - step: At the top left corner the labels are 01, 11 and 10.
  - step: Add them. Each column holds two 1s, and they cancel.
  - step: The bottom right corner has the same three labels in another order, and the same sum.
Nothing in that explanation used $K_4$ or two bits.

**Theorem.** (Labels of a painting.) Take a painting of a cubic graph whose paints are codes of $k$ bits. Then the label of every edge is different from 0, and at every node the three labels add up to 0.

**Proof.** The two coats of an edge are different paints, and two different codes have a sum different from 0. At a node, the first lesson showed that there are three paints $a, b, c$ and that the three edges carry $\{a, b\}$, $\{b, c\}$, $\{c, a\}$. The labels add up to $(a + b) + (b + c) + (c + a) = (a + a) + (b + b) + (c + c) = 0$.

Both properties are checked at one edge or one node at a time, with no mention of paint. That is the point of the plan: labels can be hunted for directly, and they are far easier to find than paintings.

**Definition.** A **nowhere-zero flow** on a graph, with values in codes of $k$ bits, is a labeling of the edges by $k$-bit codes such that no label is 0 and, at every node, the labels of the edges at that node add up to 0. I will call it a nowhere-zero $k$-bit flow.

The name comes from a more general setting in which labels are numbers that flow along directed edges, with as much flowing into each node as out of it. With codes, $x = -x$, so no directions are needed. In the literature the set of $k$-bit codes with this addition is written $\mathbb{F}_2^k$ or $\mathbb{Z}_2^k$.

**Common mistake.** **Reading a label as a paint.** The label 01 on an edge does not say that paint 01 is on that edge. It says that the two paints on the edge differ in the last column and nowhere else. The pairs $\{00, 01\}$ and $\{10, 11\}$ both have label 01. An edge has one label and two coats.

## Two bits are the three colors again

How many bits do the labels need? Try two.

**Pause and try.** In a nowhere-zero two-bit flow on a cubic graph, can two of the three edges at a node have the same label?

**Answer.** No. If two of them were $x$ and $x$, they would add up to 0, and the third label would have to be 0 for the three to add up to 0. That is not allowed.

**Theorem.** (Two-bit flows.) A cubic graph has a nowhere-zero two-bit flow if and only if it has a 3-edge-coloring.

**Proof.** There are three two-bit codes other than 00, namely 01, 10 and 11, and $01 + 10 + 11 = 00$. Given a 3-edge-coloring, label the edges of the three colors 01, 10 and 11. Every node sees each color once, so its labels add up to 00, and no label is 00. Conversely, given a nowhere-zero two-bit flow, the exercise above shows that the three labels at a node are all different, so they are 01, 10 and 11 in some order. Calling these three codes colors gives a 3-edge-coloring.

So two-bit flows and 3-edge-colorings are the same thing, and the Petersen graph, which has no 3-edge-coloring, has no nowhere-zero two-bit flow.

## Three bits are always enough

With a third bit there are eight codes for paints and seven possible labels. Here the 1970s supply a theorem.

**Theorem.** (Jaeger; Kilpatrick.) Every bridgeless graph has a nowhere-zero three-bit flow.

P. A. Kilpatrick proved this in a 1975 thesis at the University of Cape Town, and François Jaeger found it independently, in work presented in 1975 and published in 1976 and 1979. It is known as the 8-flow theorem, because by a 1954 theorem of W. T. Tutte a graph has a nowhere-zero flow with values in a commutative group of eight elements, such as the three-bit codes, exactly when it has one whose values are nonzero whole numbers between $-7$ and $7$, flowing along directed edges. We will use the theorem without proving it. The next section sketches where it comes from.

[Figure 5, image: The nowhere-zero three-bit flow on the Petersen graph from the opening figure. The sum at the top node is worked on the right, and the scene has checked the sum at all ten nodes.]

## Why the theorem is believable: a sketch

*This section is a sketch. It proves everything except one cited theorem about trees and one reduction, and I will say where those are.*

Read a three-bit labeling one column at a time. The first column selects some edges, those whose first bit is 1. The labels at a node add up to 0 in that column exactly when the node has an even number of selected edges. And a label is different from 000 exactly when its edge is selected by at least one column. So a nowhere-zero three-bit flow is the same thing as three sets of edges, each meeting every node an even number of times, that together contain every edge. In the opening figure those are the three colored routes.

Sets of edges that meet every node an even number of times are easy to make from a **spanning tree**, which is a set of edges that connects all the nodes and contains no cycle.

[Figure 6, steps: Building one column of the labeling from a spanning tree of the Petersen graph. Each edge outside the tree closes one cycle, and the edges used by an odd number of the six cycles are exactly the edges whose first bit is 1 in the labeling above.]

  - step: A spanning tree of the Petersen graph: nine edges that connect all ten nodes and contain no cycle.
  - step: Take one of the six edges outside the tree. Together with tree edges it closes exactly one cycle.
  - step: Do this for all six outside edges, and write on every edge how many of the six cycles use it.
  - step: Keep the edges with an odd count. Every node meets two of them or none, and all six outside edges are among them.
Here is why that works for any spanning tree $T$ of any connected graph. An edge $e$ outside $T$ closes exactly one cycle $C_e$ with it, namely $e$ together with the route through the tree between its ends. Let $S$ be the set of edges that lie on an odd number of the cycles $C_e$. Each cycle meets each node in two edges or none, so adding up over all the cycles, each node meets an even number of edge uses, and therefore an even number of edges that are used an odd number of times. And each outside edge lies on exactly one of the cycles, its own, so it belongs to $S$. Thus $S$ meets every node an even number of times and contains every edge outside $T$.

Now suppose we have three spanning trees with no edge in all three. Each tree gives a set $S$, and each edge is outside at least one of the trees, so it lies in at least one of the three sets. Those three sets are a nowhere-zero three-bit flow.

The existence of three such trees is the part I am citing. Call a graph 3-edge-connected if it stays connected when any two edges are deleted; the Petersen graph is an example. Replace each edge of such a graph by two parallel edges. The doubled graph stays connected when any five edges are deleted, and a theorem of Tutte and Nash-Williams from 1961 then provides three spanning trees that share no edges. Back in the original graph, no edge is in all three trees, because it had only two copies. For bridgeless graphs that are not 3-edge-connected a further reduction is needed, which I omit.

For the Petersen graph nothing has been left out: the labeling in the figures is the one that three particular spanning trees produce, and the figure above shows the first of them.

## The stripes are not the cycles we want

The three columns give three sets of cycles, and every edge is on at least one of them. It is tempting to hope that they are the cycle double cover. Count how many of the three run along each edge.

[Figure 7, image: The number of 1s in the label of each edge of the Petersen graph, which is the number of the three colored routes that use the edge. A cycle double cover needs exactly two on every edge.]

Six edges have one, six have two and three have all three. For decades the labels were used in this direct way, by picking out cycles one combination of columns at a time, and some edges were always reached too often. The best result of that kind is from 1983: Jean-Claude Bermond, Bill Jackson and François Jaeger took all seven combinations of the three sets and showed that every edge lies on exactly four of them. (A problem below asks you to prove it.) Four times is not twice.

The stripes are still what makes the labels exist. The idea that was missing is to read a label as the theorem on labels of a painting suggests: as the difference between the two coats of its edge.

## Back from labels to paint, at one node

Now for step 2 of the plan. Suppose we are handed a nowhere-zero flow and want a painting whose labels are that flow. At a single node there is nothing to it.

[Figure 8, steps: Rebuilding the three paints at a node from its labels 01, 11 and 10. The paint in one sector is a free choice, each label gives the paint across its edge, and a different first choice moves all three paints together.]

  - step: The labels at this node are 01, 11 and 10. Pick any paint for the first sector, say 00.
  - step: Cross the edge labeled 01. The paint on its other side must differ from 00 by 01, so it is 01.
  - step: Cross the edge labeled 11. The next paint is 01 + 11 = 10.
  - step: Crossing the last edge gives 10 + 10 = 00, the paint we began with. It had to, because the three labels add up to 00.
  - step: Begin with 11 instead, and all three paints change by 11. The first paint is the only choice there is.
The three paints at a node form a triangle among the codes, and the only freedom is to move the whole triangle. Stated without reference to a starting sector:

**Theorem.** (Paints at one node.) Let the three edges at a node have labels $x, y, z$, all different from 0, with $x + y + z = 0$. Suppose each of the three edges is to get two coats so that every paint used is on exactly two of the three edges and the coats of each edge differ by its label. The ways to do this are exactly the following, one for each code $s$: the edge labeled $x$ gets the coats $s + y$ and $s + z$, the edge labeled $y$ gets $s + x$ and $s + z$, and the edge labeled $z$ gets $s + x$ and $s + y$.

**Proof.** First, this works. The coats of the edge labeled $x$ differ by $(s + y) + (s + z) = y + z$, and $y + z = x$ because $x + y + z = 0$; the other two edges are alike. The three paints $s + x$, $s + y$, $s + z$ are different, since two equal labels would force the third to be 0, and each is on exactly two edges.

Conversely, take any such choice of coats. By the count of coat ends from the first lesson there are three paints, one shared by each pair of edges. Let $p$ be the paint shared by the edges labeled $y$ and $z$, let $q$ be the one shared by $x$ and $z$, and $r$ the one shared by $x$ and $y$. The edge labeled $y$ carries $p$ and $r$, so $p + r = y$, and likewise $p + q = z$. Put $s = p + x$. Then $s + x = p$, and $s + y = p + x + y = p + z = q$, and $s + z = p + x + z = p + y = r$. So the coats are the ones described, for this $s$.

I will call $s$ the **slide** of the node. In words, the paint between two edges is the slide plus the label of the third edge, and sliding by $t$ adds $t$ to all three paints. With three bits the codes sit at the corners of a cube, and the triangle has eight positions.

[Figure 9, animation: The top node of the Petersen graph, with labels 111, 011 and 100, and its triangle of three paints among the eight three-bit codes. As the slide runs through all eight codes the three paints move together, and each edge keeps a pair of paints that differ by its label.]

**Worked example.** **The paints at a node of the Petersen graph.** At the top node the labels are $x = 111$, $y = 011$, $z = 100$. With slide $s = 000$ the three paints are the labels themselves: the edge labeled 111 gets the coats 011 and 100, the edge labeled 011 gets 111 and 100, and the edge labeled 100 gets 111 and 011.

*Check.* $011 + 100 = 111$, $111 + 100 = 011$ and $111 + 011 = 100$, so each edge's coats differ by its label, and each of the three paints is on two edges.

With slide $s = 110$ the paints become $110 + 111 = 001$, $110 + 011 = 101$ and $110 + 100 = 010$. The edge labeled 111 now has coats 101 and 010, which still differ by 111.

## The pieces do not fit by themselves

Let every node choose a slide and paint its own half of each of its three edges. Each edge is then painted twice, once from each end, and we have a painting exactly when the two halves of every edge carry the same two paints.

With two-bit labels this takes care of itself. Give every node the slide 00. The half of an edge labeled $x$ gets the labels of the other two edges at its node, and by the theorem on two-bit flows those are always the two nonzero codes other than $x$. Both ends agree, on every edge. This is the painting from the first lesson with its paints renamed: the paint called 01 is on exactly the edges labeled 10 and 11, which is the cycle formed by two of the three colors.

With three bits the two ends of an edge see different neighbors, and nothing forces them to agree.

[Figure 10, steps: Every node of the Petersen graph paints its half of each of its edges. A red ring marks an edge whose two halves carry different pairs of paints. Sliding nodes one at a time mends some edges and then gets stuck.]

  - step: Every node has slide 000, so each half of an edge carries the labels of the other two edges at its node. On twelve of the fifteen edges the two halves do not match.
  - step: Slide the ringed node by 001. Its three paints change, and nine broken edges are left.
  - step: Slide two more nodes, by 011 and 101. Three broken edges are left.
  - step: Now every slide of a single node leaves at least three broken edges. Mending one edge breaks another.
There are eight slides at each of ten nodes, $8^{10}$ settings in all, which is more than a billion, and fixing edges one at a time moves the trouble around. More to the point, we want an argument for every graph and every labeling.

So here is exactly what is established and what is missing. Every bridgeless cubic graph has a nowhere-zero three-bit flow (Jaeger and Kilpatrick, cited). At each node, the paintings of its three half-edges that fit the labels are known completely: there are eight, one for each slide. What is missing is a reason why the slides can always be chosen so that the two halves of every edge agree. That was the open half for fifty years, and the [third lesson](@ai-proofs/cycle-double-cover-proof) proves it.

**Check yourself.** Two of the three edges at a node of a cubic graph have labels 101 and 110 in a nowhere-zero three-bit flow. What is the third label?
Answer: 011 The third label $z$ satisfies $101 + 110 + z = 000$, so $z = 101 + 110$. The codes differ in the last two columns, so $z = 011$.

**Recap.** - Codes are rows of bits added column by column with $1 + 1 = 0$ and no carry. Then $x + x = 0$, and $x + y$ marks the columns where $x$ and $y$ differ.
- If paints are codes, the label of an edge is the sum of its two coats. In any painting of a cubic graph no label is 0 and the three labels at each node add up to 0. A labeling with those two properties is a nowhere-zero flow.
- Nowhere-zero two-bit flows on a cubic graph are exactly its 3-edge-colorings. Every bridgeless graph has a nowhere-zero three-bit flow (Jaeger; Kilpatrick): three spanning trees with no common edge give its three columns.
- At one node with labels $x, y, z$, the paintings that fit the labels are: paints $s + x$, $s + y$, $s + z$ for a slide $s$, with each edge carrying the two paints that do not involve its own label.
- Still missing: a choice of slides for which the two halves of every edge agree.

## Problems

The first three are practice with codes and labels, the next three ask for short proofs, and the last one proves that Jaeger's theorem cannot be extended to graphs with bridges.

**Problem 1.** Compute $1011 + 0110$ and $1011 + 0110 + 1101$. Find the code $c$ with $1011 + c = 0110$.

**Solution.** Column by column, $1011 + 0110 = 1101$. Adding $1101$ to that gives $0000$, since a code added to itself is zero. For the last part, add $1011$ to both sides: $c = 1011 + 0110 = 1101$.

**Problem 2.** In a nowhere-zero three-bit flow, two of the labels at a node are 110 and 011. Find the third label. Then list the coats of the three edges when the node's slide is 000, and again when it is 101.

**Solution.** The third label is $110 + 011 = 101$. With slide 000 the paints are the labels: the edge labeled 110 gets $\{011, 101\}$, the edge labeled 011 gets $\{110, 101\}$, and the edge labeled 101 gets $\{110, 011\}$. With slide 101, add 101 to every paint: the paints become $110 + 101 = 011$, $011 + 101 = 110$ and $101 + 101 = 000$, so the edge labeled 110 gets $\{110, 000\}$, the edge labeled 011 gets $\{011, 000\}$, and the edge labeled 101 gets $\{011, 110\}$. In each case the two coats differ by the label.

**Problem 3.** The cube has a painting with three paints, found in the first lesson from its three kinds of edges: horizontal, vertical and slanted. Name the paints 00, 01, 10 so that horizontal edges carry $\{00, 01\}$, vertical edges $\{00, 10\}$ and slanted edges $\{01, 10\}$. Find all the labels and check the sum at a node.

**Solution.** Horizontal edges get $00 + 01 = 01$, vertical edges $00 + 10 = 10$ and slanted edges $01 + 10 = 11$. Every node of the cube has one edge of each kind, so its labels are 01, 10 and 11, which add up to 00.

**Problem 4.** Show that no cubic graph has a nowhere-zero one-bit flow.

**Solution.** The only one-bit code other than 0 is 1, so every label would be 1. At a node the three labels would add up to $1 + 1 + 1 = 1$, not 0.

**Problem 5.** Take a nowhere-zero three-bit flow on a cubic graph and let $S$ be the set of edges whose first bit is 1. Show that the edges of $S$ form cycles, no two of which share a node.

**Solution.** The labels at a node add up to 000, so in the first column the three bits add up to 0. Hence an even number of the three edges at the node are in $S$: two or none. That is the condition a single paint satisfies in a painting, and the walking argument from the first lesson applies word for word: start on an edge of $S$, leave each node by its other edge of $S$, and the walk closes into a cycle; repeat on what is left. Two of these cycles cannot share a node, because that node would meet four edges of $S$.

**Problem 6.** $K_4$ has nodes $a, b, c, d$. Take the spanning tree made of the three edges at $d$. Find the cycle that each of the other three edges closes with the tree, and the set of edges that lie on an odd number of those cycles.

**Solution.** The edge $ab$ closes the cycle $a, b, d$; the edge $bc$ closes $b, c, d$; and $ca$ closes $c, a, d$. The tree edge $da$ lies on the first and third cycles, $db$ on the first and second, and $dc$ on the second and third, so each tree edge is used twice, an even number. Each of $ab$, $bc$, $ca$ is used once. The edges with an odd count are $ab$, $bc$, $ca$, the triangle that avoids $d$. It meets $a$, $b$, $c$ twice and $d$ not at all, and it contains every edge outside the tree, as the sketch predicts.

**Problem 7.** (The 1983 result.) A nowhere-zero three-bit flow gives three sets of edges $S_1, S_2, S_3$, one for each column. For each nonempty collection of columns, form the set of edges that have an odd number of 1s in those columns. That makes seven sets. Show that every edge lies in exactly four of them.

**Solution.** Fix an edge and let its label have $j$ ones, where $j$ is 1, 2 or 3. A collection of columns counts the edge exactly when it contains an odd number of the $j$ columns where the label has a 1. The number of ways to pick an odd number of things out of $j$ is $2^{j-1}$ (for $j = 1, 2, 3$ that is 1, 2, 4: one way from one; either single one from two; any single one or all three from three). The remaining $3 - j$ columns may be included or not, in $2^{3-j}$ ways. So the edge is counted by $2^{j-1} \times 2^{3-j} = 4$ collections, and none of them is empty since each contains at least one column.

**Problem 8.** Show that a graph with a bridge has no nowhere-zero flow, with any number of bits. (Hint: add up the equations at all the nodes on one side of the bridge.)

**Solution.** Suppose the labels add up to 0 at every node, and let $e$ be a bridge. Deleting $e$ leaves no route between its ends, so the nodes reachable from one end form a set $A$ that does not contain the other end, and $e$ is the only edge with exactly one end in $A$. Add up, over all nodes of $A$, the sum of the labels at that node. Each of these sums is 0, so the total is 0. In the total, an edge with both ends in $A$ appears twice and cancels, and $e$ appears once. So the total equals the label of $e$, which is therefore 0. The flow is not nowhere-zero. Together with Jaeger's theorem this says that a graph has a nowhere-zero three-bit flow exactly when it is bridgeless.

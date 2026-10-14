# The cycle double cover conjecture, and its proof

> Every bridgeless graph has cycles that use each edge exactly twice. The whole proof, from bridges and paint to three-bit labels and a parity count.

Series: AI Proofs (https://www.monocurl.com/monocurl-essays/ai-proofs/)
Canonical: https://www.monocurl.com/monocurl-essays/ai-proofs/cycle-double-cover-conjecture/
Keywords: cycle double cover conjecture, cycle double cover theorem, cycle double cover proof, nowhere-zero flow, 8-flow theorem, Petersen graph, 3-edge-coloring, OpenAI proof

[Figure 1, animation: The corners and edges of a cube, pressed flat. The boundaries of its six faces, counting the face around the outside, are six cycles, and every edge has exactly two of them running along it.]

Here is the graph formed by the corners and edges of a cube, pressed flat onto the page. I want to lay cycles on it, closed routes that never pass through a node twice, so that every edge is used by exactly two of them. For the cube there is an easy way, which is to take the boundary of each face. Pressed flat, the cube shows five faces and has a sixth around the outside, and every edge lies between two faces, so the six boundaries together use every edge exactly twice.

Whether this can be done on every graph was an open question for at least fifty years. One kind of edge plainly prevents it, and the cycle double cover conjecture said that nothing else does. In July 2026 OpenAI published a proof found by one of its models, so the conjecture is now a theorem. The argument is short enough to go through completely, using nothing beyond the arithmetic of odd and even.

The proof has four moves. The first reduces the problem to graphs with three edges at every node. The second trades cycles for paint: every cycle gets its own paint, and a cover becomes a rule that can be checked at one node at a time. The third writes each paint as a code of bits, so that every edge gets a label recording how its two coats differ, and a theorem of Jaeger and Kilpatrick from the 1970s says that labels of the right kind exist on every bridgeless graph. The fourth is the new one. It gets back from the labels to paint by letting each node choose its paints separately, and a count of odd and even shows that the choices can be made to fit together.

## Graphs, cycles and double covers

The proof will count edges at nodes, so the definitions have to be exact.

**Definition.** A **graph** consists of a finite set of **nodes** (also called vertices) and a finite set of **edges**. Each edge joins two different nodes, called its **ends**, so no edge runs from a node back to itself. Two nodes may be joined by more than one edge, and such edges are called **parallel**; a graph in this sense is sometimes called a multigraph. The **degree** of a node is the number of edges that have it as an end.

A **cycle** is a closed route $v_1, e_1, v_2, e_2, \dots, v_k, e_k, v_1$ with $k \ge 2$, in which the nodes $v_1, \dots, v_k$ are all different, the edges $e_1, \dots, e_k$ are all different, and each edge joins the node before it to the node after it. Two parallel edges form a cycle with $k = 2$.

A **cycle double cover** of a graph is a list of cycles, in which the same cycle may be listed twice, such that every edge of the graph lies on exactly two cycles of the list.

Parallel edges are allowed because one of the simplifications below creates them. The clause to remember is that the nodes of a cycle are all different: a cycle that visits a node arrives by one edge and leaves by another, so it uses exactly two of the edges at that node.

For the cube the six face boundaries have four edges each, which makes $6 \times 4 = 24$ uses of an edge, and the cube has 12 edges, each used twice.

**Pause and try.** The graph $K_4$ has four nodes $a, b, c, d$ and an edge between every two of them, six edges in all. Find a cycle double cover of $K_4$. Then find a second one with a different number of cycles.

**Answer.** The four triangles $abc$, $abd$, $acd$, $bcd$ work: the edge $ab$ lies on the two triangles that contain both $a$ and $b$, and the same holds for every edge. So do the three cycles of length four, $abcd$, $abdc$ and $acbd$: the cycle $abcd$ misses only the edges $ac$ and $bd$, the cycle $abdc$ misses $ad$ and $bc$, and $acbd$ misses $ab$ and $cd$, so each edge is missed by one of the three and used by the other two. Both lists use an edge $12 = 2 \times 6$ times.

## Bridges are the obvious obstacle

[Figure 2, steps: A graph made of two triangles joined by one edge. Removing that edge disconnects the graph, and a route that crosses it has no other way back.]

  - step: This graph has seven edges. Look at the one in the middle.
  - step: Remove it and the graph falls into two pieces. An edge like that is called a bridge.
  - step: Put it back and send a route across. On the far side it can go round the triangle, but the only way home is the edge it has already used.
**Definition.** An edge $e$ of a graph is a **bridge** if, once $e$ is deleted, there is no route from one end of $e$ to the other. A graph with no bridge is **bridgeless**.

The figure suggests that no cycle can use a bridge. That is true, and so is the converse, which we will need more often.

**Theorem.** (Bridges and cycles.) An edge of a graph lies on some cycle if and only if it is not a bridge.

**Proof.** Let $e$ join the nodes $u$ and $v$. If $e$ lies on a cycle, then the rest of that cycle is a route from $v$ back to $u$ that avoids $e$, so $e$ is not a bridge. Conversely, suppose $e$ is not a bridge. Then some route from $v$ to $u$ avoids $e$; choose one with as few edges as possible. It visits no node twice, because the stretch between two visits to the same node could be cut out to leave a shorter route. Closing it with $e$ gives a cycle through $e$.

So a graph with a bridge has no cycle double cover: the bridge would have to lie on two cycles and lies on none. The conjecture is that this is the only thing that can go wrong.

**Theorem.** (Cycle double cover theorem.) Every bridgeless graph has a cycle double cover.

This statement is the goal. Everything in the proof will be shown in full except the theorem of Jaeger and Kilpatrick, which is stated exactly and sketched when we reach it.

### A graph with no faces to use

The face trick needs a drawing in which no two edges cross, so that there are faces. For a bridgeless graph drawn that way the method always works, after some care in the cases where a face boundary passes through a node twice. The graph below has no such drawing. (I will not prove that, and nothing later depends on it.) It is called the Petersen graph, and ideas about cycles are tested on it first because so many of them fail there.

[Figure 3, steps: A first attempt on the Petersen graph. The outer ring and the inner star are two cycles, and after them every ring and star edge still needs one more cycle and every spoke needs two.]

  - step: The Petersen graph has ten nodes and fifteen edges, three at every node. One cycle goes around the outer ring.
  - step: A second cycle follows the inner star.
  - step: The five spokes are on no cycle yet, and it is not clear what to do next.
Graphs come in every shape, which makes them hard to reason about. Before attacking the Petersen graph we tidy the problem twice.

## Reducing to three edges at every node

The first simplification is a **reduction**: we replace the problem by a narrower one and show that solving the narrower one solves everything.

**Definition.** A graph is **cubic** if every node has degree 3.

The cube, $K_4$ and the Petersen graph are all cubic. The claim is that these are the only graphs we need to handle.

**Theorem.** (Reduction to cubic graphs.) If every bridgeless cubic graph has a cycle double cover, then every bridgeless graph has one.

The idea is to change a graph one node at a time until it is cubic, in such a way that a cover of the new graph can be turned back into a cover of the old one. A node of degree 4 or more gets pulled apart.

[Figure 4, steps: Splitting a node of degree four into two nodes of degree three, and turning a cycle double cover of the new graph back into one of the old graph. Only the part of the graph near the node is drawn.]

  - step: A node with four edges.
  - step: Pull it apart into two nodes, with two of the old edges on each, and join the two with a new edge. Both nodes now have three edges.
  - step: Suppose the new graph has a cycle double cover. Near the new edge its cycles run in a pattern like this one, two along every edge.
  - step: Shrink the new edge back to nothing. Every cycle is still a closed route, and every old edge still has two cycles along it.
There is a catch. Pulling a node apart can create a bridge, and then the new graph has no cover to hand back.

**Pause and try.** The four edges at a node can be sorted into two pairs in three ways. In the graph below, two triangles share the middle node. Which of the three pairings turns the new edge into a bridge?

**Answer.** Only one: the pairing that puts both edges of the left triangle on one new node and both edges of the right triangle on the other. Then the new edge is the only connection between the two triangles. The other two pairings put one edge of each triangle on each new node, and the new edge lies on a cycle that goes out through one triangle and back.

[Figure 5, steps: Two triangles sharing a node. Pairing the four edges by the triangle they belong to creates a bridge, and pairing one edge from each triangle does not.]

  - step: The middle node has four edges. Two belong to the left triangle and two to the right one.
  - step: Pair the edges by triangle and pull the node apart. The new edge is a bridge, so the new graph has no cycle double cover.
  - step: Go back, and pair one edge from each triangle instead.
  - step: Now a cycle runs through the new edge, so it is not a bridge.
The proof has to show that a good pairing always exists, and it has to deal with nodes of degree 2 as well.

**Proof.** Let $G$ be a bridgeless graph. A node of degree 0 has no edges and can be ignored. No node has degree 1, because its one edge would be a bridge. We first split nodes of degree 4 or more, then remove nodes of degree 2.

*Splitting.* Let $v$ have degree at least 4. Delete $v$ and its edges; the rest of the graph falls into connected pieces, and each edge at $v$ leads into one of them. No piece receives exactly one edge from $v$, since that edge would be a bridge. Choose two edges $e_1, e_2$ at $v$ as follows. If some piece receives three or more edges from $v$, take two of those. Otherwise every piece that receives an edge from $v$ receives exactly two, so the four or more edges at $v$ lead into at least two pieces, and we take one edge into each of two different pieces. Either way, the piece that $e_1$ leads into also receives from $v$ an edge $e_3$ different from $e_1$ and $e_2$. Form $G'$ by adding a node $v'$, moving the ends of $e_1$ and $e_2$ from $v$ to $v'$, and joining $v'$ to $v$ by a new edge $n$.

*$G'$ is bridgeless.* By the theorem on bridges and cycles it is enough to put every edge on a cycle. For $n$: leave $v'$ along $e_1$, take a shortest route inside the piece to the far end of $e_3$, come back to $v$ along $e_3$, and close with $n$. Any other edge $f$ lies on a cycle $C$ of $G$. If $C$ uses both or neither of $e_1, e_2$, the same edges form a cycle of $G'$. If it uses exactly one, inserting $n$ beside it gives a cycle of $G'$.

*A cover comes back.* Take a cycle double cover of $G'$ and shrink $n$ to a point. A cycle through $n$ loses that edge and remains a cycle. A cycle that passes through $v'$ along $e_1, e_2$ and also through $v$ becomes a closed route that visits $v$ twice; cut it at $v$ into two cycles. Every other cycle keeps its edges and remains a cycle. Each edge of $G$ is still on exactly two cycles of the list.

Each split lowers the degree of $v$ by one and creates a node of degree 3, so after finitely many splits every node has degree 2 or 3.

*Degree 2.* Let $v$ have degree 2, with edges to $a$ and $b$. If $a \ne b$, replace $v$ and its two edges by a single edge from $a$ to $b$. Cycles through $v$ correspond exactly to cycles through the new edge, so the new graph is bridgeless, and a cover of it becomes a cover of the old graph when $v$ is put back. If $a = b$, the two edges are parallel. Then $a$, whose degree is 2 or 3, has no third edge: a cycle through a third edge would leave $a$ along one of the parallel edges and could only return from $v$ to $a$, a node it has already visited. So $a$, $v$ and the two parallel edges are a separate piece of the graph, and listing that two-edge cycle twice covers it.

When no node of degree 2 is left the graph is cubic and bridgeless, so by hypothesis it has a cycle double cover, and undoing the steps in reverse order gives one for $G$.

From here on, every graph is cubic and bridgeless.

## Trading cycles for paint

The second simplification changes what we search for. A cycle is awkward to hunt for, because whether a set of edges forms one cannot be checked by looking at one node. So give every cycle of a cover its own paint, and paint the edges it runs along. Two things are then true. Every edge has two coats, in two different paints. And at every node, each paint is on exactly two of the edges there, because its cycle arrives by one edge and leaves by another, or on none, because its cycle misses the node.

**Definition.** A **painting** of a graph assigns to every edge a set of exactly two paints, its two **coats**, so that at every node each paint is on exactly two of the edges at that node or on none of them.

Both rules can be checked one edge and one node at a time. The question is whether they are enough.

**Pause and try.** Suppose someone hands you a painting, and you want cycles. Stand on an edge that has some paint, walk to its end, and look for the same paint on another edge. Why is there exactly one choice? And why can the walk not run into a node it has already left, other than its starting node?

**Answer.** At the node you arrive at, the paint is on exactly two edges, the one you came along and one other, so the way on is forced. If the walk arrived at a node it had already passed through, that node would have the paint on three edges: the two used on the first visit and the one used to arrive now. That is against the rule. Since the graph is finite, the walk must repeat a node eventually, and the only node it can repeat is the one where it started.

[Figure 6, animation: Three paints on the cube, each on eight edges. A walker follows the purple paint from edge to edge and returns to its start after four edges. The purple paint that is left over gives a second cycle in the same way.]

**Theorem.** (Paint and cycles.) A graph has a cycle double cover if and only if it has a painting.

**Proof.** Given a cycle double cover, use one paint for each entry of the list and put it on the edges of that cycle. Each edge is on two entries, so it gets two different paints, and a cycle uses two edges or none at each node. That is a painting.

Given a painting, fix a paint $s$ and let $M$ be the set of edges that have it. Start at any edge $e_1$ of $M$, from one end $v_0$ to the other end $v_1$, and keep walking: from each node leave by the edge of $M$ other than the one just used. Let $v_j$ be the first node on the walk that equals an earlier one, $v_i$. If $i \ge 1$, the node $v_i$ already has two edges of $M$, the ones the walk used there, and the edge $e_j$ by which the walk arrives is a third. (It is not the edge from $v_i$ to $v_{i+1}$, since then $v_{j-1} = v_{i+1}$, which forces $j - 1 = i + 1$ and means the walk turned back along the edge it had just used. It is not the edge from $v_{i-1}$ to $v_i$, since then $v_{j-1} = v_{i-1}$ would be an earlier repeat.) Three edges of $M$ at one node is against the rule, so $i = 0$: the walk has returned to its start, and $v_0, \dots, v_{j-1}$ with the edges walked form a cycle. That cycle uses both edges of $M$ at each node it visits, so the edges of $M$ outside it still number two or none at every node, and the same walk can be repeated on them until $M$ is used up. Doing this for every paint gives a list of cycles in which each edge appears once for each of its two coats.

So for the rest of the proof we look for a painting. In a cubic graph the rules pin down what a painting looks like at a single node.

[Figure 7, image: One node of a cubic graph in a painting. The six coat ends at the node are shared out two to a paint, so exactly three paints meet there, one for each pair of edges.]

**Theorem.** (Three paints at a node.) In a painting of a cubic graph, exactly three paints appear at each node, and each of the three pairs of edges at the node shares exactly one of them.

**Proof.** The three edges at the node carry $3 \times 2 = 6$ coats. Each paint that appears there accounts for exactly two of the six, so three paints appear, each on two edges. Suppose two of them, $p$ and $q$, were on the same two edges. Those edges would each carry exactly $p$ and $q$. The third paint is on two of the three edges, so on at least one of those two, which would then have three coats. Hence the three paints are on three different pairs of edges, and there are only three pairs.

**Key idea.** For a bridgeless cubic graph, a cycle double cover is the same thing as a painting: two coats on every edge, and at every node three paints, one shared by each pair of edges.

**Check yourself.** In a painting of a cubic graph, two of the three edges at a node carry the coats $\{1, 2\}$ and $\{2, 3\}$. What are the coats on the third edge?
Answer: $\{1, 3\}$ Paint 2 is already on two edges, so it is not on the third. Paints 1 and 3 are each on one edge so far and need a second, and the third edge is the only place left.

## Three colors give three paints

For some cubic graphs a painting can be read off from a different and much older kind of coloring.

**Definition.** A **3-edge-coloring** of a cubic graph gives each edge one of three colors so that the three edges at every node have three different colors.

A coloring is not a painting. A coloring puts one color on an edge, and a painting puts two coats on it. Here is how one turns into the other on $K_4$.

[Figure 8, steps: A 3-edge-coloring of K_4 turned into a painting. Each pair of colors forms a cycle, which becomes one paint, and every edge ends up with two coats.]

  - step: Color each edge orange, blue or green so that every node sees all three colors. The two diagonals are green.
  - step: Keep the orange and blue edges. Every node has one of each, so they form a closed route. Call it the first paint.
  - step: Orange and green together give the second paint.
  - step: Blue and green give the third.
  - step: Put all three on. An orange edge is in orange with blue and in orange with green, so it has exactly two coats, and so has every other edge.
**Theorem.** (Szekeres, 1973.) A cubic graph with a 3-edge-coloring has a painting with three paints, and so a cycle double cover.

**Proof.** Call the colors 1, 2, 3 and the paints $A$, $B$, $C$. Give every edge of color 1 the coats $A, B$, every edge of color 2 the coats $A, C$, and every edge of color 3 the coats $B, C$. Each edge has two different coats. At a node there is exactly one edge of each color, so paint $A$ is on exactly two edges there, the ones colored 1 and 2, and likewise $B$ and $C$. This is a painting, and the theorem on paint and cycles turns it into a cycle double cover.

**Worked example.** **Three paints on the cube.** The edges of the flattened cube are of three kinds: the four horizontal edges of the two squares, their four vertical edges, and the four slanted edges that join the squares. Every node has one edge of each kind, so the kinds are a 3-edge-coloring. The paint for "horizontal with vertical" covers the outer square and the inner square. Those are two separate cycles in one paint, which is why the proof above had to allow a paint to be walked more than once. The paint for "horizontal with slanted" covers the top and bottom faces, and "vertical with slanted" covers the left and right faces. These are the three paints in the walking figure above.

*Check.* Each paint is on 8 edges, so there are $3 \times 8 = 24$ coats on 12 edges, two each.

**Worked example.** **A cubic graph that cannot be colored, for a simple reason.** Take $K_4$ and put a new node $m$ in the middle of one of its edges, so that $m$ has degree 2 and the other four nodes still have degree 3. Do the same to a second copy of $K_4$, with new node $m'$, and join $m$ to $m'$ by an edge. The result is a cubic graph with 10 nodes and 15 edges, and the edge from $m$ to $m'$ is a bridge. Does it have a 3-edge-coloring?

We could try colors, but the two theorems we have settle it without any search. A 3-edge-coloring would give a cycle double cover, by the theorem of Szekeres. A graph with a bridge has no cycle double cover, by the theorem on bridges and cycles. So there is no 3-edge-coloring. The same argument applies to every cubic graph with a bridge.

**Common mistake.** **Treating a color as a paint.** In a 3-edge-coloring the orange edges at different nodes never meet, so the orange edges alone do not form cycles. A paint is on two edges at every node it touches and does form cycles. Each paint here is a union of two colors.

**Common mistake.** **Testing for bridges by degrees.** It is tempting to think that a graph in which every node has degree 2 or more has no bridge. The two triangles joined by an edge show otherwise: their degrees are 2, 2, 3, 3, 2, 2. Whether an edge is a bridge depends on the routes around it, and has to be checked edge by edge.

## The Petersen graph has no 3-edge-coloring

If every bridgeless cubic graph had a 3-edge-coloring we would be finished. Try it on the Petersen graph, starting with the outer ring.

**Pause and try.** The outer ring has five edges. In a 3-edge-coloring, two ring edges that share a node have different colors. Show that some color is used on exactly one ring edge.

**Answer.** Two colors are not enough: going round the ring they would have to alternate, and after five edges the last would match the first, which it touches. So all three colors appear. A single color cannot be on three ring edges, because among any three of the five edges two share a node. So each color is on at most two edges, and the only way three colors can fill five edges is two, two and one.

[Figure 9, steps: An attempt to 3-edge-color the Petersen graph. After the outer ring is colored the spokes are forced, and then the two star edges at the top inner node cannot both be colored.]

  - step: Color the outer ring. One color is used once, here green, and the other two alternate.
  - step: At each outer node two colors are taken, so the spoke must have the third.
  - step: Three spokes are green. At the inner end of each, the two star edges must be orange and blue in some order. That accounts for all five star edges.
  - step: The top inner node has a blue spoke, so its two star edges need orange and green. Neither can be green, and they cannot both be orange.
**Theorem.** The Petersen graph has no 3-edge-coloring.

**Proof.** Number the outer nodes 0 to 4 around the ring and let $i'$ be the inner node joined to $i$ by a spoke. The star joins $0'$ to $2'$ and $3'$, joins $1'$ to $3'$ and $4'$, and $2'$ to $4'$. Suppose a 3-edge-coloring exists. By the exercise above, one color is on exactly one ring edge. Rotating the picture by a fifth of a turn carries the graph onto itself, so we may take that edge to be the one from 4 to 0, and by renaming colors we may call its color green and color the remaining ring edges orange, blue, orange, blue, starting from the edge from 0 to 1.

Each spoke has the color missing at its outer node. Node 0 has green and orange, so its spoke is blue. Nodes 1, 2 and 3 have orange and blue, so their spokes are green. Node 4 has blue and green, so its spoke is orange.

At $2'$ and $3'$ the spoke is green, so every star edge at $2'$ or $3'$ is orange or blue. The two star edges at $0'$ go to $2'$ and $3'$, so both are orange or blue. But the spoke at $0'$ is blue, so those two edges must be orange and green in some order. Neither can be green, and they cannot both be orange. This contradiction shows that no 3-edge-coloring exists.

A computer search agrees: the ring can be colored in 30 ways, and none of the 30 can be completed. Cubic bridgeless graphs with no 3-edge-coloring are called snarks, and the Petersen graph is the smallest.

So three paints are not always enough, and the Petersen graph needs more. (A theorem recorded in François Jaeger's 1985 survey says that a cubic graph with a painting in four paints also has one in three, so the Petersen graph needs at least five. One of the problems at the end proves the three-paint half of that.)

With more than three paints there is no coloring to start from, and searching for all the paint at once is hopeless. The remaining two moves split the job.

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

[Figure 10, steps: Adding the codes 101 and 011 one column at a time, and then adding 011 to the result a second time. The second addition undoes the first.]

  - step: First column: 1 + 0 = 1.
  - step: Second column: 0 + 1 = 1.
  - step: Third column: 1 + 1 = 0. Nothing is carried, so the sum is 110.
  - step: Now add 011 to the answer, a second time.
  - step: The result is 101, the code we started with. Adding a code twice does nothing.
Three facts about this addition carry the rest of the argument, and each can be read off one column at a time.

- **A code added to itself gives zero**: $x + x = 0$, because $0 + 0 = 0$ and $1 + 1 = 0$. So adding $x$ twice does nothing, and subtracting $x$ is the same as adding it.
- **The sum of two codes shows where they disagree**: a column of $x + y$ is 1 exactly when $x$ and $y$ differ there. So $x + y$ is also the difference between $x$ and $y$, and $x + y = 0$ exactly when $x = y$.
- **Order and grouping do not matter**, since that is true of addition in each column.

**Pause and try.** Compute $110 + 011$. Then find the code $c$ with $101 + c = 011$, without trial and error.

**Answer.** Column by column, $110 + 011 = 101$. For the second, add $101$ to both sides: the left side becomes $101 + 101 + c = c$, so $c = 101 + 011 = 110$. The code that turns one code into another is their sum.

**Common mistake.** **Carrying.** A code is not a number written in binary. As binary numbers, $101 + 011$ is $5 + 3 = 8$, written $1000$. As codes the sum is $110$, three digits long like every sum of three-bit codes. If a carry appears, the rule $x + x = 0$ fails and everything below fails with it.

## Difference labels

Now let the paints be codes, and carry out step 1 on a painting we already have. The 3-edge-coloring of $K_4$ gave three paints. Name them 00, 01 and 10.

**Definition.** In a painting whose paints are codes, the **difference label** of an edge, or just its **label**, is the sum of its two coats.

[Figure 11, steps: The three paints of K_4 named by two-bit codes. The label of each edge is the sum of its two coats, and edges of the same color in the original 3-edge-coloring get the same label.]

  - step: Name the three paints 00, 01 and 10.
  - step: The left side has coats 00 and 01. They differ in the second column only, so its label is 01.
  - step: The bottom side has 00 and 10, and its label is 10.
  - step: A diagonal has 01 and 10, which disagree in both columns. Its label is 11.
  - step: The other three edges go the same way. The label 01 is on the edges that were orange, 10 on the blue ones and 11 on the green ones.
So on $K_4$ the color of an edge was a record of how its two paints differ. Now look at what the labels do at a node.

**Pause and try.** At the top left corner of the square the three labels are 01, 11 and 10. Add them. Do the same at another corner. Then explain the result, using the fact that the three edges at a node carry three paints $a, b, c$, one shared by each pair of edges.

**Answer.** $01 + 11 + 10 = 00$, and every other corner has the same three labels. The reason: the three edges have coats $\{a, b\}$, $\{b, c\}$ and $\{c, a\}$, so their labels are $a + b$, $b + c$ and $c + a$. In the sum of the three, each paint appears twice, and a code added twice is zero.

[Figure 12, steps: The labels at two corners of K_4, added column by column. Each column contains two 1s, so the sum is 00.]

  - step: At the top left corner the labels are 01, 11 and 10.
  - step: Add them. Each column holds two 1s, and they cancel.
  - step: The bottom right corner has the same three labels in another order, and the same sum.
Nothing in that explanation used $K_4$ or two bits.

**Theorem.** (Labels of a painting.) Take a painting of a cubic graph whose paints are codes of $k$ bits. Then the label of every edge is different from 0, and at every node the three labels add up to 0.

**Proof.** The two coats of an edge are different paints, and two different codes have a sum different from 0. At a node, the theorem on three paints at a node says that there are three paints $a, b, c$ and that the three edges carry $\{a, b\}$, $\{b, c\}$, $\{c, a\}$. The labels add up to $(a + b) + (b + c) + (c + a) = (a + a) + (b + b) + (c + c) = 0$.

Both properties are checked at one edge or one node at a time, with no mention of paint. That is the point of step 1: labels can be hunted for directly, and they are far easier to find than paintings.

**Definition.** A **nowhere-zero flow** on a graph, with values in codes of $k$ bits, is a labeling of the edges by $k$-bit codes such that no label is 0 and, at every node, the labels of the edges at that node add up to 0. I will call it a nowhere-zero $k$-bit flow.

The name comes from a more general setting in which labels are numbers that flow along directed edges, with as much flowing into each node as out of it. With codes, $x = -x$, so no directions are needed. In the literature the set of $k$-bit codes with this addition is written $\mathbb{F}_2^k$ or $\mathbb{Z}_2^k$.

**Common mistake.** **Reading a label as a paint.** The label 01 on an edge does not say that paint 01 is on that edge. It says that the two paints on the edge differ in the last column and nowhere else. The pairs $\{00, 01\}$ and $\{10, 11\}$ both have label 01. An edge has one label and two coats.

### Two bits are the three colors again

How many bits do the labels need? Try two.

**Pause and try.** In a nowhere-zero two-bit flow on a cubic graph, can two of the three edges at a node have the same label?

**Answer.** No. If two of them were $x$ and $x$, they would add up to 0, and the third label would have to be 0 for the three to add up to 0. That is not allowed.

**Theorem.** (Two-bit flows.) A cubic graph has a nowhere-zero two-bit flow if and only if it has a 3-edge-coloring.

**Proof.** There are three two-bit codes other than 00, namely 01, 10 and 11, and $01 + 10 + 11 = 00$. Given a 3-edge-coloring, label the edges of the three colors 01, 10 and 11. Every node sees each color once, so its labels add up to 00, and no label is 00. Conversely, given a nowhere-zero two-bit flow, the exercise above shows that the three labels at a node are all different, so they are 01, 10 and 11 in some order. Calling these three codes colors gives a 3-edge-coloring.

So two-bit flows and 3-edge-colorings are the same thing, and the Petersen graph, which has no 3-edge-coloring, has no nowhere-zero two-bit flow.

## Three bits are always enough

With a third bit there are eight codes for paints and seven possible labels. Here the 1970s supply a theorem.

**Theorem.** (Jaeger; Kilpatrick.) Every bridgeless graph has a nowhere-zero three-bit flow.

P. A. Kilpatrick proved this in a 1975 thesis at the University of Cape Town, and François Jaeger found it independently, in work presented in 1975 and published in 1976 and 1979. It is known as the 8-flow theorem, because by a 1954 theorem of W. T. Tutte a graph has a nowhere-zero flow with values in a commutative group of eight elements, such as the three-bit codes, exactly when it has one whose values are nonzero whole numbers between $-7$ and $7$, flowing along directed edges. We will use the theorem without proving it, and a sketch of where it comes from follows below.

Here is such a flow on the Petersen graph. At the top node the labels are 111, 011 and 100: the first column holds $1, 0, 1$, the second $1, 1, 0$ and the third $1, 1, 0$, and each of those adds up to an even number.

[Figure 13, image: A nowhere-zero three-bit flow on the Petersen graph. The sum at the top node is worked on the right, and the scene has checked the sum at all ten nodes.]

**Check yourself.** Two of the three edges at a node of a cubic graph have labels 101 and 110 in a nowhere-zero three-bit flow. What is the third label?
Answer: 011 The third label $z$ satisfies $101 + 110 + z = 000$, so $z = 101 + 110$. The codes differ in the last two columns, so $z = 011$.

### Why the theorem is believable: a sketch

*This part is a sketch. It proves everything except one cited theorem about trees and one reduction, and I will say where those are.*

Read a three-bit labeling one column at a time. The first column selects some edges, those whose first bit is 1. The labels at a node add up to 0 in that column exactly when the node has an even number of selected edges. And a label is different from 000 exactly when its edge is selected by at least one column. So a nowhere-zero three-bit flow is the same thing as three sets of edges, each meeting every node an even number of times, that together contain every edge. The next figure draws the three sets for the labeling above.

[Figure 14, animation: The three-bit labels of the Petersen graph, read one column at a time. Each column of the codes, taken alone, marks out a closed route: blue for the first column, orange for the second, green for the third.]

Sets of edges that meet every node an even number of times are easy to make from a **spanning tree**, which is a set of edges that connects all the nodes and contains no cycle.

[Figure 15, steps: Building one column of the labeling from a spanning tree of the Petersen graph. Each edge outside the tree closes one cycle, and the edges used by an odd number of the six cycles are exactly the edges whose first bit is 1 in the labeling above.]

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

[Figure 16, image: The number of 1s in the label of each edge of the Petersen graph, which is the number of the three colored routes that use the edge. A cycle double cover needs exactly two on every edge.]

Six edges have one, six have two and three have all three. For decades the labels were used in this direct way, by picking out cycles one combination of columns at a time, and some edges were always reached too often. The best result of that kind is from 1983: Jean-Claude Bermond, Bill Jackson and François Jaeger took all seven combinations of the three sets and showed that every edge lies on exactly four of them. (One of the problems at the end asks you to prove it.) Four times is not twice.

The stripes are still what makes the labels exist. The idea that was missing is to read a label as the theorem on labels of a painting suggests: as the difference between the two coats of its edge.

## Back from labels to paint, at one node

Now for step 2. Suppose we are handed a nowhere-zero flow and want a painting whose labels are that flow. At a single node there is nothing to it.

[Figure 17, steps: Rebuilding the three paints at a node from its labels 01, 11 and 10. The paint in one sector is a free choice, each label gives the paint across its edge, and a different first choice moves all three paints together.]

  - step: The labels at this node are 01, 11 and 10. Pick any paint for the first sector, say 00.
  - step: Cross the edge labeled 01. The paint on its other side must differ from 00 by 01, so it is 01.
  - step: Cross the edge labeled 11. The next paint is 01 + 11 = 10.
  - step: Crossing the last edge gives 10 + 10 = 00, the paint we began with. It had to, because the three labels add up to 00.
  - step: Begin with 11 instead, and all three paints change by 11. The first paint is the only choice there is.
The three paints at a node form a triangle among the codes, and the only freedom is to move the whole triangle. Stated without reference to a starting sector:

**Theorem.** (Paints at one node.) Let the three edges at a node have labels $x, y, z$, all different from 0, with $x + y + z = 0$. Suppose each of the three edges is to get two coats so that every paint used is on exactly two of the three edges and the coats of each edge differ by its label. The ways to do this are exactly the following, one for each code $s$: the edge labeled $x$ gets the coats $s + y$ and $s + z$, the edge labeled $y$ gets $s + x$ and $s + z$, and the edge labeled $z$ gets $s + x$ and $s + y$.

**Proof.** First, this works. The coats of the edge labeled $x$ differ by $(s + y) + (s + z) = y + z$, and $y + z = x$ because $x + y + z = 0$; the other two edges are alike. The three paints $s + x$, $s + y$, $s + z$ are different, since two equal labels would force the third to be 0, and each is on exactly two edges.

Conversely, take any such choice of coats. By the count of coat ends in the theorem on three paints at a node there are three paints, one shared by each pair of edges. Let $p$ be the paint shared by the edges labeled $y$ and $z$, let $q$ be the one shared by $x$ and $z$, and $r$ the one shared by $x$ and $y$. The edge labeled $y$ carries $p$ and $r$, so $p + r = y$, and likewise $p + q = z$. Put $s = p + x$. Then $s + x = p$, and $s + y = p + x + y = p + z = q$, and $s + z = p + x + z = p + y = r$. So the coats are the ones described, for this $s$.

I will call $s$ the **slide** of the node. In words, the paint between two edges is the slide plus the label of the third edge, and sliding by $t$ adds $t$ to all three paints. With three bits the codes sit at the corners of a cube, and the triangle has eight positions.

[Figure 18, animation: The top node of the Petersen graph, with labels 111, 011 and 100, and its triangle of three paints among the eight three-bit codes. As the slide runs through all eight codes the three paints move together, and each edge keeps a pair of paints that differ by its label.]

**Worked example.** **The paints at a node of the Petersen graph.** At the top node the labels are $x = 111$, $y = 011$, $z = 100$. With slide $s = 000$ the three paints are the labels themselves: the edge labeled 111 gets the coats 011 and 100, the edge labeled 011 gets 111 and 100, and the edge labeled 100 gets 111 and 011.

*Check.* $011 + 100 = 111$, $111 + 100 = 011$ and $111 + 011 = 100$, so each edge's coats differ by its label, and each of the three paints is on two edges.

With slide $s = 110$ the paints become $110 + 111 = 001$, $110 + 011 = 101$ and $110 + 100 = 010$. The edge labeled 111 now has coats 101 and 010, which still differ by 111.

## The pieces do not fit by themselves

Let every node choose a slide and paint its own half of each of its three edges. Each edge is then painted twice, once from each end, and we have a painting exactly when the two halves of every edge carry the same two paints.

With two-bit labels this takes care of itself. Give every node the slide 00. The half of an edge labeled $x$ gets the labels of the other two edges at its node, and by the theorem on two-bit flows those are always the two nonzero codes other than $x$. Both ends agree, on every edge. This is the painting that Szekeres's theorem builds from a 3-edge-coloring, with its paints renamed: the paint called 01 is on exactly the edges labeled 10 and 11, which is the cycle formed by two of the three colors.

With three bits the two ends of an edge see different neighbors, and nothing forces them to agree.

[Figure 19, steps: Every node of the Petersen graph paints its half of each of its edges. A red ring marks an edge whose two halves carry different pairs of paints. Sliding nodes one at a time mends some edges and then gets stuck.]

  - step: Every node has slide 000, so each half of an edge carries the labels of the other two edges at its node. On twelve of the fifteen edges the two halves do not match.
  - step: Slide the ringed node by 001. Its three paints change, and nine broken edges are left.
  - step: Slide two more nodes, by 011 and 101. Three broken edges are left.
  - step: Now every slide of a single node leaves at least three broken edges. Mending one edge breaks another.
There are eight slides at each of ten nodes, $8^{10}$ settings in all, which is more than a billion, and fixing edges one at a time moves the trouble around. More to the point, we want an argument for every graph and every labeling.

So here is exactly what is established and what is missing. Every bridgeless cubic graph has a nowhere-zero three-bit flow (Jaeger and Kilpatrick, cited). At each node, the paintings of its three half-edges that fit the labels are known completely: there are eight, one for each slide. What is missing is a reason why the slides can always be chosen so that the two halves of every edge agree. That was the open half for fifty years, and the rest of the argument proves it.

## A toy problem: a ring that must alternate

Before the real problem, here is one where the answer is visible at a glance, so that we can watch a method work. Color the edges of a ring of six nodes orange and blue so that the colors alternate. Let every node solve its own small problem: it colors the half-edge on one side orange and the half on the other side blue. Its only choice is which way round.

[Figure 20, steps: A ring of six nodes. Each node colors one of its two half-edges orange and the other blue. Flipping two nodes makes the two halves of every edge agree, and the ring alternates.]

  - step: Every node has colored its two half-edges. A red ring marks an edge whose halves have different colors.
  - step: Flip the circled node, so that its orange and blue change places. One edge is mended and its neighbor breaks.
  - step: Flip the next node as well. Every edge agrees, and the colors alternate around the ring.
Now try the same with five nodes.

[Figure 21, steps: A ring of five nodes. Flipping a node moves the broken edge but never removes it. Each node colors exactly one half-edge orange, so there are five orange halves, and an odd number of them cannot be paired up along edges.]

  - step: With five nodes, one edge is broken.
  - step: Flip a node at one end of it. The broken edge moves along.
  - step: Flip the next node. It moves again, and it never goes away.
  - step: Count the orange halves. Every node colors exactly one, whichever way round it is, so there are five.
**Pause and try.** Before reading on: an edge whose halves agree has how many orange halves? What does that say about the total number of orange halves if every edge agrees? Compare with what the nodes supply.

**Answer.** An edge that agrees is orange on both halves or blue on both, so it has two orange halves or none. If every edge agreed, the orange halves would come in twos and their total would be even. But each node colors exactly one half orange, whatever its choice, so a ring of $n$ nodes has exactly $n$ orange halves. With $n = 5$ that is odd, so not every edge can agree. With $n = 6$ the count is even and nothing stands in the way.

The same argument can be written with equations, which is the form we will need. Record each node's choice as a bit, saying on which side its orange half lies. Call the bits $a, b, c, d, e$ around the ring of five. An edge agrees when the choices at its two ends are different, which for bits means that they add up to 1.

[Figure 22, image: The ring of five as five equations between bits, one for each edge. In the sum of all five every unknown appears twice and cancels, while the right-hand sides add up to 1.]

Add the five equations. On the left every unknown appears twice, and anything added twice is 0. On the right there are five 1s, which add up to 1. The sum reads $0 = 1$. The choices have dropped out, and what remains is the odd number five. No choice of bits can satisfy all five equations, since it would satisfy their sum.

Look at how the method went. Each node solved its own problem, with one free choice. The constraints were between neighbors only. Whether a solution for the whole ring exists came down to whether those constraints are compatible, and incompatibility showed up as a sum of equations reading $0 = 1$.

## Equations between bits fail only by adding up to 0 = 1

An equation between bits is *linear* if it says that the sum of some of the unknowns equals 0 or equals 1. For systems of such equations, the ring of five shows the only thing that can go wrong.

**Theorem.** (The only obstacle.) A finite system of linear equations between bits has no solution if and only if some of its equations add up to $0 = 1$: a sum in which every unknown cancels and the right-hand sides add up to 1.

**Proof.** If some equations add up to $0 = 1$, a solution of the system would satisfy their sum, which is impossible.

For the converse we show, by induction on the number of unknowns, that a system in which no selection of equations adds up to $0 = 1$ has a solution. With no unknowns, every equation reads $0 = 0$ or $0 = 1$, and by assumption none reads $0 = 1$, so there is nothing to solve. Otherwise pick an unknown $t$. If no equation contains it, drop it and use induction. If some equation $Q$ contains it, add $Q$ to every other equation that contains $t$, and set $Q$ aside. The new system has fewer unknowns. Any sum of its equations is also a sum of equations of the old system, with $Q$ added in some number of times, and two copies of $Q$ cancel. So no selection of the new equations adds up to $0 = 1$, and by induction the new system has a solution. Then $Q$ tells us the value of $t$, and the old equations hold, since each is a new equation, possibly with $Q$ added back.

This is elimination, as taught for [ordinary systems of equations](@algebra/systems-of-equations), carried out with bits. It turns the question "is there a solution?" into the question "can the equations be added up to $0 = 1$?", and the second question can be attacked by counting.

## Agreement written as equations

Back to the graph, where each node paints its half of each of its edges with its slide plus the labels of the other two edges. Fix a cubic graph and a nowhere-zero three-bit flow, and write $f(e)$ for the label of the edge $e$ and $s_v$ for the slide of the node $v$. For a node $v$ and an edge $e$ at $v$, let $c(v, e)$ be the label of one of the other two edges at $v$; pick either, once and for all. The other one is then $c(v, e) + f(e)$, because the three labels at $v$ add up to 000. So the half of $e$ at $v$ carries the two paints

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

### Adding up some of the equations

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

## What one node supplies

### What the bit of a half-edge measures

It helps to see these bits before computing with them. Take a label $p$ and a code $r \neq 000$ with $r \cdot p = 0$. The eight paints fall into four pairs that differ by $p$, and the two paints of a pair have the same dot product with $r$. So $r$ splits the eight paints into two groups of four without splitting any pair, and the bit of a half-edge says in which group its pair of paints lies. The edge's equation, tested with $r$, says that both halves lie in the same group.

[Figure 23, steps: The eight three-bit paints at the corners of a cube, joined in the four pairs that differ by 011. Each code r with r · 011 = 0 separates the paints into two groups of four, filled and hollow, without separating any pair.]

  - step: An edge labeled 011 can carry one of four pairs of paints, shown joined by gray lines.
  - step: The code r = 100 looks only at the first column. It puts two whole pairs in each group.
  - step: So does r = 011, which adds the last two columns.
  - step: And so does r = 111. These three are the only codes other than 000 with r · 011 = 0.
With two-bit labels the picture is smaller and can be drawn on the graph. There are four paints, an edge labeled $p$ can carry one of two pairs, and exactly one of those pairs contains the paint 00. So for the one nonzero $r$ with $r \cdot p = 0$, the bit of a half-edge says whether its pair is the one *without* 00. Mark those halves with a tick across the edge.

[Figure 24, steps: K_4 with two-bit labels. Every node paints its half of each edge, and a tick marks a half-edge whose two paints do not include the purple paint 00. Each node has one tick or three, whatever its slide, so the total is always even.]

  - step: All slides are 00. Each node's paints are 01, 10 and 11, so none of its halves has the purple paint 00: three ticks at every node. Every edge agrees.
  - step: Slide the top left node by 01. Now it uses 00, on two of its edges, and only its third half has a tick. Two edges break, each with a tick on one half only.
  - step: Slide the bottom right node by 11. It has one tick too. A node has one tick or three, so four nodes always have an even number in all.
This is the ring again, with one difference. On an edge that agrees, the ticks come in twos, so a solution needs an even number of ticks. The nodes supply an odd number each, as the nodes of the ring supplied one orange half each. But a cubic graph always has an even number of nodes, so here the supply is even and nothing stands in the way. With three bits there are more selections than this one, and we need to know what a node supplies in each.

### The count at a node

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

[Figure 25, steps: A selection on the Petersen graph. Ten edges are selected, and the number of selected edges ending at each node is written beside it. The ten numbers add up to twenty, because each selected edge is counted at both of its ends.]

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

### The Petersen graph, solved

Solving the 45 equations for the Petersen graph, by elimination, tells each node how far to slide. In the next figure the nodes take up their slides one at a time.

[Figure 26, animation: The Petersen graph, with every node painting its half of each of its edges. A red ring marks an edge whose two halves disagree. One node at a time slides its three paints to the position the equations dictate, and at the end no edge is broken.]

With all ten slides in place, each paint can be followed along the graph.

[Figure 27, steps: The Petersen graph with slides that solve the equations. The two halves of every edge agree, and following any one paint gives a cycle of five edges. Six paints are used.]

  - step: With these slides, the two halves of every edge carry the same two paints.
  - step: Follow one paint. It runs along five edges and closes into a cycle.
  - step: So does the next.
  - step: Six paints are in use, each a single cycle of five edges, and every edge has two of them: 6 times 5 is 30, twice 15.
A computer search over all slides finds 16 solutions for this labeling. Adding the same code to every slide turns a solution into another, which accounts for a factor of 8, so there are two kinds. One is shown. The other uses only five paints, whose cycles have 5, 5, 5, 6 and 9 edges.

## The whole proof

**Theorem.** (Cycle double cover theorem.) Every bridgeless graph has a cycle double cover.

**Proof.** By the reduction to cubic graphs, it is enough to treat a bridgeless cubic graph $G$. By the theorem of Jaeger and Kilpatrick, which we cite, $G$ has a nowhere-zero three-bit flow. By the theorem from a flow to a painting, $G$ then has a painting. By the theorem on paint and cycles, walking along each paint turns the painting into a cycle double cover.

**Worked example.** **Running the proof on $K_4$ with three-bit labels.** $K_4$ has nodes $1, 2, 3, 4$. Label the edges $12$ and $34$ with 011, the edges $13$ and $24$ with 101, and $14$ and $23$ with 110. Every node sees 011, 101 and 110, which add up to 000, so this is a nowhere-zero three-bit flow.

Give every node the slide 000. Then each half of an edge labeled 011 carries the other two labels at its node, 101 and 110, at both ends. The same holds for the other labels, so every edge agrees and no equation needs solving. The painting uses three paints: 011 on the four edges labeled 101 or 110, and so on.

*Check.* Paint 011 is on the edges $13, 24, 14, 23$, which form the cycle $1, 3, 2, 4$. The other two paints give the cycles $1, 2, 4, 3$ and $1, 2, 3, 4$. Each edge is on two of the three.

## Who proved what, and what is open

George Szekeres stated the conjecture in 1973 for graphs with three edges at every node, and Paul Seymour stated it in 1979 for all bridgeless graphs. Alon Itai and Michael Rodeh gave an equivalent form in 1978. In a 1987 letter W. T. Tutte wrote that the question had been passed around in conversation long before anyone printed it, and OpenAI's note also credits him. The reduction to cubic graphs and the painting from a 3-edge-coloring are classical. The flow theorem is due to P. A. Kilpatrick (1975) and François Jaeger (1976, 1979). In 1983 Bermond, Jackson and Jaeger built from the flow seven sets of cycles covering every edge four times.

The new step is the theorem from a flow to a painting: read each label as the difference between two paints, let every node slide its triangle of paints, and notice that agreement between neighbors is a matter of adding bits. OpenAI published it in July 2026 in a note of under three pages, which states that the proof is entirely due to its model GPT 5.6 Sol Ultra. The prompt, also published, told the model to assume that a complete proof exists and to keep working for at least eight hours. OpenAI has also released a formalization of the theorem, for graphs as defined at the start of this essay, that the Lean proof assistant checks. Jim Geelen and Sang-il Oum each wrote the argument out in their own way within weeks; the symmetric choice of paints at a node and the form of the count at a node used here follow Oum's exposition. A paper by Shiva Kintali, posted the same week as OpenAI's note and written with OpenAI's Codex, gives a proof along the same lines starting from Seymour's 6-flow theorem.

The subject is not finished. This construction can use up to eight paints. Uldis Celmins and Myriam Preissmann conjectured in the 1980s that five are always enough, and that five cycle double cover conjecture is still open.

The idea worth keeping is the one the ring showed. Solve the problem at every node separately. Write what neighbors must agree on as differences. Differences add up, and what adds up can be counted.

**Check yourself.** In a selection, how many of the three edges at a node can be selected?
Answer: 0, 2 or 3 If one edge has a nonzero code, the other two codes add up to it, so they are not both 000. All of 0, 2 and 3 occur in the selection shown on the Petersen graph.

**Recap.** - A cycle double cover is a list of cycles with every edge on exactly two of them. An edge lies on a cycle exactly when it is not a bridge, so a graph with a bridge has no cover. The theorem is that every bridgeless graph has one.
- It is enough to prove this for cubic graphs: nodes of degree 4 or more are split along a pairing that creates no bridge, nodes of degree 2 are removed, and a cover of the result is carried back.
- A cycle double cover is the same thing as a painting: two coats on every edge, and at every node each paint on two edges or none. In a cubic graph exactly three paints meet at each node, one for each pair of edges. A 3-edge-coloring gives a painting with three paints (Szekeres), but the Petersen graph has no 3-edge-coloring.
- Codes are rows of bits added column by column with $1 + 1 = 0$ and no carry, so $x + x = 0$. If paints are codes, the label of an edge is the sum of its two coats. In a painting of a cubic graph no label is 0 and the three labels at each node add up to 0. A labeling with those two properties is a nowhere-zero flow, and every bridgeless graph has one with three bits (Jaeger; Kilpatrick), which is the one result cited without proof.
- At a node with labels $x, y, z$, the paintings that fit the labels are: paints $s + x$, $s + y$, $s + z$ for a slide $s$, with each edge carrying the two paints that do not involve its own label. The two halves of an edge $e$ from $u$ to $v$ agree exactly when $s_u + s_v + \varepsilon_e f(e) = d_e$ for a bit $\varepsilon_e$. These are linear equations between bits.
- A system of linear equations between bits has a solution unless some of its equations add up to $0 = 1$. The ways to add up the agreement equations so that the unknowns cancel are the selections: codes $r_e$ with $r_e \cdot f(e) = 0$ on every edge and adding up to 000 at every node.
- For a selection, what a node contributes to the right-hand side is odd or even according to the number of selected edges at the node. Added over all nodes this counts every selected edge twice, so the total is even and $0 = 1$ never appears.
- Hence every cubic graph with a nowhere-zero three-bit flow has a painting, and every bridgeless graph has a cycle double cover. Whether five paints always suffice is open.

## Problems

The problems follow the order of the argument. Problems 1 to 7 are about covers, bridges and paint, problems 8 to 15 about codes, labels and flows, and problems 16 to 22 about the equations and the count at a node. In each group the early ones repeat moves from the text and the later ones ask for short proofs.

**Problem 1.** A graph has nodes $a, b, c, d, e$ and edges $ab$, $bc$, $ca$, $cd$, $de$, $ec$. Does it have a bridge? Find a cycle double cover or explain why there is none.

**Solution.** The graph is two triangles, $abc$ and $cde$, sharing the node $c$. Every edge lies on one of the triangles, so by the theorem on bridges and cycles there is no bridge. Listing each triangle twice gives a cycle double cover: every edge is on its own triangle, which appears twice. No other cover exists, because the only cycles in this graph are the two triangles (a cycle cannot pass through $c$ twice).

**Problem 2.** The prism has nodes $a_1, a_2, a_3, b_1, b_2, b_3$ and edges $a_1a_2$, $a_2a_3$, $a_3a_1$, $b_1b_2$, $b_2b_3$, $b_3b_1$, $a_1b_1$, $a_2b_2$, $a_3b_3$. Find a 3-edge-coloring, and write down the cycles of the three paints it gives.

**Solution.** Color $a_1a_2$ with 1, $a_2a_3$ with 2 and $a_3a_1$ with 3. Then $a_1$ has colors 1 and 3, so $a_1b_1$ gets 2; similarly $a_2b_2$ gets 3 and $a_3b_3$ gets 1. At $b_1$ color 2 is taken and at $b_2$ color 3, so $b_1b_2$ gets 1; in the same way $b_2b_3$ gets 2 and $b_3b_1$ gets 3. Every node now has all three colors. Colors 1 and 2 form the cycle $a_1 a_2 a_3 b_3 b_2 b_1$. Colors 1 and 3 form $a_1 a_2 b_2 b_1 b_3 a_3$. Colors 2 and 3 form $a_1 a_3 a_2 b_2 b_3 b_1$. Each is a single cycle of six edges, and $3 \times 6 = 18 = 2 \times 9$.

**Problem 3.** In a cycle double cover of a graph with $m$ edges, what do the lengths of the cycles add up to? The Petersen graph has 15 edges and no cycle with fewer than 5 edges. What is the largest number of cycles a cover of it could have, and what would such a cover consist of?

**Solution.** Each edge is counted once by each of the two cycles through it, so the lengths add up to $2m$. For the Petersen graph that is 30. Every cycle has at least 5 edges, so there are at most $30 / 5 = 6$ cycles, and a cover with six cycles would consist of six cycles of exactly five edges. (The painting of the Petersen graph found by solving the equations is one.)

**Problem 4.** Show that a cubic graph has an even number of nodes, and that in a 3-edge-coloring each color is on exactly half as many edges as there are nodes.

**Solution.** Count the ends of edges. Each of the $n$ nodes has three, so there are $3n$, and each edge has two, so $3n$ is twice the number of edges. Hence $3n$ is even, and so $n$ is even. In a 3-edge-coloring each node is an end of exactly one edge of a given color, and each such edge has two ends, so there are $n/2$ edges of that color.

**Problem 5.** A cubic graph has a bridge. Without using the theorem of Szekeres, show directly that it has no 3-edge-coloring. (Hint: look at one side of the bridge and count the ends of the edges of one color.)

**Solution.** Delete the bridge, colored orange say, and let $S$ be the set of nodes on one side. Consider the blue edges. None of them is the bridge, so every blue edge has both ends in $S$ or neither. Every node of $S$ is an end of exactly one blue edge, so the number of nodes in $S$ is twice the number of blue edges inside $S$, an even number. Now count orange edges the same way. Every node of $S$ is an end of exactly one orange edge, and all of these lie inside $S$ except the bridge, which has one end in $S$. So the number of nodes in $S$ is twice the number of orange edges inside $S$, plus one, an odd number. It cannot be both.

**Problem 6.** In the reduction, a cycle of the new graph $G'$ may pass through both $v'$ and $v$ without using the new edge. Take $G$ to be two triangles sharing a node $v$, split $v$ with one edge of each triangle on each new node, and find a cycle double cover of $G'$ that contains such a cycle. What does it become when the new edge is shrunk?

**Solution.** Call the triangles $v a b$ and $v c d$, and let $v'$ take the edges to $a$ and $c$, while $v$ keeps the edges to $b$ and $d$. In $G'$ the route $v', a, b, v, d, c$ and back to $v'$ is a cycle of six edges that uses every edge except the new one. The routes $v', a, b, v$ and $v', c, d, v$, each closed by the new edge, are two cycles of four edges. These three cycles are a cover: the new edge is on both four-edge cycles, and every other edge is on the six-edge cycle and on one four-edge cycle. Shrinking the new edge turns the four-edge cycles into the triangles $vab$ and $vcd$, and turns the six-edge cycle into a closed route through $v$ twice, which is cut at $v$ into the same two triangles. The result is each triangle listed twice.

**Problem 7.** Suppose a cubic graph has a painting that uses only three paints in total. Show that the graph has a 3-edge-coloring. Conclude that any painting of the Petersen graph uses at least four paints.

**Solution.** By the theorem on three paints at a node, exactly three paints meet at each node, so with only three paints available all three appear at every node, each on two of its three edges. Every edge has two of the three paints, so it is missing exactly one; color the edge by the paint it is missing. At a node, each paint is on two edges and missing from one, and the three paints are on three different pairs of edges, so they are missing from three different edges. Thus the three edges at each node get three different colors, which is a 3-edge-coloring. The Petersen graph has none, so no painting of it uses only three paints. A painting cannot use fewer than three either, since three paints meet at every node.

**Problem 8.** Compute $1011 + 0110$ and $1011 + 0110 + 1101$. Find the code $c$ with $1011 + c = 0110$.

**Solution.** Column by column, $1011 + 0110 = 1101$. Adding $1101$ to that gives $0000$, since a code added to itself is zero. For the last part, add $1011$ to both sides: $c = 1011 + 0110 = 1101$.

**Problem 9.** In a nowhere-zero three-bit flow, two of the labels at a node are 110 and 011. Find the third label. Then list the coats of the three edges when the node's slide is 000, and again when it is 101.

**Solution.** The third label is $110 + 011 = 101$. With slide 000 the paints are the labels: the edge labeled 110 gets $\{011, 101\}$, the edge labeled 011 gets $\{110, 101\}$, and the edge labeled 101 gets $\{110, 011\}$. With slide 101, add 101 to every paint: the paints become $110 + 101 = 011$, $011 + 101 = 110$ and $101 + 101 = 000$, so the edge labeled 110 gets $\{110, 000\}$, the edge labeled 011 gets $\{011, 000\}$, and the edge labeled 101 gets $\{011, 110\}$. In each case the two coats differ by the label.

**Problem 10.** The cube has a painting with three paints, found from its three kinds of edges: horizontal, vertical and slanted. Name the paints 00, 01, 10 so that horizontal edges carry $\{00, 01\}$, vertical edges $\{00, 10\}$ and slanted edges $\{01, 10\}$. Find all the labels and check the sum at a node.

**Solution.** Horizontal edges get $00 + 01 = 01$, vertical edges $00 + 10 = 10$ and slanted edges $01 + 10 = 11$. Every node of the cube has one edge of each kind, so its labels are 01, 10 and 11, which add up to 00.

**Problem 11.** Show that no cubic graph has a nowhere-zero one-bit flow.

**Solution.** The only one-bit code other than 0 is 1, so every label would be 1. At a node the three labels would add up to $1 + 1 + 1 = 1$, not 0.

**Problem 12.** Take a nowhere-zero three-bit flow on a cubic graph and let $S$ be the set of edges whose first bit is 1. Show that the edges of $S$ form cycles, no two of which share a node.

**Solution.** The labels at a node add up to 000, so in the first column the three bits add up to 0. Hence an even number of the three edges at the node are in $S$: two or none. That is the condition a single paint satisfies in a painting, and the walking argument from the theorem on paint and cycles applies word for word: start on an edge of $S$, leave each node by its other edge of $S$, and the walk closes into a cycle; repeat on what is left. Two of these cycles cannot share a node, because that node would meet four edges of $S$.

**Problem 13.** $K_4$ has nodes $a, b, c, d$. Take the spanning tree made of the three edges at $d$. Find the cycle that each of the other three edges closes with the tree, and the set of edges that lie on an odd number of those cycles.

**Solution.** The edge $ab$ closes the cycle $a, b, d$; the edge $bc$ closes $b, c, d$; and $ca$ closes $c, a, d$. The tree edge $da$ lies on the first and third cycles, $db$ on the first and second, and $dc$ on the second and third, so each tree edge is used twice, an even number. Each of $ab$, $bc$, $ca$ is used once. The edges with an odd count are $ab$, $bc$, $ca$, the triangle that avoids $d$. It meets $a$, $b$, $c$ twice and $d$ not at all, and it contains every edge outside the tree, as the sketch predicts.

**Problem 14.** (The 1983 result.) A nowhere-zero three-bit flow gives three sets of edges $S_1, S_2, S_3$, one for each column. For each nonempty collection of columns, form the set of edges that have an odd number of 1s in those columns. That makes seven sets. Show that every edge lies in exactly four of them.

**Solution.** Fix an edge and let its label have $j$ ones, where $j$ is 1, 2 or 3. A collection of columns counts the edge exactly when it contains an odd number of the $j$ columns where the label has a 1. The number of ways to pick an odd number of things out of $j$ is $2^{j-1}$ (for $j = 1, 2, 3$ that is 1, 2, 4: one way from one; either single one from two; any single one or all three from three). The remaining $3 - j$ columns may be included or not, in $2^{3-j}$ ways. So the edge is counted by $2^{j-1} \times 2^{3-j} = 4$ collections, and none of them is empty since each contains at least one column.

**Problem 15.** Show that a graph with a bridge has no nowhere-zero flow, with any number of bits. (Hint: add up the equations at all the nodes on one side of the bridge.)

**Solution.** Suppose the labels add up to 0 at every node, and let $e$ be a bridge. Deleting $e$ leaves no route between its ends, so the nodes reachable from one end form a set $A$ that does not contain the other end, and $e$ is the only edge with exactly one end in $A$. Add up, over all nodes of $A$, the sum of the labels at that node. Each of these sums is 0, so the total is 0. In the total, an edge with both ends in $A$ appears twice and cancels, and $e$ appears once. So the total equals the label of $e$, which is therefore 0. The flow is not nowhere-zero. Together with Jaeger's theorem this says that a graph has a nowhere-zero three-bit flow exactly when it is bridgeless.

**Problem 16.** Three unknown bits satisfy $a + b = 1$, $b + c = 1$ and $c + a = 0$. Which selections of these equations make all the unknowns cancel? Does the system have a solution? What changes if the third equation is $c + a = 1$?

**Solution.** Each unknown is in exactly two equations, so it cancels only if both or neither of those are taken; that forces all three equations or none. The sum of all three is $0 = 1 + 1 + 0 = 0$, so by the theorem on the only obstacle there is a solution, for instance $a = 0$, $b = 1$, $c = 0$. With $c + a = 1$ the sum is $0 = 1$ and there is none: this is a ring of three.

**Problem 17.** Compute $101 \cdot 110$ and $111 \cdot 011$. List every code $r$ with $r \cdot 011 = 0$.

**Solution.** $101 \cdot 110$ adds the first and third digits of 110: $1 + 0 = 1$. $111 \cdot 011$ adds all the digits of 011: $0 + 1 + 1 = 0$. For $r \cdot 011 = 0$, the last two digits of $r$ must be equal, and the first is free: 000, 100, 011, 111.

**Problem 18.** An edge $e$ from $u$ to $v$ has label 011. The other two labels at $u$ are 110 and 101, and the other two at $v$ are 001 and 010. If $s_u = 000$, which slides $s_v$ make the two halves of $e$ agree?

**Solution.** Take $c(u, e) = 110$ and $c(v, e) = 001$, so $d_e = 110 + 001 = 111$. The equation $s_u + s_v + \varepsilon_e f(e) = d_e$ with $s_u = 000$ gives $s_v = 111$ when $\varepsilon_e = 0$ and $s_v = 111 + 011 = 100$ when $\varepsilon_e = 1$. Check: the half at $u$ carries $\{110, 101\}$. With $s_v = 111$ the half at $v$ carries $\{111 + 001, 111 + 010\} = \{110, 101\}$, and with $s_v = 100$ it carries $\{101, 110\}$. The other six slides fail.

**Problem 19.** In a selection, show that no node has exactly one selected edge. Deduce that the selected edges form a graph in which every node has degree 0, 2 or 3, and that the number of nodes of degree 3 is even.

**Solution.** If exactly one of the three codes at a node were different from 000, the three would add up to that code and not to 000, against the second rule. So the number of selected edges at a node is 0, 2 or 3. By the handshake lemma these numbers add up to an even number. The nodes with 0 or 2 contribute an even amount, so the nodes with 3 contribute an even amount as well, which requires an even number of them.

**Problem 20.** At a node with labels $x = 110$, $y = 011$, $z = 101$, find the code $m \neq 000$ with $m \cdot x = m \cdot y = 0$. Then list all triples $r_a, r_b, r_c$ that obey the two rules of a selection at this node and have $\lambda = 0$.

**Solution.** $m \cdot 110 = 0$ says the first two digits of $m$ are equal, and $m \cdot 011 = 0$ says the last two are equal, so $m = 111$. (Then $m \cdot z = 1 + 1 = 0$ too.) With $\lambda = 0$ each code is 000 or 111 and the three add up to 000, so the triples are $(000, 000, 000)$, $(111, 111, 000)$, $(111, 000, 111)$ and $(000, 111, 111)$. They have 0 or 2 nonzero members, as the count at a node says.

**Problem 21.** On the ring of five, each node supplied one orange half and the argument ended in $0 = 1$. In the theorem from a flow to a painting, each node supplies an odd or even number as well, and the argument ends in $0 = 0$. State precisely what is counted in each case and why one count can be odd and the other cannot.

**Solution.** On the ring, the total is the number of orange half-edges. Each node colors exactly one half orange, so the total is the number of nodes, which may be odd. In the theorem, the total is the sum of the bits of all half-edges for a given selection. By the count at a node, each node contributes the number of selected edges ending at it, as odd or even, so the total has the parity of the number of ends of selected edges. Each selected edge has two ends, so that number is twice the number of selected edges and is always even. One total counts nodes and the other counts ends of edges.

**Problem 22.** Where did the proof use that the labels have three bits? Examine the theorem on blind codes for four-bit codes $x \neq y$, and show by an example that the last step of the count at a node fails as written.

**Solution.** The count at a node used that only 000 and one other code $m$ have dot product 0 with both $x$ and $y$. With four bits, the same class-matching argument gives four classes of size $16 / 4 = 4$, so four codes are blind to $x$ and $y$: 0000, $m_1$, $m_2$ and $m_1 + m_2$. For example with $x = 1000$, $y = 0100$ and $z = 1100$, the blind codes are 0000, 0010, 0001, 0011. Take $r_a = 0010$, $r_b = 0001$, $r_c = 0011$. They add up to 0000 and each has dot product 0 with all of $x, y, z$, so both rules hold and $\lambda = 0$. But all three are nonzero, an odd number, while the half-edge bits add up to $\lambda = 0$. So the argument as given does not go through for four-bit labels, and three bits are what Jaeger's theorem provides.

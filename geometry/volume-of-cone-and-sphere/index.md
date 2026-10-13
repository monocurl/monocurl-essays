# Why a cone is a third of a cylinder, and a sphere's volume

> A cone holds exactly one third of the cylinder around it. A cube cut into three pyramids shows why, and the same slicing idea gives the volume of a sphere.

Series: Geometry (https://www.monocurl.com/monocurl-essays/geometry/)
Canonical: https://www.monocurl.com/monocurl-essays/geometry/volume-of-cone-and-sphere/
Keywords: volume of a cone, why is a cone one third of a cylinder, volume of a pyramid, volume of a sphere, Cavalieri's principle, sum of squares, Archimedes sphere and cylinder

[Figure 1, animation: A cone full of water is emptied into a cylinder with the same base and the same height, three times. The third cone brings the water exactly to the brim.]

Take a cone and a cylinder with the same circular base and the same height, fill the cone with water and pour it into the cylinder. The water comes a third of the way up. A second cone brings it to two thirds, and the third fills the cylinder to the brim, with nothing left over. You can do this with paper models and rice, and it always comes out the same: three cones, not two and a half, not $\pi$.

A cylinder of radius $r$ and height $h$ has volume $\pi r^2 h$, the area of its base times its height. So the experiment says a cone has volume $\frac{1}{3}\pi r^2 h$. Where does a clean fraction like one third come from in a shape with a curved side and a sharp point?

## The natural guess is one half

If you had to guess the fraction without the experiment, one half would be reasonable. Seen from the side, the cylinder is a rectangle and the cone is a triangle with the same base and height, and a triangle is half of its rectangle.

The experiment says the guess is wrong, and one slice shows why. Cut the cone and the cylinder with a horizontal plane halfway up.

[Figure 2, image: A cone inside a cylinder, cut by a plane at half their height. The slice of the cone is a disc half as wide as the slice of the cylinder, so it has only a quarter of the area.]

Halfway up, the cone is half as wide as the cylinder. But the slice is a disc, and a disc half as wide has a quarter of the area, because [scaling a figure by $k$ multiplies its area by $k^2$](@geometry/similar-triangles). The side view only sees one of the two directions in which the cone narrows. The cone loses material faster than the triangle suggests, so its share of the cylinder must be less than a half. That makes a third believable without explaining it.

## A case that can be done exactly: three pyramids in a cube

A cone is hard to take apart, so start with a pointed solid that has flat sides. A **pyramid** is the solid made of all the segments from a point, its apex, to the points of a flat base. One pyramid whose volume needs no formula at all is hiding in a cube.

Pick one corner $A$ of a cube. Three of the cube's faces meet at $A$, and the other three do not touch it. Join $A$ to every point of one of those three far faces, and you get a pyramid with a square base. Do the same for the other two far faces.

[Figure 3, animation: A cube is cut into three pyramids. Each has one face of the cube as its base and the same corner of the cube as its apex. The three pyramids are identical in shape, so each is one third of the cube.]

Every point of the cube lies on a segment from $A$ to one of the three far faces, so the three pyramids fill the cube, and they overlap only along shared faces. They are also congruent to one another: turning the cube a third of a turn about its diagonal through $A$ carries each of the three far faces to the next, and so carries each pyramid to the next. Three identical pieces that make up a cube of side $s$ have volume $\frac{1}{3}s^3$ each.

Each of these pyramids has a square base of area $s^2$ and its apex at height $s$ above the base. So for this one shape,

$$
\text{volume} = \tfrac{1}{3} \cdot s^2 \cdot s = \tfrac{1}{3} \times \text{base area} \times \text{height}.
$$

**Pause and try.** A cube of side $s$ can also be cut into six pyramids, by joining its center to each of its six faces. What are the base area and height of one of these pyramids, and what is its volume? Does "one third of base area times height" give the right answer for this shape too?

**Answer.** Each pyramid has a face of the cube as its base, with area $s^2$, and its apex at the center of the cube, at height $\frac{s}{2}$ above the base. The six are congruent and fill the cube, so each has volume $\frac{1}{6}s^3$. The formula gives $\frac{1}{3} \cdot s^2 \cdot \frac{s}{2} = \frac{1}{6}s^3$, the same. The apex has moved from over a corner to over the middle, and the one third survives.

## Sliding the slices: Cavalieri's principle

Two examples from a cube are a long way from a cone. The pyramids so far have square bases, and their heights are tied to the size of the base. We need to know what happens to volume when the apex is moved, when the height is changed, and when the base is a different shape. One principle handles all three.

Think of a solid as a stack of thin slabs, like a deck of cards. Push the deck sideways so that it leans. Every card is still there and no card has changed, so the deck takes up the same amount of space as before.

[Figure 4, animation: A stepped pyramid of 12 square slabs with sides 12, 11, ..., 1 and thickness 1. Sliding the slabs sideways moves the apex from above the center of the base to beyond its edge. No slab changes, so the volume stays at 650 unit cubes.]

With slabs of visible thickness the leaning stack is a staircase. Make the slabs thinner and more numerous and both stacks approach smooth pyramids, one upright and one leaning, while the argument stays the same. That suggests the following principle, named for Bonaventura Cavalieri, who published it in 1635.

**Theorem.** **(Cavalieri's principle.)** Let two solids stand between the same two parallel planes. Suppose that every plane parallel to these two cuts the solids in cross-sections of equal area. Then the two solids have equal volume. More generally, if at every height the cross-section of the first solid has area no greater than that of the second, then the volume of the first is no greater than the volume of the second.

I am going to use this without proving it, and you should know what is being left out. For solids made of finitely many slabs it is obvious, as with the cards. For solids with slanted or curved sides, a proof has to say what volume means, and the answer comes from integral calculus: the volume is the integral of the cross-sectional area over the height, so two solids with the same cross-sectional areas have the same volume. Note that the cross-sections need not have the same shape, only the same area, and that freedom is what we will use.

Here is what the principle buys. Take any pyramid or cone, with any flat base of area $B$ and with its apex at height $h$ above the plane of the base. Slice it parallel to the base at distance $t$ below the apex. The slice is a copy of the base scaled from the apex by the factor $t/h$, so by the [square law for areas](@geometry/similar-triangles) its area is

$$
B \left(\frac{t}{h}\right)^2.
$$

This expression contains only $B$, $h$ and $t$. It does not know the shape of the base or where the apex sits above it. So any two cones or pyramids with the same base area and the same height have equal cross-sections at every level, and by Cavalieri's principle they have the same volume. A cone of radius $r$ and height $h$ has the same volume as a square pyramid of height $h$ whose base has area $\pi r^2$.

**Pause and try.** A cone has base radius 6 and height 12. Find the areas of its cross-sections at distances $t = 3$, $6$ and $9$ below the apex, as multiples of $\pi$. A pyramid of height 12 has a square base of side $6\sqrt{\pi}$. What are its cross-sections at the same levels?

**Answer.** The base area is $B = 36\pi$. At distance $t$ below the apex the slice has area $36\pi \cdot (t/12)^2$, which is $36\pi/16 = 2.25\pi$ at $t = 3$, then $36\pi/4 = 9\pi$ at $t = 6$, and $36\pi \cdot 9/16 = 20.25\pi$ at $t = 9$. The pyramid's base has area $(6\sqrt{\pi})^2 = 36\pi$, the same $B$, and the same height, so its slices have the same areas: $2.25\pi$, $9\pi$ and $20.25\pi$. The slices are squares in one solid and discs in the other, with equal areas.

So the volume of a cone or pyramid depends only on $B$ and $h$, and the cube gave its value in one case. To find it for every $B$ and $h$ we can count slabs.

## Counting the slabs

Cut the height of the cone into $n$ layers of equal thickness $h/n$, by planes parallel to the base. Number the cuts from the apex down: the $k$th cut is at distance $t = kh/n$ below the apex, where the cross-section has area $B(k/n)^2$.

Replace each layer by a slab with straight sides. If each slab is given the area of the cross-section at the *bottom* of its layer, the slabs stick out a little beyond the cone, and the stack is too big. Its volume is

$$
\frac{h}{n}\left[B\left(\frac{1}{n}\right)^2 + B\left(\frac{2}{n}\right)^2 + \dots + B\left(\frac{n}{n}\right)^2\right] = Bh \cdot \frac{1^2 + 2^2 + \dots + n^2}{n^3}.
$$

So everything comes down to the sum of the first $n$ squares, compared with $n^3$.

**Pause and try.** Compute $\dfrac{1^2 + 2^2 + \dots + n^2}{n^3}$ for $n = 1$, $2$, $3$ and $4$. Is it heading toward $\frac{1}{2}$ or toward $\frac{1}{3}$?

**Answer.** For $n = 1$: $1/1 = 1$. For $n = 2$: $5/8 = 0.625$. For $n = 3$: $14/27 \approx 0.519$. For $n = 4$: $30/64 \approx 0.469$. It is already below one half and still falling, which rules out $\frac{1}{2}$ as the place where it settles.

[Figure 5, animation: A cone enclosed in a stack of circular slabs, as the number of slabs grows from 4 to 48. The volumes of the stack around the cone and of a stack inside it, as fractions of the cylinder, close in on one third from above and below.]

The numbers go to one third. To prove it we need the sum of squares in closed form:

$$
1^2 + 2^2 + \dots + n^2 = \frac{n(n+1)(2n+1)}{6}.
$$

For $n = 4$ this gives $\frac{4 \cdot 5 \cdot 9}{6} = 30$, which matches $1 + 4 + 9 + 16$. A proof of the formula is one of the problems at the end. Dividing by $n^3$, and sharing the three factors of $n$ among the three factors on top,

$$
\frac{1^2 + 2^2 + \dots + n^2}{n^3} = \frac{1}{6}\left(1 + \frac{1}{n}\right)\left(2 + \frac{1}{n}\right).
$$

As $n$ grows, $\frac{1}{n}$ shrinks toward zero and the right side closes in on $\frac{1}{6} \cdot 1 \cdot 2 = \frac{1}{3}$. The 3 in the cone formula is the 3 in "the sum of the first $n$ squares is about $\frac{1}{3}n^3$".

**Theorem.** **(Volume of a cone or pyramid.)** Let a solid consist of all the segments joining a point $A$ to the points of a flat region of area $B$, and let $h$ be the perpendicular distance from $A$ to the plane of that region. Then the volume of the solid is

$$
V = \tfrac{1}{3}\,B\,h.
$$

In particular, a cone with a circular base of radius $r$ and height $h$ has volume $\frac{1}{3}\pi r^2 h$.

**Proof.** Fix a whole number $n \ge 1$ and cut the solid into $n$ layers by the planes parallel to the base at distances $\frac{h}{n}, \frac{2h}{n}, \dots, \frac{(n-1)h}{n}$ from $A$. As shown above, the cross-section at distance $t$ from $A$ has area $B(t/h)^2$, which increases with $t$.

Consider the $k$th layer, between distances $\frac{(k-1)h}{n}$ and $\frac{kh}{n}$. Every cross-section in it has area at most $B(k/n)^2$ and at least $B\left((k-1)/n\right)^2$. Compare the layer with two prisms of the same thickness $\frac{h}{n}$, one whose cross-sections all have area $B(k/n)^2$ and one whose cross-sections all have area $B\left((k-1)/n\right)^2$. A prism's volume is its cross-sectional area times its thickness. By the second part of Cavalieri's principle, the volume of the layer lies between the volumes of the two prisms:

$$
\frac{h}{n} \cdot B\,\frac{(k-1)^2}{n^2} \;\le\; \text{volume of layer } k \;\le\; \frac{h}{n} \cdot B\,\frac{k^2}{n^2}.
$$

Adding over $k = 1, \dots, n$ gives

$$
Bh \cdot \frac{0^2 + 1^2 + \dots + (n-1)^2}{n^3} \;\le\; V \;\le\; Bh \cdot \frac{1^2 + 2^2 + \dots + n^2}{n^3}.
$$

By the formula for the sum of squares, used with $n$ on the right and with $n - 1$ on the left, this is

$$
\frac{Bh}{6}\left(1 - \frac{1}{n}\right)\left(2 - \frac{1}{n}\right) \;\le\; V \;\le\; \frac{Bh}{6}\left(1 + \frac{1}{n}\right)\left(2 + \frac{1}{n}\right).
$$

This holds for every $n$. As $n$ grows, both bounds close in on $\frac{Bh}{6} \cdot 2 = \frac{1}{3}Bh$, and the gap between them, which is $\frac{Bh}{n}$, can be made as small as we please. The volume $V$ is one fixed number caught between the bounds for every $n$, so $V = \frac{1}{3}Bh$.

The proof is the animation written down: the upper bound is the stack around the cone and the lower bound is the stack inside it. It is the same trap that caught [the area of a circle](@geometry/area-of-a-circle) between two polygons. Besides Cavalieri's principle, it rests on the square law for the areas of the slices and on the idea of a quantity closing in on a limit.

**Key idea.** A cone or pyramid has one third the volume of the cylinder or prism with the same base and height: $V = \frac{1}{3}Bh$. The third comes from slices whose areas grow as the square of the distance from the apex.

The result agrees with the cube: for $B = s^2$ and $h = s$ it gives $\frac{1}{3}s^3$. It also explains the failed guess. In the plane, a triangle's slices have lengths that grow in proportion to $t$, and $\frac{1 + 2 + \dots + n}{n^2}$ closes in on $\frac{1}{2}$. In space the slices have areas that grow as $t^2$, and the fraction becomes $\frac{1}{3}$.

**Worked example.** **A paper cup.** A conical paper cup is 6 cm across at the rim and 10 cm deep. How much water does it hold?

The base of the cone is the circle at the rim. "Across" is a diameter, so $r = 3$ cm, and the height is the depth, $h = 10$ cm.

$$
V = \tfrac{1}{3}\pi r^2 h = \tfrac{1}{3}\pi \cdot 9 \cdot 10 = 30\pi \approx 94.2 \text{ cm}^3.
$$

*Check.* A cylindrical cup of the same width and depth would hold $\pi \cdot 9 \cdot 10 = 90\pi \approx 282.7$ cm³, three times as much.

**Worked example.** **The Great Pyramid.** The Great Pyramid of Giza was built with a square base about 230 m on a side and a height of about 147 m. Estimate the volume of stone in it, treating it as solid.

The base area is $B = 230^2 = 52{,}900$ m², and $h = 147$ m. We want $\frac{1}{3}Bh$, and it is easiest to take the third of the height first, since $147 / 3 = 49$:

$$
V = 52{,}900 \times 49 = 2{,}592{,}100 \text{ m}^3,
$$

about 2.6 million cubic meters.

**Common mistake.** **Using the slant length for the height.** A cone with base radius 3 whose sloping side measures 5 from rim to apex does not have $h = 5$. The height is the perpendicular distance from the apex to the plane of the base. Here the radius, the height and the sloping side form a right triangle, so $h = \sqrt{5^2 - 3^2} = 4$ and the volume is $\frac{1}{3}\pi \cdot 9 \cdot 4 = 12\pi$. Using 5 would give $15\pi$, too large by a quarter.

## The sphere

A sphere has no flat base and no apex, so the cone formula does not apply to it. But Cavalieri's principle does not care about apexes. If we can find a solid we understand whose slices have the same areas as the slices of a ball, we are done.

By symmetry it is enough to treat half a ball. Take a ball of radius 5 and cut it in half through its center, and stand the half on its flat face, like a dome. Slice the dome at height $y$ above that face.

**Pause and try.** For a dome of radius 5, find the area of the slice at height $y = 3$ and at height $y = 4$, as multiples of $\pi$. (Each slice is a disc. A point on its edge is at distance 5 from the center of the ball.) Then compare each with $25\pi - \pi y^2$.

**Answer.** Let $x$ be the radius of the slice. The center of the ball, the center of the slice and a point on the edge of the slice form a right triangle with legs $y$ and $x$ and hypotenuse 5. At $y = 3$: $x^2 = 25 - 9 = 16$, so the area is $16\pi$. At $y = 4$: $x^2 = 25 - 16 = 9$, so the area is $9\pi$. And $25\pi - 9\pi = 16\pi$, $25\pi - 16\pi = 9\pi$. The slice at height $y$ has area $25\pi - \pi y^2$ exactly.

The expression $25\pi - \pi y^2$ is a difference of two areas we recognize. The first, $25\pi$, is the area of a disc of radius 5, the slice of a cylinder of radius 5 at every height. The second, $\pi y^2$, is the area of a disc of radius $y$, and a solid whose slice at height $y$ has radius $y$ is a cone as wide as it is tall, standing on its point. So the dome's slices match those of a cylinder with a cone removed.

[Figure 6, steps: A dome of radius r, and a cylinder of radius r and height r with a cone hollowed out of it, sliced at the same height. The disc from the dome and the ring from the cylinder have the same area at every height. Areas are shown for r = 5.]

  - step: A dome, half of a ball of radius r, and beside it a cylinder of radius r and height r from which a cone has been hollowed out, point down.
  - step: Slice both at the same height y. The dome gives a disc and the other solid gives a ring. Their true shapes are drawn below.
  - step: In the dome, the radius x of the disc, the height y and the radius r of the ball form a right triangle. So x² = r² − y², and the disc has area π(r² − y²).
  - step: The cone is as wide as it is tall, so at height y the hole in the ring has radius y. The ring has area πr² − πy², the same as the disc.
  - step: Move the slice up and down. At every height the two areas agree.
Now the volumes. The cylinder has volume $\pi r^2 \cdot r = \pi r^3$, and the cone, with the same base and height, has $\frac{1}{3}\pi r^3$. So the cylinder with the cone removed has volume $\frac{2}{3}\pi r^3$, and the dome, having the same slices, has the same volume. A whole ball is two domes.

**Theorem.** **(Volume of a sphere.)** A sphere of radius $r$ encloses a volume of

$$
V = \tfrac{4}{3}\pi r^3.
$$

**Proof.** Place the center of the sphere at height 0 and consider the half of the ball at heights $0 \le y \le r$. A plane at height $y$ cuts it in a disc. If $x$ is the radius of that disc, then a point on its edge, the center of the disc and the center of the ball form a right triangle with legs $x$ and $y$ and hypotenuse $r$, so by [the Pythagorean theorem](@geometry/pythagorean-theorem) $x^2 = r^2 - y^2$ and the disc has area $\pi(r^2 - y^2)$.

Let $S$ be the solid obtained from a cylinder of radius $r$ standing between heights 0 and $r$ by removing the cone whose apex is the center of the cylinder's bottom face and whose base is its top face. At height $y$ the cylinder's cross-section is a disc of radius $r$. The cone's cross-section there is a disc with the same center and radius $y$, because the cone's radius grows in proportion to height and equals $r$ at height $r$. So the cross-section of $S$ is a ring of area $\pi r^2 - \pi y^2$.

The half ball and $S$ lie between the same two parallel planes and have cross-sections of equal area at every height. By Cavalieri's principle they have equal volume. The volume of $S$ is $\pi r^3 - \frac{1}{3}\pi r^2 \cdot r = \frac{2}{3}\pi r^3$, and the ball has twice the volume of the half ball: $\frac{4}{3}\pi r^3$.

The proof is complete given the two results it uses, Cavalieri's principle and the volume of a cone. The theorem is due to Archimedes, who found it in the third century BC by a related route, balancing slices of a sphere, a cone and a cylinder against one another. For a ball inside the cylinder that just contains it, of radius $r$ and height $2r$, it says the ball fills exactly two thirds of the cylinder, and by ancient accounts a sphere and a cylinder were carved on his tomb.

[Figure 7, image: A cone, a ball and a cylinder, all of radius r and height 2r. Their volumes are \frac{2}{3}\pi r^3, \frac{4}{3}\pi r^3 and 2\pi r^3, in the ratio 1 to 2 to 3.]

**Worked example.** **Will the ice cream fit?** A ball of ice cream of radius 3 cm sits on a cone that is 6 cm across at the top and 12 cm deep. If the ice cream melts into the cone, does it overflow?

We need to compare two volumes. The ball has $r = 3$:

$$
\tfrac{4}{3}\pi \cdot 3^3 = \tfrac{4}{3}\pi \cdot 27 = 36\pi \text{ cm}^3.
$$

The cone has radius 3 and height 12:

$$
\tfrac{1}{3}\pi \cdot 3^2 \cdot 12 = 36\pi \text{ cm}^3.
$$

They are equal, about 113.1 cm³ each. The melted ice cream fills the cone exactly to the brim.

*Check.* This is the 1 to 2 ratio in the figure above: a cone of radius $r$ and height $2r$ holds half of a ball of radius $r$, so one of height $4r = 12$ cm holds a whole one.

**Common mistake.** **Forgetting that the radius is cubed.** A ball of radius 6 does not hold twice as much as a ball of radius 3. Volume goes with $r^3$, so it holds $2^3 = 8$ times as much: $288\pi$ against $36\pi$. For the same reason, putting a diameter into $\frac{4}{3}\pi r^3$ where the radius belongs makes the answer 8 times too big.

## Where the one third stops

The factor $\frac{1}{3}$ belongs to solids that taper to a point along straight lines, so that the slice at distance $t$ from the apex is a scaled copy of the base with area proportional to $t^2$. Change the way the solid tapers and the fraction changes. The dome is an example: it also narrows from a disc of radius $r$ to a point over a height $r$, and it fills two thirds of its cylinder, twice what the cone fills, because it bulges where the cone is straight.

A cone with its tip cut off has two faces of different sizes, and its volume is found by subtracting the missing tip from the whole cone, as in one of the problems below.

Cavalieri's principle has its own conditions: the slices must be taken by parallel planes at the same heights in both solids, and it is their areas that must agree. Equal widths are not enough, as the cone and its side-view triangle showed.

## Looking back

The obstacle was that there is no evident way to cut a cone into pieces that reassemble into a box. Two ideas got around it. The first was to compare slices instead of shapes: two solids with equal slices at every height have equal volume. That reduced every cone and pyramid to a single question about slices whose areas grow as a square. The second was to answer that question by trapping the volume between two stacks of slabs, which turned geometry into a statement about $1^2 + 2^2 + \dots + n^2$.

Both ideas are the beginning of integral calculus, where "volume is the sum of the slices" becomes a definition and sums like the one above are computed once and for all.

**Check yourself.** A cone and a cylinder have the same base and the same height. The cylinder holds 600 mL. How much does the cone hold?
Answer: 200 mL A cone is one third of the cylinder with the same base and height, and $600 / 3 = 200$.

**Recap.** - A cube can be cut into three congruent pyramids with a common apex at one corner, so each has volume $\frac{1}{3}s^3$.
- Cavalieri's principle: two solids whose cross-sections at every height have equal areas have equal volumes.
- The slice of a cone or pyramid at distance $t$ from the apex has area $B(t/h)^2$, so its volume depends only on the base area $B$ and the height $h$.
- Trapping the volume between two stacks of slabs gives $V = \frac{1}{3}Bh$, because $\frac{1^2 + 2^2 + \dots + n^2}{n^3}$ closes in on $\frac{1}{3}$. For a cone, $V = \frac{1}{3}\pi r^2 h$.
- A half ball has the same slices as a cylinder with a cone removed, so a sphere of radius $r$ has volume $\frac{4}{3}\pi r^3$, two thirds of the cylinder around it.

## Problems

**Problem 1.** Find the volume of a cone with base radius 6 and height 4.

**Solution.** $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \cdot 36 \cdot 4 = 48\pi \approx 150.8$.

**Problem 2.** A pyramid has a square base of side 6. Each of its four triangular faces has height 5, measured from the middle of a base edge up to the apex, which is above the center of the base. Find the volume of the pyramid.

**Solution.** The height of the pyramid is the perpendicular distance from the apex to the base, which is not given. The center of the base, the midpoint of a base edge and the apex form a right triangle. One leg runs from the center to the middle of an edge and has length $6/2 = 3$. The hypotenuse is the height of a triangular face, 5. The other leg is the height $h$ of the pyramid, so $h = \sqrt{5^2 - 3^2} = 4$. Then $V = \frac{1}{3} \cdot 6^2 \cdot 4 = 48$.

**Problem 3.** A bowl has the shape of half a ball of radius 9 cm. How many liters does it hold? (One liter is 1000 cm³.)

**Solution.** Half of $\frac{4}{3}\pi r^3$ is $\frac{2}{3}\pi r^3 = \frac{2}{3}\pi \cdot 729 = 486\pi \approx 1526.8$ cm³, which is about 1.53 liters.

**Problem 4.** A conical glass, point down, is filled with water to half its depth. (a) What fraction of the glass's full volume is the water? (b) To what fraction of the depth must it be filled to be half full?

**Solution.** (a) The water forms a cone that is a scaled copy of the whole glass, with scale factor $\frac{1}{2}$, since it shares the apex and both its depth and its radius are half as large. Scaling by $k$ multiplies volume by $k^3$, so the water is $\left(\frac{1}{2}\right)^3 = \frac{1}{8}$ of the glass. Check with the formula: $\frac{1}{3}\pi (r/2)^2 (h/2) = \frac{1}{8} \cdot \frac{1}{3}\pi r^2 h$.

(b) If the water reaches a fraction $k$ of the depth, its volume is $k^3$ of the glass. We need $k^3 = \frac{1}{2}$, so $k = \sqrt[3]{1/2} \approx 0.794$. The glass is half full when the water is about 79% of the way up. Check: $0.794^3 \approx 0.5006$.

**Problem 5.** For a cone of base area $B$ and height $h$, compute by hand the volume of the stack of 4 slabs around the cone and of the stack of 4 slabs inside it, as multiples of $Bh$. Check that $\frac{1}{3}$ lies between them, and explain why the two stacks differ by exactly $\frac{1}{4}Bh$.

**Solution.** Each slab has thickness $h/4$. The cross-sections at the four cuts, at distances $\frac{h}{4}, \frac{2h}{4}, \frac{3h}{4}, h$ from the apex, have areas $\frac{1}{16}B$, $\frac{4}{16}B$, $\frac{9}{16}B$ and $\frac{16}{16}B$. The outer stack uses all four:

$$
\frac{h}{4} \cdot \frac{B}{16}(1 + 4 + 9 + 16) = \frac{30}{64}Bh \approx 0.469\,Bh.
$$

The inner stack gives each layer the area at its top, so it uses areas $0$, $\frac{1}{16}B$, $\frac{4}{16}B$, $\frac{9}{16}B$:

$$
\frac{h}{4} \cdot \frac{B}{16}(0 + 1 + 4 + 9) = \frac{14}{64}Bh \approx 0.219\,Bh.
$$

And $0.219 < 0.333 < 0.469$. The two sums contain the same terms except that the outer one has the largest slab, of area $B$ and thickness $\frac{h}{4}$, and the inner one has a slab of area 0 in its place. So they differ by $\frac{1}{4}Bh$. With $n$ slabs the difference is $\frac{1}{n}Bh$ for the same reason, which is why the trap closes.

**Problem 6.** Prove that $1^2 + 2^2 + \dots + n^2 = \dfrac{n(n+1)(2n+1)}{6}$, as follows. (a) Check that $(k+1)^3 - k^3 = 3k^2 + 3k + 1$. (b) Add this identity for $k = 1, 2, \dots, n$ and observe what happens on the left side. (c) Solve for the sum of squares, using $1 + 2 + \dots + n = \frac{n(n+1)}{2}$.

**Solution.** (a) $(k+1)^3 = k^3 + 3k^2 + 3k + 1$, and subtracting $k^3$ leaves $3k^2 + 3k + 1$.

(b) On the left the sum is $(2^3 - 1^3) + (3^3 - 2^3) + \dots + \left((n+1)^3 - n^3\right)$. Each cube appears once with a plus sign and once with a minus sign, except the first and the last, so the left side is $(n+1)^3 - 1$. Writing $S$ for $1^2 + 2^2 + \dots + n^2$, the right side is $3S + 3 \cdot \frac{n(n+1)}{2} + n$.

(c) So $3S = (n+1)^3 - 1 - n - \frac{3n(n+1)}{2} = (n+1)^3 - (n+1) - \frac{3n(n+1)}{2}$. Factor out $(n+1)$:

$$
3S = (n+1)\left[(n+1)^2 - 1 - \tfrac{3n}{2}\right] = (n+1)\left[n^2 + \tfrac{n}{2}\right] = \frac{n(n+1)(2n+1)}{2}.
$$

Dividing by 3 gives $S = \frac{n(n+1)(2n+1)}{6}$. Check with $n = 3$: $\frac{3 \cdot 4 \cdot 7}{6} = 14 = 1 + 4 + 9$.

[Figure 8, image: A cone of base radius 6 and height 12 is cut by a plane parallel to its base, halfway up. The tip that is removed is a cone of radius 3 and height 6.]

**Problem 7.** The figure above shows a cone of base radius 6 and height 12 cut by a plane parallel to its base, halfway up. Find the volume of the lower piece. What fraction of the original cone is it?

**Solution.** The lower piece is the whole cone with the tip removed. The whole cone has volume $\frac{1}{3}\pi \cdot 6^2 \cdot 12 = 144\pi$. The tip is a cone with apex at the same point, height 6 and radius 3 (half of each, since it is the whole cone scaled by $\frac{1}{2}$), so its volume is $\frac{1}{3}\pi \cdot 3^2 \cdot 6 = 18\pi$. The lower piece has volume $144\pi - 18\pi = 126\pi \approx 395.8$. The tip is $\frac{18}{144} = \frac{1}{8}$ of the cone, as the cube law for scaling predicts, so the lower piece is $\frac{7}{8}$ of it.

**Problem 8.** A ball of radius $r$ is cut by a plane at distance $r - a$ from its center, where $0 < a \le r$. The smaller piece is called a cap of height $a$. Use the comparison of the dome with the cylinder minus a cone to show that the cap has volume $\dfrac{\pi a^2 (3r - a)}{3}$. Check the formula for $a = r$, and evaluate it for $r = 5$, $a = 2$.

**Solution.** Stand the half ball on its flat face. The cap is the part of it between heights $r - a$ and $r$. At every height the half ball has the same cross-sectional area as the cylinder with the cone removed, so by Cavalieri's principle, applied between the planes at heights $r - a$ and $r$, the cap has the same volume as the part of that solid between the same two heights.

That part is a slab of the cylinder, of volume $\pi r^2 a$, minus the part of the cone between heights $r - a$ and $r$. The cone has its apex at height 0 and radius equal to its height. Up to height $r$ it has volume $\frac{1}{3}\pi r^3$, and up to height $r - a$ it has volume $\frac{1}{3}\pi (r - a)^3$. So

$$
\text{cap} = \pi r^2 a - \tfrac{1}{3}\pi\left[r^3 - (r - a)^3\right].
$$

Expanding, $r^3 - (r - a)^3 = 3r^2 a - 3ra^2 + a^3$, so

$$
\text{cap} = \pi r^2 a - \pi r^2 a + \pi r a^2 - \tfrac{1}{3}\pi a^3 = \pi a^2\left(r - \tfrac{a}{3}\right) = \frac{\pi a^2(3r - a)}{3}.
$$

For $a = r$ the cap is the half ball, and the formula gives $\frac{\pi r^2 \cdot 2r}{3} = \frac{2}{3}\pi r^3$, as it should. For $r = 5$ and $a = 2$ it gives $\frac{\pi \cdot 4 \cdot 13}{3} = \frac{52\pi}{3} \approx 54.5$.

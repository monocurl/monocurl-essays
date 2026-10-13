# Waves and interference: how two ripples can cancel

> What a wave is, why its speed is frequency times wavelength, and how adding waves gives the quiet lines of an interference pattern and the notes of a string.

Series: Physics (https://www.monocurl.com/monocurl-essays/physics/)
Canonical: https://www.monocurl.com/monocurl-essays/physics/waves-and-interference/
Keywords: wave interference, superposition of waves, wave speed frequency wavelength, constructive and destructive interference, path difference, standing waves, harmonics of a string, two source interference

[Figure 1, animation: Two dippers 6 cm apart tap the surface of a ripple tank in step, making ripples 2 cm long. Blue is raised water and orange is lowered. Along the white lines the water stays level although ripples from both dippers pass through. Slowed 15 times.]

Tap the surface of a pond with a stick, steadily, and rings of ripples spread out. Now tap with a second stick a hand's width away, in step with the first. Each stick alone would set every point of the surface bobbing. With both going, there are lines running outward from between the sticks along which the water hardly moves at all.

That is strange if you think of a ripple as stuff. Two heaps of sand make a bigger heap. But here a disturbance added to a disturbance gives, in places, no disturbance, and in other places twice as much. The same thing happens with sound from two loudspeakers and with light through two slits. To understand it we need to say what a wave is and how two of them combine.

## The pattern moves and the medium stays

Start with one dimension: a long rope under tension, lying along the $x$ axis. Flick one end and a hump travels down the rope. Describe the rope at any moment by the sideways displacement $y$ of each point from its resting position.

[Figure 2, animation: A pulse traveling along a rope at 4 m/s, at half speed, with the rope drawn as beads. The gray curve is where the pulse started. The pulse moves 5.6 m to the right, while the orange bead only moves up and back down.]

Two things are moving in that animation, and they are different things. The hump travels along the rope at 4 m/s. Each bead of the rope moves only sideways, rising as the hump arrives and settling back where it started. Nothing material travels from one end to the other. What travels is a shape, and with it energy.

**Definition.** A **wave** is a disturbance that travels through a **medium** (the rope, the water surface, the air) while each part of the medium only moves a little about its resting position. If the parts move perpendicular to the direction of travel, as on a rope, the wave is **transverse**; if they move back and forth along it, as air does in a sound wave, it is **longitudinal**.

The shape gives us a formula. Suppose at $t = 0$ the rope's displacement at position $x$ is $y = f(x)$, some hump-shaped function. After a time $t$, the same hump sits a distance $vt$ farther along, where $v$ is the wave speed. The displacement at $x$ now is what it was, at time zero, at the point $vt$ to the left:

$$
y(x, t) = f(x - vt).
$$

Any function of the combination $x - vt$ describes a shape moving in the $+x$ direction at speed $v$ without changing form.

**Pause and try.** What describes the same hump moving in the $-x$ direction at speed $v$? Check your answer by asking where the crest is at $t = 1$ s, if the crest of $f$ is at $x = 0$ and $v = 4$ m/s.

**Answer.** $y = f(x + vt)$. The crest is where the argument of $f$ is zero: $x + 4(1) = 0$, so $x = -4$ m. It has moved 4 m in the negative direction, as required. With $x - vt$ the crest would be at $x = +4$ m.

## Sine waves: wavelength, frequency and speed

Now shake the end of the rope up and down steadily, in [simple harmonic motion](@physics/simple-harmonic-motion). Each shake sends a hump or a dip down the rope, and the rope takes the form of a traveling [sine wave](@trigonometry/sine-waves).

Four quantities describe it. The **amplitude** $A$ is the largest displacement. The **wavelength** $\lambda$ is the distance from one crest to the next, in meters. The **period** $T$ is the time for one bead to complete one cycle, and the **frequency** $f = 1/T$ is the number of cycles per second, in hertz. All beads share the period of the hand that drives them.

[Figure 3, animation: A sine wave of wavelength 2 m and period 0.5 s on the rope, slowed six times. Each time the orange bead completes one cycle, the green crest advances by exactly one wavelength.]

The two readouts in the animation stay equal, and that equality is the relation between the three quantities. During one period the hand makes one complete shake, which lays down one complete wavelength of new wave behind the old, so the old wave has been pushed along by exactly $\lambda$. The wave covers a distance $\lambda$ in a time $T$, which fixes its speed.

**Theorem.** (Wave speed.) A sinusoidal wave of wavelength $\lambda$ and frequency $f$ (period $T = 1/f$) that travels without changing shape has speed

$$
v = \frac{\lambda}{T} = f\lambda.
$$

**Proof.** Write the wave at $t = 0$ as $y = A\sin(2\pi x/\lambda)$, which repeats each time $x$ grows by $\lambda$. Moving in the $+x$ direction at speed $v$, it is $y(x, t) = A\sin\bigl(2\pi(x - vt)/\lambda\bigr)$ by the result of the last section. Fix $x$ and let $t$ increase: the argument of the sine decreases by $2\pi$, one full cycle, when $vt/\lambda$ grows by 1, that is, after a time $\lambda/v$. So the period of each bead is $T = \lambda/v$, which is $v = \lambda/T = f\lambda$.

It is tidier to absorb the factors of $2\pi$. Define the **wave number** $k = 2\pi/\lambda$, in radians per meter, and the angular frequency $\omega = 2\pi/T = 2\pi f$, in radians per second. Then the traveling sine wave is

$$
y(x, t) = A\sin(kx - \omega t), \qquad v = \frac{\omega}{k}.
$$

For the rope in the animation, $\lambda = 2$ m and $T = 0.5$ s, so $f = 2$ Hz and $v = 2 \times 2 = 4$ m/s. Units: $\text{Hz} \times \text{m} = \text{m/s}$.

Be careful about cause and effect here. The speed of a wave is set by the medium: for a rope, by its tension and its mass per meter; for sound in air at $20\,°$C, 343 m/s. The frequency is set by the source. The wavelength is then forced to be $\lambda = v/f$. Shaking the rope faster shortens the wavelength and leaves the speed as it was.

## Adding waves

What happens when two waves are in the same place at the same time? Send a pulse from each end of the rope and watch them meet.

**Pause and try.** Two identical humps travel toward each other on a rope. Sketch what you expect at the instant their centers coincide. Then do the same for a hump meeting an equal dip. In the second case, what do you expect a moment later?

**Answer.** The two humps make a single hump twice as tall. The hump and the dip cancel, and for an instant the rope is straight. A moment later both pulses have reappeared and continue as if nothing had happened.

[Figure 4, animation: Two pulses on a rope passing through each other, at one third speed. The thin curves are the pulses on their own and the thick curve is the rope. Top: two humps add to a double hump. Bottom: a hump and a dip cancel for an instant, then both emerge unchanged.]

**Definition.** (Principle of superposition.) When two or more waves are present in the same medium, the displacement at each point and each instant is the sum of the displacements that each wave would produce there on its own.

This is an experimental fact about media, with a domain of validity: it holds when displacements are small enough that the medium responds in proportion, which covers ripples, ordinary sound and light. It fails for a breaking ocean wave or a shock wave. Where it holds, waves pass through one another unchanged, which is why you can pick out one voice in a room full of sound.

The hump meeting the dip should bother you. At the instant of cancellation the rope is straight, and the energy of both pulses seems to have vanished. It has not, and to find it we have to look at the beads' velocities as well as their positions. Ahead of a hump's crest the beads are rising, and behind it they are falling. For the two opposite pulses, these velocities add where the displacements cancel. At the instant the rope is straight, it is moving fastest: all the energy is kinetic.

## Two sources: where the ripples cancel

Return to the pond, in the controlled form of a ripple tank. Two dippers, $S_1$ and $S_2$, are 6 cm apart and tap the water in step, each sending out circular ripples of wavelength $\lambda = 2$ cm. Pick a point $P$ on the surface, at distance $r_1$ from $S_1$ and $r_2$ from $S_2$.

The ripple from each dipper is a traveling sine wave in the distance from that dipper. At $P$ the two displacements are $A\sin(kr_1 - \omega t)$ and $A\sin(kr_2 - \omega t)$. We are making two modeling assumptions here: the dippers are exactly in step, and the two ripples have the same amplitude $A$ at $P$. (Real ripples weaken as they spread, so the second is only approximately true, best far from the dippers.)

Consider three positions for $P$ before doing any algebra.

[Figure 5, steps: Ripples from two dippers arriving at a point P. Left: the distances from each dipper, with arcs marking whole wavelengths. Right: the displacement at P due to each ripple (thin) and their sum (thick), against time.]

  - step: P is the same distance from both dippers. The two ripples arrive in step, crest with crest, and the water moves with twice the amplitude.
  - step: Move P so that it is 1 cm, half a wavelength, farther from one dipper. Each crest now arrives with a trough from the other, and the water stays still.
  - step: Move P until the difference is 2 cm, one whole wavelength. One ripple is a full cycle behind, which puts crest on crest again.
The outcome depends only on the difference of the two distances, the **path difference** $r_1 - r_2$, and on its size compared with a wavelength. To get the rule for every point at once, add the two sine functions. The tool is the identity

$$
\sin a + \sin b = 2\,\sin\!\frac{a + b}{2}\,\cos\!\frac{a - b}{2},
$$

which follows from the angle-sum formulas: write $a = p + q$ and $b = p - q$; then $\sin(p + q) + \sin(p - q) = 2\sin p\cos q$ because the $\cos p \sin q$ terms cancel.

**Theorem.** (Two-source interference.) Two sources oscillate in step with the same frequency, sending out waves of wavelength $\lambda$ that arrive at a point $P$ with equal amplitude $A$ after traveling distances $r_1$ and $r_2$. Then, under superposition, the displacement at $P$ is a sinusoidal oscillation of the same frequency with amplitude

$$
2A\,\left|\cos\frac{\pi (r_1 - r_2)}{\lambda}\right|.
$$

It is largest, $2A$, where $r_1 - r_2 = n\lambda$, and zero where $r_1 - r_2 = (n + \tfrac12)\lambda$, for $n = 0, \pm1, \pm2, \dots$

**Proof.** By superposition the displacement at $P$ is $A\sin(kr_1 - \omega t) + A\sin(kr_2 - \omega t)$. Apply the identity with $a = kr_1 - \omega t$ and $b = kr_2 - \omega t$. Then $\tfrac12(a - b) = \tfrac12 k(r_1 - r_2)$, which does not contain $t$, and $\tfrac12(a + b) = \tfrac12 k(r_1 + r_2) - \omega t$. So

$$
y_P(t) = \underbrace{2A\cos\!\left(\tfrac12 k(r_1 - r_2)\right)}_{\text{fixed at } P}\;\sin\!\left(\tfrac12 k(r_1 + r_2) - \omega t\right).
$$

The second factor oscillates between $-1$ and $1$ at angular frequency $\omega$, so the amplitude is the size of the first factor. With $k = 2\pi/\lambda$, $\tfrac12 k(r_1 - r_2) = \pi(r_1 - r_2)/\lambda$. The cosine has size 1 when its argument is $n\pi$, giving $r_1 - r_2 = n\lambda$, and is 0 when its argument is $(n + \tfrac12)\pi$, giving $r_1 - r_2 = (n + \tfrac12)\lambda$.

**Key idea.** Waves add. Where two in-step sources are a whole number of wavelengths different in distance, their waves arrive crest on crest and reinforce (**constructive interference**). Where the difference is a whole number plus a half, crest meets trough and they cancel (**destructive interference**).

The points with a given path difference form a curve (a hyperbola with the two sources as its foci), so the calm points line up along curves fanning out from between the dippers. Those are the white lines in the opening animation.

[Figure 6, image: The amplitude of the water's motion around the two dippers: dark where it is large, white where the surface stays still. Each line that reaches the top edge is labeled with its path difference in wavelengths: whole numbers are lines of reinforcement and half numbers are lines of cancellation. The two outermost white lines, which leave through the sides, have path difference 2.5 wavelengths.]

## Standing waves on a string

One more arrangement of two waves explains how a stringed instrument gets its notes. A string of length $L$ is tied down at both ends, $x = 0$ and $x = L$. A wave sent along it reflects at the far end and comes back, so the string carries two waves of the same frequency and amplitude traveling in opposite directions, and by superposition its shape is their sum.

Take the wave moving left to be $A\sin(kx + \omega t)$. The end at $x = 0$ cannot move, so the reflected wave moving right must cancel it there at all times. The wave $A\sin(kx - \omega t)$ does this, since at $x = 0$ the sum is $A\sin(\omega t) + A\sin(-\omega t) = 0$. Add the two with the same identity, taking $a = kx + \omega t$ and $b = kx - \omega t$:

$$
y(x, t) = 2A\,\sin(kx)\,\cos(\omega t).
$$

The $x$ and the $t$ have separated. This is no longer a function of $x - vt$, and nothing travels. Every point of the string oscillates in place with the same frequency, and with an amplitude $2A|\sin kx|$ that depends on where it is. Points where $\sin kx = 0$ never move; they are called **nodes**, and they sit half a wavelength apart. Halfway between them are the **antinodes**, where the motion is largest. The pattern is a **standing wave**.

[Figure 7, animation: Two waves of wavelength 2 m traveling in opposite directions along a 3 m rope (thin curves), and their sum (thick), with displacement in units of one wave's amplitude. The sum does not travel: it swells and shrinks in place, and the green points never move. Slowed six times.]

So far only the end at $x = 0$ has been respected. The other end is tied down too, and that is a real restriction.

**Pause and try.** The string must also be at rest at $x = L$ at all times. What does that require of $\sin(kL)$, and so of the wavelength? List the three longest wavelengths that fit on a string of length $L$.

**Answer.** We need $2A\sin(kL)\cos(\omega t) = 0$ for all $t$, so $\sin(kL) = 0$, which means $kL = n\pi$ for a positive whole number $n$. With $k = 2\pi/\lambda$ this is $\lambda = 2L/n$. The three longest are $2L$, $L$ and $2L/3$: the string holds one, two or three half-wavelengths.

**Theorem.** (Standing waves on a string fixed at both ends.) On a string of length $L$ with both ends fixed, on which waves travel at speed $v$, a standing wave $y = 2A\sin(kx)\cos(\omega t)$ is possible only for the wavelengths and frequencies

$$
\lambda_n = \frac{2L}{n}, \qquad f_n = \frac{v}{\lambda_n} = n\,\frac{v}{2L}, \qquad n = 1, 2, 3, \dots
$$

**Proof.** The form $2A\sin(kx)\cos(\omega t)$ already vanishes at $x = 0$. It vanishes at $x = L$ for all $t$ exactly when $\sin(kL) = 0$, that is, $kL = n\pi$ with $n$ a whole number; $n$ must be positive for a positive wavelength, and $n = 0$ gives no wave at all. Then $\lambda_n = 2\pi/k = 2L/n$, and $f_n = v/\lambda_n$ by the wave-speed theorem.

A string cannot vibrate in this way at just any frequency. The allowed ones are whole-number multiples of the lowest, $f_1 = v/2L$, called the **fundamental**; the pattern with frequency $f_n = nf_1$ is the $n$th **harmonic**. The condition is easy to remember from the picture: a whole number of half-wavelengths must fit between the ends.

[Figure 8, steps: The first four standing waves of a 65 cm guitar string on which waves travel at 143 m/s, slowed 165 times. Each has one more half-wavelength than the last, and its frequency is the next multiple of 110 Hz.]

  - step: The fundamental: half a wavelength fits on the string, so the wavelength is 130 cm and the frequency is 143/1.30 = 110 Hz.
  - step: Second harmonic: two half-wavelengths, with a node in the middle. The wavelength is 65 cm and the frequency 220 Hz.
  - step: Third harmonic: three half-wavelengths. The wavelength is 43.3 cm and the frequency 330 Hz.
  - step: Fourth harmonic: four half-wavelengths and 440 Hz. A plucked string vibrates in a mixture of all of these at once.
## Worked examples

**Worked example.** **Reading a wave function.** A wave on a rope is $y(x, t) = 0.10\sin(3.14x - 12.6t)$, with $x$ and $y$ in meters and $t$ in seconds. Find its amplitude, wavelength, frequency, speed and direction, and the greatest speed of a bead.

Compare with $A\sin(kx - \omega t)$: $A = 0.10$ m, $k = 3.14$ rad/m, $\omega = 12.6$ rad/s. Then $\lambda = 2\pi/k = 2.0$ m, $f = \omega/2\pi = 2.0$ Hz, and $v = \omega/k = 4.0$ m/s. The combination is $kx - \omega t$, so it moves in the $+x$ direction. Each bead is in simple harmonic motion with amplitude $A$ and angular frequency $\omega$, so its greatest speed is $\omega A = 12.6 \times 0.10 = 1.26$ m/s.

*Check:* $f\lambda = 2.0 \times 2.0 = 4.0$ m/s. The bead's speed and the wave's speed are different quantities; the first depends on the amplitude and the second does not.

**Worked example.** **A quiet spot between two loudspeakers.** Two loudspeakers driven in step play a 686 Hz tone. A listener is 4.00 m from one and 4.75 m from the other. Is the sound there loud or quiet? What is the lowest frequency for which that spot is quiet? Take the speed of sound as 343 m/s.

The wavelength is $\lambda = v/f = 343/686 = 0.500$ m. The path difference is $0.75$ m $= 1.5\lambda$, a whole number plus a half, so the interference is destructive and the spot is quiet. For the lowest frequency we want the longest wavelength that still cancels: $0.75 = \tfrac12\lambda$, so $\lambda = 1.50$ m and $f = 343/1.50 = 229$ Hz.

In a real room the cancellation is incomplete: the nearer speaker is slightly louder there, and walls add reflections.

**Worked example.** **Fretting a guitar string.** The 65 cm string of the last figure sounds 110 Hz. How fast do waves travel on it? What does it sound when a finger shortens the vibrating length to three quarters?

From $f_1 = v/2L$: $v = 2Lf_1 = 2 \times 0.65 \times 110 = 143$ m/s. Pressing the string against a fret does not change its tension or its mass per meter, so $v$ is unchanged. With $L' = 0.4875$ m, $f_1' = 143/(2 \times 0.4875) = 147$ Hz. Shortening by a factor $\tfrac34$ raised the frequency by $\tfrac43$.

## Limits and common mistakes

The interference theorem assumed sources that stay exactly in step. Two separate musicians, or two light bulbs, drift in and out of step far too quickly for a steady pattern to form; such sources are called incoherent, and their loudness or brightness simply adds. Steady interference needs sources driven by the same oscillator, or one wave split in two.

Interference does not destroy energy. Along a line of cancellation there is none, and along the lines of reinforcement the amplitude is doubled, which is four times the energy of one wave. Averaged over the pattern the energy is what the two sources supply, moved from the calm places to the lively ones.

**Common mistake.** **"Raising the frequency makes the wave faster."** The formula $v = f\lambda$ invites this reading, but in a given medium $v$ is fixed. Double the frequency of a sound in air and the wavelength halves, with the speed still 343 m/s. To change the speed, change the medium: tighten the string, or warm the air.

**Common mistake.** **"The water travels with the wave."** A floating leaf bobs as a ripple passes and stays roughly where it was. The wave carries energy and a pattern from place to place. The medium's parts move a little about their resting positions.

**Check yourself.** Two loudspeakers in step emit sound of wavelength 0.80 m. At a point 3.0 m from one speaker and 4.2 m from the other, what does a listener hear?
Answer: Quiet, because the path difference is one and a half wavelengths $4.2 - 3.0 = 1.2$ m, and $1.2/0.80 = 1.5$. Crest arrives with trough, so the waves cancel.

**Recap.** - A wave is a traveling disturbance; the medium's parts only oscillate. A shape moving at speed $v$ in the $+x$ direction is $y = f(x - vt)$.
- A sine wave is $y = A\sin(kx - \omega t)$ with $k = 2\pi/\lambda$ and $\omega = 2\pi f$. Its speed is $v = f\lambda$, set by the medium; the source sets $f$.
- Superposition: displacements add. Waves pass through each other unchanged.
- Two in-step sources: amplitude $2A|\cos(\pi(r_1 - r_2)/\lambda)|$. Reinforcement where the path difference is $n\lambda$, cancellation where it is $(n + \tfrac12)\lambda$.
- Opposite waves on a string add to a standing wave $2A\sin(kx)\cos(\omega t)$. Fixed ends allow only $\lambda_n = 2L/n$ and $f_n = nv/2L$.

The [next lesson](@physics/circular-motion-and-orbits) leaves oscillations for motion in a circle, and uses it to explain why the Moon stays up.

## Problems

Take the speed of sound in air as 343 m/s.

**Problem 1.** Ocean waves pass a buoy. The crests are 3.0 m apart, and the buoy rises to a crest once every 2.0 s. Find the frequency and the speed of the waves. Does the buoy travel with them?

**Solution.** $\lambda = 3.0$ m and $T = 2.0$ s, so $f = 1/T = 0.50$ Hz and $v = f\lambda = 0.50 \times 3.0 = 1.5$ m/s. The buoy does not travel: it is part of the medium's surface, and bobs about a fixed position as the pattern passes.

**Problem 2.** A wave is described by $y = 0.02\sin(5x + 40t)$ in SI units. Find its direction of travel, wavelength, frequency and speed.

**Solution.** The combination is $kx + \omega t$, so it moves in the $-x$ direction. $k = 5$ rad/m gives $\lambda = 2\pi/5 = 1.26$ m. $\omega = 40$ rad/s gives $f = 40/2\pi = 6.37$ Hz. $v = \omega/k = 40/5 = 8$ m/s; check: $6.37 \times 1.26 = 8.0$ m/s.

**Problem 3.** Human hearing covers roughly 20 Hz to 20 000 Hz. Find the wavelengths in air at the two ends of that range. Then find the wavelength of an FM radio wave of frequency 100 MHz, which travels at $3.00 \times 10^8$ m/s.

**Solution.** $\lambda = v/f$. At 20 Hz: $343/20 = 17$ m. At 20 000 Hz: $343/20\,000 = 0.017$ m, or 1.7 cm. Radio: $3.00 \times 10^8 / 1.00 \times 10^8 = 3.0$ m. The frequencies differ by a factor of a thousand across hearing, so the wavelengths do too, from the size of a house to the width of a finger.

**Problem 4.** In the lesson's ripple tank (dippers 6 cm apart, in step, $\lambda = 2$ cm): (a) Is the point 9 cm from one dipper and 12 cm from the other on a line of reinforcement or cancellation? (b) The path difference at any point is at most the distance between the dippers. Use this to count the lines of cancellation in the whole pattern.

**Solution.** (a) The path difference is $3$ cm $= 1.5\lambda$, a whole number plus a half: cancellation. (b) By the triangle inequality $|r_1 - r_2| \le 6$ cm, with equality only on the line through the dippers, outside them. Cancellation needs $|r_1 - r_2| = 1, 3, 5, \dots$ cm. The values not exceeding 6 are 1, 3 and 5 cm, each occurring on both sides of the center line: 6 lines of cancellation. (Reinforcement: differences 0, $\pm2$ and $\pm4$ cm give 5 curves, plus the two rays along the line of the dippers where the difference is exactly $\pm6$ cm.) The figures show the six white lines.

**Problem 5.** Two loudspeakers 3.0 m apart are driven in step by the same signal. A listener stands directly in front of one speaker, 4.0 m from it. Which frequencies between 100 Hz and 1000 Hz are canceled at the listener's position, and which are reinforced?

**Solution.** The other speaker is $\sqrt{3.0^2 + 4.0^2} = 5.0$ m away, so the path difference is 1.0 m. Canceled: $1.0 = (n + \tfrac12)\lambda$, so $\lambda = 1/(n + \tfrac12)$ m and $f = 343(n + \tfrac12)$ Hz: 171.5, 514.5 and 857.5 Hz in the range. Reinforced: $1.0 = n\lambda$, so $f = 343n$: 343 and 686 Hz. A single listening position favors some frequencies and suppresses others, which is one reason speaker placement matters.

**Problem 6.** At the instant two equal and opposite pulses on a rope overlap completely, the rope is straight. A student concludes that the energy of the pulses has been destroyed, and that the pulses cannot reappear. Explain what is wrong, and say what a photograph of the rope at that instant would fail to show.

**Solution.** The energy of a wave on a rope has two parts: potential energy from the rope's displacement and stretch, and kinetic energy from the sideways motion of its parts. Superposition applies to velocities as well as displacements. For a hump and a dip approaching each other, the displacements at the overlap are opposite and cancel, and the sideways velocities there have the same sign and add. When the rope is straight its potential energy is zero and its parts are moving fastest, so all the energy is kinetic. That motion carries the rope past the straight position, and the two pulses re-form. A photograph records positions and not velocities, so it would show a rope that looks at rest when it is not.

**Problem 7.** A string 0.80 m long is fixed at both ends, and waves travel on it at 240 m/s. (a) Find the frequencies of its first three harmonics. (b) Touching the string lightly at a point forces a node there without stopping the rest of the string. Where could you touch it to silence the fundamental and the second harmonic while leaving the third?

**Solution.** (a) $f_n = nv/2L = n \times 240/1.60 = 150n$ Hz: 150, 300 and 450 Hz. (b) The third harmonic has $\lambda_3 = 2L/3 = 0.533$ m and nodes every $\lambda_3/2 = 0.267$ m: at 0, 0.267, 0.533 and 0.80 m. Touch the string at 0.267 m or 0.533 m from an end, one third of the way along. The fundamental has no node between the ends, and the second harmonic's only interior node is at 0.40 m, so both need the string to move at the touched point and are damped.

**Problem 8.** A string of length $L$ is fixed at $x = 0$, and its other end at $x = L$ is attached to a light ring that slides freely on a rod, so that end is an antinode of any standing wave. (a) Starting from $y = 2A\sin(kx)\cos(\omega t)$, find the allowed wavelengths and frequencies. (b) Compare the lowest frequency with that of the same string fixed at both ends, and say which multiples of the lowest are present.

**Solution.** (a) The form already has a node at $x = 0$. An antinode at $x = L$ means $|\sin(kL)| = 1$, so $kL = \tfrac{\pi}{2}, \tfrac{3\pi}{2}, \tfrac{5\pi}{2}, \dots = (2n - 1)\tfrac{\pi}{2}$ for $n = 1, 2, 3, \dots$ Then $\lambda_n = 2\pi/k = \dfrac{4L}{2n - 1}$ and $f_n = \dfrac{v}{\lambda_n} = (2n - 1)\dfrac{v}{4L}$. The string holds an odd number of quarter-wavelengths. (b) The lowest is $v/4L$, half of the $v/2L$ for two fixed ends, an octave lower. The others are 3, 5, 7, ... times the lowest: only odd multiples occur. The same mathematics describes the air in a pipe closed at one end, such as a clarinet.

**Problem 9.** For two in-step sources of equal amplitude $A$, find the smallest positive path difference at which the combined amplitude equals $A$, the amplitude of one source alone. What is the combined amplitude at a path difference of $\lambda/4$?

**Solution.** The amplitude is $2A|\cos(\pi\Delta/\lambda)|$, with $\Delta$ the path difference. Setting it equal to $A$ gives $|\cos(\pi\Delta/\lambda)| = \tfrac12$, whose smallest positive solution is $\pi\Delta/\lambda = \pi/3$, so $\Delta = \lambda/3$. At $\Delta = \lambda/4$ the amplitude is $2A\cos(\pi/4) = \sqrt2\,A = 1.41A$. So the amplitude falls smoothly from $2A$ at $\Delta = 0$ through $1.41A$ and $A$ to zero at $\Delta = \lambda/2$.


<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>OK, today I will release another <strong>IPython</strong> <em>js</em> extension: <strong>Spellchecker</strong>, which obviously do what you are thinking... spell check the content of your <strong>IPython</strong> notebook cells.</p>
<p>And why it is a <em>poor man</em> extension? Because it is a simple workaround to get the spell checker functionality and not a broad solution... but it works, and solve my spelling problems!
<!-- TEASER_END --></p>
<p>The main idea here is to use the spell checker functionality provided by your browser [yes, let to the others the complex things ;-)]. But, as you know, the spell checking functionality is disable inside the <strong>IPython</strong> notebook... and this is because each cell you actually see is a <em>codemirror</em> instance... and <em>codemirror</em> does not support spell checking by design... in fact, the <em>codemirror</em> text area (editor) is not a common html text area, hence the browser can not actually run the spell checker in this new text area.</p>
<p>So, are we prohibited to apply a spell checker functionality over a <em>codemirror</em> instance? In fact, no... there is a way to do it applying something called <em>codemirror layouts</em> and using <em>js</em> spell checker libraries...</p>
<p>But, I don't want to do this job yet (because of several causes which I do not describe here now), so I thought workaround and use the <strong>IPython</strong> <em>js</em> machinery to get a simple, narrow but useful solution.</p>
<p>The workaround is simple:</p>
<ul>
<li>The spell checker will do its job at the cell level.</li>
</ul>
<p><img src="http://www.damian.oquanta.info/galleries/spellchecker/1.png" alt=""></p>
<ul>
<li><p>We need a way to get the content of the selected <strong>IPython</strong> notebook cell:</p>
<div class="highlight"><pre><span></span><span class="mi">24</span>      <span class="kd">var</span> <span class="nx">input</span> <span class="o">=</span> <span class="nx">IPython</span><span class="p">.</span><span class="nx">notebook</span><span class="p">.</span><span class="nx">get_selected_cell</span><span class="p">().</span><span class="nx">get_text</span><span class="p">()</span>
</pre></div>
</li>
<li><p>Put the content in a common html text area, and use the spell checker capabilities from the browser:</p>
<div class="highlight"><pre><span></span><span class="mi">26</span>      <span class="kd">var</span> <span class="nx">textarea</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;textarea/&gt;&#39;</span><span class="p">)</span>
  <span class="mi">27</span>          <span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;rows&#39;</span><span class="p">,</span><span class="s1">&#39;15&#39;</span><span class="p">)</span>
  <span class="mi">28</span>          <span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;cols&#39;</span><span class="p">,</span><span class="s1">&#39;80&#39;</span><span class="p">)</span>
  <span class="mi">29</span>          <span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">,</span><span class="s1">&#39;source&#39;</span><span class="p">)</span>
  <span class="mi">30</span>          <span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="nx">input</span><span class="p">);</span>
</pre></div>
</li>
<li><p>Make the corrections.</p>
</li>
</ul>
<p><img src="http://www.damian.oquanta.info/galleries/spellchecker/2.png" alt=""></p>
<ul>
<li><p>Get back the corrected content into the selected <strong>IPython</strong> notebook cell.</p>
<div class="highlight"><pre><span></span><span class="mi">60</span>      <span class="kd">var</span> <span class="nx">corr_input</span> <span class="o">=</span> <span class="sb">`$`</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="sb">`$`</span><span class="p">(</span><span class="nx">textarea</span><span class="p">).</span><span class="nx">val</span><span class="p">());</span> <span class="c1">// note: backticks to avoid mathjax rendering, sorry.</span>
  <span class="mi">61</span>      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">corr_input</span><span class="p">);</span>
  <span class="mi">62</span>      <span class="nx">IPython</span><span class="p">.</span><span class="nx">notebook</span><span class="p">.</span><span class="nx">get_selected_cell</span><span class="p">().</span><span class="nx">set_text</span><span class="p">(</span><span class="nx">corr_input</span><span class="p">);</span>
</pre></div>
</li>
</ul>
<p>And that's all... the complete code below:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">cat</span> <span class="o">-</span><span class="n">n</span> <span class="o">/</span><span class="n">media</span><span class="o">/</span><span class="n">datos</span><span class="o">/</span><span class="n">Desarrollos</span><span class="o">/</span><span class="n">mIPyex</span><span class="o">/</span><span class="n">custom</span><span class="o">/</span><span class="n">spellchecker</span><span class="o">/</span><span class="n">main</span><span class="o">.</span><span class="n">js</span>
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area">

<div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>     1	/*
     2	* ----------------------------------------------------------------------------
     3	* Copyright (c) 2013 - Damián Avila
     4	*
     5	* Distributed under the terms of the Modified BSD License.
     6	*
     7	* A little extension to spell check the selected cell from the IPython notebook.
     8	* ----------------------------------------------------------------------------
     9	*/
    10	
    11	function spellCheckerCSS() {
    12	    var link = document.createElement(&#34;link&#34;);
    13	    link.type = &#34;text/css&#34;;
    14	    link.rel = &#34;stylesheet&#34;;
    15	    link.href = require.toUrl(&#34;./custom/spellchecker/main.css&#34;);
    16	    document.getElementsByTagName(&#34;head&#34;)[0].appendChild(link);
    17	}
    18	
    19	function spellChecker(dummy) {
    20	    console.log(dummy);
    21	
    22	    spellCheckerCSS();
    23	
    24	    var input = IPython.notebook.get_selected_cell().get_text()
    25	
    26	    var textarea = $(&#39;&lt;textarea/&gt;&#39;)
    27	        .attr(&#39;rows&#39;,&#39;15&#39;)
    28	        .attr(&#39;cols&#39;,&#39;80&#39;)
    29	        .attr(&#39;name&#39;,&#39;source&#39;)
    30	        .text(input);
    31	
    32	    var dialogform = $(&#39;&lt;div/&gt;&#39;)
    33	        .append(
    34	            $(&#39;&lt;form/&gt;&#39;).append(
    35	                $(&#39;&lt;fieldset/&gt;&#39;).append(
    36	                    $(&#39;&lt;label/&gt;&#39;)
    37	                    .attr(&#39;for&#39;,&#39;source&#39;)
    38	                    .text(&#34;Now you can edit the cell content and use &#34; +
    39	                    &#34;the spellchecker support of your browser over it. &#34; +
    40	                    &#34;In Chromium, just focus in the text area and &#34; +
    41	                    &#34;select the text you want to spell check. Then you will &#34; +
    42	                    &#34;be able to use the contextual menu (right click) to get &#34; +
    43	                    &#34;words suggestion and other configuration options (lang). &#34; +
    44	                    &#34;Finally press OK to get the corrected cell content into &#34; +
    45	                    &#34;your selected IPython notebook cell.&#34;)
    46	                    )
    47	                    .append($(&#39;&lt;br/&gt;&#39;))
    48	                    .append(
    49	                        textarea
    50	                    )
    51	                )
    52	        );
    53	
    54	    IPython.dialog.modal({
    55	        title: &#34;Edit and spell check your cell content&#34;,
    56	        body: dialogform,
    57	            buttons: {
    58	                &#34;OK&#34;: { class : &#34;btn-primary&#34;,
    59	                    click: function() {
    60	                       var corr_input = $.trim($(textarea).val());
    61	                       console.log(corr_input);
    62	                       IPython.notebook.get_selected_cell().set_text(corr_input);
    63	                }},
    64	                Cancel: {}
    65	            }
    66	    });
    67	
    68	}
    69	
    70	define(function() {
    71	  return {
    72	    parameters: function setup(param1) {
    73	      IPython.toolbar.add_buttons_group([
    74	        {
    75	        &#39;label&#39;   : &#39;Spell check your selected cell content&#39;,
    76	        &#39;icon&#39;    : &#39;icon-check-sign&#39;,
    77	        &#39;callback&#39;: function(){spellChecker(param1)},
    78	        &#39;id&#39;      : &#39;start_spellcheck&#39;
    79	        },
    80	      ]);
    81	      var document_keydown = function(event) {
    82	        if (event.which == 83 &amp;&amp; event.altKey) {
    83	          spellChecker(param1);
    84	          return false;
    85	        };
    86	        return true;
    87	      };
    88	      $(document).keydown(document_keydown);
    89	    }
    90	  }
    91	});
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>As you can see at the end of the code... you have not only a button but also a keyboard shortcut to activate the spell checker extension: <strong>ALT + S</strong> (remember that the same goes for the <strong>Tweet me</strong> extension, but with <strong>ALT + T</strong>).</p>
<p>Again, the extension lives in this new repo: <a href="https://github.com/damianavila/mIPyex">mIPyex</a>, where I will upload the development versions of my own extensions. When I get them enough stable, I will make a copy of them in the <a href="https://github.com/ipython-contrib/IPython-notebook-extensions">IPython notebook extensions</a> repo where you can get a lot of and useful interesting extensions.</p>
<p>OK, I hope you enjoy and use this extension... because the <strong>IPython</strong> notebook is not only for write code... it is also powered to write other things, such as this blog post, and we have to keep spelling mistakes as low as possible to make the read of our content <em>pleasant</em>...</p>
<p>See you...</p>
<p>Damián</p>

</div>
</div>
</div>
 


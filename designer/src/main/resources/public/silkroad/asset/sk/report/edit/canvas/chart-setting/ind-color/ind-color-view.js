define(["dialog","report/edit/canvas/chart-setting/ind-color/ind-color-model","report/edit/canvas/chart-setting/ind-color/ind-color-setting-template","spectrum"],function(a,b,c){var d=Backbone.View.extend({events:{"click .j-set-ind-color":"getIndColorList"},initialize:function(a){var c=this;c.model=new b({canvasModel:a.canvasView.model,reportId:a.reportId}),this.model.set("compId",this.$el.find(".j-comp-setting").attr("data-comp-id"))},getIndColorList:function(){var a=this;a.model.getIndColorList(function(b){a._openIndColorDialog(b)})},destroy:function(){this.stopListening(),this.model.clear({silent:!0}),delete this.model,this.$el.unbind()},_openIndColorDialog:function(b){var d,e=this;if(!b)return a.alert("没有指标"),void 0;d=c.render(b),a.showDialog({title:"指标颜色设置",content:d,dialog:{width:340,height:300,resizable:!1,buttons:[{text:"提交",click:function(){e._saveIndColorInfo($(this))}},{text:"取消",click:function(){$(this).dialog("close")}}]}});var f={color:"#red",showInput:!0,showAlpha:!0,className:"full-spectrum",showInitial:!0,showPalette:!0,showSelectionPalette:!0,maxPaletteSize:10,preferredFormat:"hex",localStorageKey:"spectrum.demo",showPaletteOnly:!0,togglePaletteOnly:!0,togglePaletteMoreText:"more",togglePaletteLessText:"less",palette:[["rgb(0, 0, 0)","rgb(67, 67, 67)","rgb(102, 102, 102)","rgb(204, 204, 204)","rgb(217, 217, 217)","rgb(255, 255, 255)"]]},g=$(".ind-color").find("input");g.each(function(){var a,c=b.indList[$(this).attr("name")];c&&(a=c.color);var d=$.extend(!0,{},f);a&&(d.color=a),$(this).spectrum(d)})},_saveIndColorInfo:function(a){var b=$(".ind-color").find("input"),c={};b.each(function(){var a=$(this),b=a.attr("name");c[b]=a.val()}),this.model.saveIndColorInfo(c,function(){a.dialog("close"),window.dataInsight.main.canvas.showReport()})}});return d});
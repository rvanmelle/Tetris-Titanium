App.UI.registerUIComponent('behavior','selectable',
{
	create: function()
	{
		/**
		 * The version of the control. This will automatically be corrected when you
		 * publish the component.
		 */
		this.getVersion = function()
		{
			// leave this as-is and only configure from the build.yml file 
			// and this will automatically get replaced on build of your distro
			return '1.0';
		}
		/**
		 * The control spec version.  This is used to maintain backwards compatability as the
		 * Widget API needs to change.
		 */
		this.getSpecVersion = function()
		{
			return 1.0;
		}

		this.getAttributes = function()
		{
			return [];
		}

		this.build = function(element,options)
		{
			if (swiss('#'+element.id).interaction('selectable',options) == null)
			{
				throw ('selectable not supported by library ');
				
			}
		}
	}
});

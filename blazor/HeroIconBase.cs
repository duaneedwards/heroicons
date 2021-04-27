using System.Collections.Generic;
using Microsoft.AspNetCore.Components;

namespace HeroIcons.Blazor
{
	public class HeroIconBase : ComponentBase
	{
		[Parameter(CaptureUnmatchedValues = true)]
		public Dictionary<string, object> AllOtherAttributes { get; set; }
	}
}